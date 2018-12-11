import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text
} from 'react-native';

import LightBoxImage from 'saeko-app/app/components/lightbox-image'

import styles from './images-post-container-component-style';


export default class ImagesPostContainerComponent extends Component {
	render () { 
		let imageContainer;
		let img;
		let defaultImage =
			<View style={styles.imageContainer}>
					{ this.props.data.map((uri) => (
					<LightBoxImage uri={uri.url} flex='1'/>
				)) }
			</View>
		switch(this.props.data.length){
			case 0: 
				img = <View>
				</View>
				imageContainer = {
					flex: 1,
				    alignSelf: 'stretch',
				    width: undefined,
				    height: undefined
				}
				break;
			case 1: 
				img = defaultImage
				imageContainer = styles.imageContainer
				break;
			case 2: 
				img = defaultImage
				imageContainer = styles.imageContainer
				break;
			case 3: 
				img =
					<View style={styles.imageContainer}>
						<View style={styles.alignThreeImages}>
							<LightBoxImage uri={this.props.data[0].url} flex='1'/>
						</View>
						<View style={styles.alignThreeImages}>
							<LightBoxImage uri={this.props.data[1].url} flex='1'/>
							<LightBoxImage uri={this.props.data[2].url} flex='1'/>
						</View>
					</View>
				imageContainer = styles.imageContainer
				break;
			case 4: 
				img = 
					<View style={styles.imageContainer2}>
						<View style={styles.alignFourImages}>
							<LightBoxImage uri={this.props.data[0].url} flex='3'/>
							<LightBoxImage uri={this.props.data[1].url} flex='2'/>
						</View>
						<View style={styles.alignFourImages}>
							<LightBoxImage uri={this.props.data[2].url} flex='2'/>
							<LightBoxImage uri={this.props.data[3].url} flex='3'/>
						</View>
					</View>
				imageContainer = styles.imageContainer
				break;
			default: 
				img = 
					<View style={styles.imageContainer2}>
						<View style={styles.alignFourImages}>
							<LightBoxImage uri={this.props.data[0].url} flex='3'/>
							<LightBoxImage uri={this.props.data[1].url} flex='2'/>
						</View>
						<View style={styles.alignFourImages}>
							<LightBoxImage uri={this.props.data[2].url} flex='2'/>
							<LightBoxImage uri={this.props.data[3].url} flex='3'/>
						</View>
					</View>
				imageContainer = styles.imageContainer
				break;
		}
		return (
			<View style={imageContainer}>
				{img}
			</View>
		);
	}
}

ImagesPostContainerComponent.propTypes = {
	data: PropTypes.array.isRequired
}

ImagesPostContainerComponent.defaultProps = {
	// data: []
}
