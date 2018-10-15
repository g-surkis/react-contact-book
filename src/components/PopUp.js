import React from "react";
import Popup from "reactjs-popup";
import CreateEditContact from "./CreateEditContact";

export default props => (
  <Popup trigger={props.trigger} position="right center" modal>
    {close => (
      <div className="modal">
        <CreateEditContact
          button={
            <button
              type="sabmit"
              className="animated_btns"
              onClick={() => {
                close();
              }}
            >
              {props.label}
            </button>
          }
          contact={props.contact}
          contactKey={props.contactKey}
          {...props}
        />
      </div>
    )}
  </Popup>
);
