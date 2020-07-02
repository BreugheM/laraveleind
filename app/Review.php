<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    //
    protected $fillable = [
        'user_id',
        'reviewBody'

    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
