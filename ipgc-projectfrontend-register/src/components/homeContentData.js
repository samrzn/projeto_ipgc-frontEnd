import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

const HomeContentData = () => {

    const [infos, setInfos] = useState({ details: [] })

    useEffect(() => {
        const fetchInfoList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbxk8drqkkYjdxqkHnroDcW1-OH8A2hSmjYcDyKMpKJQ2v4hqoU6WXS4FjE22BJ7CMm9/exec?action=getInfo")

            setInfos({ details: data })
            // console.log(data)
        }
        fetchInfoList()
    }, [setInfos])



    return (
        <Container>
            <div className="generalProjectInfo">
                <div class="container">
                    {infos.details.map((value, id) => (
                        <div class="row d-flex justify-content-evenly" key={id}>
                            <div class="col col-md-3">
                                {value.aprovacao && <h4 class="approvalDateInfo">{value.aprovacao}</h4>}
                            </div>
                            <div class="col col-md-3">
                                {value.tempo && <h4 class="durationTimeInfo">{value.tempo}</h4>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container >
    );
}

export default HomeContentData;