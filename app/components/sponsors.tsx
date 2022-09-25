import React from 'react';

export default function Sponsors() {

  return <div id='sponsors-box'>
    <p>Supported on Open Collective by the following fine folks:</p>
    <img id='sponsors' src={require('../assets/sponsors.png')} />
    <img id='circles' src={require('../assets/circles.png')} />
  </div>
}