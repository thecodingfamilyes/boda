import React from "react";
import {Segment, Header, Item, Statistic, Comment} from 'semantic-ui-react';
import immutable from 'immutable';
import Question from './question.jsx';

export default class QuestionList extends React.Component {

	onDelete(id) {
		this.props.onDelete(id);
	}

	buildList() {
		return this.props.questions.map(question => {
			return <Question key={'question' + question.get('id')} data={question} onDelete={this.onDelete.bind(this)}/>;
		});
	}

	render() {
		return <Segment vertical>
			<Header as="h3" content="Preguntas" />
			<Statistic size="small">
				<Statistic.Value>
					{this.props.questions.size}
				</Statistic.Value>
				<Statistic.Label>
					Preguntas
				</Statistic.Label>
			</Statistic>
			<Comment.Group>
				{this.buildList()}
			</Comment.Group>
		</Segment>;
	}
};