import React from "react";
import {Label, Item, Container, Button, Icon, Comment} from 'semantic-ui-react';
import immutable from 'immutable';
import moment from 'moment';
import Answer from './answer.jsx';

moment.locale('es');

function nl2p(text) {
	if (!text) {
		return null;
	}

	return text.split("\n").map(function(item, k) {
		return <p key={'p-' + k}>
			{item}
		</p>;
	});
}

export default class Question extends React.Component {

	onDelete(e) {
		this.props.onDelete(this.props.data.id);
	}

	render() {
		let data = this.props.data;
		let answer = nl2p(data.answer);
		let animationClass = 'animated fadeIn';
		let deleteBtn = null;

		if (data.owner) {

		}

		return <Comment className={"answer-item " + animationClass}>
			<Comment.Avatar src="/img/avatar_perlita.jpg" />
			<Comment.Content>
				<Comment.Author as='a'>Perlita</Comment.Author>
				<Comment.Metadata>
					<div>{moment(data.answered_at).from(moment())}</div>
				</Comment.Metadata>
				<Comment.Text>{answer || 'Guau guau!'}</Comment.Text>
			</Comment.Content>
		</Comment>;
	}
};