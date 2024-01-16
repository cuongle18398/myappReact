import React from "react";
// import { withRouter } from "react-router"
import Color from "../HOC/color.js"
import logo from '../../assets/images/illus_cover.png'
import { connect } from "react-redux";

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 1000);
    // }

    render() {

        let listUsers = this.props.dataRedux;

        return (
            <>
                <div className="home">
                    Hello Home
                </div>
                {/* <div>
                    <img src={logo} alt="logo" />
                </div> */}
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        {index + 1} - {item.name}
                                        <span>
                                            <button type="button"> Edit </button>
                                        </span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(Color(Home));