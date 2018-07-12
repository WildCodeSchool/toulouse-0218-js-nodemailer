import React from 'react'

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
      console.log(data)
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="subject">Email subject</label>
        <input id="subject" name="subject" onChange={this.handleChange} />

        <label htmlFor="content">Email content</label>
        <textarea id="content" name="content" onChange={this.handleChange}>
        </textarea>

        <button type="submit">Send</button>

      </form>
    )
  }
}

export default ContactForm
