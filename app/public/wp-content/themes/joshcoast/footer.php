<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package joshcoast
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'joshcoast' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'joshcoast' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'joshcoast' ), 'joshcoast', '<a href="http://joshcoast.com">Josh Coast</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<div class="search-overlay">
	<div class="search-overlay__top">
		<i class="fa-solid fa-magnifying-glass search-overlay__icon" aria-hidden="true" ></i>
		<div class="container">
			<input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
		</div>
		<i class="fa-regular fa-circle-xmark search-overlay__close" aria-hidden="true"></i>
	</div>
	<div class="container">
		<div id="search-overlay__results" class="search-overlay__results">
		</div>
	</div>
</div>

<?php wp_footer(); ?>

</body>
</html>
