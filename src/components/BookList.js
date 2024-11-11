import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook, markAsRead, markAsUnread } from '../redux/bookSlice';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,  
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [filter, setFilter] = useState('all');

  const filteredBooks = books.filter((book) => {
    if (filter === 'all') return true;
    return book.status === filter;
  });

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const handleMarkAsUnread = (id) => {
    dispatch(markAsUnread(id));
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Book List
      </Typography>

      
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2, minWidth: 150 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="read">Read</MenuItem>
        <MenuItem value="unread">Unread</MenuItem>
      </Select>

      {filteredBooks.length === 0 ? (
        <Typography>No books available. Please add some books.</Typography>
      ) : (
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {filteredBooks.map((book) => (
              <StyledTableRow key={book.id}>
                <StyledTableCell>{book.name}</StyledTableCell>
                <StyledTableCell>{book.category}</StyledTableCell>
                <StyledTableCell>{book.price}</StyledTableCell>
                <StyledTableCell>{book.status}</StyledTableCell>
                <StyledTableCell>
                  <Link to={`/view-book/${book.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="info" sx={{ mr: 1 }}>
                      View
                    </Button>
                  </Link>
                  <Link to={`/update-book/${book.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="warning" sx={{ mr: 1 }}>
                      Update
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleMarkAsRead(book.id)}
                    disabled={book.status === 'read'}
                    sx={{ mr: 1 }}
                  >
                    Mark as Read
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleMarkAsUnread(book.id)}
                    disabled={book.status === 'unread'}
                    sx={{ mr: 1 }}
                  >
                    Mark as Unread
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default BookList;
