<?php
$host = "localhost";
$user = "root";
$password = ""; 
$database = "formulir";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$no_pendaftar = $_POST['no_pendaftar'];
$nama_lengkap = $_POST['nama_lengkap'];
$tempat_tgl_lahir = $_POST['tempat_tgl_lahir'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$pekerjaan_bidang = $_POST['pekerjaan_bidang'];
$alamat_rumah = $_POST['alamat_rumah'];
$kota_bagian = $_POST['kota_bagian'];
$no_tlp_hp = $_POST['no_tlp_hp'];
$pendidikan_sekolah	= $_POST['pendidikan_sekolah'];
$info_cordova_dari = $_POST['info_cordova_dari'];
$program_pilihan = $_POST['program_pilihan'];
$kelas_yang_diambil = $_POST['kelas_yang_diambil'];
$jadwal_belajar = $_POST['jadwal_belajar'];

$sql = "INSERT INTO formulir (no_pendaftar, nama_lengkap, tempat_tgl_lahir, jenis_kelamin, agama, pekerjaan_bidang, alamat_rumah, kota_bagian, no_tlp_hp, pendidikan_sekolah, info_cordova_dari, program_pilihan, kelas_yang_diambil, jadwal_belajar)
        VALUES ('$no_pendaftar', '$nama_lengkap', '$tempat_tgl_lahir', '$jenis_kelamin', '$agama', '$pekerjaan_bidang', '$alamat_rumah', '$kota_bagian', '$no_tlp_hp', '$pendidikan_sekolah', '$info_cordova_dari', '$program_pilihan', '$kelas_yang_diambil', '$jadwal_belajar')";

    if ($conn->query($sql) === TRUE) {
        echo "<a href='login.html'>LOGIN</a>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

$conn->close();
?>
