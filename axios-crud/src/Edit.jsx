import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const {post} = useParams();

  useEffect(()=>{
    fetch("http://localhost:3000/data/" + post).then((res)=>{
    return res.json();
  })
    .then((response)=>{
      setId(response.id);
      setName(response.name);
      setUserName(response.username);
      setEmail(response.email);
      setAddress(response.address);
      setCity(response.city);
      setZipCode(response.zipcode);
      setPhone(response.phone);
      setWebsite(response.website);
      setCompany(response.company);
      setDescription(response.catchPhrase);
      setBusiness(response.bs);
    }).catch((error)=>{
      console.log(error.message);
    })
  },[])


  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [zipcode,setZipCode] = useState("");
  const [phone,setPhone] = useState("");
  const [website,setWebsite] = useState("");
  const [company,setCompany] = useState("");
  const [catchPhrase,setDescription] = useState("");
  const [bs,setBusiness] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const dataset = {id,name,username,email,address,city,zipcode,phone,website,company,catchPhrase,bs}
    
    fetch("http://localhost:3000/data/"+ post,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(dataset)
    }).then((res)=>{
      console.log(res);
      alert("Saved Successfully!!!")
      navigate('/');
    }).catch((error)=>{
      console.log(error.message);
    })
  }
  
  return (
    <div>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col">
            <div className="card bg-secondary">
              <div className="card-title text-center pt-3">
                <h1>
                  Edit your details
                </h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>ID</label>
                    <input value={id} disabled='disabled' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} className='form-control'/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">UserName</label>
                    <input value={username} onChange={e=>setUserName(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} className='form-control' type="email" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Address</label>
                    <input value={address} onChange={e=>setAddress(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">City</label>
                    <input value={city} onChange={e=>setCity(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">ZipCode</label>
                    <input value={zipcode} onChange={e=>setZipCode(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Website</label>
                    <input value={website} onChange={e=>setWebsite(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Company</label>
                    <input value={company} onChange={e=>setCompany(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input value={catchPhrase} onChange={e=>setDescription(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Business Service</label>
                    <input value={bs} onChange={e=>setBusiness(e.target.value)} className='form-control' type="text" name="" id="" />
                  </div>

                  <div className="col">
                    <div className="form-group mt-4 float-right">
                      <button type='submit' className='btn btn-primary btn-lg mr-3 pl-lg-5 pr-lg-5'>Save</button>
                      <Link to='/' className='btn btn-success btn-lg pl-lg-5 pr-lg-5'>Back</Link>
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div> 
  )
}

export default Edit