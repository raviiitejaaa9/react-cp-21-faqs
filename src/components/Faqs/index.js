// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    givenList: this.props,
    isClicked: false,
  }

  isClickedValue = id => {
    const {givenList} = this.state
    const {faqsList} = givenList
    console.log(faqsList)
  }

  render() {
    const {isClicked} = this.state
    const {faqsList} = this.props
    // console.log(givenList)

    console.log(faqsList)

    return (
      <div className="app-container">
        <div className="faq-items-container">
          <h1 className="app-head"> FAQs </h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                eachFaq={eachItem}
                key={eachItem.id}
                isClickedValue={this.isClickedValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
