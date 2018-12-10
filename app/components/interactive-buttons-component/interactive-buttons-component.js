import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import styles from './interactive-buttons-component-style';

export default class InteractiveButtonsComponent extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = { data: props.data };
	// }

	render () {
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={styles.button}
				> 
					<Feather
						name="thumbs-up"
						size={32}
						color='#9CADC6'/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={styles.button}
				> 
					<Feather
						name="message-square"
						size={32}
						color='#9CADC6'/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={styles.button}
				> 
					<Feather
						name="share"
						size={32}
						color='#9CADC6'/>
				</TouchableOpacity>
			</View>
		);
	}
}

InteractiveButtonsComponent.propTypes = {
	// data: PropTypes.array
}

InteractiveButtonsComponent.defaultProps = {
	// data: []
}
