import React from 'react'

const Audio = props => <audio 
  style={{width: window.innerWidth < 450 ? '300px' : '400px'}} {...props} 
  controls="controls"
>
  Your browser does not support the audio element.
</audio>

export default Audio