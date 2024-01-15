import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrjobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {!showJobs ?
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="joblists">
                            {
                                arrjobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }

}

export default ChildComponent;