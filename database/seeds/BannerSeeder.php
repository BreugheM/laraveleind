<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('banners')->insert(['title'=>'iPhone 6 32Gb Black','description'=>'At first, for some time, I was not able to answer him one word; but as he had
                            taken me in his arms I held fast by him, or I should have fallen to the ground.','photo_id'=>'7',
            'product_id'=>'1']);
    }
}
