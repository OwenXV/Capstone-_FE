<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class RevController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'item_id' => 'required|numeric',
            'body' => 'required|string'
       ]);

       $review = review::create([
            'user_id' => auth()->user()->id,
            'item_id' => $fields['item_id'],
            'body' => $fields['body']
       ]);

       return response($review, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $fields = $request->validate([
            'body' => 'required|string'
        ]);
        
        $review = Review::find($id);
        $review->update($request->all());

        return response($review, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       
        Review::destroy($id);

        $response = [
            'message' => 'Review deleted'
        ];

        return response($response, 200);
    }
}
