@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Items</div>

                <div class="panel-body">

                    

                    <div>
                        
                        @include('tools.search')
                        
                        <table class="table table-bordered table-hover" >
                            <thead>
                                <tr>
                                    <th>_id</th>
                                    <th>Email</th>
                                    <th>Nome</th>
                                    <th>Cognome</th>
                                    <th>Items</th>
                                    <th>Info</th>
                                </tr>
                            </thead>

                            <tbody id="table">
                                @foreach($data->users as $user)
                                    <tr>
                                        <td>{{$user->_id}}</td>
                                        <td>{{$user->email}}</td>
                                        <td>{{$user->name}}</td>
                                        <td>{{$user->surname}}</td>
                                        <td>{{count($user->items)}}</td>
                                        <td>
                                            <a href="{{ url ('users/'.$user->_id) }}">
                                                <button class="btn btn-info">Info</button>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</div>

@endsection
