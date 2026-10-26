<?php
$appName = "Task Manager";
$taskTitle = "Вивчити основи PHP";
$taskTimeEstimate = 3;
$isCompleted = true;
$isUrgent = false;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Task Manager</title>
	<style> 
		.task-done{
			color:blue;
		}
		.task-pending {
			color:grey;
		}
	</style>
</head>
<body>
	<header>
		<h1><?= $appName ?></h1>
	</header>
	<main>
		<ul>
			<li class="<?= $isCompleted ? 'task-done' : 'task-pending' ?>">
				<?= $taskTitle ?>
				<?php if ($isCompleted): ?>
					<span>Виконано!</span>
				<?php else: ?>
					<span>В процесі...</span>
				<?php endif; ?>
			</li>
			<li><?= $taskTimeEstimate ?></li>
		</ul>
	</main>

</body>
</html>