import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

// class HomeContentIntro extends React.Component {
//     render() {

const HomeContentIntro = () => {

    const [posts, setPosts] = useState({ infos: [] })

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbxk8drqkkYjdxqkHnroDcW1-OH8A2hSmjYcDyKMpKJQ2v4hqoU6WXS4FjE22BJ7CMm9/exec?action=getInfo")

            setPosts({ infos: data })
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])



    return (
        <Container>
            <div className="generalProjectInfo">
                <div className="container">
                    <div class="row text-center">
                        {posts.infos.map((detail) => (
                            <div className="col col-md" key={detail}>
                                {detail.nome && <h2 className="projectTitle">{detail.nome}</h2>}
                            </div>
                        ))}
                    </div>
                    <div class="row d-flex justify-content-evenly">
                        <div class="col col-md-3">
                            <h2 class="approvalDateTitle">Data de Aprovação</h2>
                        </div>
                        <div class="col col-md-3">
                            <h2 class="durationTimeTitle">Tempo de Duração</h2>
                        </div>
                    </div>
                    {/* parte comentada deve ser transformada em novo component e CSS Grid para reposicionar componentes
                    <div class="row d-flex justify-content-evenly">
                        <div class="col col-md-3">
                            {detail.aprovacao && <h4 class="approvalDateInfo">{detail.aprovacao}</h4>}
                        </div>
                        <div class="col col-md-3">
                            {detail.tempo && <h4 class="durationTimeInfo">{detail.tempo}</h4>}
                        </div>
                    </div> */}
                </div>
            </div>
        </Container >
    );
}

export default HomeContentIntro;