import React from "react";
import axios from "axios";
import './ListUsers.scss';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    List User
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="user-child" key={item.id}
                                    onClick={() => this.handleViewDetail(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);