import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function SearchJob({ params, handleChange, handleSubmit }) {
  return (
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Row className='formRow'>
        <Form.Group as={Col} className='description'>
          <Form.Label></Form.Label>
          <Form.Control
            className='inputForm'
            name='description'
            value={params.description}
            type='text'
            placeholder='Filter by title, companies, expertise...'
          />
        </Form.Group>
        <div className='inputDivider'></div>
        <Form.Group as={Col} className='location'>
          <Form.Label></Form.Label>

          <Form.Control
            className='inputForm'
            name='location'
            value={params.location}
            type='text'
            placeholder='Filter by location...'
          />
        </Form.Group>
        <div className='inputDivider'></div>
        <Form.Group>
          <Form.Check
            onChange={handleChange}
            className='check'
            value={params.full_time}
            name='full_time'
            label='Full Time Only'
            id='full-time'
            type='checkbox'
          />
        </Form.Group>
        <div className='formButton'>
          <Button type='submit' className='button'>
            Search
          </Button>
        </div>
      </Form.Row>
    </Form>
  );
}
