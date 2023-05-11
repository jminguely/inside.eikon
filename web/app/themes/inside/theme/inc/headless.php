<?php

//Changes the preview URL of the CMS to the base url of the front-end website.

add_filter('preview_post_link', 'filter_preview_link');
add_filter('preview_page_link', 'filter_preview_link');
add_filter('get_sample_permalink', 'filter_preview_link');
add_filter('get_sample_permalink_html', 'filter_replace_base_url');
add_action('admin_bar_menu', 'customize_wp_admin_bar_preview_links', 9999);


function customize_wp_admin_bar_preview_links($wp_admin_bar)
{
  $base_url = "https://eikon.ch";
  $view_site = $wp_admin_bar->get_node('view-site');
  $view_site->href = $base_url;

  $view = $wp_admin_bar->get_node('view');
  $url_data = wp_parse_url($view->href);
  $view->href = untrailingslashit($base_url) . $url_data['path'] . (isset($url_data['query']) ? '?' . $url_data['query'] : '');

  $wp_admin_bar->add_node($view_site);
  $wp_admin_bar->add_node($view);
}

function filter_preview_link($permalink)
{
  $base_url = "https://eikon.ch";

  if (is_array($permalink)) {
    $url_data = wp_parse_url($permalink[0]);
    $permalink[0] = str_replace($url_data['scheme'] . '://' . $url_data['host'], untrailingslashit($base_url), $permalink[0]);
    return $permalink;
  } else {
    $url_data = wp_parse_url($permalink);
    $permalink = untrailingslashit($base_url) . $url_data['path'] . (isset($url_data['query']) ? '?' . $url_data['query'] : '');
    return $permalink;
  }
};

function filter_replace_base_url($html)
{
  $base_url = "https://eikon.ch";
  $html = str_replace(untrailingslashit(site_url()), untrailingslashit($base_url), $html);
  return $html;
}
