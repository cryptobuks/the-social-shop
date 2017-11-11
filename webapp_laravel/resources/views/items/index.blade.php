@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Items</div>

                <div class="panel-body">

                    <div>
                        <a href="{{ url ('items/create') }}">
                            <button style="height: 80px" class="btn btn-info">Nuovo Item</button>
                        </a> 
                    </div>

                    <hr>

                    <div>

                        @include('tools.search')

                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Tipologia</th>
                                    <th>Produttore</th>
                                    <th>Vitigno</th>
                                    <th>Prezzo</th>
                                    <th>Info</th>
                                    <th>X</th>
                                </tr>
                            </thead>

                            <tbody id="table">
                                @foreach($data->items as $item)
                                    
                                    @include('items.item_tr')

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
