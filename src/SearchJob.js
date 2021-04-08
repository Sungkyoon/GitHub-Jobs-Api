import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function SearchJob({ params, handleChange, handleSubmit }) {
  return (
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            name='description'
            value={params.description}
            type='text'
            // onChange={handleChange}
            placeholder='Filter by title, companies, expertise...'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            name='location'
            value={params.location}
            type='text'
            // onChange={handleChange}
            placeholder='Filter by location...'
          />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          onChange={handleChange}
          value='Full Time'
          name='type'
          label='Full Time Only'
          id='full-time'
          type='checkbox'
        />
      </Form.Group>
      <Button type='submit'>Search</Button>
    </Form>
  );
}
