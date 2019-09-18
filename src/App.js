import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import Navigation from './components/nav'
import { todos } from './data/todos.json'

// subcomponents
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(){
    super()

    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index
      })
    })
  }

  render() {
    const todos = this.state.todos.map((todos, i) => {
      return(
        <div className="col-md-4" key={ i }>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ todos.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todos.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todos.description }</p>
              <p><mark>{ todos.responsible }</mark></p>

            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick= { this.removeTodo.bind(this, i) }>
                 Delete
                </button>
            </div>
          </div>
        </div>
      )
    } )

    return (
      <div className="App">
        {/* <Navigation title="Task"/> */}
        <nav className="navbar navbar-dark bg-dark">
                <a href="index.html">
                  Task
                  <span className="badge badge-pill badge-light ml-2">
                    { this.state.todos.length }
                  </span>
                </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <img src={ logo } className="App-logo" alt="logo" />
              <TodoForm onAddTodo ={ this.handleAddTodo }/>
            </div>

            <div className="col-md-8">
              <div className="row">
                { todos } 
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App
