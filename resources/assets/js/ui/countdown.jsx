import React from "react";
import moment from "moment";
import {Container, Message, Segment} from 'stardust';
import {Circle} from 'react-progressbar.js';

moment.locale('es');

const startDate = moment('2016-09-16 13:30:00');
const weddingDate = moment('2017-06-17 13:30:00');

const startDateTimestamp = startDate.toDate().getTime();
const weddingDateTimestamp = weddingDate.toDate().getTime();

function getDuration() {
	let diff = weddingDate.diff(moment());
	let duration = moment.duration(diff);
	let text = duration.months() + ' meses ' + duration.days() + ' días ' + duration.hours() + ' horas ' + duration.minutes() + ' minutos ' + duration.seconds() + ' segundos' ;

	let currentTimestamp = moment().toDate().getTime();

	let fullbar = weddingDateTimestamp - startDateTimestamp;
	let progress = currentTimestamp - startDateTimestamp;
	let percent = (progress * 100) / fullbar;

	var options = {
		strokeWidth: 6,
		color: '#D93E3A',
		trailColor: '#FFB4B2',
		trailWidth: 3
	};

	return <div>
		<Circle
			progress={percent / 100}
			text={percent.toFixed(2) + '%'}
			options={options}
			initialAnimate={true}
			containerClassName={'progressbar-container inline'}
		/>
		<div className="countdown-text inline">
			<div className="months counter-box inline">
				<p className="count">{duration.months()}</p>
				<p className="label">Meses</p>
			</div>
			<div className="days counter-box inline">
				<p className="count">{duration.days()}</p>
				<p className="label">Días</p>
			</div>
			<div className="hours counter-box inline">
				<p className="count">{duration.hours()}</p>
				<p className="label">Horas</p>
			</div>
			<div className="minutes counter-box inline">
				<p className="count">{duration.minutes()}</p>
				<p className="label">Minutos</p>
			</div>
			<div className="seconds counter-box inline">
				<p className="count">{duration.seconds()}</p>
				<p className="label">Segundos</p>
			</div>
		</div>
	</div>;
}

export default class Countdown extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			cdprogress: getDuration()
		};
	}

	componentWillUnmount() {
		this.interval = null;
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				cdprogress: getDuration()
			});
		}, 1000);
	}

	render() {	
		return <Segment className="wedding-countdown">{this.state.cdprogress}</Segment>;
	}
};