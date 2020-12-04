import React from 'react';
import axios from 'axios';

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

class App extends React.Component {
constructor(props){
super(props);
this.state = {
gallery: []
}

}
fileSelectedHandler = event => {
  console.log("Clicked!!")
}

render () {


  return (

<div className='newwork'>
<FaPencilAlt />
<FaTrashAlt />
<div className='plus' onClick={this.fileSelectedHandler}> <AiOutlinePlusCircle /></div>


</div>

  );

}


}

export default App;