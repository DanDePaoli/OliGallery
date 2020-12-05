import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";

var AddArt = (props) => (
<div className='tile'>
<div className='newwork'>
<div className='plus' onClick={props.fileSelectedHandler}> <AiOutlinePlusCircle /></div>
</div>
</div>
)

export default AddArt;