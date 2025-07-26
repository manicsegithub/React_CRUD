import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home(){
    //useState 2
    const [data, setData] = useState([]);

    //useEffect 1
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    //Delete the Element
    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+ id)
        .then(res => {
            alert("Confirm Delete");
            location.reload();
        })
        .catch(err => console.log(err))
    }
    return(<>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       <div className='w-50 bg-white rounded p-3'>
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">Student List</h2>
            <Link to="/Create" className="btn btn-success">Create +</Link>
         </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((users, index) => { //users is table name 
                    return <tr key = {index}>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email_id}</td>
                        <td>{users.phone_number}</td>
                        <td>
                            <Link to = {`/read/${users.id}`} className='btn btn-sm btn-info'>Read</Link>
                            <Link to = {`/update/${users.id}`} className='btn btn-sm btn-primary mx-2'>Update</Link>
                            <button onClick = {() => handleDelete(users.id)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
       </div>
    </div>
    </>)
}

export default Home;