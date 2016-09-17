import React from "react";
import moment from "moment";
import {Container, Message, Segment} from 'stardust';

moment.locale('es');

const weddingDate = moment('2017-06-17 13:30:00');

function getDuration() {
	let diff = weddingDate.diff(moment());
	let duration = moment.duration(diff);
	let text = duration.months() + ' meses ' + duration.days() + ' días ' + duration.hours() + ' horas ' + duration.minutes() + ' minutos ' + duration.seconds() + ' segundos' ;

	return text;
}

export default class Countdown extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			cdtext: getDuration()
		};
	}

	componentWillUnmount() {
		this.interval = null;
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				cdtext: getDuration()
			});
		}, 1000);
	}

	render() {
		return <Segment className="wedding-countdown">
			<Container text>
				{this.state.cdtext}
			</Container>
		</Segment>;
	}
};