import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Picture.scss';

const Picture = memo(function Picture(props) {
  const { url } = props;
  return (
    <picture>
      <img src={url} alt=""/>
    </picture>
  );
});

Picture.propTypes = {
  url: PropTypes.string
};
Picture.displayName = 'Picture';

export default Picture;
