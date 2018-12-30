import { 
  NEW_SHOOT,
  newShoot,
  UPDATE_SHOOT_SUCCESS,
  updateShootSuccess,
  DELETE_SHOOT_SUCCESS,
  deleteShootSuccess,
  SET_PHOTOSHOOTS,
  setPhotoshoots
} from "./photoshootActions";

describe('newShoot', () => {
  test('Should return the action', () => {
    const newShootInfo = {
      title: 'Milky Way Shoot',
      location: 'Skyline Drive',
      desciption: 'Testing',
      gearList: ['tripod','lens']
    }
    const action = newShoot(newShootInfo);
    expect(action.type).toEqual(NEW_SHOOT);
    expect(action.newShootInfo).toEqual(newShootInfo);
  });
});

describe('updateShootSuccess', () => {
  test('Should return the action', () => {
    const updateInfo = {
      title: 'Andromeda Shoot',
      location: 'Skyline Drive',
      desciption: 'Testing Updates',
      gearList: ['tripod']
    }
    const action = updateShootSuccess(updateInfo);
    expect(action.type).toEqual(UPDATE_SHOOT_SUCCESS);
    expect(action.data).toEqual(updateInfo);
  });
});

describe('deleteShootSuccess', () => {
  test('Should return the action', () => {
    const shootID = '5678'
    const action = deleteShootSuccess(shootID);
    expect(action.type).toEqual(DELETE_SHOOT_SUCCESS);
    expect(action.shootID).toEqual(shootID);
  });
});

describe('setPhotoshoots', () => {
  test('Should return the action', () => {
    const data = [{
      title: 'Andromeda Shoot',
      location: 'Skyline Drive',
      desciption: 'Testing Updates',
      gearList: ['tripod']
    },{
      title: 'Milky Way Shoot',
      location: 'Skyline Drive',
      desciption: 'Testing',
      gearList: ['tripod','lens']
    }]
    const action = setPhotoshoots(data);
    expect(action.type).toEqual(SET_PHOTOSHOOTS);
    expect(action.photoshoots).toEqual(data);
  });
});