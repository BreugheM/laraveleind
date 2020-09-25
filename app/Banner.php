<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'product_id',
        'photo_id'


    ];
    public function photo(){
        return $this->belongsTo(Photo::class);
    }
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
