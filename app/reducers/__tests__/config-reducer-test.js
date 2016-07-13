import {setAppConfig} from '../../actions/config-actions';
import configReducer from '../config-reducer';

jest.unmock('../config-reducer');

describe('config-reducer test', () => {
  it('has correct initial state', () => {
    expect(configReducer()).toEqual({
      isReady: false,
      settings: {}
    });
  });

  it('sets the app config', () => {
    const newConfig = {a: 1, b: 2};
    expect(configReducer({}, setAppConfig(newConfig))).toEqual({
      isReady: true,
      settings: newConfig
    });
  });
});
