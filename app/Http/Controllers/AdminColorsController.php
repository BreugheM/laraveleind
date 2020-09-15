<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Color;
use App\Product;
use App\User;
use Illuminate\Http\Request;

class AdminColorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        $colors = Color::all();
        return view('admin.colors.index', compact('users','brands','products','categories','colors'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        return view('admin.colors.create',compact('users','brands','products','categories'));
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
        Color::create($request->all());
        return redirect('admin/colors');
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
    public function edit(Color $color)
    {
        //
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        return view('admin.colors.edit', compact('color','users','brands','products','categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Color $color)
    {
        //
        $color->update($request->all());
        return redirect('admin/colors');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Color $color)
    {
        //
        $color->delete();
        return redirect('admin/colors');
    }
}
