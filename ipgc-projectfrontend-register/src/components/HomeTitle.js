import React from "react";
import Container from "react-bootstrap/Container";

class HomeTitle extends React.Component {
    render() {
        return (
            <Container>
                <div className='home-title'>
                    <div class="container">
                        <h1 class="title_pageRegister">Informações do projeto</h1>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomeTitle;