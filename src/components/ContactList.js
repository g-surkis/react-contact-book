import React, { Component } from "react";
import PropTypes from "prop-types";

// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ContactSticker from "./ContactSticker";
import PopUp from "./PopUp";

import { DragSource } from "react-dnd";
import { ItemTypes } from "./Constants";

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

@DragSource(ItemTypes.ContactList, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    // this.addContactHandler = this.addContactHandler.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }


  static propTypes = {
    text: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };
  componentDidMount() {
    console.log("componentList remounted");
  }

  onEdit() {
    this.setState({ edit: true });
  }

  render() {
    const { isDragging, connectDragSource, text } = this.props;
    console.log(this.props.contacts);
    const contactGrid = (
      <div className="contacts_section">
        {this.props.contacts.map((element, i) => {
          return (
            <PopUp
              trigger={
                <div>
                  <ContactSticker
                    contact={element}
                    key={i}
                    click={this.onEdit}
                    label={"edit"}
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

    return connectDragSource(
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
