import shortid from 'shortid';

export const NEW_SHOOT = 'NEW_SHOOT';
export const newShoot = (newShootInfo) => ({
  type: NEW_SHOOT,
  newShootInfo: {
    id: shortid.generate(),
    gearList: [],
    ...newShootInfo
  }
});

export const UPDATE_SHOOT = 'UPDATE_SHOOT';
export const updateShoot = (data) => ({
  type: UPDATE_SHOOT,
  data
});

export const DELETE_SHOOT = 'DELETE_SHOOT';
export const deleteShoot = (id) => ({
  type: DELETE_SHOOT,
  id
});

export const DEMO_DATA = 'DEMO_DATA';
export const demoData = () => ({
  type: DEMO_DATA,
  photoshoots: [{
      id: 'pY5vitWQz',
      title: 'Milky Way Shoot', 
      location: {
        name: 'Range View Overlook, Shenandoah National Park',
        lat: 38.7643271,
        lng: -78.2256057
      },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    },{
      id: '2MqnL1Dht',
      title: 'City Night Lights', 
      location: {
        name: 'Memorial Bridge, Washington, DC',
        lat: 38.8874085,
        lng: -77.0574026
      },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    }
  ]
});