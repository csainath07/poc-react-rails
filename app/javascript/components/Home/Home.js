import React from "react"
import PropTypes from "prop-types"

import './style.css'

class Home extends React.Component {
  render () {
    return (
      <h2 className="message">
        {this.props.message}
      </h2>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string
};
export default Home
