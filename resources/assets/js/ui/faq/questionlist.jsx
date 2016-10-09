import React from "react";
import {Segment, Header, Item, Statistic, Comment, Divider, Icon} from 'semantic-ui-react';
import immutable from 'immutable';
import Question from './question.jsx';

export default class QuestionList extends React.Component {

	onDelete(id) {
		this.props.onDelete(id);
	}

	buildList() {
		return this.props.questions.map(question => {
			return <Question key={'question' + question.get('id')} data={question} onDelete={this.onDelete.bind(this)} onAnswer={this.props.onAnswer.bind(this)}/>;
		});
	}

	render() {
		return <Segment vertical>
			<Divider horizontal><Icon name='comments outline' />Vuestras Preguntas</Divider>
			<Comment.Group>
				{this.buildList()}
			</Comment.Group>
		</Segment>;
	}
};