import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newBook = {
      id: Date.now(),  
      name: bookName,
      price: bookPrice,
      category: bookCategory,
      status: 'unread', 
    };

    dispatch(addBook(newBook));
    navigate('/'); 
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add New Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <TextField
          label="Price"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={bookPrice}
          onChange={(e) => setBookPrice(e.target.value)}
          required
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Add Book
        </Button>
      </form>
    </Container>
  );
};

export default AddBook;
