import { StyleSheet } from 'react-native';
import { font, color } from 'saeko-app/app/styles';

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		paddingBottom: 10
	},
	container: {
		width: '80%',
		marginLeft: 20
	},
	header: {
		color: '#0C273E',
		fontSize: 16, 
		fontFamily: 'Roboto'	
	},
	avatar: {
		marginLeft: 19,
		width: 50,
		height: 50
	}
});
