<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



/*
|--------------------------------------------------------------------------
| Items Routes
|--------------------------------------------------------------------------
|
*/
Route::get('/items', 'ItemsController@index');


Route::get('/items/create', 'ItemsController@create');


Route::get('/items/{item_id}', 'ItemsController@show');


Route::get('/items/delete/{item_id}', 'ItemsController@destroy');


Route::post('/items', 'ItemsController@store');


/*
|--------------------------------------------------------------------------
| Users Routes
|--------------------------------------------------------------------------
|
*/
Route::get('/users', 'UsersController@index');

Route::get('/users/{user_id}', 'UsersController@show');

Route::post('/users/{user_id}/items', 'UsersController@storeItem');



