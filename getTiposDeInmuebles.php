   <?php
include_once('WebService.php');



 
 
        
   //pasando los parámetros a un array
   
$ws= new WebService('GetTiposDeInmuebles',null);

    
$obj= $ws->wsEjecutarSinParams($ws);
              echo $obj;
    

    ?>