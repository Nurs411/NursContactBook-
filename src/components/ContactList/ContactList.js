import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {props.contacts.map((item, index) => (
        // <ul key={item.id}>
        //   <li>{item.name}</li>
        //   <li>{item.lastName}</li>
        //   <img src={item.photo} alt="photo" className="imgContact" />
        //   <li>
        //     <button onClick={() => props.handleDeleteContact(item.id)}>
        //       Delete
        //     </button>
        //     <button onClick={() => props.handleEditIndex(index)}>Edit</button>
        //   </li>
        // </ul>
        <Card className="m-2" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <Button
            variant="dark"
            onClick={() => props.handleDeleteContact(item.id)}
          >
            Delete
          </Button>
          <Button variant="danger" onClick={() => props.handleEditIndex(index)}>
            Edit
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
