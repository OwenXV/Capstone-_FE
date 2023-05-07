<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return false;
        return true;

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        if(request()->isMethod('post')) {
            return [
                'name' => 'required|string',
                'username' => 'required|string',
                'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
                'adress' => 'required|string',
                'seller_description' => 'required|string',
                'email' => 'required|string|unique:users|email',
                'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
                'password_confirmation' => 'min:6'



               
                
            ];
        }

        else {
            return [
                'name' => 'required|string',
                'username' => 'required|string',
                'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
                'adress' => 'required|string',
                'seller_description' => 'required|string',
                'email' => 'required|string|unique:users|email',
                'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
                'password_confirmation' => 'min:6'

            ];
        }
    }



    public function messages()
    {

        if(request()->isMethod('post')) {

            return [
                'name.required' => 'Name is required!',
                'username.required' => 'username is required!',             
                'profile_picture.required' => 'profile_picture is required!',
                'adress.required' => 'adress is required!',
                'seller_description.required' => 'seller description is required!',
                'email.required' => 'email is required!',
                'password.required' => 'password is required!'
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'username.required' => 'username is required!',             
                'profile_picture.required' => 'profile_picture is required!',
                'adress.required' => 'adress is required!',
                'seller_description.required' => 'seller-description is required!',
                'email.required' => 'email is required!',
                'password.required' => 'password is required!'
            ];
        }
    }
}
