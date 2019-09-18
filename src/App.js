import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import Navigation from './components/nav'
import { todos } from './data/todos.json'

console.log(todos);


class App extends Component {
  constructor(){
    super()

    this.state = {
      todos
    }
  }
  render() {
    const todos = this.state.todos.map((todos, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              { todos.title }
              <span className="badge badge-pill badge-danger ml-2">
                { todos.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todos.description }</p>
              <p><mark>{ todos.responsible }</mark></p>

            </div>
          </div>
        </div>
      )
    } )
    return (
      <div className="App">
        {/* <Navigation title="Task"/> */}
        <nav className="navbar navbar-dark bg-dark">
                <a href="">
                  Task
                  <span className="badge badge-pill badge-light ml-2">
                    { this.state.todos.length }
                  </span>
                </a>

            </nav>
        <div className="container">
          <div className="row mt-4">
            { todos } 
          </div>
        </div>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App
