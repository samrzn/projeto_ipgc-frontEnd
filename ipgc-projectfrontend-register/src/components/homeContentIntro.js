import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

const HomeContentIntro = () => {

    const [posts, setPosts] = useState({ infos: [] })

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbxk8drqkkYjdxqkHnroDcW1-OH8A2hSmjYcDyKMpKJQ2v4hqoU6WXS4FjE22BJ7CMm9/exec?action=getInfo")

            setPosts({ infos: data })
            // console.log(data)
        }
        fetchPostList()
    }, [setPosts])



    return (
        <Container>
            <div className="generalProjectInfo">
                <div class="container">
                    <div class="row text-center">
                        <div className="col col-md">
                            {posts.infos.map((detail, id) => (
                                <h2 className="projectTitle" key={id}>{detail.nome}</h2>
                            ))}
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
                </div>
            </div>
        </Container >
    );
}

export default HomeContentIntro;