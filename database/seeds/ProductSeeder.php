<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->insert(['category_id'=>'1','brand_id'=>'1','photo_id'=>'2', 'name'=>'Apple Tv',
        'description'=>'Apple tv met afstandsbediening','price'=>'99.99']);
        DB::table('products')->insert(['category_id'=>'2','brand_id'=>'1','photo_id'=>'3', 'name'=>'Apple Watch','description'=>
            'Apple watch remote','price'=>'199.99']);
        DB::table('products')->insert(['category_id'=>'3','brand_id'=>'2','photo_id'=>'4', 'name'=>'Bose Box','description'=>
            'Bose Box portable','price'=>'29.99']);
        DB::table('products')->insert(['category_id'=>'2','brand_id'=>'1','photo_id'=>'5', 'name'=>'Headphones','description'=>
            'headphones zonder kabel','price'=>'19.99']);
        DB::table('products')->insert(['category_id'=>'3','brand_id'=>'3','photo_id'=>'6', 'name'=>'Fitbit','description'=>
            'fitbit watch','price'=>'59.99']);
    }
}
