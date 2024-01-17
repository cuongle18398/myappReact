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

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }


    handleCreateUser = (user) => {
        this.props.createUserRedux(user);
    }

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
                                            <button type="button" onClick={() => this.handleDeleteUser(item)}> Delete </button>
                                        </span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER',
            payload: userDelete
        }),
        createUserRedux: () => dispatch({
            type: 'CREATE_USER'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));