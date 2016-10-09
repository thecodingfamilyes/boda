import React from "react";
import {Segment, Header, Item, Statistic, Divider, Icon, Label} from 'semantic-ui-react';
import immutable from 'immutable';
import Signature from './signature.jsx';

export default class SignatureList extends React.Component {

	onDelete(id) {
		this.props.onDelete(id);
	}

	buildList() {
		return this.props.signatures.map(signature => {
			return <Signature key={'signature' + signature.get('id')} data={signature} onDelete={this.onDelete.bind(this)}/>;
		});
	}

	render() {
		return <Segment vertical className="signatures-list">
			<Divider horizontal><Icon name='write' />Vuestras firmas</Divider>
			<Item.Group relaxed>
				{this.buildList()}
			</Item.Group>
		</Segment>;
	}
};