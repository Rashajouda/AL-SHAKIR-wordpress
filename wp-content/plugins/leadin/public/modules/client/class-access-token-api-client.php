<?php

namespace Leadin\client;

use Leadin\client\HubSpot_Base_Api_Client;

/**
 * Client for refreshing access token.
 */
class Access_Token_Api_Client extends HubSpot_Base_Api_Client {

	/**
	 * Makes a request to  HubSpot's OAuth service to refresh the OAuth access token.
	 *
	 * @param string $refresh_token Refresh token to use to refresh the access token.
	 *
	 * @return array The response from the OAuth refresh endpoint.
	 *
	 * @throws \Exception On failed HTTP refresh request.
	 */
	public function refresh_access_token( $refresh_token ) {
		$path = "/wordpress/v1/oauth/refresh?refresh_token=$refresh_token";

		$refresh_request = $this->make_request( $path, 'POST' );

		return json_decode( wp_remote_retrieve_body( $refresh_request ) );
	}

	/**
	 * Makes a request to  HubSpot's OAuth service to get the OAuth access token.
	 *
	 * @param string $token Refresh token to use to refresh the access token.
	 *
	 * @return object The response from the OAuth refresh endpoint.
	 *
	 * @throws \Exception On failed HTTP refresh request.
	 */
	public function get_access_token( $token ) {
		$api_path = "/oauth/v1/access-tokens/$token";

		$request = $this->authenticated_request( $api_path, 'GET' );

		return $request;
	}


}
