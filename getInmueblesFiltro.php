<?php
include_once('WebService.php');



 
 	$operacion =$_POST['operacion'];
    $idTipoInmueble =$_POST['tipo'];
    $dormitorios = $_POST['dormitorios'];
    $idPais = -1;
    $idProvincia =$_POST['provincias'];
    $idLocalidad =$_POST['localidades']; // 2691 santa fe
    $idBarrio = $_POST['barrios'];
   $idEmpresa = 2861;
    $Destacado =0; //$_POST['Destacado'];
    $ForzarPublicacion = 0;
    $Paginar = 1;
    $PageNum = -1;
    $PageSize = 6;
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
   

   /* $idLocalidad =$_POST['idProvincia'];
    
 $ws= new WebService('GetLocalidades', array("parameters"=>array(
    'idProvincia' =>$idLocalidad )));


$ws->wsEjecutar($ws); 
*/
    ?>