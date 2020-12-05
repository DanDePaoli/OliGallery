import React from 'react';
import Tile from './tile.jsx';
import AddArt from './add-art.jsx';


var Tiles = (props) => (

			<div className="tiles">

				{props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
				<AddArt fileSelectedHandler = {props.fileSelectedHandler}/>
			</div>
)

export default Tiles;

