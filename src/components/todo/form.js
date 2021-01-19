import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(item);
    props.handleSubmit(item);
    //const item = {};
    setItem({});
  }

  return (
    <>
      <Form className="todo-form" onSubmit={handleSubmit}>
        <Form.Group>
          <h3>Add To Do Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Item Details" data-testid="todoItem"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            name="assignee"
            placeholder="Assignee Name" data-testid="assignee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          {/* <Form.Label>Difficulty Rating</Form.Label> */}
          <Form.Control
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Group>


        <Button variant="primary" type="submit" data-testid="submit">
          Submit
        </Button>
      </Form>
    </>

  );
};
export default TodoForm;