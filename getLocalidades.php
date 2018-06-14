   <?php
include_once('WebService.php');



 
 
    $idLocalidad =$_POST['idProvincia'];
    
 $ws= new WebService('GetLocalidades', array("parameters"=>array(
	'idProvincia' =>"22" )));


$ws->wsEjecutar($ws);
    

    ?>