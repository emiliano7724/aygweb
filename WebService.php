  

   <?php
   require_once('./lib/nusoap.php');  
    class WebService {

   var $servicioNombre;
    var $parametrosArray;
 //url del webservice
   var $wsdl="http://79.143.191.164:8084/InmueblesWebServices.asmx?wsdl";
    //instanciando un nuevo objeto cliente para consumir el webservice
   var $client;
  
   function WebService($servicioNombre, $parametrosArray)
   {
       $this->servicioNombre = $servicioNombre;
       $this->parametrosArray= $parametrosArray;
   }
   

function wsEjecutar(WebService $ws)
   {
       $client=new nusoap_client($this->wsdl,'wsdl');
   //llamando al método y pasándole el array con los parámetros
   

    $resultado = $client->call($ws->servicioNombre, 
$ws->parametrosArray); 
 

  print_r($resultado);
 $result= $ws->utf8_converter($resultado);

   //¿ocurrio error al llamar al web service?
    if ($client->fault) { // si
        $error = $client->getError();
    if ($error) { // Hubo algun error
            //echo 'Error:' . $error;
            //echo 'Error2:' . $error->faultactor;
            //echo 'Error3:' . $error->faultdetail;faultstring
            //echo 'Error:  ' . $client->faultstring;
        }
        
        die();
    }
    
    //Si es vacio
    
echo json_encode($result);
//echo($resultado);
    
   }
   function wsEjecutarSinParams(WebService $ws)
   {
       $client=new nusoap_client($this->wsdl,'wsdl');
   //llamando al método y pasándole el array con los parámetros
   

    $resultado = $client->call($ws->servicioNombre); 
 

  //print_r($resultado);
 $result= $ws->utf8_converter($resultado);

   //¿ocurrio error al llamar al web service?
    if ($client->fault) { // si
        $error = $client->getError();
    if ($error) { // Hubo algun error
            //echo 'Error:' . $error;
            //echo 'Error2:' . $error->faultactor;
            //echo 'Error3:' . $error->faultdetail;faultstring
            echo 'Error:  ' . $client->faultstring;
        }
        
        die();
    }
    
    //Si es vacio
    
echo json_encode($result);
//echo($resultado);
    
   }




   function utf8_converter($array)
{
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
            $item = utf8_encode($item);
        }
    });

    return $array;
}
     }
     ?>