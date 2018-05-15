import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <li>
        <img src={gif.images.downsized.url} />
    </li>
  )
};

export default GifItem;