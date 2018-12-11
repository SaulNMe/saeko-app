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
          			source={{uri: this.props.actor.avatar}}
        		/>
        		<View style={styles.container}>
					<Text style={styles.header}>{this.props.actor.first_name} {this.props.actor.surname}</Text>
					<DateFromNow 
						date={this.props.time}
						color= '#9CADC6'
						size={14}
					/>
        		</View>
			</View>
		);
	}
}

UserHeaderComponent.propTypes = {
	actor: PropTypes.object.isRequired
}

UserHeaderComponent.defaultProps = {
	// data: []
}
