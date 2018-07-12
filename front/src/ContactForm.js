import React from 'react'
import './ContactForm.css'

class ContactForm extends React.Component {
  state = {
    subject: '',
    content: ''
  }

  handleChange = e => {
    const input = e.target
    this.setState({
      [input.name]: input.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        subject: '', content: ''
      })
    })
  }

  render () {
    const { subject, content } = this.state
    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>

        <div className="ContactForm-input">
          <label htmlFor="subject">Email subject</label>
          <input id="subject" name="subject" value={subject} onChange={this.handleChange} />
        </div>

        <div className="ContactForm-input">
          <label htmlFor="content">Email content</label>
          <textarea id="content" name="content" rows="8" value={content} onChange={this.handleChange}>
          </textarea>
        </div>

        <button type="submit">Send</button>

      </form>
    )
  }
}

export default ContactForm
