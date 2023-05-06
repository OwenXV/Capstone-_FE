<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(Request $request) 
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string',
            'profile_picture' => 'required|string',
            'adress' => 'required|string',
            'seller-description' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6'
           
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'username' => $fields['username'],
            'profile_picture' => $fields['profile_picture'],
            'adress' => $fields[ 'adress'],
            'seller-description' => $fields['seller-description'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('mySecretKey')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            $response = [
                'message' => 'Invalid credentials'
            ];
            return response($response, 401);
        }

        $token = $user->createToken('mySecretKey')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 200);
    }

    /**
     * Display the specified resource.
     */
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        $response = [
            'message' => 'Logged out'
        ];

        return response($response, 200);
    }

   
}
