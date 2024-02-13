<?php

namespace Leadin\api;

use Leadin\api\Base_Api_Controller;
use Leadin\client\Access_Token_Api_Client;
use Leadin\auth\OAuth;
use Leadin\auth\OAuthCrypto;
use Leadin\data\Portal_Options;

/**
 * OAuth controller endpoint
 */
class OAuth_Api_Controller extends Base_Api_Controller {

	/**
	 * Class constructor, register route.
	 */
	public function __construct() {
		self::register_leadin_route(
			'/oauth-token',
			\WP_REST_Server::READABLE,
			array( $this, 'get_oauth_token_scopes' )
		);
		self::register_leadin_route(
			'/refresh-token',
			\WP_REST_Server::READABLE,
			array( $this, 'get_refresh_token' )
		);
	}

	/**
	 * Make an API request to validate the HubSpot access token and return the scopes.
	 */
	public function get_oauth_token_scopes() {
		$token = OAuth::get_access_token();

		try {
			$client  = new Access_Token_Api_Client();
			$request = $client->get_access_token( $token );
		} catch ( \Exception $e ) {
			return new \WP_REST_Response( json_decode( $e->getMessage() ), $e->getCode() );
		}

		$response_code = wp_remote_retrieve_response_code( $request );
		$response_body = \json_decode( wp_remote_retrieve_body( $request ) );
		$return_body   = array(
			'scopes' => $response_body->scopes,
		);

		return new \WP_REST_Response( $return_body, $response_code );
	}

	/**
	 * Make an API request to validate the HubSpot access token and return the scopes.
	 */
	public function get_refresh_token() {
		$refresh_token = OAuth::get_refresh_token();
		$return_body   = array(
			'refreshToken' => $refresh_token,
		);

		return new \WP_REST_Response( $return_body, 200 );
	}

}
