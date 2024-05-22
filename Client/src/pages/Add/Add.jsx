import React, { useContext } from 'react'
import { dataContext, useDataContext } from '../../context/context'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './add.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material'


const Add = () => {
    const { coloData, deleteData, postData } = useContext(dataContext)
    console.log('d:',coloData)
    const formik = useFormik({
        initialValues: {
            name: '',
            price: "",
            imgSrc: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            imgSrc: Yup.string().url("url olmalidir").required("Required"),
            price: Yup.number().min(0).required("Required")
        }),
        onSubmit: (value) => {
            postData(value)
            formik.resetForm()
        }
    })

    return (
        <>
            <div className="form-div">
                <form onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: 'red' }}>{formik.errors.name}</div>
                    ) : null}
                    <input
                        type="text"
                        name="imgSrc"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imgSrc}
                    />
                    {formik.touched.imgSrc && formik.errors.imgSrc ? (
                        <div style={{ color: 'red' }}>{formik.errors.imgSrc}</div>
                    ) : null}
                    <input
                        type="number"
                        name="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div style={{ color: 'red' }}>{formik.errors.price}</div>
                    ) : null}

                    <button className='btn btn-success' type="submit">
                        Submit
                    </button>
                </form>
            </div>
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
                            {coloData && coloData.map((item, idx) => {
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
                                            deleteData(item._id)
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

export default Add