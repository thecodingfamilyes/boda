import React from 'react';
import { Header, Container, Image, Icon, Segment, Menu, Button} from 'semantic-ui-react';
import { Link } from 'react-router';
import LoginModal from './user/login.jsx';

function onLoginClick() {
	this.setState({modalActive: true})
}

export default class HeaderMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalActive: false
		};
	}

	buildUserInfo() {
		if (CURRENT_USER) {
			return <Button primary className="userinfo" animated="vertical" size="small" href="/logout">
				<Button.Content visible>
					<Image avatar src={CURRENT_USER.avatar}/>
					{CURRENT_USER.name}
				</Button.Content>
				<Button.Content hidden>
					<Icon name="sign out"/> Salir
				</Button.Content>
			</Button>;
		}

		return <LoginModal open={this.state.modalActive} onHide={this.onModalHide.bind(this)} trigger={<Button inverted basic primary onClick={onLoginClick.bind(this)}>
			<Icon name="sign in" />
			Entrar
		</Button> } />;
	}

	onModalHide() {
		this.setState({modalActive: false});
	}

	render() {
		let activePath = this.props.activePage;

		let userInfo = this.buildUserInfo();

		return <Menu pointing secondary inverted borderless stackable size="large">
			<Menu.Header as="h1" content="El diario de Perlita" />
			<Menu.Menu position="right">
				<Menu.Item name="Home" active={activePath == '/'}><Link to="/">Home</Link></Menu.Item>
				<Menu.Item name="La boda" active={activePath == '/boda'}><Link to="/boda">La Boda</Link></Menu.Item>
				<Menu.Item name="Libro de firmas" active={activePath == '/firmas'}> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
				<Menu.Item name="Pregúntanos" active={activePath == '/faq'}> <Link to="/faq">Pregúntanos</Link> </Menu.Item>
				<Menu.Item name="Asistentes" active={activePath == '/asistentes'}> <Link to="/asistentes">Asistentes</Link> </Menu.Item>
				<Menu.Item>
					{userInfo}
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	}
};