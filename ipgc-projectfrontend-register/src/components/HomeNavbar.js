import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HomeNavbar() {
    return (
        <>
            <Navbar className='color-nav' variant='homeNavbar' fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://ipgc.com.br/imagens/enviadas/a3ac47e468b904443fb3cca2e602168a.svg"
                            width="86"
                            height="48"
                            alt="IPGC"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default HomeNavbar;