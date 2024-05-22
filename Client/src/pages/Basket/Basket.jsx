import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'
import { dataContext } from '../../context/context';
const Basket = () => {
    const{basket,deleteToBasket,increaseBasket,decreaseBasket} =useContext(dataContext)

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
                            <TableCell>Decrease</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell>Increase</TableCell>
                            <TableCell>TotalPrice</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket && basket.map((item, idx) => {
                            return (<TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {idx}
                                </TableCell>
                                <TableCell>{item.colo.name}</TableCell>
                                <TableCell>{item.colo.price}</TableCell>
                                <TableCell>
                                    <img width={60} height={60} src={item.colo.imgSrc} alt="" />
                                </TableCell>
                                <TableCell>
                                    <Button disabled={item.count == 1} onClick={()=>{
                                       decreaseBasket(item) 
                                    }} color='warning'>
                                        -
                                    </Button>
                                </TableCell>
                                <TableCell>{item.count}</TableCell>
                                <TableCell>
                                    <Button onClick={()=>{
                                       increaseBasket(item) 
                                    }} color='primary'>
                                        +
                                    </Button>
                                </TableCell>
                                <TableCell>{item.totalPrice}</TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        deleteToBasket(item)
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

export default Basket