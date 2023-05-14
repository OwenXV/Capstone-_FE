<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules()
    {
        if(request()->isMethod('post')) {
            return [
                'name' => 'required|string',
                'image' => 'required|string',
                'description' => 'required|string',
                'price' => 'required|string'
            ];
        }

        else {
            return [
                'name' => 'required|string',
                'image' => 'required|string',
                'description' => 'required|string',
                'price' => 'required|string'

            ];
        }
    }



    public function messages()
    {

        if(request()->isMethod('post')) {

            return [
                'name.required' => 'Name is required!',
                'image.required' => 'Image is required!',
                'description.required' => 'Description is required!',
                'price.required' => 'Price is required!'
            ];
        } else {
            return [
                'name.required' => 'Name is required!',
                'image.required' => 'Image is required!',
                'description.required' => 'Description is required!',
                'price.required' => 'Price is required!'
            ];
        }
    }
}
