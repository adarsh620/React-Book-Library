import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBook } from '../redux/bookSlice';
import { Container, TextField, Button, Typography } from '@mui/material';

const UpdateBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(id))
  );

  const [name, setName] = useState(book ? book.name : '');
  const [category, setCategory] = useState(book ? book.category : '');
  const [price, setPrice] = useState(book ? book.price : '');

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      id: book.id,
      name,
      category,
      price,
      status: book.status, 
    };

    dispatch(updateBook(updatedBook));
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Update Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Update Book
        </Button>
      </form>
    </Container>
  );
};

export default UpdateBook;
