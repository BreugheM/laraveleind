<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'category_id',//foreign key die verwijst naar categories
        'brand_id',
        'photo_id',
        'name',
        'description',
        'price',
        'color_id',


    ];
    public function photo(){
        return $this->belongsTo(Photo::class);
    }
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function colors(){
        return $this->belongsToMany(Color::class, 'color_product');
    }

    //extra functies
    public function scopeMightAlsoLike($query){
        return $query->inRandomOrder()->take(4);
    }
}
