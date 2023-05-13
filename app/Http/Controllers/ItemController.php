<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Item;
use App\Models\User;
use App\Http\Resources\ItemShowResource;
use App\Http\Resources\ItemResource;
use App\Http\Requests\ItemStoreRequest;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Validation\Rules\Enum;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $order = $request->query('order') ? $request->query('order') : 'desc';

        return ItemResource::collection(Item::select('id', 'user_id','name','category', 'image','description','price', 'created_at', 'updated_at')
            ->orderBy('created_at', $order)
            ->paginate(5));
    }



    public function getUserItems(string $id) {
        $items = Item::where('user_id', $id)->orderBy('created_at', 'desc')->paginate(5);

        return ItemResource::collection($items);
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
                'category' => $request->category,
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
                'message' => "Review successfully posted!"
            ],500);
        }


    }


   
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response(ItemShowResource::make(Item::find($id)), 200);
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

    public function searchCategory($category)
{
    return Item::where('category', 'like', '%' .$category. '%')->get();
}

public function search($name)
{
    return Item::where('name', 'like', '%' .$name. '%')->get();
}
    
    
}
