<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }



    public static function items() 

    {

        $curl_h = curl_init(config('app.ig_api_url').'/v1/items');

        curl_setopt($curl_h, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key')
            )
        );

        # do not output, but store to variable
        curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl_h);


        return json_decode($response);

    }

    public static function item ($item_id) 

    {

        $curl_h = curl_init(config('app.ig_api_url').'/v1/items/'.$item_id);

        curl_setopt($curl_h, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key'),
                'x-get-items: all'
            )
        );

        # do not output, but store to variable
        curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl_h);

        return json_decode($response);

    }

    public static function createItem () 

    {

        $curl_h = curl_init(config('app.ig_api_url').'/v1/items/create');

        curl_setopt($curl_h, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key'),
                'x-get-items: all'
            )
        );

        # do not output, but store to variable
        curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl_h);

        return json_decode($response);

    }


    public static function users() 

    {

        $curl_h = curl_init(config('app.ig_api_url').'/v1/users');

        curl_setopt($curl_h, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key')
            )
        );

        # do not output, but store to variable
        curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl_h);

        return json_decode($response);

    }

    public static function user($user_id) 

    {

        $curl_h = curl_init(config('app.ig_api_url').'/v1/users/'.$user_id);

        curl_setopt($curl_h, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key'),
                'x-get-items: all'
            )
        );

        # do not output, but store to variable
        curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl_h);

        return json_decode($response);

    }
}
