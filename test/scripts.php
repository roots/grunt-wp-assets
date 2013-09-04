<?php 
wp_enqueue_style('roots_main', get_template_directory_uri() . '/assets/css/main.min.css', false, null);

wp_register_script('roots_scripts', get_template_directory_uri() . '/assets/js/scripts.min.js', false, null, true);
?>