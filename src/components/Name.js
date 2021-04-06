import React from 'react'
import './styles/Name.css'

class FullName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="fullname">
        {this.props.fullname}
      </div>
     );
  }
}


export default FullName;