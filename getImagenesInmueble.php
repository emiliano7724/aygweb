   <?php
include_once('WebService.php');



 $idInmueble = $_POST['idInmueble'];
    
        
  
 
$ws= new WebService('GetImagenesInmueble',array("parameters"=>array(
	'idInmueble' =>$idInmueble )));
$obj=$ws->wsEjecutar($ws);
    echo $obj;

    ?>