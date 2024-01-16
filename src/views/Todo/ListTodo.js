import React from "react";
import './ListTodo.scss';
import { toast } from 'react-toastify';
import AddTodo from './AddTodo.js'

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fixing Bugs' },
        ],
        edittodo: {}
    }

    addNewtodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeletetodo = (todo) => {
        let currentlist = this.state.listTodos;
        currentlist = currentlist.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentlist
        })
        toast.success('Title is deleted !')
    }
    handleEdittodo = (todo) => {
        let { listTodos, edittodo } = this.state;
        let isEmptyObj = Object.keys(edittodo).length === 0;
        //save
        if (!isEmptyObj && edittodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objectIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objectIndex].title = edittodo.title;
            this.setState({
                listTodos: listTodosCopy,
                edittodo: {}
            })
            toast.success('Update todo success!')
            return;
        }

        //edit
        this.setState({
            edittodo: todo
        })
    }

    handleOnChangeEdittodo = (event) => {
        let edittodocoppy = { ...this.state.edittodo };
        edittodocoppy.title = event.target.value;
        this.setState({
            edittodo: edittodocoppy
        })
    }

    render() {
        let { listTodos, edittodo } = this.state;
        let isEmptyObj = Object.keys(edittodo).length === 0;
        return (
            <>
                <p>To do App</p>
                <div className="list-todo-container">
                    <AddTodo addNewtodo={this.addNewtodo} />
                    <div className="list-todo-content"  >
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child">
                                        {isEmptyObj ?
                                            <span key={item.id}> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {edittodo.id === item.id ?
                                                    <span key={item.id}>
                                                        {index + 1} - <input value={edittodo.title}
                                                            onChange={(event) => this.handleOnChangeEdittodo(event)} />
                                                    </span>
                                                    :
                                                    <span key={item.id}> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <button className="edit" onClick={() => this.handleEdittodo(item)}>
                                            {!isEmptyObj && edittodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeletetodo(item)}> Delete </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default ListTodo