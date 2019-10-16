import React from 'react';
import PropTypes from 'prop-types';
import './Cat.scss';

function Cat(props) {
  const { children, className } = props;
  return (
    <article className={className}>
      { children }
    </article>
  );
}

Cat.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string || PropTypes.array
};

export default Cat;
