<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{


    public function index()
    {
        return User::all();
    }

    public function store(Request $request) {
        
        $request->validate([
            'name'=> 'required',
        'username'=> 'required',
        'profile_picture'=> 'required',
        'adress' => 'required',
        'seller_description' => 'required',
        'email' => 'required',
        'password' => 'required'
        ]);
        
        return Item::create($request->all());
    }




    


    // public function getImage($filename) {


    //     // $imagePath = storage_path('app/storage/app/public/' . $filename);
       
    //      $imagePath = Storage::disk('public/' . $filename);
       
       

    //     if (file_exists($imagePath)) {
    //        $image = file_get_contents($imagePath);
    //        return response($image, 200)->header('Content-Type', 'image/jpg');
    //     }
    //     return response()->json(['message' => 'Image not found.'], 404);
    // }




    public function updateProfilePicture(Request $request) {
        $fields = $request->validate([
            'profile_picture' => 'required|string'
        ]);

        $user = User::find(auth()->user()->id);
        $user->update($request->all());

        $response = [
            'user' => $user
        ];

        return response($response, 200);
    }
}