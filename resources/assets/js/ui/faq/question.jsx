import React from "react";
import {Label, Item, Container, Button, Icon, Comment} from 'semantic-ui-react';
import immutable from 'immutable';
import moment from 'moment';
import Answer from './answer.jsx';

moment.locale('es');


export default class Question extends React.Component {

	onDelete(e) {
		this.props.onDelete(this.props.data.get('id'));
	}

	render() {
		let data = this.props.data;
		let question = data.get('question');
		let author = data.get('author').get('data').toJS();
		let animationClass = 'animated fadeIn';
		let deleteBtn = null;

		if (data.get('owner')) {
			deleteBtn = <Comment.Actions>
	          <Comment.Action>
	          	<Button basic color="red" size="mini" content='Eliminar' icon='trash outline' onClick={this.onDelete.bind(this)} />
	          </Comment.Action>
	        </Comment.Actions>;
		}

		return <Comment className={"question-item " + animationClass}>
			<Comment.Avatar src={author.avatar} />
			<Comment.Content>
				<Comment.Author as='a'>{author.name}</Comment.Author>
				<Comment.Metadata>
					{moment(data.get('created_at')).from(moment())}
				</Comment.Metadata>
				<Comment.Text>{question}</Comment.Text>
				{deleteBtn}
			</Comment.Content>
			<Comment.Group>
				<Answer data={data.toJS()} onAnswer={this.props.onAnswer.bind(this)}/>
			</Comment.Group>
		</Comment>;
	}
};