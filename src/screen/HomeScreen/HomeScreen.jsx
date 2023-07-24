import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductTable from '../../components/ProductTable/ProductTable';
import ProductScreen from '../ProductScreen/ProductScreen';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import down from '../../assets/img/down.svg';

const HomeScreen = () => {
  const { keyword } = useParams();
  const [isModalVisible, setModalVisibility] = useState(false);
  const [productId, setProductId] = useState(0);

  const { data: products, isLoading, error } = useGetProductsQuery({ keyword });

  const productsCount = products?.length;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (<Message variant='danger'>
      {error?.data?.message || error.error}
    </Message>);
  }

  if (products?.length === 0) {
    return <h2 className="text-center">No Data</h2>
  }

  const onProductClick = (id) => {
    setModalVisibility(true);
    setProductId(id);
  };

  return (
    <>
      <div className='d-flex products-text-wrapper'>
        <span className='products-text'>Products</span>
        <span className='products-count'>{`${productsCount} of ${productsCount} results`}</span>
      </div>
      <Container className="product-cnt">
        <Row className="product-container product-container-border product-container-border-top">
          <Col className='d-none d-sm-flex product-id'>ID</Col>
          <Col className='d-none d-sm-flex product-status'>Status</Col>
          <Col className='d-none d-sm-flex product-qt'>Quantity</Col>
          <Col className="product-name product-name-header">Product Name</Col>
          <Col className='d-none d-sm-flex product-price'>
            Prices
            <img src={down} alt='down' className="sort-by-prices"/>
          </Col>
        </Row>
          {products?.map((product) => (
            <ProductTable product={product} onProductClick={onProductClick} key={product.id}/>
          ))}
        {isModalVisible && <ProductScreen
          productId={productId}
          isModalVisible={isModalVisible}
          onHide={() => setModalVisibility(false)}
        />}
      </Container>
    </>
  );
};

export default HomeScreen;
