<?php

namespace App\Models;
use  App\Models\User;
use App\Models\Review;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'image',
        'description',
        'price',
       
        
    ];






    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }


    public function reviews(): HasMany {
        return $this->hasMany(Review::class)->orderBy('created_at', 'asc');
    }
}
