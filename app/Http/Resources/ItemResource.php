<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name
            ],
            'name' => $this->name,
            'image' => $this->image,
            'description' => $this->description,
            'price' => $this->price,


        
        ];
    }
}
