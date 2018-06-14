   <?php
include_once('WebService.php');



 $idInmueble = '16107';
    
        
   //pasando los parámetros a un array
    $param=array('idInmueble'=>$idInmueble);
 
$ws= new WebService('GetImagenesInmueble',array("parameters"=>array(
	'idInmueble' =>"16107" )));
$ws->wsEjecutar($ws);
    

    ?>