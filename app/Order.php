<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;
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
        'is_active',
    ];


    public function products(){
        return $this->belongsToMany(Product::class, 'product_order');
    }
}
