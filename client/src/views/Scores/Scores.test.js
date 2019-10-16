import React from 'react';
import ReactDOM from 'react-dom';
import Scores from './Scores';
import mockCats from '../../__mock__/cats.json';

describe('Scores', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Scores cats={mockCats.images} />, div);
  });
});
