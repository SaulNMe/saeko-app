import font from './font'
import color from './color'
import metrics from './metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		container: {
			flex: 1,
			backgroundColor: '#F8F8F8' 
		},
		titleText: {
			...font.style.h1,
			color: color.dark
		},
		bodyText: {
			...font.style.regular,
			color: color.medium
		},
		post: {
			backgroundColor: '#fff',
			width: '100%',
			marginBottom: 15,
			paddingTop: 15,
			paddingBottom: 15,
			elevation: 3
		}
	},
	stackNavigatorOptions: {
		headerStyle: {
			backgroundColor: '#ffffff'
		}
	}
}

export default ApplicationStyles
