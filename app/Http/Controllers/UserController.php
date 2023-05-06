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
        'seller-description' => 'required',
        'email' => 'required',
        'password' => 'required'
        ]);
        
        return User::create($request->all());
    }


    public function show(string $id)
    {
        return User::find($id);
    }


    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        return $user;
    }


    public function destroy(string $id)
    {
        return User::destroy($id);
    }


    public function search($name)
    {
        return User::where('name', 'like', '%' .$name. '%')->get();
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