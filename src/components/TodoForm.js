import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        const { value, name } = e.target
        console.log(value,name)
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.onAddTodo(this.state)
    }

    render() {
        return(
            <div className="card">
                <form className="card-body" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input 
                          type="text"
                          name="title"
                          className="form-control"
                          placeholder="Title"
                          onChange={ this.handleInput }
                          value={ this.state.title }
                          />
                    </div>
                    <div className="form-group">
                        <input 
                          type="text"
                          name="responsible"
                          className="form-control"
                          placeholder="Responsible"
                          onChange={ this.handleInput }
                          value={ this.state.responsible }
                          />
                    </div>
                    <div className="form-group">
                        <input 
                          type="description"
                          name="description"
                          className="form-control"
                          placeholder="Description"
                          onChange={ this.handleInput }
                          value={ this.state.description }
                          />
                    </div>
                    <div className="form-group">
                        <select 
                          name="priority"
                          className="form-control"
                          onChange={ this.handleInput }
                          value={ this.state.priority }
                          >
                          <option>low</option>
                          <option>medium</option>
                          <option>high</option>
                        </select>
                    </div>
                    <button type="subimit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;