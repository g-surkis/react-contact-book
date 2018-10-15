import React, { Component } from "react";
import PropTypes from "prop-types";

import { DragSource, DropTarget } from "react-dnd";
import flow from "lodash/flow";

const cardSource = {

  beginDrag(props, monitor, component) {
    props.itemDragged(props.contact);
    return props.contact;
  }
};

const cardTarget = { 
 
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }
    props.moveCard(hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};


class ContactSticker extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(!this.props.isDragging && nextProps.isOver);
    if (!this.props.isDragging && nextProps.isOver ) {

      const dragElement = document.getElementById("card" + this.props.index);
      console.log(dragElement);
       dragElement.style.opacity = 1;
    }
  }

  compo

  render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      isOver
    } = this.props;
    const opacity = (isDragging || isOver)  ? 0 : 1 ;


    return connectDragSource(
      connectDropTarget( 
        <figure
          className="contact_item"
          id = {"card" + this.props.index}
          onClick={this.props.click}
          style={{
            opacity
          }}
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
  DropTarget("card", cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true })
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
