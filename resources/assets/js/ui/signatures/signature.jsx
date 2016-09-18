import React from "react";
import {Label, Item, Container} from 'stardust';
import immutable from 'immutable';
import moment from 'moment';

moment.locale('es');

function nl2p(text) {
	return text.split("\n").map(function(item, k) {
		return <p key={'p-' + k}>
			{item}
		</p>;
	});
}

export default class Signature extends React.Component {

	render() {
		let data = this.props.data;
		let body = nl2p(data.get('body'));
		let author = data.get('author').get('data').toJS();

		return <Item className="signature-item">
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