import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../../components/Cat/Cat';
import Picture from '../../components/Picture/Picture';
import './Scores.scss';

function Scores(props) {
  const { cats } = props;

  return (
    <ol>
      {
        cats.map(({ url, score }, index) => (
          <li className={ score > 0 ? 'allow-to-win' : '' } key={index}>
            <Cat>
              <figure>
                <Picture url={url} />
                <figcaption>
                  <span className={score === 0 ? 'hide-rank' : ''}>#{index + 1}</span>
                  <div className="score-number">{score}</div>
                </figcaption>
              </figure>
            </Cat>
          </li>
        ))
      }
    </ol>
  );
}

Scores.propTypes = {
  cats: PropTypes.array,
};
export default Scores;
