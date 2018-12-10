import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';

import styles from './lightbox-image-style';

export default function lightboxImage (props) {
	return (
		<TouchableOpacity
			style={{	
				flex: Number(props.flex),
			    alignSelf: 'stretch',
			    width: undefined,
			    height: undefined,
			    padding: 1
			}}
			onPress={() => alert('Do not touch!')}
		>
			<Image
				resizeMode='cover'
      			style={{
				    flex: 1
				}}
     			source={props}
    		/>
		</TouchableOpacity>
	)
}

lightboxImage.propTypes = {
	// data: PropTypes.array
}

lightboxImage.defaultProps = {
	// data: []
}
