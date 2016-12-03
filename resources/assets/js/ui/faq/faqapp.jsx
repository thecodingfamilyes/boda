import React from "react";
import {Segment, Container, Grid, Header, Card, Image, Loader, Message, Icon} from 'semantic-ui-react';
import fetch from 'fetchival';
import immutable from 'immutable';
import moment from 'moment';
import QuestionList from './questionlist.jsx';
import QuestionForm from './questionform.jsx';


export default class QuestionApp extends React.Component {

	constructor(props) {
		super(props);
		const userinfo = CURRENT_USER;
		this.questions = fetch('/api/questions', {
			headers: {
				'Authorization': 'Bearer ' + (userinfo ? userinfo.token : null)
			}
		});
		this.state = {
			questions: null
		}
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		this.questions.get({embed: 'author'}).then((response) => {
			this.setState({questions: immutable.fromJS(response.data)});
		});
	}

	onDelete(id) {
		if (confirm('¿Seguro que quieres borrar esta pregunta?')) {
			this.questions(id).delete();
			let newdata = this.state.questions.filter(row => row.get('id') != id);

			this.setState({questions: newdata});
		}
	}

	onAnswer(id, answer) {
		let questions = this.state.questions;
		let save = null;
		let newdata = questions.map(q => {
			if (q.get('id') == id) {
				q = q.set('answer', answer);
				q = q.set('answered_at', moment().format());

				save = q;
			}

			return q;
		});

		if (save) {
			this.updateQuestion(id, save.toJS());
		}

		this.setState({
			questions: newdata
		});
	}

	buildContent() {
		let content = <Message icon>
				<Icon name='warning circle' />
				<Message.Content>
					<Message.Header>No hay preguntas por el momento</Message.Header>
					No te cortes, ¡déjanos tu pregunta!
				</Message.Content>
			</Message>;
		let questions = this.state.questions;

		if (questions && questions.size) {
			return <QuestionList questions={questions} onDelete={this.onDelete.bind(this)} onAnswer={this.onAnswer.bind(this)}/>;
		}

		return content;
	}

	createQuestion(data) {
		this.questions.post(data).then((resp) => {
			console.log('save', resp);
		});
	}

	updateQuestion(id, data) {
		this.questions(id).put(data).then((resp) => {
			console.log('update', resp);
		});
	}

	onAdd(text) {
		const userinfo = CURRENT_USER;
		let questions = this.state.questions;
		let newdata = {
			id: moment().unix(),
			question: text,
			answer: null,
			answered_at: null,
			user_id: userinfo.id,
			created_at: moment().format(),
			author: {data: userinfo}
		};
		let savedata = {
			question: text
		};

		questions = questions.unshift(immutable.fromJS(newdata));
		this.createQuestion(savedata);

		this.setState({questions: questions});

	}

	render() {
		let loaderActive = !this.state.questions;
		let loader = <Loader active={loaderActive}>Cargando...</Loader>;
		let content = this.buildContent();

		return <Segment vertical>
			{loader}
			<Container>
				<Header as="h2" content="Pregúntanos" />
				<QuestionForm onSend={this.onAdd.bind(this)}/>
				{content}
			</Container>
		</Segment>;
	}
};
