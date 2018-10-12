import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

import { DragSource, DropTarget } from "react-dnd";
import flow from "lodash/flow";

const cardSource = {
  beginDrag(props) {
    props.itemDragged(props.contact);
    return props.contact;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      return;
    }
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // console.log(hoverBoundingRect);
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    props.moveCard(hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     connectDragPreview: connect.dragPreview(),
//     connectDropTarget: connect.dropTarget(),
//     isDragging: monitor.isDragging()
//   };
// }
const propTypes = {
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};
class ContactSticker extends Component {
 
  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      connectDropTarget(
        <figure
          className="contact_item"
          onClick={this.props.click}
          style={{ opacity }}
        >
          <h4>
            {this.props.contact.firstName} {this.props.contact.lastName}
          </h4>
          <p>{this.props.contact.phone}</p>
          <p>{this.props.contact.email}</p>
        </figure>
      )
    );
  }
}

export default flow(
  DragSource("card", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget("card", cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(ContactSticker);

ContactSticker.propTypes = {
  click: PropTypes.func,
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
  contactKey: PropTypes.number,
  index: PropTypes.number,
  isDragging: PropTypes.bool,
  itemDragged: PropTypes.func,
  label: PropTypes.string,
  moveCard: PropTypes.func
};
