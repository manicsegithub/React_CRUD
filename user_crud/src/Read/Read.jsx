import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Read(){
    const {id} = useParams();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/Read/"+id)
        .then(res => {
          console.log(res);
          setUsers(res.data[0]);
        })
        .catch(err => console.log(err))
    })
    return<>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <div className="p-2">
            <h2>Student Details</h2>
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
            <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email_id}</td>
                        <td>{users.phone_number}</td>
                        <td>
                            <Link to = '/' className='btn btn-sm btn-primary mx-2'>Back</Link>
                            <Link to = {`/update/${users.id}`} className='btn btn-info'>Update</Link>
                        </td>
            </tbody>
         </table>
          </div>
        </div>
      </div>
    </>
}

export default Read;