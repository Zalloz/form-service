import React from 'react'
import UpperForm from './UpperForm.jsx'
import LowerForm from './LowerForm.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: this.props.agents,
    }
  }

  render() {
    return (
      <div className="formOuterContainer">
        <div className="formInnerContainer">
          <header className="formHeaderContainer">
            CONTACT AGENT
          </header>
          <UpperForm />
          <LowerForm agents={this.state.agents} />
        </div>
      </div>
    )
  }
}

export default Index
