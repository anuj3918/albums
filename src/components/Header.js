import React from 'react';
import { View, Text } from 'react-native';

//Creating a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headingText}</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowoffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	}
};

export default Header;
