import React from 'react';

function Preloader(props) {
  const { isSiteLoading } = props;
  return (
    <div
      className={isSiteLoading ? 'preloader' : 'preloader preloader_hidden'}
    ></div>
  );
}
export default Preloader;
