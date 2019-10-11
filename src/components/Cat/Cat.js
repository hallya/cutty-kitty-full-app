import React from 'react';
import PropTypes from 'prop-types';
import './Cat.scss';

function Cat(props) {
  const { children } = props;
  return (
    <article>
      { children }
    </article>
  );
}

Cat.propTypes = {
  children: PropTypes.any
};
export default Cat;
