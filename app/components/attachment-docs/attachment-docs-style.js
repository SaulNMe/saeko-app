import { StyleSheet } from 'react-native';
import { font, color } from 'saeko-app/app/styles';

export default StyleSheet.create({
	mainContainer: {
		padding: 3,
		flex: 1
	},
	container:{
		marginTop: 3,
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: color.light,
		borderRadius: 40,
		paddingLeft: 10,
		paddingRight:10,
		paddingBottom: 5,
		paddingTop: 5,
		alignSelf: 'flex-start' 

	},
	imageContainer: {
		width: 30,
		height: 30,
		marginRight: 5
	},
	fileName: {
		color: color.dark,
		fontSize: 16
	}
});
