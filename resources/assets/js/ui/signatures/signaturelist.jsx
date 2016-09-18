import React from "react";
import {Segment, Header, Item} from 'stardust';
import immutable from 'immutable';
import Signature from './signature.jsx';

export default class SignatureList extends React.Component {

	buildList() {
		return this.props.signatures.map(signature => {
			return <Signature key={'signature' + signature.get('id')} data={signature} />;
		});
	}

	render() {
		return <Segment vertical>
			<Header as="h3" content="Vuestras firmas" />
			<Item.Group relaxed>
				{this.buildList()}
			</Item.Group>
		</Segment>;
	}
};