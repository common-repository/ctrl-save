<?php
/*
Plugin Name: Ctrl+S
Plugin URI:	 https://github.com/417shena/wp-plugin_ctrl-s
Version:	   1.0
Author:      417
Author URI:  https://417.run/
Description: [ctrl + s] ⇒ save_post | [ctrl + shift + s] => publish
*/

/**
 * Enqueue javascript only on edit post page.
 * 
 * @access public
 * @param string $hook_suffix
 * @return void
 */
add_action('admin_enqueue_scripts', function ($hook_suffix) {
  if ('post.php' == $hook_suffix || 'post-new.php' == $hook_suffix) {
    wp_enqueue_script('ctrl-s', plugins_url('ctrl-s.js', __FILE__), array('jquery'));
  }
});
