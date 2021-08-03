import React from 'react';
import Main from '../src/screens/main';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Main />);
});
