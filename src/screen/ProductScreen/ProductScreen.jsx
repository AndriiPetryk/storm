import { Button, Card, Col, ListGroup, Modal, Row, Image } from 'react-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = (props) => {

  const {data: product, isLoading, error} = useGetProductDetailsQuery(props.productId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (<Message variant='danger'>
      {error?.data?.message || error.error}
    </Message>);
  }

  return (
    <>
      <Modal
        show={props.isModalVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {product.product}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.product} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item bsPrefix="list-features" className="">
                  <h3>Key Features</h3>
                </ListGroup.Item>
                <ListGroup.Item>{product.keyFeatures}</ListGroup.Item>
                <ListGroup.Item>
                  {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductScreen;
