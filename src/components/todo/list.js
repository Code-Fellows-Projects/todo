import React from 'react';
import '../../App.scss';
import ListGroup from 'react-bootstrap/ListGroup';


function TodoList(props) {

  return (
    <>
      <ListGroup >
        {props.list.map(item => (
          <ListGroup.Item className="list-groups"
            action variant={item.complete ? 'success' : 'danger'}
            data-testid="listItem"
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}


export default TodoList;