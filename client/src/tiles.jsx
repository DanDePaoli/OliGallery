import React from 'react';
import Tile from './tile.jsx';

var Tiles = (props) => (
			<div className="tiles">
				{props.data.map((data) => {
					return <Tile data={data} key={data.id} />
				})}
			</div>
)

export default Tiles;