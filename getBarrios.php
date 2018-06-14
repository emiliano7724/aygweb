   <?php
include_once('WebService.php');



         
          $idLocalidad =$_POST['idLocalidad'];
          $idEmpresa=2861;
    
 $ws= new WebService('GetBarrios', array("parameters"=>array(
	'idLocalidad' =>$idLocalidad, 'idEmpresa' =>$idEmpresa)));

           $obj= $ws->wsEjecutar($ws);
              echo $obj;


    ?>