import React from "react";

class MyExam extends React.Component {

    state = {
        name: 'Cường',
        age: 26
    }

    handleChangeName = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    handleClickButton = () => {
        alert('Click Me')
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleChangeName(event)}
                    />
                </div>
                <div className="second">{this.state.name} {this.state.age}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div>
            </>

        )
    }

}

export default MyExam;