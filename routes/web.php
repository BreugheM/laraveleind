<?php

use App\Brand;
use App\Category;
use App\Product;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', function () {
    return view('admin.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/','FrontendController@index')->name('index');
Route::get('/shop','FrontendController@shop')->name('shop');
Route::get('/products/brands/{id}','FrontendController@productsPerBrand')->name('productsPerBrand');
Route::get('/products/categories/{id}','FrontendController@productsPerCategory')->name('productsPerCategory');
Route::get('/products/addToCart{id}', 'FrontendController@addToCart')->name('addToCart');
Route::get('/checkout', 'FrontendController@cart')->name('checkout');
Route::post('/checkout', 'FrontendController@updateQuantity')->name('quantity');
Route::get('/removeItem/{id}', 'FrontendController@removeItem')->name('removeItem');
Route::get('/product/{name}', 'AdminProductsController@product')->name('home.product');
Route::get('/contact', 'ContactController@create')->name('contact');
Route::post('/contact','ContactController@store');
Route::get('/payment', 'FrontendController@payment')->name('payment');
Route::post('/payments/pay', 'PaymentController@pay')->name('pay');
Route::get('/payments/approval', 'PaymentController@approval')->name('approval');
Route::get('/payments/cancelled', 'PaymentController@cancelled')->name('cancelled');
Route::get('/reviews', 'ReviewsController@create')->name('reviews');
Route::post('/reviews', 'ReviewsController@store');

//backend
Route::group(['middleware' =>'admin'], function(){
    Route::get('/admin', function(){
        $user = Auth::user();
        $users = User::all();
        $brands = Brand::all();
        $products = Product::all();
        $categories = Category::all();
        return view('admin.index',compact('users','brands','products','categories','user'));
    })->name('admin');

    Route::resource('admin/users', 'AdminUsersController');
    Route::resource('admin/brands', 'AdminBrandsController');
    Route::resource('admin/categories', 'AdminCategoriesController');
    Route::resource('admin/discounts', 'AdminDiscountsController');
    Route::resource('admin/colors', 'AdminColorsController');
    Route::get('admin/products/attach','AdminProductsController@attachColorProduct')->name('admin.attachColorProduct');
    Route::post('admin/products/attach','AdminProductsController@storeColorProduct')->name('admin.storeColorProduct');
    Route::resource('admin/products', 'AdminProductsController',['index'=>'admin.products.index']);
    Route::get('admin/products/brands/{id}','AdminProductsController@productsPerBrand')->name('admin.productsPerBrand');
    Route::resource('admin/photos', 'AdminPhotosController');
    Route::resource('admin/roles','AdminRolesController');
    Route::resource('admin/reviews', 'ReviewsController@index');
    Route::resource('admin/reviews', 'AdminReviewsController');

});

