import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	Image
} from 'react-native';

import styles from './attachment-docs-style';

export default class AttachmentDocs extends Component {
	render () {
		return (
			<View style={styles.mainContainer}>
				{
					this.props.data.map((file) =>(
						<View style={styles.container}>
							<Image
								style={styles.imageContainer}
								source={require('saeko-app/assets/Image/file-icon-pdf.png')}
							/>
							<Text style={styles.fileName}> {file.filename}</Text>
						</View>
					))
				}
			</View>
		);
	}
}

AttachmentDocs.propTypes = {
	data: PropTypes.array
}

AttachmentDocs.defaultProps = {
	// data: []
}
