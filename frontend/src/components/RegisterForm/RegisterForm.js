import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../../ApiHelper';

const RegisterForm = () => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const [userData, setUserData] = useState(INITIAL_STATE);
  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userData);
    const allDataEntered =
      userData.firstName && userData.lastName && userData.email;
    if (allDataEntered) {
      async function registerUser() {
        const res = await Api.register(userData);
        console.log(res);
        navigate('/');
      }
      registerUser();
    } else {
      alert('Please enter all data');
    }
  };
  return (
    <div className='d-flex flex-column align-items-center  m-5 '>
      <h3 className='align-self-start'>Resgister:</h3>
      <Form onSubmit={handleSubmit} className='w-75 mt-3'>
        <Form.Group className='mb-3' controlId='firstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='firstName'
            value={userData.itemName}
            onChange={handleChange}
            type='text'
            placeholder='First Name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='lastName'
            value={userData.itemName}
            onChange={handleChange}
            type='text'
            placeholder='Last Name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            name='email'
            value={userData.itemName}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
