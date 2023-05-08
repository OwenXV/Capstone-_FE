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
            'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'adress' => 'required|string',
            'seller_description' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6'
           
        ]);

        $image_name = Str::random(32).".".$request->profile_picture->getClientOriginalExtension();

        $user = User::create([
            'name' => $fields['name'],
            'username' => $fields['username'],
            'profile_picture' => $image_name,
            'adress' => $fields[ 'adress'],
            'seller_description' => $fields['seller_description'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);


        $request->profile_picture->move(storage_path('app/public/images'), $image_name);

        // Storage::disk('public')->put($imageName, file_get_contents($request->profile_picture));

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
