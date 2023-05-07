<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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