<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('categories')->insert(['name'=>'Televisie','description'=>'Beschrijving Televisie']);
        DB::table('categories')->insert(['name'=>'Watch','description'=>'Beschrijving Watch']);
        DB::table('categories')->insert(['name'=>'Box','description'=>'Beschrijving Box']);
    }
}
