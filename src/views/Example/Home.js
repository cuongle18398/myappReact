import React from "react";
import { withRouter } from "react-router"
import Color from "../HOC/color.js"
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 1000);
    // }

    render() {
        return (
            <>
                <div className="home">
                    Hello Home
                </div>
            </>
        )
    }
}

export default Color(Home);