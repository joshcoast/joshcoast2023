<?php

add_action('rest_api_init', 'joshcoastRegisterSearch');

function joshcoastRegisterSearch() {
    register_rest_route('joshcoast/v1', 'search', array(
        // Think of the CRUD. Here we just want to 'GET', but wp has a species constant that will use "GET" in most cases. This is just a little bit safer than using 'GET'.
        'methods' => WP_REST_SERVER::READABLE,
        // Function that returns the API json data that will be displayed.
        'callback' => 'joshcoastSearchResults'
    ));
}
// "$data" is our Parameter from the url in the API, you can name it whatever you want.
function joshcoastSearchResults($data) {
    $mainQuery = new WP_Query(array(
        'post_type' => array('post', 'page', 'client'),
        // 's' stands for search, $data is an array from the parameter of the api url.
        // the key 'term' can be anything, it just needs to match the key we use in the url.
        // example http://joshcoast.local/wp-json/joshcoast/v1/search?term=audinate&pee=yellow then our
        // search will find "audinate" but if you put in $data['pee'], this would return 'yellow'
        // sanitize_text_field() is just a security precaution.
        's' => sanitize_text_field($data['term'])
    ));

    // Make an array that can sort our results into post types.
    $searchResults = array(
        'generalInfo' => array(),
        'client'   => array(),
        'blog'        => array()
    );

    while($mainQuery->have_posts()) {
        $mainQuery->the_post();
        // Sort the post into post types.
        if ( get_post_type() == 'page' ) {
            array_push($searchResults['generalInfo'], array(
                'post_type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'authorName' => get_the_author()
            ));
        } elseif ( get_post_type() == 'post' ) {
            array_push($searchResults['blog'], array(
                'post_type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'authorName' => get_the_author()
            ));
        } elseif ( get_post_type() == 'client' ) {
            array_push($searchResults['client'], array(
                'post_type' => get_post_type(),
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'authorName' => get_the_author()
            ));
        }
    }

    return $searchResults;
}
