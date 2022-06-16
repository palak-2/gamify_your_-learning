<?php 

include 'config.php';

error_reporting(0);

session_start();

if (isset($_SESSION['username'])) {
    header("Location: ongoingCourse.html");
}

if(isset($_POST['submit']))
{

$email = $_POST['email'];
//$email = mysqli_real_escape_string($con, $email);
$password = md5($_POST['password']);
//$password = mysqli_real_escape_string($con, $password);
$password =($password);

// Query checks if the email and password are present in the database.
$query = "SELECT * FROM users WHERE email='" . $email . "' AND password='" . $password . "'";

$result = mysqli_query($conn, $query)or die(mysqli_error($con));
$num = mysqli_num_rows($result);

// If the email and password are not present in the database, the mysqli_num_rows returns 0, it is assigned to $num.
if ($num>0) {
	$row = mysqli_fetch_assoc($result);
	$_SESSION['username'] = $row['username'];
	header('location:welcome.php');
  
} else {
	echo "<script>alert('Please enter correct login details.')</script>";
}}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="style.css">

	<title>Login Form </title>
</head>
<body>
	
	<div class="container">
		<form action="" method="POST" class="login-email">
            <p class="login-text" style="font-size: 2rem; font-weight: 800;">Login</p>
			
			<div class="input-group">
				<input type="email" placeholder="Email" name="email" value="<?php echo $email; ?>" required>
			</div>
			<div class="input-group">
				<input type="password" placeholder="Password" name="password" value="<?php echo $_POST['password']; ?>" required>
            </div>
            
			<div class="input-group">
				<button name="submit" class="btn">Login</button>
			</div>
			<p class="login-register-text">Don't have an account? <a href="register.php">register</a>.</p>
			<p class="login-register-text">Go to <a href="home.html">HOME</a></p>
		</form>
	</div>
</body>
</html>