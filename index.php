<?php
$appName = "Task Manager";
$taskTitle = "Вивчити основи PHP";
$taskTimeEstimate = 3;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Task Manager</title>
</head>
<body>
	<header>
		<h1><?= $appName ?></h1>
	</header>
	<main>
		<ul>
			<li><?= $taskTitle ?></li>
			<li><?= $taskTimeEstimate ?></li>
		</ul>
	</main>

</body>
</html>