import React from "react";
import moment from "moment";
import {Container, Segment, Button, Grid, Icon} from 'semantic-ui-react';
import {Circle} from 'react-progressbar.js';

moment.locale('es');

const startDate = moment('2016-09-16 13:30:00');
const weddingDate = moment('2017-06-17 13:30:00');

const startDateTimestamp = startDate.toDate().getTime();
const weddingDateTimestamp = weddingDate.toDate().getTime();

function getDuration() {
	let diff = weddingDate.diff(moment());
	let duration = moment.duration(diff * (-1));
	let text = duration.months() + ' meses ' + duration.days() + ' días ' + duration.hours() + ' horas ' + duration.minutes() + ' minutos ' + duration.seconds() + ' segundos' ;

	let currentTimestamp = moment().toDate().getTime();

	let fullbar = weddingDateTimestamp - startDateTimestamp;
	// let progress = currentTimestamp - startDateTimestamp;
	// let percent = (progress * 100) / fullbar;

	var options = {
		strokeWidth: 6,
		color: '#D93E3A',
		trailColor: '#FFB4B2',
		trailWidth: 3
	};

	return <div>
		{/*<Circle
			progress={percent / 100}
			text={percent.toFixed(2) + '%'}
			options={options}
			initialAnimate={true}
			containerClassName={'progressbar-container inline'}
		/>*/}
		<div className="countdown-text inline">
			<div className="counter-info">
				Mis papis se han casado hace:
			</div>

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
		clearInterval(this.interval);
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
		const content = <Container className="paddingless">
			<Grid stackable>
				<Grid.Row>
					<Grid.Column width={16}>
						{this.state.cdprogress}
					</Grid.Column>
					{/*<Grid.Column width={4} className='spacer' />
					<Grid.Column width={4}>
						<Button basic inverted fluid icon='gift' size='huge' onClick={() =>{
							window.location.href = 'https://www.coinc.es/coinc/social/shared/goal.xhtml?id=6F7eUsNGa8RtHoxR1sKW9w';
						}} content='¡Haz un regalo!' className="gift-button"/>
					</Grid.Column>*/}
				</Grid.Row>
			</Grid>
		</Container>;

		return <Segment className="wedding-countdown borderless">{content}</Segment>;
	}
};
