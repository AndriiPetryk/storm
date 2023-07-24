import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Status from '../Status/Status';

const ProductTable = ({ product, onProductClick }) => {

  return (
    <Row
      onClick={() => onProductClick(product.id)}
      key={product.id}
      className='product-content product-container-border'>
      <Col className='product-details d-none d-sm-flex align-content-center product-id'>
        {product.id}
      </Col>
      <Col className='product-details d-none d-sm-flex align-content-center product-status'>
        <Status status={product.status} />
      </Col>
      <Col className='product-details d-none d-sm-flex align-content-center product-qt product-qt-content'>
        {product.quantity}
      </Col>
      <Col className="product-details product-nsq d-sm-flex product-name">
        <div>{product.product}</div>
        <div className='product-serial'>
          {product.serial}
          <span className='d-inline d-sm-none'>- Qty: {product.quantity}</span>
        </div>
      </Col>
      <Col className='product-details d-none d-sm-flex product-container-border-left align-content-center'>
        {`$${product.total}`}
      </Col>
    </Row>
  );
};

export default ProductTable;
