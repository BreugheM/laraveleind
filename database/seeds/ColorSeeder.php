<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('colors')->insert(['colorName'=>'Black','hexColor'=>'#000000']);
        DB::table('colors')->insert(['colorName'=>'White','hexColor'=>'#FFFFFF']);

    }
}
