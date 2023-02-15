import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

const HomeContentDuration = () => {

    const [date, setDates] = useState({ posts: [] })

    useEffect(() => {
        const fetchDatesList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbxk8drqkkYjdxqkHnroDcW1-OH8A2hSmjYcDyKMpKJQ2v4hqoU6WXS4FjE22BJ7CMm9/exec?action=getInfo")

            setDates({ posts: data })
            // console.log(data)
        }
        fetchDatesList()
    }, [setDates])



    return (
        <Container>
            <div className="generalProjectInfo">
                <div class="container">
                    <div class="row d-flex justify-content-evenly" >
                        <div class="col col-md-3">
                            {date.posts.map((time, id) => (
                                <h4 className="durationTimeInfo" key={id}>{time.tempo}</h4>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}

export default HomeContentDuration;