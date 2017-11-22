import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Creating a component
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headingText="Albums!" />
			<AlbumList /> 
		</View>
	);
};

// Render component to device
AppRegistry.registerComponent('albums', () => App);
