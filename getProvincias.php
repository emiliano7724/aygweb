   <?php
include_once('WebService.php');


 

$ws= new WebService('GetProvincias', array("parameters"=>array(
	'idPais' =>"1" )));

    
$obj= $ws->wsEjecutar($ws);
              echo $obj;
    ?>