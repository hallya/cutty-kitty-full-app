import React from 'react';
import PropTypes from 'prop-types';
import './Picture.scss';

function Picture(props) {
  const { url } = props;
  return (
    <picture>
      <img src={url} alt=""/>
    </picture>
  );
}

Picture.propTypes = {
  url: PropTypes.string
};

export default Picture;
