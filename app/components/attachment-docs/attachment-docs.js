import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './attachment-docs-style';

export default class AttachmentDocs extends Component {
	render () {
		var exten;
		this.props.data.forEach((ext) => {
			if (ext.extension == 'docs' || ext.extension == 'doc') {
				exten = require('saeko-app/assets/Image/docs.png')
			}else if (ext.extension == 'pdf') {
				exten = require('saeko-app/assets/Image/pdf.png')
			}else if (ext.extension == 'xls') {
				exten = require('saeko-app/assets/Image/xls.png')
			}
		})
		return (
			<View style={styles.mainContainer}>
				{
					this.props.data.map((file) =>(
						<TouchableOpacity style={styles.container}>
							<Image
								style={styles.imageContainer}
								source={exten}
							/>
							<Text style={styles.fileName}> {file.filename}</Text>
						</TouchableOpacity>
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
