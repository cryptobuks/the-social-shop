@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Items</div>

                <div class="panel-body">

                    <div>

                        <form method="POST" action="{{ url('items') }}">
                            {{ csrf_field() }}
                            <div class="row">
                                <fieldset class="form-group col-sm-8">
                                    <label for="name">Nome</label>
                                    <input type="text" class="form-control" name="name" placeholder="Inserisci nome" required>
                                </fieldset>

                                <fieldset class="form-group col-sm-8">
                                    <label for="desc">Descrizione</label>
                                    <textarea class="form-control" name="desc" rows="4" required></textarea>
                                </fieldset>
                            </div>

                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <fieldset class="form-group">
                                        <label for="gradation">Gradazione %</label>
                                        <input type="number" class="form-control" name="gradation" required>
                                        <small class="text-muted">Non aggiungere il simbolo % e usare i . al poste delle , (es: 13.5) </small>
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <fieldset class="form-group">
                                        <label for="year">Anno</label>
                                        <input type="number" class="form-control" name="year" required>
                                    </fieldset>
                                </fieldset>
                            </div>

                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <fieldset class="form-group">
                                        <label for="price">Prezzo €</label>
                                        <input type="number" class="form-control" name="price" required>
                                        <small class="text-muted">Non aggiungere il simbolo € e usare i . al poste delle , (es: 10.5) </small>
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <fieldset class="form-group">
                                        <label for="img">URL Immagine</label>
                                        <input type="text" class="form-control" name="img" placeholder="Indirizzo URL immagine" required>
                                        <small class="text-muted">(es: https://upload.wikimedia.org/wikipedia/it/5/51/Immagine_13.png)</small>
                                    </fieldset>
                                </fieldset>
                            </div>

                            
                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <label for="producer">Produttore</label>
                                    <select class="form-control" name="producer" id="selProducer">
                                        @foreach($data->producers as $producer)
                                            <option value="{{$producer->producer->name}}">
                                                {{$producer->producer->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuovo producer"
                                            onchange="handleInput(document.getElementById('selProducer'),document.getElementById('txtProducer'), 'producer')" id="txtProducer">
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <label for="vine">Vitigno</label>
                                    <select class="form-control" name="vine" id="selVine">
                                        @foreach($data->vines as $vine)
                                            <option value="{{$vine->vine->name}}">
                                                {{$vine->vine->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuovo vitigno" id="txtVine"
                                            onchange="handleInput(document.getElementById('selVine'),document.getElementById('txtVine'), 'vine')">
                                    </fieldset>
                                </fieldset>
                            </div>

                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <label for="typology">Tipologia</label>
                                    <select class="form-control" name="typology" id="selTypology">
                                        @foreach($data->typologys as $typology)
                                            <option value="{{$typology->typology->name}}">
                                                {{$typology->typology->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuova tipologia" id="txtTypology"
                                            onchange="handleInput(document.getElementById('selTypology'),document.getElementById('txtTypology'), 'typology')" >
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <label for="nationality">Nazionalità </label>
                                    <select class="form-control" name="nationality" id="selNationality">
                                        @foreach($data->nationalitys as $nationality)
                                            <option value="{{$nationality->nationality->name}}">
                                                {{$nationality->nationality->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuovo vitigno" id="txtNationality"
                                            onchange="handleInput(document.getElementById('selNationality'),document.getElementById('txtNationality'), 'nationality')">
                                    </fieldset>
                                </fieldset>
                            </div>

                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <label for="region">Regione</label>
                                    <select class="form-control" name="region" id="selRegion">
                                        @foreach($data->regions as $region)
                                            <option value="{{$region->region->name}}">
                                                {{$region->region->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuova regione" id="txtRegion"
                                            onchange="handleInput(document.getElementById('selRegion'),document.getElementById('txtRegion'), 'region')" >
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <label for="taste">Gusto </label>
                                    <select class="form-control" name="taste" id="selTaste">
                                        @foreach($data->tastes as $taste)
                                            <option value="{{$taste->taste->name}}">
                                                {{$taste->taste->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuovo gusto" id="txtTaste"
                                            onchange="handleInput(document.getElementById('selTaste'),document.getElementById('txtTaste'), 'taste')">
                                    </fieldset>
                                </fieldset>
                            </div>
                          
                            <div class="row">
                                <fieldset class="form-group col-sm-6">
                                    <label for="smell">Olfatto</label>
                                    <select class="form-control" name="smell" id="selSmell">
                                        @foreach($data->smells as $smell)
                                            <option value="{{$smell->smell->name}}">
                                                {{$smell->smell->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuova olfatto" id="txtSmell"
                                            onchange="handleInput(document.getElementById('selSmell'),document.getElementById('txtSmell'), 'smell')" >
                                    </fieldset>
                                </fieldset>


                                <fieldset class="form-group col-sm-6">
                                    <label for="view">Vista </label>
                                    <select class="form-control" name="view" id="selView">
                                        @foreach($data->views as $view)
                                            <option value="{{$view->view->name}}">
                                                {{$view->view->name}}
                                            </option>
                                        @endforeach
                                    </select>

                                    <small class="text-muted">Oppure crea nuovo: </small>

                                    <fieldset class="form-group">
                                        <input type="text" class="form-control" 
                                            name="noTxt" placeholder="Nuova vista" id="txtView"
                                            onchange="handleInput(document.getElementById('selView'),document.getElementById('txtView'), 'view')">
                                    </fieldset>
                                </fieldset>
                            </div>
                            
                           
                            <button type="submit" class="btn btn-primary">Aggiungi</button>
                        </form>
                    </div>


                    
                </div>

            </div>
        </div>
    </div>
</div>

<script>

    function handleInput(sel, txt, name) {
        if(txt.value !== "") {
            sel.name = "noSel";
            sel.disabled = true;
            txt.name = name;
        } else {
            txt.name = "noTxt";
            sel.disabled = false;
            sel.name = name;
        }
    }

</script>

@endsection
