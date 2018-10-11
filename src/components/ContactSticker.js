import React, { Component } from "react";
import PropTypes from "prop-types";


import { DragSource } from "react-dnd";
// import  ItemTypes  from "./Constants";

const cardSource = {
  beginDrag(props) {
    return props.contact;
  },
  endDrag(props, monitor, component){
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      return;
    }
// return props.handleDrop(props.contactKey)
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),

    isDragging: monitor.isDragging()
  };
}
const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};
class ContactSticker extends Component {
  constructor(props){
    super(props)
  }
  render() {
    // console.log(this.props);
    const { isDragging, connectDragSource, contact } = this.props;
const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <figure className="contact_item" onClick={this.props.click} style={{opacity}}>
        <h4>
          {this.props.contact.firstName} {this.props.contact.lastName}
        </h4>
        <p>{this.props.contact.phone}</p>
        <p>{this.props.contact.email}</p>
      </figure>
     

    );
  }
}

export default DragSource('card', cardSource, collect)(ContactSticker)