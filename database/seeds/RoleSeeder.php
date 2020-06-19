<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert(['name'=>'Administrator']);
        DB::table('roles')->insert(['name'=>'Customer']);

        DB::table('user_role')->insert(['role_id'=>'1', 'user_id'=>'1']);

    }
}
