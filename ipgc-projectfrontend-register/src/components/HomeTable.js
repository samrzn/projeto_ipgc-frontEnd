import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Papa from 'papaparse';

const HomeTable = () => {
    const [data, setData] = useState({});
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSR5nL58S8mOqslqswcm9_mDQ2EXplhiQkZ5G0V8dGrDOmxOLAkAefEaPtza_8TOobNdJpr4rK7K0IC/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            setData(results.data);
        },
    });
    const tasks = Array.from(data);
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
                    {tasks.map((data, id) => (
                        <tr key={id} class="projectProgressData">
                            <th scope="row">{data.atividade}</th>
                            <td>{data.inicio}</td>
                            <td>{data.dias}</td>
                            <td>{data.final}</td>
                            <td>{data.inicioreal}</td>
                            <td>{data.completar}</td>
                            <td>{data.finalreal}</td>
                            <td>{data.prog}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
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

// trecho comentado representa a primeira construção da tabela dinâmica sem utilização de hooks e papaparse library para conexão com API externa.

export default HomeTable;