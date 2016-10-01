import React from "react";
import {Label, Item, Container} from 'stardust';
import immutable from 'immutable';
import moment from 'moment';
import Sensor from 'react-visibility-sensor';
import throttle from 'lodash.throttle';

moment.locale('es');

function nl2p(text) {
	return text.split("\n").map(function(item, k) {
		return <p key={'p-' + k}>
			{item}
		</p>;
	});
}

export default class Signature extends React.Component {

	constructor(props) {
		super(props);

		this.handleAnimation = throttle((visible) => {
			if (!this.state.animated && visible) {
				this.setState({animated: true});
			}
		}, 100);

		this.state = {
			animated: false
		};
	}

	render() {
		let data = this.props.data;
		let body = nl2p(data.get('body'));
		let author = data.get('author').get('data').toJS();
		let animationClass = '';
		let style = {opacity: 0};

		if (this.state.animated) {
			animationClass = 'animated fadeIn';
			style = null;
		}

		return <Item className={"signature-item " + animationClass} style={style}>
			<Sensor onChange={this.handleAnimation.bind(this)} active={!this.state.animated} delay={300} />
			<Item.Content>
				<Item.Description>
					{body}
				</Item.Description>
				<Item.Extra>
					<Label color="teal" icon='user' content={author.name} />
					<Label icon='comment outline' content={moment(data.get('created_at')).fromNow()} />
				</Item.Extra>
			</Item.Content>
		</Item>;
	}
};