import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


function Home() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  const LoadEdit =(id)=>{
    navigate("/edit/"+id);
  }
  const Remove =(id)=>{
    if(window.confirm("Do you want to Remove..?")){
      fetch("http://localhost:3000/data/"+id,{
      method:"DELETE"
    }).then((res)=>{
      console.log(res);
      alert("Removed Successfully!!!")
      window.location.reload();
    }).catch((error)=>{
      console.log(error.message);
    })
    }
  }

  axios.get("http://localhost:3000/data").then((response)=>{
    setPost(response.data);
  }).catch((error)=>{
    console.log(error.message);
  })
  return (
    <>
          <div className="container-fluid">
            <div className='row' >
              <div className="col-sm-12 text-sm-center">
                <div className="title font-weight-bold mt-3">
                  <h1>ENTREPRENEURS DETAIL</h1>
                  <h5>If you are an entrepreneur you can enter your details here or else if you need any service you can get the details from here and contact them directly</h5>
                </div>
                <div>
                  <Link to='/create' className='btn btn-primary btn-lg mb-3 mt-3 pl-5 pr-5 '> Add Data </Link>
                </div>
                <table className='table table-bordered'>
                  <thead className='bg-dark text-white text-center'>
                    <tr>
                      <th>
                        Id
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        UserName
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Address
                      </th>
                      <th>
                        City
                      </th>
                      <th>
                        ZipCode
                      </th>
                      <th>
                        Phone
                      </th>
                      <th>
                        Website
                      </th>
                      <th>
                        Company
                      </th>
                      <th>
                        Description
                      </th>
                      <th>
                        Business Service
                      </th>
                      <th>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>             
                    { 
                      post.map((item,index)=>( 
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.city}</td>
                          <td>{item.zipcode}</td>
                          <td>{item.phone}</td>
                          <td>{item.website}</td>
                          <td>{item.company}</td>
                          <td>{item.catchPhrase}</td>
                          <td>{item.bs}</td>
                          
                          <td>
                            <button onClick={()=>{LoadEdit(item.id)}} className='btn btn-info m-2'>Edit</button>
                            <button onClick={()=>{Remove(item.id)}} className='btn btn-danger m-2'>Remove</button>
                          </td>
                        </tr>

                      ))
                    }
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>  
        
    </>
  )
}

export default Home