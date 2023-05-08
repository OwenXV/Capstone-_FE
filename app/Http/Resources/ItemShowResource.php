<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ReviewResource;



class ItemShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
        'id' => $this->id,
        'name' => $this->name,
        'image' => $this->image,
        'description' => $this->description,
        'price' => $this->price,
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
        'user' => [
            'id' => $this->user->id,
            'name' => $this->user->name
        ],
        'reviews' => ReviewResource::collection($this->reviews)
        
    ];
    }
}