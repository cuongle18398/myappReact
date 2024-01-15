import React from "react";

class Form extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState(
            {
                title: event.target.value
            }
        )
    }
    handleChangeSalary = (event) => {
        this.setState(
            {
                salary: event.target.value
            }
        )
    }
    handleSummit = (event) => {
        event.preventDefault()
        alert(this.state)
    }

    render() {
        return (
            <form>
                <label for="fname">Job Title:</label><br />
                <input type="text" onChange={(event) => this.handleChangeTitleJob(event)} value={this.state.title} />
                <br />
                <label for="lname">Salary:</label>
                <br />
                <input type="text" onChange={(event) => this.handleChangeSalary(event)} value={this.state.salary} />
                <br />
                <br />
                <input type="submit" value="Submit" onClick={(event) => this.handleSummit(event)} />
            </form >
        )
    }

}

export default Form;