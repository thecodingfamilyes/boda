import React from "react";
import {Segment, Header, Item, Statistic} from 'semantic-ui-react';
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
		return <Segment vertical>
			<Header as="h3" content="Vuestras firmas" />
			<Statistic size="small">
				<Statistic.Value>
					{this.props.signatures.size}
				</Statistic.Value>
				<Statistic.Label>
					Firmas
				</Statistic.Label>
			</Statistic>
			<Item.Group relaxed>
				{this.buildList()}
			</Item.Group>
		</Segment>;
	}
};