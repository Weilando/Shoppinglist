import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import InfoBox from '../components/InfoBox';

describe('snapshot tests for InfoBox component', () => {
  it('should render InfoBox component correctly', () => {
    const toggleFunction = jest.fn();
    const tree = renderer.create(
      <Provider store={store}>
        <InfoBox
          entryCount={42}
          doneEntryCount={7}
        />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});
