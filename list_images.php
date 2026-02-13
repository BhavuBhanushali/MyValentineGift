<?php
/**
 * Returns a JSON array of image paths in public/images for the photo slider.
 * Excludes favicon and pointer so only couple photos are listed.
 */
if (ob_get_level()) ob_end_clean();
header('Content-Type: application/json; charset=utf-8');

$dir = __DIR__ . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'images';
$baseUrl = 'public/images/';
$exclude = ['favicon.png', 'pointer.png'];
$extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

$list = [];
if (!is_dir($dir)) {
    echo json_encode($list);
    exit;
}

$files = @scandir($dir);
if ($files === false) {
    echo json_encode($list);
    exit;
}

foreach ($files as $file) {
    if ($file === '.' || $file === '..' || in_array($file, $exclude, true)) {
        continue;
    }
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    if (in_array($ext, $extensions, true)) {
        $list[] = $baseUrl . $file;
    }
}

sort($list);
echo json_encode($list);
