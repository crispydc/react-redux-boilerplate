import {SET_APP_CONFIG, setAppConfig, configureApp} from '../config-actions';
import {throwError} from '../error-actions';

jest.unmock('../config-actions');
jest.unmock('../error-actions');

describe('config-actions tests', () => {
  it('sets the config', () => {
    const configObj = {endpoint: 'testendpoint'};
    expect(setAppConfig(configObj)).toEqual({
      type: SET_APP_CONFIG,
      config: configObj
    });
  });

  pit('fetches the config', () => {
    //mock the fetch API
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      text:() => '{"endpoint":"http://google.com"}'
    }));

    //check that correct dispatches happened
    const dispatchSpy = jasmine.createSpy('dispatchSpy');
    const action = configureApp(dispatchSpy);
    expect(typeof action === 'function').toBe(true);
    return action(dispatchSpy)
      .then(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(setAppConfig({endpoint: 'http://google.com'}));
      });

  });

  pit('dispatches error on fail', () => {
    //mock the failed fetch API
    window.fetch = jest.fn().mockImplementation(() => Promise.reject());

    //check that correct dispatches happened
    const dispatchSpy = jasmine.createSpy('dispatchSpy');
    const action = configureApp(dispatchSpy);
    expect(typeof action === 'function').toBe(true);
    return action(dispatchSpy)
      .then(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(throwError(jasmine.any(String)));
      });
  })
});
