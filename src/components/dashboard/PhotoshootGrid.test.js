import React from 'react';
import { shallow } from 'enzyme';

import { PhotoshootGrid } from './PhotoshootGrid';

const testPhotoshoots = [
	{
	"id": "1",
	"title": "parsing the transmitter won't do anything, we need to back up the online COM matrix!",
	"location": "Willmsstad",
	"description": "Vitae omnis doloremque est sint ratione. Dicta cupiditate aut vitae neque rerum et rerum. Dolore et velit tempora rerum qui ducimus explicabo. Qui aut est. Aperiam delectus nesciunt qui cum voluptatem.",
	"owner": "user0",
	"gearList": [ "methodologies", "installation", "circuit", "index"]
	},
	{
	"id": "2",
	"title": "I'll generate the mobile ADP hard drive, that should monitor the SDD system!",
	"location": "Turcottetown",
	"description": "Aliquam quibusdam quia dignissimos quae ipsam corporis. Aut iste deleniti rerum ullam voluptatem qui. Officiis recusandae iste. Quia ut quis impedit aut suscipit dolores non rerum dolores. Id ipsum qui laudantium tempore et qui. Est eum quia adipisci explicabo.",
	"owner": "user1",
	"gearList": [ "Azerbaijanian Manat", "e-markets", "human-resource", "Movies"]
	},
	{
	"id": "3",
	"title": "If we synthesize the array, we can get to the SQL driver through the mobile HTTP firewall!",
	"location": "Eudoramouth",
	"description": "Impedit quo esse iste voluptatem. Odit aspernatur molestiae ut qui. Accusantium laudantium rerum voluptatum. Eos ea quod explicabo molestias minus aliquid corrupti aut impedit. Aut ullam aliquam aut omnis.",
	"owner": "user2",
	"gearList": [ "Metal", "incubate", "synthesize", "Texas"]
	},
	{
	"id": "4",
	"title": "The SDD transmitter is down, reboot the bluetooth feed so we can program the SSL matrix!",
	"location": "East Deangelo",
	"description": "Deleniti unde eum dolore qui exercitationem tenetur. Eius nihil quo id soluta. Ea libero qui assumenda voluptatem temporibus esse voluptatem.",
	"owner": "user3",
	"gearList": [ "transmitting", "Decentralized", "Health", "Regional"]
	}
];

describe('<PhotoshootGrid />', ()=> {
  const dispatch = jest.fn();

  test('Should render without crashing', ()=> {
		shallow(<PhotoshootGrid photoshoots={testPhotoshoots} dispatch={dispatch} />);
  });

});