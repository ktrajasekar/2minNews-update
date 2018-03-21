# 2minNews-update

## Demo 

![2 Min News Application using Ionic 1](https://ktragrifarms.files.wordpress.com/2018/03/output_65nxv31.gif)

## Frameworks used

- AngularJS 1.5
- Ionic 1
- Cordova
- Device Plugin
- Network Plugin
- Social share Plugin

## How to install and run in browser

- Clone or Download this application.
- Goto the project folder and  run "npm Install " to download the dependencies.
- To run this application in the browser just type "ionic serve".
- To run this as .apk file you need to install Android studio, Android SDK and connect your device to run it using CMD.

## Building Android 

 > ionic cordova run android --device --livereload
 
 ## Other Links
 
 ### Browser SYNC for live reload

> cordova plugin add cordova-plugin-browsersync

> cordova run -- --live-reload

 More Info - https://www.npmjs.com/package/cordova-plugin-browsersync


##Wordpress

To display featured image in JSON single call 

```
function my_rest_prepare_post( $data, $post, $request ) {

	$_data = $data->data;

	$thumbnail_id = get_post_thumbnail_id( $post->ID );
	$thumbnail = wp_get_attachment_image_src( $thumbnail_id,'full', false, '' ); 
	$_data['featured_image_thumbnail_url'] = $thumbnail[0];
	$data->data = $_data;

	return $data;
}
add_filter( 'rest_prepare_post', 'my_rest_prepare_post', 10, 3 );

```
 
