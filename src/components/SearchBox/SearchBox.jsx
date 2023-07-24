import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/img/search.svg';
import './searchBox.css';

const SearchBox = () => {
    const navigate = useNavigate();
    const { keyword: urlKeyword } = useParams();

    const [keyword, setKeyword] = useState(urlKeyword || '');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/search/${keyword.trim()}`);
            setKeyword('');
        } else {
            navigate('/');
        }
    };

    return (
        <Form onSubmit={submitHandler} className='d-flex p-2 search'>
          <InputGroup className="input-group">
            <InputGroup.Text className="input-group-text">
              <img src={search} alt='search'/>
            </InputGroup.Text>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              placeholder='Search'
              className='search-input'
            />
          </InputGroup>
            <Button type='submit' className='search-button'>
                Search
            </Button>
        </Form>
    );
};

export default SearchBox;
