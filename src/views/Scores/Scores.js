import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../../components/Cat/Cat';
import Picture from '../../components/Picture/Picture';
import './Scores.scss';

function Scores(props) {
  const { cats, score } = props;
  return (
    <ol>
      {
        cats.map((cat, index) => (
          <li key={index}>
            <Cat>
              <Picture url={cat.url} />
              <h4>{score}</h4>
            </Cat>
          </li>
        ))
      }
    </ol>
  );
}

Scores.propTypes = {
  cats: PropTypes.array,
  score: PropTypes.number,
};
export default Scores;
