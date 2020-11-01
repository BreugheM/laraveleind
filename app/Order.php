<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'street_name',
        'street_nr',
        'city',
        'zip_code',
        'cell_nr',
        'remarks',
        'totalPrice',
    ];


    public function products(){
        return $this->belongsToMany(Product::class, 'product_order');
    }
}
