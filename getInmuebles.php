   <?php
include_once('WebService.php');



 
 	$operacion =$_GET['Operacion'];
    $idTipoInmueble =$_GET['Tipo'];
    $dormitorios = $_GET['Dormitorio'];
    $idPais = -1;
    $idProvincia =$_GET['Provincia'];
    $idLocalidad =$_GET['Localidad']; // 2691 santa fe
    $idBarrio = -1;
    $idEmpresa = 2861;
    $Destacado =$_GET['Destacado'];
    $ForzarPublicacion = 0;
    $Paginar = 1;
    $PageNum = $_GET['PageNum'];
    $PageSize =  $_GET['PageSize'];
    $Patron ="nada";

        
 
$ws= new WebService('GetInmuebles', array("filtro"=>array(
    'operacion' =>$operacion,
    'idTipoInmueble' =>$idTipoInmueble,
    'dormitorios' =>$dormitorios,
    'idPais' =>$idPais,
    'idProvincia' =>$idProvincia,
    'idLocalidad' =>$idLocalidad,
    'idBarrio' =>$idBarrio,
    'idEmpresa' =>$idEmpresa,
    'Destacado' =>$Destacado,
    'ForzarPublicacion' =>$ForzarPublicacion,
    'Paginar' =>$Paginar,
    'PageNum' =>$PageNum,
    'PageSize' =>$PageSize,'Patron' =>$Patron
    )));
$obj=$ws->wsEjecutar($ws);

    echo $obj;


    ?>