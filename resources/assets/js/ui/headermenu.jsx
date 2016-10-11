import React from 'react';
import { Header, Container, Image, Icon, Segment, Menu, Button, Dropdown} from 'semantic-ui-react';
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
			if (device.mobile()) {
				return <div>
					<Image avatar src={CURRENT_USER.avatar}/>
					<Button className="userinfo-mobile" icon basic inverted size="mini" href="/logout">
						<Icon name="sign out"/> Salir
					</Button>
				</div>
			}

			return <Button className="userinfo" basic inverted animated="vertical" size="tiny" href="/logout">
				<Button.Content visible>
					<Image avatar src={CURRENT_USER.avatar}/>
					{CURRENT_USER.name}
				</Button.Content>
				<Button.Content hidden>
					<Icon name="sign out"/> Salir
				</Button.Content>
			</Button>;
		}

		return <LoginModal open={this.state.modalActive} onHide={this.onModalHide.bind(this)} trigger={<Button className="login-btn" inverted basic onClick={onLoginClick.bind(this)}>
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
		let sections = {
			'/': 'Home',
			'/boda': 'La Boda',
			'/firmas': 'Libro de firmas',
			'/faq': 'Pregúntanos',
			'/asistentes': 'Asistentes'
		};

		if (device.mobile()) {
			return <Menu size="small" fixed="top" className="main-menu mobile-menu">
				<Menu.Menu>
					<Menu.Item className="brand">
						<Icon name="paw icon" />
					</Menu.Item>
					<Menu.Item className="dropdown-menu">
						<Dropdown trigger={<span><Icon name="content" /> {sections[activePath]}</span>}>
							<Dropdown.Menu>
								<Dropdown.Item name="Home" active={activePath == '/'}><Link to="/">Home</Link></Dropdown.Item>
								<Dropdown.Item name="La boda" active={activePath == '/boda'}><Link to="/boda">La Boda</Link></Dropdown.Item>
								<Dropdown.Item name="Libro de firmas" active={activePath == '/firmas'}> <Link to="/firmas">Libro de firmas</Link> </Dropdown.Item>
								<Dropdown.Item name="Pregúntanos" active={activePath == '/faq'}> <Link to="/faq">Pregúntanos</Link> </Dropdown.Item>

							</Dropdown.Menu>
						</Dropdown>
					</Menu.Item>
				</Menu.Menu>
				<Menu.Menu position="right">
					<Menu.Item>
						{userInfo}
					</Menu.Item>
				</Menu.Menu>
			</Menu>;
		} else {
			if (this.props.mode == 'home') {
				return <Menu compact inverted pointing secondary stackable borderless fixed="top" className="main-menu home-menu">
					<Container>
						<Menu.Menu>
							<Menu.Item className="brand">
								<Icon name="paw icon" />
							</Menu.Item>
							<Menu.Item name="Home" active={activePath == '/'}><Link to="/">Home</Link></Menu.Item>
							<Menu.Item name="La boda" active={activePath == '/boda'}><Link to="/boda">La Boda</Link></Menu.Item>
							<Menu.Item name="Libro de firmas" active={activePath == '/firmas'}> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
							<Menu.Item name="Pregúntanos" active={activePath == '/faq'}> <Link to="/faq">Pregúntanos</Link> </Menu.Item>

						</Menu.Menu>
						<Menu.Menu position="right">
							<Menu.Item>
								{userInfo}
							</Menu.Item>
						</Menu.Menu>
					</Container>
				</Menu>;
			}

			return <Menu compact stackable fixed="top" className="main-menu standard">
				<Container>
					<Menu.Menu>
						<Menu.Item className="brand">
							<Icon name="paw icon" />
						</Menu.Item>
						<Menu.Item name="Home" active={activePath == '/'}><Link to="/">Home</Link></Menu.Item>
						<Menu.Item name="La boda" active={activePath == '/boda'}><Link to="/boda">La Boda</Link></Menu.Item>
						<Menu.Item name="Libro de firmas" active={activePath == '/firmas'}> <Link to="/firmas">Libro de firmas</Link> </Menu.Item>
						<Menu.Item name="Pregúntanos" active={activePath == '/faq'}> <Link to="/faq">Pregúntanos</Link> </Menu.Item>

					</Menu.Menu>
					<Menu.Menu position="right">
						<Menu.Item>
							{userInfo}
						</Menu.Item>
					</Menu.Menu>
				</Container>
			</Menu>;
		}
	}
};