<?php
define( 'WP_CACHE', true ); // By SiteGround Optimizer

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'fMKJN:UjEvghqx/e:_g*DR3v~X^#1GjQk,+Hw,7gkYPiFk:tS<_m]SB`m@p7QKv.' );
define( 'SECURE_AUTH_KEY',   'f}qMiYmWy~q|~ujbN7E3D;,L)V>ZKf|Wk]GkzM{=fD)=?fc-MrSg*W+%$+Z!B2zy' );
define( 'LOGGED_IN_KEY',     '!: CAR!d01QF:+3r=Mt6MlDFlR(1C+sjP,o/cN<D-H!*,$gz5[MQ)jDy]%Wn)Ph{' );
define( 'NONCE_KEY',         '_arx*h[@,*WfSp5PL($]%:hF=[._SZGt?`kfr=K[5.qG7QP-CrOdo=0ZPL`|EFoD' );
define( 'AUTH_SALT',         'EA9newUNae;2ANi7_z1@q<7 abTx=c+i%R(y}P8dz7MJx~?qIS:l2c|5ui&/Wte7' );
define( 'SECURE_AUTH_SALT',  'mP*jvP%MkG-#h{5J^a762*J!PC1;Ah(@]AK%:_?>C4/o0rFHv+1c  iKBL^+I|(b' );
define( 'LOGGED_IN_SALT',    'Wsa5u(kgy+JVI5Vb+4LCA.{v4sU[)iA%LG,k3En1s7Q0]Pds<<JySgH>@6+V2sHL' );
define( 'NONCE_SALT',        'vJO?Jm 0a^;DU7-HnGqqfG3uP@m,j6a;2+0]bIhEd|71`@A{R,WiSELVv8WZ.3Z_' );
define( 'WP_CACHE_KEY_SALT', '1WEq2@^u@hda-Wt~}_(4!QUN~ N:NhI:hvOf}o#e5R>k^Q;8=L0^TS{*x}*OJ_Ca' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'aue_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
