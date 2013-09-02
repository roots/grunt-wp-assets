<?php 
wp_enqueue_style('roots_main', get_template_directory_uri() . '/assets/css/main.min.css', false, 'fc8346fa6de9bae4d0c65dc8e84f2cf6', 'handheld');

wp_register_script('roots_scripts', get_template_directory_uri() . '/assets/js/scripts.min.js', false, '2a3e700c4c6e3d70a95b00241a845695', true);
?>