import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update(){
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8081/read/"+id)
        .then(res => {
            console.log(res)
            setValues({...values, name: res.data[0].name, 
                email_id: res.data[0].email_id,
                phone_number: res.data[0].phone_number})
        })
        .catch(err => console.log(err))
    },[])

    const [values, setValues] = useState({
        name : '',
        email_id : '',
        phone_number : ''
    });

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8081/update/"+ id, values)
        .then(res => {
            console.log(res);
            alert("Updated");
            navigate('/');
        }).catch(err => console.log(err));
    }

    return<>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleUpdate}>
                <h2>Update Student</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control" value={values.name}
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">E-Mail</label>
                    <input type="email" placeholder="Enter Email" className="form-control" value={values.email_id}
                    onChange={e => setValues({...values, email_id: e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Phone_Number</label>
                    <input type="text" placeholder="Enter Phone Number"className="form-control" value={values.phone_number}
                    onChange={e => setValues({...values, phone_number: e.target.value})}/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
      </div>
    </>
}

export default Update;