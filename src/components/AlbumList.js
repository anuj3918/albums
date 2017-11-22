import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Creating a component
class AlbumList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	componentWillMount() {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		if (this.state.albums.length === 0) {
			return <Text>Loading...</Text>;
		}
		const albums = this.state.albums;
		return albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}

	render() {
		return <View>{this.renderAlbums()}</View>;
	}
}

export default AlbumList;
