import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList
} from 'react-native';

import styles from './home-screen-style';
import moment from 'moment'
import ActivityCard from 'saeko-app/app/components/activity-card/'

export default class HomeScreen extends Component {
	constructor (props) {
		super(props);
		this.state = {  
	   	feed_activities:
		   	[{
		        id:3109285336410771,
		        verb_id:161,
		        actor:{  
		            id:"55335ece02440400e43f4410d3a792ab1cfa571f",
		            first_name:"Primary School",
		            surname:"",
		            avatar:"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":714,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"asdfasdfasfasdfafasdf",
		            "attachments":[],
		            "recipients":
		            	[{  
		                	"type":"Student",
		                	"name":"BAKER Radford Taylor (Rad)"
		               	}]
		         },
		         "target":null,
		         "time":"2018-02-09T19:48:50Z"
		      },
		      {  
		        "id":3109284981960454,
		        "verb_id":161,
		        "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":710,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"hue",
		            "attachments":[],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2018-02-09T19:45:57Z"
		      },
		      {  
		         "id":3108939893536596,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":708,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"Hola\nEste es un mensaje\ncon enters\nen medio, adivina donde\nhay esos enteres. \nEs súper fácil",
		            "attachments":[],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2018-02-07T20:57:37Z"
		      },
		      {  
		         "id":3108939780714191,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":707,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"asfdsd",
		            "attachments":[],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2018-02-07T20:56:42Z"
		      },
		      {  
		         "id":3097265374645640,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":706,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"Este es un mensaje roto, (pero puede que no)",
		            "attachments":
		            	[{  
		                	"url":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png",
		                	"filename":"huéñ).jpg"
		               	},
		                {  
		                  "url":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png",
		                  "filename":"fixed.jpg"
		                }],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2017-12-03T21:30:08Z"
		      },
		      {  
		         "id":3087973345499625,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":705,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"imagen",
		            "attachments":
		            	[{  
		                	"url":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png",
		                	"filename":"1507781387.png"
		               	},
		               	{  
                  			"url":"https://sakura.omac.dev.kioru.com/anuncios/ba/27d1452a9f95cea616c12bd0398371a2.jpg",
                  			"filename":"huéñ).jpg"
              			},
               			{  
			                "url":"https://sakura.omac.dev.kioru.com/anuncios/d8/474e8b8f022b856171efe402badf70d1.jpg",
			                "filename":"fixed.jpg"
			            },
			            {
			            	url: "www.upch.edu.pe/faest/images/stories/preg_pdf/pt/solicitud_pt.doc",
			            	filename: "solicitud_pt.doc"
			            }
		               	],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2017-10-12T09:11:25Z"
		      },
		      {  
		         "id":3087972639685817,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":704,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"Hola y este llego_",
		            "attachments":[],
		            "recipients":
		            	[{  
		                	"type":"Program",
		                	"name":"Primary VC"
		               	}]
		         },
		         "target":null,
		         "time":"2017-10-12T09:05:40Z"
		      },
		      {  
		         "id":3067219146764169,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":672,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"Oi m8!",
		            "attachments":
		            	[{  
			                	"url":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png",
			                	"filename":"1507781387.png"
			               	},
			               	{  
	                  			"url":"https://sakura.omac.dev.kioru.com/anuncios/ba/27d1452a9f95cea616c12bd0398371a2.jpg",
	                  			"filename":"huéñ).jpg"
	              			},
	               			{  
				                "url":"https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
				                "filename":"fixed.jpg"
			            	},
			               	{  
	                  			"url":"https://sakura.omac.dev.kioru.com/anuncios/ba/27d1452a9f95cea616c12bd0398371a2.jpg",
	                  			"filename":"huéñ).jpg"
	              			},
	              			{
				            	"url": "http://eprints.uanl.mx/7470/1/1020129200.PDF",
				            	"filename": "archivo.pdf"
				            }
			            ],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2017-06-17T02:13:19Z"
		      },
		      {  
		         "id":3067168985721205,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":671,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"Beware the Bugfoot",
		            "attachments":
				        [
				            {
				            	"url": "http://eprints.uanl.mx/7470/1/1020129200.PDF",
				            	"filename": "archivo.pdf"
				            },
	              			{
				            	url: "www.upch.edu.pe/faest/images/stories/preg_pdf/pt/solicitud_pt.doc",
				            	filename: "solicitud_pt.doc"
	              			}
				        ],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2017-06-16T19:25:06Z"
		      },
		      {  
		         "id":3067168326474891,
		         "verb_id":161,
		         "actor":{  
		            "id":"55335ece02440400e43f4410d3a792ab1cfa571f",
		            "first_name":"Primary School",
		            "surname":"",
		            "avatar":"https://api2.sakura.saeko.dev.kioru.com/assets/saeko-128x-92eef59258a4badc2264ade008fc5c44d7dd81de340aee30afb2ffc4b0f08524.png"
		         },
		         "activity_object":{  
		            "id":670,
		            "headerMessage": "Lorem ipsum dolor",
		            "message":"I found it!",
		            "attachments":[],
		            "recipients":[]
		         },
		         "target":null,
		         "time":"2017-06-16T19:19:44Z"
		      }
		]}
}
	static navigationOptions = {
		title: 'Home'
	}
	render () {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.feed_activities}
					renderItem={({item}) => ( <ActivityCard item={item}/> )}
				/>
			</View>
		);
	}
}
