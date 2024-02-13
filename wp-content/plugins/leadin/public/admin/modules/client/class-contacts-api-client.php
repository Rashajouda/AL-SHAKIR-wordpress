<?php

namespace Leadin\admin\client;

use Leadin\client\HubSpot_Base_Api_Client;

/**
 * Client for retrieving contact information.
 */
class Contacts_Api_Client extends HubSpot_Base_Api_Client {

	/**
	 * Query contacts created after a particular timestamp.
	 *
	 * @param integer $timestamp timestamp to filter create date property.
	 *
	 * @param integer $limit max number of results.
	 */
	public function get_contacts_from_timestamp( $timestamp, $limit = 10 ) {
		$path = '/crm/v3/objects/contacts/search';

		$js_timestamp = $timestamp * 1000;

		$payload = array(
			'filterGroups' => array(
				array(
					'filters' => array(
						array(
							'propertyName' => 'createdate',
							'operator'     => 'GTE',
							'value'        => $js_timestamp,
						),
					),
				),
			),
			'sort'         => array( 'createdate' ),
			'properties'   => array( 'createdate' ),
			'limit'        => $limit,
			'after'        => 0,
		);

		$contacts_request = $this->authenticated_request(
			$path,
			'POST',
			json_encode( $payload )
		);

		return json_decode( wp_remote_retrieve_body( $contacts_request ) );
	}

}
