import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/users/${id}`);
        setUser(result.data);
    }

  return (

    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 shadow ">
                <h2 className="mb-4">View User</h2>

                <div className="card">
                    <div className="card-header">
                        Details of user : {user.name}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name : {user.name}</li>
                        <li className="list-group-item">User Name : {user.username} </li>
                        <li className="list-group-item">Email :  {user.email} </li>
                    </ul>
                    </div>
                </div>
                <Link className="btn btn-primary mt-3" to ={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  );
}
