import React from 'react';


var Artwork = (props) => (

<div class="gallery">
<a target="_blank" href={props.art[0].image}>

<img src={props.art[0].image} alt="Cinque Terre" width="600" height="400"></img>
  </a>
  <div class="desc">{props.art[0].name}</div>
</div>

)


export default Artwork;