<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Order;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminOrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = Auth::user();
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        $orders = Order::all();
        $completedOrders = Order::onlyTrashed()->get();
        return view('admin.orders.index', compact('orders','brands','users','products','categories','user', 'completedOrders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $order = Order::findOrFail($id);
        $order->delete();
        session()->flash('message','1 order has been completed');

        return redirect('/admin/orders');

    }
    public function restoreOrder($id)
    {
        $order = Order::onlyTrashed()->where('id',$id)->first();


        $order->restore();
        session()->flash('notCompleted','1 order has not been completed');

        return redirect('/admin/orders');
    }

}
