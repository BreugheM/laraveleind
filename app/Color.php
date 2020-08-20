<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $fillable = [
        'colorName',
        'hexColor'


    ];
    public function products(){
        return $this->belongsToMany(Product::class, 'color_product');
    }
}

