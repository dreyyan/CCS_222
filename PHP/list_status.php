<?php
$tasks = [
    "Finish PHP project"          => "Completed",
    "Submit OOP worksheet"        => "Pending",
    "Study for exam"              => "Overdue",
    "Buy materials for presentation" => "Pending",
    "Attend group meeting"        => "Completed",
    "Check email updates"         => "Pending"
];

foreach ($tasks as $task => $status) {
    $class = strtolower($status);   // "completed", "pending", "overdue"
    echo "<li class='$class'><strong>$task</strong> – $status</li>\n";
}
?>