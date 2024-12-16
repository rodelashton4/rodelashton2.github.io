<?php
session_start();
if (isset($_SESSION["ID"]) && isset($_SESSION["user_name"])) {

    ?>

<!DOCTYPE html>
<html>
<head>
    <title>HOME</title>
    <link rel="stylesheet" type= "text/css" href="style.css">
</head>
<body>
    <h1>Hellow, <?php echo $_session["name"]; ?</h1>
    <a herf="logout.php">Logout</a>

    
</body>
</html>

<?php
}else{
    header("Location: home.php");
exit()

}

?>