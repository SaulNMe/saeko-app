import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

import styles from './home-screen-style';
import moment from 'moment'
import UserHeader from 'saeko-app/app/components/user-header-component/';
import ImagesPost from 'saeko-app/app/components/images-post-container-component/';
import BodyPost from 'saeko-app/app/components/body-post-component/';
import InteractiveButtons from 'saeko-app/app/components/interactive-buttons-component/';

export default class HomeScreen extends Component {
	constructor (props){
		super(props)
		this.state = {
			data: [{
				id: 1,
				header: {	
					user: 'Ms. Principal Johnson',
					date: moment(),
					avatar: 'https://cdn0.iconfinder.com/data/icons/avatar-2/500/man-512.png'
				},
				content :{
					images: ['https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/impressions%20in%20grad%20school.jpg?itok=hBYtCjDw'],
					body: {
						postTitle: 'Lorem ipsum dolor',
						postContainer: 'Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.' 
					}
				}
			},{
				id: 2,
				header: {	
					user: 'Ms. Principal Johnson',
					date: moment(),
					avatar: 'https://cdn2.iconfinder.com/data/icons/lil-faces/244/lil-face-10-512.png'
				},
				content :{
					images: ['https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/impressions%20in%20grad%20school.jpg?itok=hBYtCjDw',
						'https://www.stiftsschule-engelberg.ch/pics/files/2017-18%20%20Kollegium.jpg'],
					body: {
						postTitle: 'Lorem ipsum dolor',
						postContainer: 'Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.' 
					}
				}
			},{
				id: 3,
				header: {	
					user: 'Ms. Principal Johnson',
					date: moment(),
					avatar: 'https://cdn2.iconfinder.com/data/icons/lil-faces/264/lil-face-21-512.png'
				},
				content :{
					images: ['https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/impressions%20in%20grad%20school.jpg?itok=hBYtCjDw',
						'https://www.stiftsschule-engelberg.ch/pics/files/2017-18%20%20Kollegium.jpg',
						'http://3.bp.blogspot.com/-XildRkYfPSc/Tw4EY9cNbAI/AAAAAAAAAFE/fojRx-Y5zjY/s320/positive+reinforcement.jpg'],
					body: {
						postTitle: 'Lorem ipsum dolor',
						postContainer: 'Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.' 
					}
				}
			},{
				id: 4,
				header: {	
					user: 'Ms. Principal Johnson',
					date: moment(),
					avatar: 'https://cdn2.iconfinder.com/data/icons/lil-faces/232/lil-face-12-512.png'
				},
				content :{
					images: ['https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/impressions%20in%20grad%20school.jpg?itok=hBYtCjDw',
						'https://www.stiftsschule-engelberg.ch/pics/files/2017-18%20%20Kollegium.jpg',
						'http://3.bp.blogspot.com/-XildRkYfPSc/Tw4EY9cNbAI/AAAAAAAAAFE/fojRx-Y5zjY/s320/positive+reinforcement.jpg',
						'https://evokehr.files.wordpress.com/2018/06/mentoring-e1529436142107.jpg'
					],
					body: {
						postTitle: 'Lorem ipsum dolor',
						postContainer: 'Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.' 
					}
				}
			},{
				id: 5,
				header: {	
					user: 'Ms. Principal Johnson',
					date: moment(),
					avatar: 'https://cdn2.iconfinder.com/data/icons/lil-faces/232/lil-face-12-512.png'
				},
				content :{
					images: ['https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/impressions%20in%20grad%20school.jpg?itok=hBYtCjDw',
						'https://www.stiftsschule-engelberg.ch/pics/files/2017-18%20%20Kollegium.jpg',
						'http://3.bp.blogspot.com/-XildRkYfPSc/Tw4EY9cNbAI/AAAAAAAAAFE/fojRx-Y5zjY/s320/positive+reinforcement.jpg',
						'https://evokehr.files.wordpress.com/2018/06/mentoring-e1529436142107.jpg',
						'https://evokehr.files.wordpress.com/2018/06/mentoring-e1529436142107.jpg'
					],
					body: {
						postTitle: 'Lorem ipsum dolor',
						postContainer: 'Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.Sit amet, consectetur adipisicing elit, sed do eiusmo tempor.' 
					}
				}
			}]
		};
	}

	static navigationOptions = {
		title: 'Home'
	}
	render () {
		return (
			<View style={styles.container}>
				<ScrollView>
					{
						this.state.data.map((item) => (
							<View key={item.id} style={styles.post}>
								<UserHeader
									data={item.header}
								/>
								<ImagesPost
									data={item.content.images}
								/>
								<BodyPost 
									data={item.content.body}
								/>
								<InteractiveButtons/>
							</View>
						))
					}
				</ScrollView>
			</View>
		);
	}
}
