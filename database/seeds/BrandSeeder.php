<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('brands')->insert(['name'=>'Apple','description'=>'Beschrijving Apple']);
        DB::table('brands')->insert(['name'=>'Bose','description'=>'Beschrijving Bose']);
        DB::table('brands')->insert(['name'=>'Sony','description'=>'Beschrijving Sony']);
    }
}
