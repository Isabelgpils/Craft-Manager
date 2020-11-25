import React from 'react';
import { Grid } from '@material-ui/core';
import InkCirclesItem from './InkCirclesItem';
import { inkCircles } from './inkCircles';

const InkCirclesList = (props) => {
	const allPatterns = inkCircles.map((pattern) => {
		return (
			<InkCirclesItem
				key={pattern.number}
				name={pattern.name}
				image={pattern.image}
				brand={pattern.brand}
				silks={pattern.silks}
				thumbnail={pattern.thumbnail}
				number={pattern.number}
				size={pattern.size}
			/>
		);
	});
	return (
		<Grid container direction="column">
			<Grid item>
				<Grid style={{ margin: '10px' }} item container />
				<Grid item xs={false} sm={2} />
				{/* on xsmall screens=no gutter  */}
				<Grid item xs={12}>
					<Grid item container style={{ margin: "auto" }}>
						<h3 style={{ margin: "55px auto" }}>Chatelaine Patterns</h3>
					</Grid>
					<Grid item container>
						{allPatterns}
					</Grid>
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};


export default InkCirclesList;
