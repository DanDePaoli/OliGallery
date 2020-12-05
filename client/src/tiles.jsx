import React from 'react';
import Tile from './tile.jsx';
import AddArt from './add-art.jsx';

var Tiles = (props) => (
			<div className="tiles">
				<AddArt fileSelectedHandler = {props.fileSelectedHandler}/>
				{props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
)

export default Tiles;