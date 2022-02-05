import React from 'react';

export default function LoaderPlaceholder(props) {
  const loaderStyles = {
    position: 'relative',
    backgroundColor: '#eee',
    width: '100%',
    overflow: 'hidden',
    ...props.extraStyles,
  };
  const loaderSwipeStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(to right, #eee 10%, #ddd 50%, #eee 90%)',
    width: '100%',
    height: '100%',
    animation: 'loaderSwipeAnim 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
  };

  return (
    <div style={loaderStyles}>
      <div style={loaderSwipeStyles}></div>
    </div>
  );
}
