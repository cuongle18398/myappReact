import React from "react";
// import { withRouter } from "react-router"
import Color from "../HOC/color.js"
import logo from '../assets/images/illus_cover.png'

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
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </>
        )
    }
}

export default Color(Home);