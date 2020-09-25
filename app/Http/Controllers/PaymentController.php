<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Resolvers\PaymentPlatformResolver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Stripe;

class PaymentController extends Controller
{
    protected $paymentPlatformResolver;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index(){

        return view('payment');
    }
    public function __construct(PaymentPlatformResolver $paymentPlatformResolver)
    {
        $this->middleware('auth');

        $this->paymentPlatformResolver = $paymentPlatformResolver;
    }

    /**
     * Obtain a payment details.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function pay(Request $request)
    {
        $rules = [
            'value' => ['required', 'numeric', 'min:5'],
            'currency' => ['required', 'exists:currencies,iso'],
            'payment_platform' => ['required', 'exists:payment_platforms,id'],
        ];

        $request->validate($rules);

        $paymentPlatform = $this->paymentPlatformResolver
            ->resolveService($request->payment_platform);

        session()->put('paymentPlatformId', $request->payment_platform);

        return $paymentPlatform->handlePayment($request);
    }

    public function approval()
    {
        if (session()->has('paymentPlatformId')) {
            $paymentPlatform = $this->paymentPlatformResolver
                ->resolveService(session()->get('paymentPlatformId'));

            return $paymentPlatform->handleApproval();
        }

        return redirect()
            ->route('payment')
            ->withErrors('We cannot retrieve your payment platform. Try again, please.');
    }

    public function cancelled()
    {
        return redirect()
            ->route('payment')
            ->withErrors('You cancelled the payment.');
    }

    public function stripePost(Request $request)
    {
        Stripe\Stripe::setApiKey("sk_test_51HFblgEuZSvSY5lUHnXu0VXiYjgvx6c9MSXi3o67SU6o3HM18anCRQ8cGBUfo4UO3xqe0eeskipeD3rwPo6VsaXS004Fx321vY");
        $cart = Session::get('cart');
        $checkout_session = Stripe\Checkout\Session::create ([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => $cart->totalPrice,
                    // 'product_data' => [
                    //   'name' => 'Stu',
                    // 'images' => ["https://i.imgur.com/EHyR2nP.png"],
                    //],
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            //'success_url' => YOUR_DOMAIN . '/success.html',
            //'cancel_url' => YOUR_DOMAIN . '/cancel.html',
        ]);




        echo json_encode(["id"=>$checkout_session->id]);
    }




}
