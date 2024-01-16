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
            arrjobs: [...this.state.arrjobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrjobs
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrjobs: currentJob
        })
    }

    render() {

        return (
            <>
                <Form addNewJob={this.addNewJob} />
                <ChildComponent
                    arrjobs={this.state.arrjobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }

}

export default MyExam;