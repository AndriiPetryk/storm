import { Button, Col, ListGroup, Modal, Row, Image } from 'react-bootstrap';
import { useGetProductDetailsQuery } from '../../slices/productsApiSlice';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import closeBtn from '../../assets/img/closeBtn.svg';
import './productScreen.css';

const ProductScreen = (props) => {

  const { data: product, isLoading, error } = useGetProductDetailsQuery(props.productId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (<Message variant='danger'>
      {error?.data?.message || error.error}
    </Message>);
  }

  const keyFeatures = product.keyFeatures.split(',');

  return (
    <>
      <Modal
        show={props.isModalVisible}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header className='modal-header'>
          <Modal.Title id='contained-modal-title-vcenter' className='product-title justify-content-around'>
            {product.product}
          </Modal.Title>
          <img src={closeBtn} alt='closeBtn' className="closeBtn" onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Row>
            <Col md={6} className="modal-img-wrap">
              <Image src={product.image} alt={product.product} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item bsPrefix='list-features' className='featuresTitle'>
                  Key Features
                </ListGroup.Item>
                <ListGroup.Item className='features'>
                  <ul>
                    {keyFeatures.map(feature => {
                      return <li>
                        {feature}
                      </li>;
                    })}
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item className='description'>
                  {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
            <Button onClick={props.onHide} className='close-button'>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductScreen;
