import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div>
      <Form inline>
        <Row>
          <Col xs='auto'>
            <Form.Control
              type='text'
              onChange={onChangeHandler}
              placeholder={placeholder}
              className=' mr-sm-2'
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
