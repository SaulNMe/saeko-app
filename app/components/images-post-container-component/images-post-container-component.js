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
		let img;
		let defaultImage =
							<View style={styles.imageContainer}>
									{ this.props.data.map((uri) => (
									<LightBoxImage uri={uri} flex='1'/>
								)) }
							</View>
		switch(this.props.data.length){
			case 1: 
				img = defaultImage
			break;
			case 2: 
				img = defaultImage
			break;
			case 3: 
				img =
				<View style={styles.imageContainer}>
					<View style={styles.alignThreeImages}>
						<LightBoxImage uri={this.props.data[0]} flex='1'/>
					</View>
					<View style={styles.alignThreeImages}>
						<LightBoxImage uri={this.props.data[1]} flex='1'/>
						<LightBoxImage uri={this.props.data[2]} flex='1'/>
					</View>
				</View>
			break;
			case 4: 
				img = 
				<View style={styles.imageContainer2}>
					<View style={styles.alignFourImages}>
						<LightBoxImage uri={this.props.data[0]} flex='3'/>
						<LightBoxImage uri={this.props.data[1]} flex='2'/>
					</View>
					<View style={styles.alignFourImages}>
						<LightBoxImage uri={this.props.data[2]} flex='2'/>
						<LightBoxImage uri={this.props.data[3]} flex='3'/>
					</View>
				</View>
			break;
			default: 
				img = 
				<View style={styles.imageContainer2}>
					<View style={styles.alignFourImages}>
						<LightBoxImage uri={this.props.data[0]} flex='3'/>
						<LightBoxImage uri={this.props.data[1]} flex='2'/>
					</View>
					<View style={styles.alignFourImages}>
						<LightBoxImage uri={this.props.data[2]} flex='2'/>
						<LightBoxImage uri={this.props.data[3]} flex='3'/>
					</View>
				</View>

			break;
		}
		/*if(this.props.data.length === 1 || this.props.data.length === 2) {
			img = 
			<View style={styles.imageContainer}>
				{ this.props.data.map((uri) => (
				<LightBoxImage uri={uri} flex='1'/>
			)) }
			</View>
			
		} else if(this.props.data.length === 3){
		} else if(this.props.data.length === 4){
		}*/
		return (
			<View style={styles.imageContainer}>
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
