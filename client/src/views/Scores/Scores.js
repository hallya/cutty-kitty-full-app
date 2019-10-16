import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../../components/Cat/Cat';
import Picture from '../../components/Picture/Picture';
import './Scores.scss';

function Scores(props) {
  const { cats } = props;
  cats.sort((a,b) => b.score - a.score);

  return (
    <ol className="score-container">
      {
        cats.map(({ url, score }, index) => {
          const lineClassName = score > 0 ? 'allow-to-win' : '';
          const rankClassName = score === 0 ? 'hide-rank' : '';

          return (
            <li className={lineClassName} key={index}>
              <Cat className="score-cat">
                <figure>
                  <Picture url={url} />
                  <figcaption>
                    <span className={rankClassName}>#{index + 1}</span>
                    <span className="score-number">{score}</span>
                  </figcaption>
                </figure>
              </Cat>
            </li>
          );
        })
      }
    </ol>
  );
}

Scores.propTypes = {
  cats: PropTypes.array,
};
export default Scores;
