<?php

// Client Item Custom Post Type
function client() {

	$labels = array(
		'name'                  => _x( 'Clients', 'Post Type General Name', 'joshcoast' ),
		'singular_name'         => _x( 'Client', 'Post Type Singular Name', 'joshcoast' ),
		'menu_name'             => __( 'Clients', 'joshcoast' ),
		'name_admin_bar'        => __( 'Client', 'joshcoast' ),
		'archives'              => __( 'Client Archives', 'joshcoast' ),
		'attributes'            => __( 'Client Attributes', 'joshcoast' ),
		'parent_item_colon'     => __( 'Parent Client:', 'joshcoast' ),
		'all_items'             => __( 'All Clients', 'joshcoast' ),
		'add_new_item'          => __( 'Add New Client', 'joshcoast' ),
		'add_new'               => __( 'Add New', 'joshcoast' ),
		'new_item'              => __( 'New Client', 'joshcoast' ),
		'edit_item'             => __( 'Edit Client', 'joshcoast' ),
		'update_item'           => __( 'Update Client', 'joshcoast' ),
		'view_item'             => __( 'View Client', 'joshcoast' ),
		'view_items'            => __( 'View Clients', 'joshcoast' ),
		'search_items'          => __( 'Search Client Item', 'joshcoast' ),
		'not_found'             => __( 'Not found', 'joshcoast' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'joshcoast' ),
		'featured_image'        => __( 'Featured Image', 'joshcoast' ),
		'set_featured_image'    => __( 'Set featured image', 'joshcoast' ),
		'remove_featured_image' => __( 'Remove featured image', 'joshcoast' ),
		'use_featured_image'    => __( 'Use as featured image', 'joshcoast' ),
		'insert_into_item'      => __( 'Insert into Client', 'joshcoast' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Client', 'joshcoast' ),
		'items_list'            => __( 'Clients list', 'joshcoast' ),
		'items_list_navigation' => __( 'Clients list navigation', 'joshcoast' ),
		'filter_items_list'     => __( 'Filter Clients list', 'joshcoast' ),
	);
	$args = array(
		'label'                 => __( 'Client', 'joshcoast' ),
		'description'           => __( 'A single client item.', 'joshcoast' ),
		'labels'                => $labels,
		'supports'              => array(
                                        'title',
                                        'editor',
                                        'thumbnail',
                                        'revisions',
                                        'page-attributes',
                                        'post-formats',
										'excerpt'
                                    ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-format-image',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'client', $args );

}
add_action( 'init', 'client', 0 );