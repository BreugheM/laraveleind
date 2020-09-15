<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorProduct extends Model
{
    //
    public $incrementing = true;

    protected $fillable = [
        'color_id',
        'product_id'


    ];
}
