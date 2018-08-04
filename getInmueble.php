   <?php
include_once('WebService.php');



 
 
    $idInmueble = $_GET['idInmueble'];
    
        
   //pasando los parámetros a un array
                
      
$ws= new WebService('GetInmueble',array("parameters"=>array(
	'idInmueble' =>$idInmueble )));
 $obj=$ws->wsEjecutar($ws);
    echo $obj;

    ?>