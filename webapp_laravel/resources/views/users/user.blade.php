@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Items</div>

                <div class="panel-body">

                    <div>
                        
                        <dl class="row" style="font-size: 18px;">
                          <dt class="col-sm-3">Nome</dt>
                          <dd class="col-sm-9">{{$data->user->name}}</dd>

                          <dt class="col-sm-3">Cognome</dt>
                          <dd class="col-sm-9">{{$data->user->surname}}</dd>

                          <dt class="col-sm-3">E-Mail</dt>
                          <dd class="col-sm-9">{{$data->user->email}}</dd>
                        </dl>
                    
                    </div>



                    <hr>


                    <h3>Aggiungi Item</h3>
                    
                    <div class="row">

                        <form action="{{ url ('users/'.$data->user->_id.'/items') }}" method="POST" id="it">
                            
                            <fieldset class="form-group col-sm-6">
                                <label for="item_id">Seleziona item</label>
                                <select class="form-control" name="item_id" form="it">
                                    @foreach($data->items as $item)

                                        <option value="{{$item->_id}}">{{$item->name}}</option>

                                    @endforeach
                                </select>
                            </fieldset>

                            <fieldset class="form-group col-sm-2">
                                <label for="qt">Quantità</label>
                                <input class="form-control" type="number" name="qt" value="1">
                            </fieldset>
                            
                            <fieldset class="form-group col-sm-3">
                                <label>Aggiungi</label>
                                <button type="submit" class="form-group btn btn-primary">
                                    Aggiungi Item a {{$data->user->email}}
                                </button>
                            </fieldset>

                            {{ csrf_field() }}
                        </form>

                    </div>



                    <hr>

                    

                    <div>
                        
                        <h2>Acquisti</h2>
                        
                        @include('tools.search')

                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Tipologia</th>
                                    <th>Produttore</th>
                                    <th>Vitigno</th>
                                    <th>Prezzo</th>
                                    <th>Voto</th>
                                    <th>Stelle</th>
                                    <th>Info</th>
                                </tr>
                            </thead>

                            <tbody id="table">
                                @foreach($data->user->items as $item)
                                    
                                    <tr>
                                        <td>{{$item->item->name}}</td>
                                        <td>{{$item->item->typology->name}}</td>
                                        <td>{{$item->item->producer->name}}</td>
                                        <td>{{$item->item->vine->name}}</td>
                                        <td>€ {{$item->item->price}}</td>
                                        <td class="text-center">
                                            @if($item->liked)
                                                <i class="fa fa-thumbs-up" 
                                                   aria-hidden="true"
                                                   style="color: green; font-size: 20px"></i>                     
                                            @endif
                                            @if($item->disliked)
                                                <i class="fa fa-thumbs-down" 
                                                   aria-hidden="true"
                                                   style="color: red; font-size: 20px"></i>
                                            @endif
                                        </td>
                                        <td>
                                            {{$item->rank}}
                                        </td>
                                        <td class="text-center">
                                            <a href="{{ url ('items/'.$item->item->_id) }}">
                                                <i class="fa fa-info-circle" 
                                                   aria-hidden="true"
                                                   style="color: #00a1d6; font-size: 20px"></i>
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

<style>

    .info {
        height: 20px;
    }

</style>


@endsection
