import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isSaved: false, userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  saveText = () => {
    this.setState({isSaved: true})
  }

  editText = () => {
    this.setState({isSaved: false})
  }

  render() {
    const {isSaved, userInput} = this.state
    return (
      <div className="main-cont">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          {!isSaved && (
            <div className="text-cont">
              <input
                value={userInput}
                type="text"
                className="user-input"
                onChange={this.onChangeUserInput}
              />
              <button type="button" className="btn" onClick={this.saveText}>
                Save
              </button>
            </div>
          )}
          {isSaved && (
            <div className="text-cont">
              <p className="para">{userInput}</p>
              <button type="button" className="btn" onClick={this.editText}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
