<?php
    include('./conn.php');


    for($i = 1;$i<500;$i++){
        $sql = "INSERT INTO `product` (`title`, `price`, `num`, `pic`, `details`) VALUES ('test$i', '123', '11', '11', '11')";
        $mysqli->query($sql);
    }

?>