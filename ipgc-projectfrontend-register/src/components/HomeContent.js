import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

// class HomeContentIntro extends React.Component {
//     render() {

const HomeContentIntro = () => {

    const [posts, setPosts] = useState({ infos: [] })

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbwsMlRdfhhSbqbl0Z7tuhXakOf9fpJdgIbp1LGJEKjS84vD11W4xaA4VDFKubqUDzMT/exec?action=getInfo")

            setPosts({ infos: data })
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])



    return (
        <Container>
            <div className="generalProjectInfo">
                {posts.infos && posts.infos.map((detail, id) => (
                    <div key={id} class="container">
                        <div class="row text-center">
                            <div class="col col-md">
                                <h2 class="projectTitle">{detail.nome}</h2>
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
                                <h4 class="approvalDateInfo">{detail.aprovacao}</h4>
                            </div>
                            <div class="col col-md-3">
                                <h4 class="durationTimeInfo">{detail.tempo}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    );
}

export default HomeContentIntro;