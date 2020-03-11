import React from 'react'

const TextOverlay = ({ children }) => {

  return (
    <div styles={{ alignItems: 'center', alignContent: 'center'}}>
      <h3 align='center'>{children}</h3>
    </div>
  )
}

export default TextOverlay