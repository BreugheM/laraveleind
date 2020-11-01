<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColorProduct extends Model
{
    //
    public $incrementing = true;


    protected $fillable = [
        'order_id',
        'product_id'
    ];
}
