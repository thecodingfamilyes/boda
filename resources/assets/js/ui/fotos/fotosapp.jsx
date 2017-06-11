import React, {Component} from 'react';
import {Segment, Container, Grid, Header, Card, Image, Loader, Message, Icon, Dimmer, Modal} from 'semantic-ui-react';
import fetch from 'fetchival';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 300,
    gutter: 16
};

export default class FotosApp extends Component {
    constructor(props) {
        super(props);
        this.photos = fetch('/api/photos');
        this.state = {
            photos: null,
            modalContent: null
        };
    }

    componentWillMount() {
		this.fetchData();
	}

    fetchData() {
        this.photos.get().then(response => {
            let photos = response.data;
            this.setState({photos: photos});
        });
    }

    handleClick(photo) {
        this.setState({modalContent: photo});
    }

    handleModalClose() {
        this.setState({modalContent: null});
    }

    getModalContent() {
        if (!this.state.modalContent) {
            return null;
        }

        return <Image src={'/photo/' + this.state.modalContent} />;
    }

    buildContent() {
        if (!this.state.photos || !this.state.photos.length) {
            return (
                <Message icon>
    				<Icon name='warning circle' />
    				<Message.Content>
    					<Message.Header>No hay fotos por el momento</Message.Header>
    					Sube tu foto a Instagram o Twitter con el hashtag #mispapissecasan17
    				</Message.Content>
    			</Message>
            );
        }

        let childElements = this.state.photos.map((element, k) => {
           return (
                <li className="image-element-class" key={'photo-'+k}>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        this.handleClick(element.original);
                    }}>
                        <Image
                            bordered
                            src={'/photo/' + element.thumbnail}
                            size={'medium'}
                        />
                    </a>
                </li>
            );
        });

        return (
            <Masonry
                className={'boda-photos'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }

    render() {
        let loaderActive = !this.state.photos;
        let loader = <Loader active={loaderActive}>Cargando...</Loader>;
		let content = this.buildContent();
        let modalContent = null;

        if (this.state.modalContent) {
            modalContent = <Image
                src={'/photo/' + this.state.modalContent}
                verticalAlign="middle"
                bordered
                centered
                wrapped
                className="original-image"
            />;
        }

		return <Dimmer.Dimmable as={Segment} dimmed={loaderActive} className="fotos page" vertical>
            <Dimmer active={loaderActive}>
                {loader}
            </Dimmer>

            <Modal dimmer="blurring" open={!!this.state.modalContent} basic onClose={this.handleModalClose.bind(this)} size="large">
                <Modal.Content image>
                    {modalContent}
                </Modal.Content>
            </Modal>

            <Container>
				<Header as="h2" content="Fotos" />
			    {content}
            </Container>
		</Dimmer.Dimmable>;
    }
}
