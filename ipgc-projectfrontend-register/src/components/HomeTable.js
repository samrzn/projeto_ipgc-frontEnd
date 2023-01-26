import React from "react";
import Table from "react-bootstrap/Table";

class HomeTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tests: [] }
    }
    render() {
        const { tests } = this.state;
        return (
            <Table className="table table-striped-bordered text-center align-self-center" id="tableProjectDetails">
                <div class="table-responsive">
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
                        {tests.map(dep=>
                            <tr key={test.TableProject} class="projectProgressData">
                                <th scope="row">{test.TaskZero}</th>
                                <td>{test.TaskOne}</td>
                                <td>{test.TaskTwo}</td>
                                <td>{test.TaskThree}</td>
                                <td>{test.TaskFour}</td>
                                <td>{test.TaskFive}</td>
                                <td>{test.TaskSix}</td>
                                <td>{test.TaskSeven}</td>
                            </tr>
                            )}
                    </tbody>
                </div>
            </Table>
        );
    }
}
export default HomeTable;