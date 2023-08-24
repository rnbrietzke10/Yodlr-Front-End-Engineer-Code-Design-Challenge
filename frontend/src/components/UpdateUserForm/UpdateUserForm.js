import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';
import Api from '../../ApiHelper';

const UpdateUserForm = props => {
  const navigate = useNavigate();
  const { user } = props;

  const [itemData, setItemData] = useState(user);
  const handleChange = e => {
    const { name, value } = e.target;
    setItemData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allDataEntered =
      itemData.firstName && itemData.lastName && itemData.email;
    if (!allDataEntered) {
      alert('Please enter all information');
    }
    async function updateData() {
      const updatedInfo = {
        id: user.id,
        firstName: itemData.firstName,
        lastName: itemData.lastName,
        email: itemData.email,
        status: user.status,
      };

      const res = await Api.update(updatedInfo, itemData.id);
      console.log(res);
    }
    updateData();
    navigate('/admin');
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Update User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className='d-flex flex-column'>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              class='form-control'
              name='email'
              id='email'
              value={itemData.email}
              onChange={handleChange}
            />
          </div>
          <div class='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              class='form-control'
              id='firstName'
              name='firstName'
              value={itemData.firstName}
              onChange={handleChange}
            />
          </div>
          <div class='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              class='form-control'
              id='lastName'
              name='lastName'
              value={itemData.lastName}
              onChange={handleChange}
            />
          </div>
          <button type='submit' class='btn btn-primary align-self-end'>
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateUserForm;
