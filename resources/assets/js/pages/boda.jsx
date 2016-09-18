import React from 'react';
import {Segment, Container, Grid, Header} from 'stardust';

export default class Boda extends React.Component {
	render() {
		return <div className="ui page wedding">
			<Segment vertical className="wedding-timeline">
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column width={16}>
								<Container text>
									<Header as="h2" content="La Boda"/>
									<Grid.Row>
										<Grid.Column width={8}>
										hola
										</Grid.Column>
									</Grid.Row>
								</Container>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</div>;	
	}
};