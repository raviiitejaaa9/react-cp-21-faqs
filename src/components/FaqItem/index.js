// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onClickPlus = () => {
    console.log('triggered onClick')
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {eachFaq, isClickedValue} = this.props
    const {id, questionText, answerText} = eachFaq

    console.log(questionText)

    const paraEl = isClicked ? (
      <p className="faq-item-para"> {answerText} </p>
    ) : null

    const imageSrc = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imageAlt = isClicked ? 'minus' : 'plus'

    const hrEl = isClicked ? <hr className="line-break" /> : null

    return (
      <li className="faq-item-container">
        <div className="faq-head-container">
          <h1 className="faq-item-head"> {questionText} </h1>
          <button type="button" className="faq-btn" onClick={this.onClickPlus}>
            <img className="faq-img" src={imageSrc} alt={imageAlt} />
          </button>
        </div>
        {hrEl}
        {paraEl}
      </li>
    )
  }
}

export default FaqItem
