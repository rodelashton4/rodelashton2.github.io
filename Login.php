<?php
session_start();
include "db_conn.php";

if (isset($_POST['uname']) && isset($_POST['password'])) {
    function validate($data){
        $data = trim($data)
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;

    }
    $uname = validate $_POST['uname']);
    $pass = validate $_POST ['password']);

    if (empty($uname)) {
        // header("Location: index.php?error=User Name is required");
        exit();
    header(index.php);
    exit();

}else if (empty($pass)){
    // header("Location: index.php?error=Password is required");
    exit();

}else{
   $sql = "SELECT * FROM users WHERE user_name= '$uname'AND password= '$pass'";

   $result = mysqli_master_query($conn, $sql);

   if (mysqli_num_rows($result)=== 1 ) {
    $row = mysqli_fetch_assoc($resut);
    if ($row['user_name'] === $uname && $row['password'] === $pass) {
        $_session['user_name'] = $row['user_name'];
        $_session['name'] = $row['name'];
        $_session['ID'] = $row['ID'];
        header("Location: Login.html");
    }exit{
         // header("Location: home.php?error=Incorect User name or password ");
     exit();
   }else{
     // header("Location: index.php?error=Incorect User name or password ");
     exit();

}else{  
    header("Location: index.php");
    exit();
}