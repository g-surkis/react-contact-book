import React, { Component } from "react";
import PropTypes from "prop-types";
import { addContactToLocStorage } from "../services/contacts";
import { validateObj, updateContactsInLocStorage } from "../services/contacts";

import { connect } from "react-redux";
import {
  editContactAction,
  updateStoreAfterAddingContact
} from "../actions/actions";

import avatar from "../static/avatar.jpg";

class CreateEditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
      birthDate: null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  componentDidMount() {
    if (this.props.label === "Save Contact") {
      let contact = this.props.contact;
      this.setState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        tel: contact.phone,
        email: contact.email,
        birthDate: contact.birthday
      });
    }
  }
  onInputChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  onSubmit() {
    let obj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.tel,
      email: this.state.email,
      birthday: this.state.birthDate
    };

    if (validateObj(obj)) {
      if (this.props.label === "Save Contact") {
        let contacts = this.props.contacts;
        let newContacts = [...contacts];
        newContacts[this.props.contactKey] = obj;
        this.props.editContacts(newContacts);
        updateContactsInLocStorage(newContacts);
      } else {
        addContactToLocStorage(obj);
        this.props.addContact(obj);
      }
    } else {
     console.log('Enter correct data');
    }
  }

  
  componentWillUnmount() {
    this.onSubmit();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p className="form_row">
            <label className="form_label">
              {" "}
              First Name{" "}
              <input
                className="form_input"
                type="text"
                name="firstName"
                defaultValue={
                  this.props.contact !== undefined
                    ? this.props.contact.firstName
                    : ""
                }
                onChange={this.onInputChange}
              />
            </label>
          </p>
          <p className="form_row">
            <label className="form_label">
              {" "}
              Last Name{" "}
              <input
                className="form_input"
                type="text"
                name="lastName"
                defaultValue={
                  this.props.contact !== undefined
                    ? this.props.contact.lastName
                    : ""
                }
                onChange={this.onInputChange}
              />
            </label>
          </p>
          <p className="form_row">
            <label className="form_label">
              {" "}
              Phone Number{" "}
              <input
                className="form_input"
                type="tel"
                name="tel"
                pattern="[+][0-9]{12}"
                defaultValue={
                  this.props.contact !== undefined
                    ? this.props.contact.phone
                    : ""
                }
                onChange={this.onInputChange}
              />
            </label>
          </p>
          <p className="form_row">
            <label className="form_label">
              {" "}
              Email Address{" "}
              <input
                className="form_input"
                type="email"
                name="email"
                defaultValue={
                  this.props.contact !== undefined
                    ? this.props.contact.email
                    : ""
                }
                onChange={this.onInputChange}
              />
            </label>
          </p>
          <p className="form_row">
            <label className="form_label">
              {" "}
              Date of birth{" "}
              <input
                className="form_input"
                type="date"
                name="birthDate"
                defaultValue={
                  this.props.contact !== undefined
                    ? this.props.contact.birthday
                    : ""
                }
                onChange={this.onInputChange}
              />
            </label>
          </p>
        </form>
        <div className="form_img">
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="btn_area">{this.props.button}</div>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      contacts: state.contactsReducer
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addContact: obj => {
        dispatch(updateStoreAfterAddingContact(obj));
      },
      editContacts: obj => {
        dispatch(editContactAction(obj));
      }
    };
  }
)(CreateEditContact);

CreateEditContact.propTypes = {
  addContact: PropTypes.func,
  button: PropTypes.object,
  contact: PropTypes.object,
  contactKey: PropTypes.number,
  editContacts: PropTypes.func,
  label: PropTypes.string,
  trigger: PropTypes.object
};
