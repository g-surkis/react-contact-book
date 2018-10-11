import React, { Component } from "react";

const ContactSticker = props => {
  // console.log(props);

  return (
    <figure className="contact_item" onClick={props.click}>
      <h4>
        {props.contact.firstName} {props.contact.lastName}
      </h4>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
    </figure>
  );
};

export default ContactSticker;
