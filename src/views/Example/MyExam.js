import React from "react";
import ChildComponent from "./ChildComponent";
import Form from "./Form";

class MyExam extends React.Component {

    state = {
        arrjobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '400' },
            { id: 'job3', title: 'Project Managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrjobs: this.state.arrjobs.push(job)
        })
    }


    render() {

        return (
            <>
                <Form />
                <ChildComponent
                    arrjobs={this.state.arrjobs}
                />
            </>
        )
    }

}

export default MyExam;