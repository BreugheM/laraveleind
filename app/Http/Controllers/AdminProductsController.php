<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Color;
use App\Photo;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class AdminProductsController extends Controller
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
        $categories = Category::all();
        $products = Product::with(['category','brand','photo'])->get();
        return view('admin.products.index', compact('products', 'brands','users','categories'));
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
        $products = Product::all();
        $categories = Category::select('name','id')->get();
        $brands = Brand::select('name','id')->get();
        $colors = Color::all();
        return view('admin.products.create', compact('brands', 'categories','users','products','colors'));
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
        $input = $request->all();
        if($file= $request->file('photo_id')){
            $name = time().$file->getClientOriginalName();
            $file->move('images/products',$name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }




       // Product::create($input);
       // dd($input);
        $product = new Product();
        $product->category_id = $request->category_id;
        $product->name = $request->name;
        $product->brand_id = $request->brand_id;
        $product->description = $request->description;
        $product->photo_id = $photo->id;
        $product->price = $request->price;
        $product->save();

        //$product->colors()->attach($product->color_id);

        /*foreach ($request->colors as $i=> $color){
            dd($color->id);
            $product->colors()->sync($color['id'], false);
        }*/



        //$input->colors()->sync($request->colors);
        return redirect('/admin/products');
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
        $users = User::all();
        $products = Product::all();
        $product = Product::findOrFail($id);
        $categories = Category::select('name','id')->get();
        $brands = Brand::select('name','id')->get();
        return view('admin.products.edit', compact('product', 'categories','brands','users','products'));
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
        $product = Product::findOrFail($id);

        File::delete('images/products/'.$product->photo->file);

        $input = $request->all();
        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images/products', $name);
            //$file->unlink('images/products', $oldImage);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }
        $product->update($input);
        return redirect('/admin/products');
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
        $product = Product::findOrFail($id);
        if ($product->photo !== null){
            unlink(public_path('images/products/' . $product->photo->file));
            $product->photo->delete();
        }
        $product->delete();

        return redirect('/admin/products');
    }
    public function attachColorProduct(){
        $users = User::all();
        $brands = Brand::all();
        $categories = Category::all();
        $products = Product::all();
        $colors = Color::all();
        return view('admin.products.attach' ,compact('products','colors','users','brands','categories'));
    }
    public function storeColorProduct(Request $request){
        $input = $request->all();
        $productid = $request->product_id;
        $product = Product::findOrFail($productid);
        $colorids = $request->color_id;
        $product->colors()->sync($colorids);
        //dd($product);
        return redirect('admin/products');

    }
    public function productsPerBrand($id){
        $users = User::all();
        $categories = Category::all();
        $user = Auth::user();
        $brands = Brand::all();
        $products = Product::with(['category','brand','photo'])->where('brand_id', '=', $id)->get();
        return view('admin.products.index', compact('products', 'brands','user','users','categories'));
    }
    public function product($slug){
        $product = Product::where('name', $slug)->first();
        $colors = Color::where('id', 1)->get();
        $mightAlsoLike = Product::where('name', '!=' ,$slug)->mightAlsoLike()->get();
        //$comments = $post->comments()->whereIsActive(1)->get();
        return view('product', compact('product','mightAlsoLike','colors'));
    }
}
