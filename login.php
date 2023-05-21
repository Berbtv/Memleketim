<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "b221210034@sakarya.edu.tr" && $password == "b221210034") {
    header("Location: hakkında.html");
    exit;
} else if ($username == "" || $password == "") {
    $_SESSION['login_error'] = 'Kullanıcı adı veya şifre boş bırakılmamalıdır!!';
    echo '<script>alert("Kullanıcı adı veya şifre boş bırakılmamalıdır!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
} else {
    $_SESSION['login_error'] = 'Kullanıcı adı ve şifre yanlış!!';
    echo '<script>alert("Kullanıcı adı ve şifre yanlış!!");</script>';
    echo '<script>window.location.href = "login.html";</script>';
    exit;
}
?>
