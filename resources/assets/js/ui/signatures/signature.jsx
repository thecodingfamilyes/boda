import React from "react";
import {Label, Item, Container, Button, Icon} from 'semantic-ui-react';
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

	onDelete(e) {
		this.props.onDelete(this.props.data.get('id'));
	}

	render() {
		let data = this.props.data;
		let body = nl2p(data.get('body'));
		let author = data.get('author').get('data').toJS();
		let animationClass = 'animated fadeIn';
		let deleteBtn = null;

		if (data.get('owner')) {
			deleteBtn = <Button color='red' size="mini" icon onClick={this.onDelete.bind(this)}>
				<Icon name="trash outline" /> Eliminar firma
			</Button>;
		}

		return <Item className={"signature-item " + animationClass}>
			<Item.Content>
				<Item.Extra>
					<Label color="teal" image><img src={author.avatar} /> {author.name}</Label>
					<Label icon='comment outline' content={moment(data.get('created_at')).fromNow()} />
					{deleteBtn}
				</Item.Extra>
				<Item.Description>
					{body}
				</Item.Description>
			</Item.Content>
		</Item>;
	}
};