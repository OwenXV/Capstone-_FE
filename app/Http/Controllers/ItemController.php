<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Item;
use App\Models\User;
use App\Http\Resources\ItemShowResource;
use App\Http\Resources\UserItemResource;
use App\Http\Requests\ItemStoreRequest;


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
    public function store(ItemStoreRequest $request)
    {

        try {
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            //Create Post
            Item::create([
                'user_id' => auth()->user()->id,
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description,
                'price' => $request->price

            ]);

            //save image in folder
            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            //return created
            return response()->json([
                'message' => "Post successfully created"
            ],200);



        } catch (\Exception $e) {
            //Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
















        // $fields = $request->validate([
        // 'name' => 'required',
        // 'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg',
        // 'description' => 'required',
        // 'price' => 'required'

        // ]);

        // $image_name = time() . '.' . $request->image->extension();
        // $request->image->move(storage_path('app/public/images'), $image_name);

        // $response = [
        //     'image_name' => $image_name
        // ];

        // $item =Item::create([
        //     'user_id' => auth()->user()->id,
        //     'name' => $fields ['name'],
        //     'image' => $fields ['image'],
        //     'description' => $fields ['description'],
        //     'price' => $fields ['price']
        // ]);


        // return response($item, 201);
    }


    // public function getImage($filename) {
    //     $imagePath = storage_path('app/public/images/' . $filename);

    //     if (file_exists($imagePath)) {
    //        $image = file_get_contents($imagePath);
    //        return response($image, 200)->header('Content-Type', 'image/jpg');
    //     }
    //     return response()->json(['message' => 'Image not found.'], 404);
    // }

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
