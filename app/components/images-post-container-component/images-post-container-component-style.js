import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import { font, color } from 'saeko-app/app/styles';
import {width} from './images-post-container-component'

export default StyleSheet.create({
	imageContainer: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		height: 274
	},
	imageContainer2: {
		flex: 1,
		flexWrap: 'wrap',
		//flexDirection: 'row',
		height: 274
	},
	alignThreeImages:{
		flex: 1,
		alignSelf: 'stretch',
		width: undefined,
		height: undefined
	},
	alignFourImages: {
		flex: 1,
		alignSelf: 'stretch',
		width: undefined,
		height: undefined,
		flexDirection: 'row'
	}
});
