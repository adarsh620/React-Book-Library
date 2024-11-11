import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

const ViewBook = () => {
  const { id } = useParams(); // Getting the book ID from the route parameters
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Book Details</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">{book.name}</Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Category:</strong> {book.category}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Price:</strong> ${book.price}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong>Status:</strong> {book.status === 'read' ? 'Read' : 'Unread'}
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Back to Book List
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ViewBook;
