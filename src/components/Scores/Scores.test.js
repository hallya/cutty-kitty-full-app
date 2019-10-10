import React from 'react';
import ReactDOM from 'react-dom';
import Scores from './Scores';

describe('Scores', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Scores />, div);
  });
});