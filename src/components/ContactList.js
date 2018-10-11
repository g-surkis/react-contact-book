import React, { Component } from "react";
// import PropTypes from "prop-types";

// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContactSticker from "./ContactSticker";
import Contact from "./Contact";

import PopUp from "./PopUp";
import ContactStickerZone from "./ContactStickerZone";
const update = require("immutability-helper");

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      contacts: []
    };
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    if (this.state.contacts.length === 0) {
      this.setState({ contacts: this.props.contacts });
    }
  }

  onEdit() {
    this.setState({ edit: true });
  }
  moveCard = (dragIndex, hoverIndex) => {
    const cards  = this.state.contacts;
    const dragCard = cards[dragIndex];
// console.log(dragCard);
// console.log(hoverIndex);
    this.setState(
      update(this.state, {
        contacts: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
    // console.log(this.state.contacts);
  };
  render() {
    // console.log(this.state.contacts);

    const contactGrid = (
      <ContactStickerZone contacts={this.props.contacts} {...this.props}>
        {/* <div className="contacts_section"> */}
        {this.props.contacts.map((element, i) => {
          return (
            <PopUp
              trigger={
                <div>
                  {/* <ContactSticker */}
                  <Contact
                    contact={element}
                    contactKey={i}
                    click={this.onEdit}
                    label={"edit"}
                    index={i}
                    moveCard={this.moveCard}
                    handleDrop={i => {
                      console.log(i);
                    }}
                  />
                </div>
              }
              contact={element}
              contactKey={i}
              label={"Save Contact"}
              key={i}
            />
          );
        })}
      </ContactStickerZone>
    );

    const addContactBtn = (
      <button className="animated_btns">Add Contact</button>
    );

    return (
      <div className="contacts_area">
        {contactGrid}

        <div className="btn_add_contact_area">
          <PopUp trigger={addContactBtn} label={"Add Contact"} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}
export default connect(mapStateToProps)(ContactList);
