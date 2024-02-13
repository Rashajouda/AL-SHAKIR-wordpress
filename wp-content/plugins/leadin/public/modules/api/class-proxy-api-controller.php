<?php

namespace Leadin\api;

use Leadin\api\Base_Api_Controller;
use Leadin\client\HubSpot_Base_Api_Client;

/**
 * Hubspot controller for Proxy calls.
 */
class Proxy_Api_Controller extends Base_Api_Controller {

	const WHITELISTED_URLS = array(
		'/leadin/v1/settings?',
		'/contacts/v1/lists?',
		array( 'regex' => '/^\/crm\/v3\/objects\/contacts\??(?:\/[0-9]*\?){0,1}/i' ),
		array( 'regex' => '/^\/forms\/v2\/forms\??(?:&?[^=&]*=[^=&]*)*/i' ),
		'/cosemail/v1/emails/listing?',
		'/wordpress/v1/proxy/live-chat-status?',
		'/wordpress/v1/meetings/links?',
		'/wordpress/v1/meetings/user?',
		'/usercontext/v1/external/actions?',
		'/usercontext-app/v1/external/onboarding/tasks/wordpress_plugin_inexperienced?',
		'/usercontext-app/v1/external/onboarding/progress/wordpress_plugin_inexperienced?',
		'/usercontext-app/v1/external/onboarding/tasks/wp-connect-website-mocked/skip?',
		'/usercontext-app/v1/external/onboarding/tasks/wordpress-marketing-demo/skip?',
		'/usercontext-app/v1/external/onboarding/tasks/wordpress-academy-lesson/skip?',
		'/usercontext-app/v1/external/onboarding/tasks/import-contacts/skip?',
		'/usercontext-app/v1/external/onboarding/tasks/invite-your-team/skip?',
		'/usercontext-app/v1/external/onboarding/tasks/visit-hubspot-marketplace/skip?',
		'/integrations-proxy/v1/forms/business-units?',
	);

	/**
	 * Class constructor, register route.
	 */
	public function __construct() {
		self::register_leadin_route(
			'/proxy(?P<path>.*)',
			\WP_REST_Server::ALLMETHODS,
			array( $this, 'proxy_request' )
		);
	}

	/**
	 * Proxy the request from the frontend to the HubSpot api's User is authenticated via nonce
	 * and permissions are checked in the proxy_permissions callback.
	 *
	 * @param array $request Request to proxy forward.
	 *
	 * @return \WP_REST_Response Response object to return from this endpoint.
	 */
	public function proxy_request( $request ) {
		$proxy_url = $request->get_params()['proxyUrl'];
		if ( $proxy_url ) {
			$regex = array_filter(
				self::WHITELISTED_URLS,
				function( $value ) use ( $proxy_url ) {
					return is_array( $value ) && preg_match( $value['regex'], $proxy_url );
				}
			);
			if ( ! in_array( $proxy_url, self::WHITELISTED_URLS, true ) && empty( $regex ) ) {
				return new \WP_REST_Response( $proxy_url . ' not found.', 404 );
			}
			if ( substr( $proxy_url, -1 ) === '?' ) {
				$proxy_url = substr( $proxy_url, 0, -1 );
			}

			try {
				$client        = new HubSpot_Base_Api_Client();
				$proxy_request = $client->authenticated_request( $proxy_url, $request->get_method(), $request->get_body() );
			} catch ( \Exception $e ) {
				return new \WP_REST_Response( json_decode( $e->getMessage() ), $e->getCode() );
			}

			$response_code = wp_remote_retrieve_response_code( $proxy_request );
			$response_body = wp_remote_retrieve_body( $proxy_request );

			return new \WP_REST_Response( json_decode( $response_body ), $response_code );
		}
	}

}
