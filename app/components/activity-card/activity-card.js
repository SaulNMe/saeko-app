import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	View
} from 'react-native';

import styles from './activity-card-style';
import UserHeader from 'saeko-app/app/components/user-header-component/';
import ImagesPost from 'saeko-app/app/components/images-post-container-component/';
import BodyPost from 'saeko-app/app/components/body-post-component/';
import AttachmentDocs from 'saeko-app/app/components/attachment-docs/';
import InteractiveButtons from 'saeko-app/app/components/interactive-buttons-component/';
export default class ActivityCard extends Component {
	constructor (props) {
		super(props);
		this.state = { item: props.item };
	}
	
	render () {
		let item = this.state.item
		let arrDocs = [];
		let arrImgs = [];
		item.activity_object.attachments.forEach((item) => {
			var extension = item.filename.split(".")
			if(extension[extension.length-1] === "pdf" || extension[extension.length-1] === "xlsx" || extension[extension.length-1] === "docx"){
				arrDocs.push({url: item.url, filename: item.filename, extension: extension[extension.length-1]});
			} else if (extension[extension.length-1] === "jpg" || extension[extension.length-1] === "png" || extension[extension.length-1] === "jpeg"){
				arrImgs.push(item);
			}
		})
		return (
			<View>
				<UserHeader
					actor={this.state.item.actor}
					time={this.state.item.time}
				/>
				<ImagesPost
					data={arrImgs}
				/>
				<BodyPost
					activity_object={this.state.item.activity_object}
				/>
				<AttachmentDocs
					data={arrDocs}
				/>
				<InteractiveButtons/>
			</View>
		);
	}
}

ActivityCard.propTypes = {
	item: PropTypes.object
}

ActivityCard.defaultProps = {
	// data: []
}
