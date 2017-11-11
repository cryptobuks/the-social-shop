<?php

namespace App\Http\Controllers;

use App\Providers\AppServiceProvider;

use App;

use Illuminate\Http\Request;

class ItemsController extends Controller

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

		$data = AppServiceProvider::items();


		// dd($data);


        return view('items.index', compact('data'));
    }



    /**
     * Show a Particular user page
     *
     * @return \Illuminate\Http\Response
     */
    public function show($item_id)
   
    {

        $item = AppServiceProvider::item($item_id);

        // dd($item);

        return view('items.item', compact('item'));

    }


    /**
     * create page
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
   
    {

        $data = AppServiceProvider::createItem();

        // dd($data);

        return view('items.create', compact('data'));

    }



    /**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	
	{


		//depends on your credentials
		$AWS = [
			'bucket' => 'ilgrappolo'
		]; 


		$img = file_get_contents($request->img);

		$customName = "upload/".$request->name.'_'.$request->producer.".jpg";


		$s3 = App::make('aws')->createClient('s3');
		$result = $s3->putObject(array(
		    'Bucket'     => $AWS['bucket'],
		    'Key'        => $customName,
		    'Body' 		 => $img,
		    'ACL'   	 => 'public-read'
		));


		$postData = [
	        'name'       		=> $request->name,
	        'desc'      		=> $request->desc,
	        'producer'       	=> $request->producer,
	        'vine'       		=> $request->vine,
	        'price'       		=> $request->price,
	        'gradation'       	=> $request->gradation,
	        'region'       		=> $request->region,
	        'nationality'       => $request->nationality,
	        'year'       		=> $request->year,
	        'img'       		=> $result['ObjectURL'],
	        'typology'       	=> $request->typology,
	        'smell'       		=> $request->smell,
	        'taste'       		=> $request->taste,
	        'view'       		=> $request->view,
	    ];

	    // dd($postData);

		$additional_headers = array(                                                                          
		   'Accept: application/json, text/plain, */*',
		   'Authorization: '.config('app.ig_api_key')
		);

		$url = config('app.ig_api_url').'/v1/items';

		$ch = curl_init($url);                                                                      
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));                                           
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
		curl_setopt($ch, CURLOPT_HTTPHEADER, $additional_headers); 

		$server_output = curl_exec ($ch);


		$data = AppServiceProvider::items();


		// dd($data);


        return view('items.index', compact('data'));
		
	}


	/**
	 * Destroy created resource in storage.
	 *
	 * @return Response
	 */
	public function destroy($item_id)
	
	{
		
		$ch = curl_init(config('app.ig_api_url').'/v1/items/'.$item_id);

		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE"); 

        curl_setopt($ch, CURLOPT_HTTPHEADER,
            array(
                'User-Agent: NoBrowser v0.1 beta',
                'Authorization: '.config('app.ig_api_key')
            )
        );

        # do not output, but store to variable
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);


		$data = AppServiceProvider::items();
	
		return redirect()->back()->with(compact('data'));
		
	}


}
