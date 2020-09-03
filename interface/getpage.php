<?php
    include('./conn.php');

    $page = $_REQUEST['page'] - 1 ;
    
    $length = 20;

    $page*=$length;

    $sql = "SELECT * from product LIMIT $page,$length";

    $res = $mysqli->query($sql);

    $mysqli->close();

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;


?>