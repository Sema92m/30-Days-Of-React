import React from "react";

class Footer extends React.Component {
  render() {
    const {styles}= this.props
    return (
      <footer style={styles}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer