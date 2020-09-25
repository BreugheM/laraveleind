<?php

namespace App\Http\Controllers;

use App\Banner;
use App\Brand;
use App\Cart;
use App\Category;
use App\Currency;
use App\PaymentPlatform;
use App\Product;
use App\Review;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class FrontendController extends Controller
{
    //
    public function index(){
        $banners = Banner::all();
        $brands = Brand::all();
        $products = Product::with(['brand','photo'])->get();
        $frontReviews = Review::inRandomOrder()->take(3)->get();
        return view('index',compact('products','brands','frontReviews','banners'));
    }
    public function productsPerBrand($id){
        $brands = Brand::all();
        $categories = Category::all();
        $products = Product::with(['brand','photo'])->where('brand_id', '=', $id)->get();
        return view('shop', compact('products', 'brands', 'categories'));
    }
    public function productsPerCategory($id){
        $categories = Category::all();
        $brands = Brand::all();
        $products = Product::with(['category','photo'])->where('category_id', '=', $id)->get();
        return view('shop', compact('products', 'categories', 'brands'));
    }

    public function addToCart($id){
        $product = Product::with(['category','brand','photo'])->where('id','=',$id)->first();

        $oldCart = Session::has('cart') ? Session::get('cart'):null;
        $cart = new Cart($oldCart);
        $cart->add($product,$id);
        Session::put('cart',$cart);
        return redirect('shop');
    }


    public function cart(){
        if(!Session::has('cart')){
            return redirect('/');
        }else{
            $currentCart = Session::has('cart') ? Session::get('cart') : null;
            $cart = new Cart($currentCart);
            $cart = $cart->products;
            return view('checkout', compact('cart'));
        }
    }
    public function updateQuantity(Request $request){
        $oldCart = Session::has('cart') ? Session::get('cart'):null;
        $cart = new Cart($oldCart);
        $cart->updateQuantity($request->id, $request->quantity);
        //(Session('cart'));
        Session::put('cart', $cart);

        return redirect('/checkout');
    }
    public function removeItem($id){
        $oldCart = Session::has('cart') ? Session::get('cart'):null;
        $cart = new Cart($oldCart);
        $cart->removeItem($id);
        //(Session('cart'));
        Session::put('cart', $cart);

        return redirect('/checkout');
    }
    public function shop(){

        $banners = Banner::all();
        $reviews = Review::all();
        $brands = Brand::all();
        $categories = Category::all();
        $products = Product::with(['brand','photo'])->get();
        return view('shop',compact('products','categories', 'brands','banners'));
    }
    public function payment()
    {

        $currencies = Currency::all();
        $paymentPlatforms = PaymentPlatform::all();
        $cart = Session::get('cart');
        return view('payment',compact('cart'))->with(['currencies' => $currencies, 'paymentPlatforms'=> $paymentPlatforms]);
    }
}
