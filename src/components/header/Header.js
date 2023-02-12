import React from 'react'
// Header component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      
    } = this.props.data
    const {
      styles,
    } = this.props
    return (
      <header style={styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

export default Header