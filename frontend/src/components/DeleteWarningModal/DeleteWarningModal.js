import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Api from '../../ApiHelper';

const DeleteWarningModal = props => {
  const { user } = props;

  const handleDelete = async () => {
    await Api.delete(user.id);
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body className='text-center'>
          Are you sure you want to delete {`${user.firstName} ${user.lastName}`}
          ?
        </Modal.Body>
        <div className='d-flex justify-content-center mb-3'>
          <Button onClick={props.onHide}>Cancel</Button>
          <Button variant='danger' className='ms-2' onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteWarningModal;
