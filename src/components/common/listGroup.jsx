import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      items,
      textProperty,
      valueProperty,
      onItemSelect,
      selectedItem
    } = this.props;
    return (
      <div className="list-group">
        {items.map(item => {
          return (
            <a
              href="#"
              key={
                item[valueProperty] ? item[valueProperty] : item[textProperty]
              }
              className={
                item[textProperty] === selectedItem
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              onClick={() => onItemSelect(item)}
            >
              {item[textProperty]}
            </a>
          );
        })}
      </div>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
