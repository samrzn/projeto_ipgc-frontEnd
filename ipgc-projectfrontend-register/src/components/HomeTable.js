import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
// import Papa from 'papaparse';

// const HomeTable = () => {
//     const [data, setData] = useState({});
//     Papa.parse("https://docs.google.com/spreadsheets/d/1Xemck1lhhBlLvc3CBJo_rJJRQMtg-w5veMDAjKSqMmM/pub?output=csv", {
//         download: true,
//         header: true,
//         complete: (results) => {
//             setData(results.data);
//         },
//     });
//     const tasks = Array.from(data);

const HomeTable = () => {

    const [posts, setPosts] = useState({ infos: [] })

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios("https://script.google.com/macros/s/AKfycbwsMlRdfhhSbqbl0Z7tuhXakOf9fpJdgIbp1LGJEKjS84vD11W4xaA4VDFKubqUDzMT/exec?action=getInfo")

            setPosts({infos: data})
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])


    return (
        <Container className="tableProjectDetails">
            <Table className="table table-responsive table-striped table-bordered text-center align-self-center">
                <thead>
                    <tr class="projectProgressInfo">
                        <th>Atividade</th>
                        <th>Data de início proposta</th>
                        <th>Dias</th>
                        <th>Data de finalização proposta</th>
                        <th>Data real de início</th>
                        <th>Dias para completar</th>
                        <th>Data real de finalização</th>
                        <th>Progresso</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider text-break">
                    {posts.infos && posts.infos.map((detail, id) => (
                        <tr key={id} class="projectProgressData">
                            <th scope="row">{detail.atividade}</th>
                            <td>{detail.inicio}</td>
                            <td>{detail.dias}</td>
                            <td>{detail.final}</td>
                            <td>{detail.inicioreal}</td>
                            <td>{detail.completar}</td>
                            <td>{detail.finalreal}</td>
                            <td>{detail.prog}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}


// class HomeTable extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { tests: [] }
//     }
//     componentDidMount() {
//         this.refreshList();
//     }
//     refreshList() {
//         this.setState({
//             tests: [{ "TaskZero": 'Test Task 0', "TaskOne": 'Test Task 1', "TaskTwo": 'Test Task 2', "TaskThree": 'Test Task 3', "TaskFour": 'Test Task 4', "TaskFive": 'Test Task 5', "TaskSix": 'Test Task 6', "TaskSeven": 'Test Task 7' }]
//         })
//     }
//     render() {
//         const { tests } = this.state;
//         return (
//             <Container className="tableProjectDetails">
//                 <Table className="table table-responsive table-striped table-bordered text-center align-self-center">
//                     <thead>
//                         <tr class="projectProgressInfo">
//                             <th>Atividade</th>
//                             <th>Data de início proposta</th>
//                             <th>Dias</th>
//                             <th>Data de finalização proposta</th>
//                             <th>Data real de início</th>
//                             <th>Dias para completar</th>
//                             <th>Data real de finalização</th>
//                             <th>Progresso</th>
//                         </tr>
//                     </thead>
//                     <tbody class="table-group-divider text-break">
//                         {tests.map(test =>
//                             <tr key={test.Task} class="projectProgressData">
//                                 <th scope="row">{test.TaskZero}</th>
//                                 <td>{test.TaskOne}</td>
//                                 <td>{test.TaskTwo}</td>
//                                 <td>{test.TaskThree}</td>
//                                 <td>{test.TaskFour}</td>
//                                 <td>{test.TaskFive}</td>
//                                 <td>{test.TaskSix}</td>
//                                 <td>{test.TaskSeven}</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </Table>
//             </Container>
//         );
//     }
// }

// trecho comentado representa a primeira construção da tabela dinâmica sem utilização de hooks e papaparse library para conexão com database externa.

export default HomeTable;