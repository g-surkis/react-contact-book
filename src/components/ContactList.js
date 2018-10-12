import React, { Component } from "react";
import PropTypes from "prop-types";
import { dropAction } from "../actions/actions";
import { connect } from "react-redux";
import ContactSticker from "./ContactSticker";

import PopUp from "./PopUp";

import { handleMoveCard } from "../services/contacts";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      contacts: [],
      itemDragged: null
    };
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    if (this.state.contacts.length === 0) {
      this.setState({ contacts: this.props.contacts });
    }
  }
  //for adding new contact just right after closed adding popup
  static getDerivedStateFromProps(props, state) {
    return {
      contacts: props.contacts
    };
  }
  onEdit() {
    this.setState({ edit: true });
  }
  itemDragged = el => {
    this.setState({
      itemDragged: el
    });
    return el;
  };
  moveCard = hoverIndex => {
    return handleMoveCard(
      this.state.contacts,
      this.state.itemDragged,
      hoverIndex,
      this.props.dropContact
    );
  };

  render() {
    const contactGrid = (
      <div>
        {this.state.contacts.map((element, i) => {
          return (
            <PopUp
              trigger={
                <div>
                  <ContactSticker
                    contact={element}
                    contactKey={i}
                    click={this.onEdit}
                    label={"edit"}
                    index={i}
                    moveCard={this.moveCard}
                    itemDragged={this.itemDragged}
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
      </div>
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
    contacts: state.contactsReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dropContact: obj => {
      dispatch(dropAction(obj));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array,
  dropContacts: PropTypes.func
};
