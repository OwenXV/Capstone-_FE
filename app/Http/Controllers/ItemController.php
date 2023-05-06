<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Item;
use App\Models\User;
use App\Http\Resources\ItemShowResource;
use App\Http\Resources\UserItemResource;


class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Item::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
        'name' => 'required',
        'image' => 'required',
        'description' => 'required',
        'price' => 'required'

        ]);

        $item =Item::create([
            'user_id' => auth()->user()->id,
            'name' => $fields ['name'],
            'image' => $fields ['image'],
            'description' => $fields ['description'],
            'price' => $fields ['price']
        ]);


        return response($item, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Item::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {


        $fields = $request->validate([
            'name' => 'required|string',
            'image' => 'nullable|string',
            'description' => 'required|string',
            'price' => 'nullable|string'
        ]);

        $item = Item::find($id);
        $item->update($request->all());

        return response ($item, 200);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Item::destroy($id);
    }


    // @param str $name
    // @return \Illuminate\Http\Response

    public function search($name)
{
    return Item::where('name', 'like', '%' .$name. '%')->get();
}
    
    
}
