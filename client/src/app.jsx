import React from 'react';
import axios from 'axios';
import Tiles from './tiles.jsx';
import { AiOutlinePlusCircle } from "react-icons/ai";

class App extends React.Component {
constructor(props){
super(props);
this.state = {
art: [{id: 1, name: "David Hockney 1988 Lithograph Print Metropolita", image: 'https://chairish-prod.freetls.fastly.net/image/product/master/f26fb3a7-6b1a-4fd3-b86d-242d21b0eb18/david-hockney-1988-lithograph-print-metropolitan-museum-of-art-8793'}, {id: 2, name: 'Thomas McKnight, Mykonos Terrace', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-mykonos-terrace-for-sale/a_13421/a_61168021588449571995/C971E961_E82C_4FE1_B6D4_4A4C68A58D41_master.jpeg'}, {id: 3, name: 'Thomas McKnight, Riverside Drive', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-riverside-drive-for-sale/a_13421/a_61168221588449895846/9B6132CB_17C5_481B_8A0C_3D62110A5DA2_master.jpeg'}, {id: 4, name: 'Thomas McKnight, Matisse Gallery', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-matisse-gallery-for-sale/a_7253/a_58804421586536934972/texture26_72053959_14_master.jpg'}, {id: 5, name: 'Thomas McKnight, Catalina', image: 'https://a.1stdibscdn.com/thomas-mcknight-prints-works-on-paper-catalina-for-sale/a_7253/a_65101121595610206779/texture34_41558133_12_master.jpg'} ]



}

}
fileSelectedHandler = event => {
  console.log("Clicked!!")
}

render () {


  return (
<div>
<Tiles data={this.state.art} />
{/* <div className='tiles'><div className='tile'>
<div className='newwork'>
<div className='plus' onClick={this.fileSelectedHandler}> <AiOutlinePlusCircle /></div>
</div></div>
</div> */}

</div>
  );

}


}

export default App;