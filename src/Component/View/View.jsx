import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Button } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import './View.css';

function View({ storage = [], handleEdit, handleDelete }) {
  const navigate = useNavigate();

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Edit and Delete Handlers
  const handleEditData = (id) => {
    const updatedRec = storage.find((rec) => rec.id === id);
    handleEdit(updatedRec);
  };

  const handleDeleteData = (id) => {
    handleDelete(id);
  };

  // Back button navigation
  const BackButton = () => {
    navigate('/');
  };

  return (
    <Container>
      <Button onClick={BackButton} className="mb-3 mt-3">Back</Button>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <h1 className="text-center mt-4 mb-4 fw-bold">MUI Data Table</h1>

        {storage.length === 0 ? (
          <div className="text-center">
            <p>No data available to display.</p>
          </div>
        ) : (
          <>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Course</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {storage.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow hover key={row.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.fname}</TableCell>
                      <TableCell align="right">{row.lname}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">
                        <Button variant="warning" className="me-2" onClick={() => handleEditData(row.id)}>
                          Edit
                        </Button>
                        <Button variant="danger" onClick={() => handleDeleteData(row.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={storage.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>
    </Container>
  );
}

export default View;
