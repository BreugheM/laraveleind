<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('photos')->insert(['file'=>'1598360452breughemichiel.jpg']);
        DB::table('photos')->insert(['file'=>'1587710631apple_tv.jpg']);
        DB::table('photos')->insert(['file'=>'1587710638apple_watch.jpg']);
        DB::table('photos')->insert(['file'=>'1587710651bose_box.jpg']);
        DB::table('photos')->insert(['file'=>'1587711803headphones.jpg']);
        DB::table('photos')->insert(['file'=>'1587797447fitbit.jpg']);
        DB::table('photos')->insert(['file'=>'Placeholder.jpg']);
    }
}
