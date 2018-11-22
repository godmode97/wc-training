import React from 'react';

const ToDoListItems = ({datasource}) => (
  datasource.length === 0 ? ( <div>No Data...</div>) :
  datasource.map( (item, index) => (
    <li key={index} draggable={true}>
      { item }
    </li>)
  )
);

export default ToDoListItems;
