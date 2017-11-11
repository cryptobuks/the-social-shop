<?php

namespace App\Http\Controllers;

use App\Providers\AppServiceProvider;

use Illuminate\Http\Request;

class UsersController extends Controller

{  

    public function __construct()
   
    {

        $this->middleware('auth');
   
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
   
    {

		$data = AppServiceProvider::users();

        // dd($data);

        return view('users.index', compact('data'));

    }



    /**
     * Show a Particular user page
     *
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
   
    {

        $data = AppServiceProvider::user($user_id);

        // dd($data);

        return view('users.user', compact('data'));

    }


    /**
     * add item to user
     *
     * @return \Illuminate\Http\Response
     */
    public function storeItem(Request $request, $user_id)
   
    {

        $this->validate($request,[
    
            'item_id' => 'required',

            'qt' => 'required'
    
        ]);
    
        $url = config('app.ig_api_url').'/v1/users/'.$user_id.'/'.$request->item_id;
        // dd($url);


        $postData = [
            'qt'       => $request->qt,
        ];

        $additional_headers = array(                                                                          
           'Accept: application/json, text/plain, */*',
           'Authorization: '.config('app.ig_api_key')
        );

        $ch = curl_init($url);                                                                      
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));                                           
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
        curl_setopt($ch, CURLOPT_HTTPHEADER, $additional_headers); 

        $server_output = curl_exec ($ch);

        // dd($server_output);


        $data = AppServiceProvider::user($user_id);


        return view('users.user', compact('data'));

    }
}
