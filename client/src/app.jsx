import React from 'react';
import axios from 'axios';
import Artwork from './artwork.jsx';

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

class App extends React.Component {
constructor(props){
super(props);
this.state = {
art: [{name: "David Hockney 1988 Lithograph Print Metropolita", image: 'https://chairish-prod.freetls.fastly.net/image/product/master/f26fb3a7-6b1a-4fd3-b86d-242d21b0eb18/david-hockney-1988-lithograph-print-metropolitan-museum-of-art-8793'}, {name: 'Mykonos Terrace', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-mykonos-terrace-for-sale/a_13421/a_61168021588449571995/C971E961_E82C_4FE1_B6D4_4A4C68A58D41_master.jpeg'}, {name: 'Thomas McKnight, Riverside Drive', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-riverside-drive-for-sale/a_13421/a_61168221588449895846/9B6132CB_17C5_481B_8A0C_3D62110A5DA2_master.jpeg'}]
}

}
fileSelectedHandler = event => {
  console.log("Clicked!!")
}

render () {


  return (
<div>
<Artwork art={this.state.art}/>
<div className='newwork'>
<FaPencilAlt />
<FaTrashAlt />
<div className='plus' onClick={this.fileSelectedHandler}> <AiOutlinePlusCircle /></div>

</div>
</div>
  );

}


}

export default App;