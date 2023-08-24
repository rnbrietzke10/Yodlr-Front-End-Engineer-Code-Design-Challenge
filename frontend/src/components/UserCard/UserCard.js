import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './UserCard.scss';
import { useState } from 'react';
import Api from '../../ApiHelper';
import UpdateUserForm from '../UpdateUserForm/UpdateUserForm';

const UserCard = ({ user }) => {
  const { state, id } = user;
  const [active, setActive] = useState(state);
  const [modalShow, setModalShow] = useState(false);
  const titleCaseState = state === 'active' ? 'Active' : 'Pending';

  const handleActivate = async () => {
    user.state = 'active';
    const res = await Api.update(user, id);
    console.log(res);
    setActive('active');
  };

  return (
    <>
      <UpdateUserForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
      />

      <Card className='m-2 p-3 card-container'>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ color: '#f20707' }}
          className='delete-icon'
        />
        <Card.Body>
          <p
            className={`text-end ${
              state === 'pending' ? 'text-warning' : 'text-info'
            }`}
          >
            {titleCaseState}
          </p>
          <div>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>Email: {user.email}</p>
          </div>
        </Card.Body>
        <div className='btn-container'>
          <Button
            className='btn'
            variant='primary'
            onClick={() => setModalShow(true)}
          >
            Update
          </Button>
          {active !== 'active' ? (
            <Button className='btn' variant='success' onClick={handleActivate}>
              Activate
            </Button>
          ) : (
            ''
          )}
        </div>
      </Card>
    </>
  );
};

export default UserCard;
