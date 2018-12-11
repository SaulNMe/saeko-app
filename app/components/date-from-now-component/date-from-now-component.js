import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './date-from-now-component-style';
import moment from 'moment'
export default class DateFromNowComponent extends Component {

	constructor (props) {
		super(props);
		this.state = { 
			dateFromNow: moment(this.props.date).fromNow() 
		};
		this.updateDate = this.updateDate.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(this.updateDate, 1000);
	}

	componentWillUnmount () {
		clearInterval(this.interval)
	}
	
	updateDate() {
		let dateFromNow = moment(this.props.date).fromNow();
		this.setState({
			dateFromNow
		})
	}

	render () {
		return (
			<Text style={styles.dateLabel}>{this.state.dateFromNow}</Text>
		);
	}
}

DateFromNowComponent.propTypes = {
	date: PropTypes.string.isRequired
}

DateFromNowComponent.defaultProps = {
	date: moment().fromNow()
}
