import React from 'react';
import {Container, Segment, Menu, Header, Icon, Image, Grid} from 'semantic-ui-react';
import HeaderMenu from './headermenu.jsx';
import { Link } from 'react-router';
import PerlitaSignature from '../ui/signature.jsx';

export default class Footer extends React.Component {
	render() {
		return <Segment className="footer">
			<Container>
				<div className="site-data">
					<Header as="h4" className="site-name" content="&copy; 2016 - 2017 El diario de Perlita"/>
					<Menu pointing secondary inverted borderless stackable size="large">
						<Menu.Menu>
							<Menu.Item name="Home"><Link to="/">Home</Link></Menu.Item>
							<Menu.Item name="La boda"><Link to="/boda">La Boda</Link></Menu.Item>
							<Menu.Item name="Libro de firmas"> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
							<Menu.Item name="Pregúntanos"> <Link to="/faq">Pregúntanos</Link> </Menu.Item>
						</Menu.Menu>
					</Menu>
					<Grid>
						<Grid.Row className="social" columns={3}>
							<Grid.Column>
								<a href="https://github.com/mineros/boda"><Icon name='github' size="big" />GitHub</a>
							</Grid.Column>
							<Grid.Column>
								<a href="https://twitter.com/cso1992"><Image src="https://pbs.twimg.com/profile_images/2835170634/0ed2479b45d419a66724e09b147ecd95_normal.jpeg" avatar />@cso1992</a>
							</Grid.Column>
							<Grid.Column>
								<a href="https://twitter.com/algm85"><Image src="https://pbs.twimg.com/profile_images/500403493534851072/-KVLqSFT_400x400.jpeg" avatar />@algm85</a>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<PerlitaSignature />
			</Container>
		</Segment>;
	}
};