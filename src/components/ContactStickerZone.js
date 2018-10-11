import React, { Component } from "react";

class ContactStickerZone extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }
  componentDidMount() {
    this.setState({ contacts: this.props.contacts });
  }
  static getDerivedStateFromProps(state, props) {
    //   console.log(state);
    // console.log(props.contacts !== state.contacts);
    if (props.contacts !== state.contacts) {
      return { contacts: props.contacts };
    }
    return null;
  }
 
  render() {
    // console.log(this.props);
    // console.log(this.state);
    return <div className="contacts_section">{this.props.children}</div>;
  }
}

export default ContactStickerZone;
