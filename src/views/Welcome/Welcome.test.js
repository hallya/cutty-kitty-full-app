import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Welcome />, div);
    
  });
});
