import React from 'react';
import { shallow } from 'enzyme';

import { ShootPreviewCard } from './ShootPreviewCard';

const shoot = {
  "id": "4",
  "title": "The SDD transmitter is down, reboot the bluetooth feed so we can program the SSL matrix!",
  "location": "East Deangelo",
  "description": "Deleniti unde eum dolore qui exercitationem tenetur. Eius nihil quo id soluta. Ea libero qui assumenda voluptatem temporibus esse voluptatem.",
  "owner": "user3",
  "gearList": [ "transmitting", "Decentralized", "Health", "Regional"]
}

describe('<ShootPreviewCard />', () => {
  test('Should render without crashing', () => {
    shallow(<ShootPreviewCard shoot={shoot}/>)    
  })
})