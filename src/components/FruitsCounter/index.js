import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, num: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({num: prevState.num + 1}))
  }

  render() {
    const {count, num} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="count">{count}</span> mangoes
            <span className="count"> {num}</span> bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="img"
          />
          <div>
            <button
              type="button"
              className="mango-button"
              onClick={this.onIncrementMango}
            >
              Eat mango
            </button>
            <button
              type="button"
              className="banana-button"
              onClick={this.onIncrementBanana}
            >
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
