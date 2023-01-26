import React from "react";
import Container from "react-bootstrap/Container";

class HomeContentIntro extends React.Component {
    render() {
        return (
            <Container>
                <div className="generalProjectInfo">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col col-md">
                                <h2 class="projectTitle">Nome do Projeto</h2>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-evenly">
                            <div class="col col-md-3">
                                <h2 class="approvalDateTitle">Data de Aprovação</h2>
                            </div>
                            <div class="col col-md-3">
                                <h2 class="durationTimeTitle">Tempo de Duração</h2>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-evenly">
                            <div class="col col-md-3">
                                <h4 class="approvalDateInfo">Teste</h4>
                            </div>
                            <div class="col col-md-3">
                                <h4 class="durationTimeInfo">Teste</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        );
    }
}

export default HomeContentIntro;