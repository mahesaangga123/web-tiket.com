<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "masuk";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$username = $_POST['username'];
$email_id = $_POST['email_id'];
$password_id = $_POST['password_id'];

$sql = "INSERT INTO masuk (username, email_id, password_id)
        VALUES ('$username', '$email_id', '$password_id')";     

    if ($conn->query($sql) === TRUE) {
        echo "<a href='login.html'>MASUK</a>";
    } else {
        echo "error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
?>