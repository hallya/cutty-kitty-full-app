import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './Vote';
import mockCats from '../../__mock__/cats.json';

describe('Vote', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Vote 
        leftCat={mockCats.images[0]}
        rightCat={mockCats.images[1]}
        roundNumber={1}
        updateView={jest.fn()} />, div);
  });
});
