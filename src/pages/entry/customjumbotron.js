import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from "../../components/login/Login.comp";

const CustomJumbotron = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchange = e =>{
    const {name, value} = e.target

    switch (name){
      case "email":
        setEmail(value);
        break;

        case "password":
        setPassword(value);
        break;

        default:
          break;
    }
    console.log(name, value)
  };

  const handleOnSubmit = e =>{
    e.preventDefault();

    if(!email || !password){
      alert("Please fill all the fields");
    }
  }

  return (
    <Container fluid className="p-5 bg-light">
      <Row>
        <Col className="form-box">
          <LoginForm 
          handleOnChange = {handleOnchange}
          handleOnSubmit = {handleOnSubmit}
          email = {email}
          pass = {password}          
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomJumbotron;
