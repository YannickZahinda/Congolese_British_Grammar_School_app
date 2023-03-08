import React from 'react';

const ListGroup = (props) => {
  const {items, onItemSelect, selectedItem} = props;
  return (
    <ul className="list-group">
      {items.map(item => 
      <li className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        onClick={() => onItemSelect(item)}>
        {item}
      </li>  
        )}
    </ul>
  );
}
 
export default ListGroup;