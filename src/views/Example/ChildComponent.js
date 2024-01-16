import React from "react";
import './styles.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job);
    }

    render() {
        let { arrjobs } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {!showJobs ?
                    <>
                        <div >
                            <button className="btn-show" onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="joblists">
                            {
                                arrjobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <span onClick={() => this.handleOnClickDelete(item)}>x</span>
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