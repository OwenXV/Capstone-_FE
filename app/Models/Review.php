<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Item;
use Illuminate\Database\Eloquent\Relations\BelongsTo;



class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'item_id',
        'body'
    ];



    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }


    public function item(): BelongsTo {
        return $this->belongsTo(User::class);
    }

}
