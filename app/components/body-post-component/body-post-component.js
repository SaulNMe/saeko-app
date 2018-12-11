import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './body-post-component-style';

export default class NoticeComponent extends Component {
	constructor(props){
		super(props)
	}

	render () {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.postTitle}>{this.props.activity_object.headerMessage}</Text>
				<Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.postContainer}>{this.props.activity_object.message}</Text>
			</View>
		);
	}
}

NoticeComponent.propTypes = {
	// data: PropTypes.array
}

NoticeComponent.defaultProps = {
	// data: []
}
