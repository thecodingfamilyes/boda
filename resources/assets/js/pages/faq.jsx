import React from "react";
import Questions from '../ui/faq/faqapp.jsx';
import {Segment, Container, Grid, Header, Menu} from 'semantic-ui-react';
import Map from '../ui/map.jsx';

export default class Faq extends React.Component {

	constructor(props) {
		super(props);

		this.state = { activeItem: 'Peluquería' };
	}

	handleItemClick(e, { name }) {
		this.setState({ activeItem: name })
	}

	render() {
		const { activeItem } = this.state;

		return <Segment className="questions page" vertical>
			<Container>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column width={8}>
							<Segment className="details-segment" vertical>
								<Map width="100%" />
							</Segment>
							<Segment className="another-details-segment" vertical>
								<Menu tabular>
					        <Menu.Item name='Peluquería' active={activeItem === 'Peluquería'} onClick={this.handleItemClick} />
					        <Menu.Item name='Alojamiento' active={activeItem === 'Alojamiento'} onClick={this.handleItemClick} />
									<Menu.Item name='Transporte' active={activeItem === 'Transporte'} onClick={this.handleItemClick} />
					      </Menu>
							</Segment>
						</Grid.Column>
						<Grid.Column width={8}>
							<Questions />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>;
	}
};
