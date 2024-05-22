import React, { useContext } from 'react'
import { dataContext } from '../../context/context'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'

const Wishlist = () => {
    const{wishlist,deleteToWishlist} =useContext(dataContext)
  return (
    <>
     <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {wishlist && wishlist.map((item, idx) => {
                            return (<TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {idx}
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <img width={60} height={60} src={item.imgSrc} alt="" />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        deleteToWishlist(item)
                                    }} color='error'>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>)
                        }

                        )}
                    </TableBody>
                </Table>
            </TableContainer>
    </>
  )
}

export default Wishlist