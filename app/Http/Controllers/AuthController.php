<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\MorphMany;


class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(UserStoreRequest $request) 
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string',
            'profile_picture' => 'required|string',
            'adress' => 'required|string',
            'seller_description' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6'
           
        ]);

        

        $user = User::create([
            'name' => $fields['name'],
            'username' => $fields['username'],
            'profile_picture' => $fields['profile_picture'],
            'adress' => $fields[ 'adress'],
            'seller_description' => $fields['seller_description'],
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



    public function getImage($filename) {
        $imagePath = storage_path('app/public/images/' . $filename);

        if (file_exists($imagePath)) {
           $image = file_get_contents($imagePath);
           return response($image, 200)->header('Content-Type', 'image/jpg');
        }
        return response()->json(['message' => 'Image not found.'], 404);
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
