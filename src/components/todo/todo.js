import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import TodoForm from './form.js';
import TodoList from './list.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';



function ToDo() {
  const [list, setList] = useState([
    { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  ]);

  const [count, setCounter] = useState();

  useEffect(() => {
    setCounter(list.filter(item => !item.complete).length);
  }, [list]);


  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      setList(list.map(listItem => listItem._id === item._id ? item : listItem));

    }
  };


  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <header>
        <h2>
          <Container>
            <Navbar expand="xl" variant="dark" bg="dark">
              <Navbar.Brand href="#"> To Do List Manager ({count})</Navbar.Brand>
            </Navbar>
          </Container>
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );

}
//}
//}
export default ToDo;