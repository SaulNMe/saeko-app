import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image,
	ScrollView
} from 'react-native';

import styles from './user-header-component-style';
import DateFromNow from '../date-from-now-component';
export default class UserHeaderComponent extends Component {
	render () {
		return (
			<View style={styles.mainContainer}>
				<Image
					resizeMode='stretch'
          			style={styles.avatar}
          			source={{uri: this.props.data.avatar}}
        		/>
        		<View style={styles.container}>
					<Text style={styles.header}>{this.props.data.user}</Text>
					<DateFromNow 
						date={this.props.data.date}
						color= '#9CADC6'
						size={14}
					/>
        		</View>
			</View>
		);
	}
}

UserHeaderComponent.propTypes = {
	data: PropTypes.object.isRequired
}

UserHeaderComponent.defaultProps = {
	// data: []
}
