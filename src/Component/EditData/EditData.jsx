import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';
import '../Cart/Cart.css';

function EditData({ storage, handleSave}) { 

  const location = useLocation();
  const navigate = useNavigate(); 
  const [editData, setEditData] = useState(location.state);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditData = (e) => {
    e.preventDefault();

    const updatedStorage = storage.map((rec) => {
      if (rec.id === editData.id) {
        return { ...editData }; 
      }
      return rec;
    });

    console.log("updatedData :",updatedStorage);

    handleSave(updatedStorage);

  };
 


  return (
            <>
                <Container>
                    <h1 className='text-center fw-bold mb-5'>Edit Data</h1>
                    <div className="box">

    
                    <form className="row g-3" onSubmit={handleEditData}>
                        <div className="col-md-14">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control p-3" name='fname' id="fname" placeholder="First Name" value={editData.fname} onChange={handleForm} />
                        </div>
                        <div className="col-md-14">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text" className="form-control p-3" name='lname' id="lname" placeholder="Last Name" value={editData.lname} onChange={handleForm} />
                        </div>
                        <div className="col-md-14">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control p-3" name='email' id="email" placeholder="Email" value={editData.email} onChange={handleForm} />
                        </div>
                        <div className="col-md-14">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control p-3" name='address' id="address" placeholder="1234 Main St" value={editData.address} onChange={handleForm} required/>
                         </div>
                         <div className="col-md-4">
                        <label htmlFor="birth" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control p-3" name='birth' id="birth" value={editData.birth} onChange={handleForm} required/>
                         </div>
                        <div className="col-md-4">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control p-3" name='age' id="age" placeholder="Age" value={editData.age} onChange={handleForm} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="course" className="form-label">Course</label>
                            <input type="text" className="form-control p-3" name='course' id="course" placeholder="Course" value={editData.course} onChange={handleForm} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                {editData.id ? "Update" : "Add"}
                            </button>
                        </div>
                    </form>
                    </div>
                </Container>
    
            </>
        );
}

export default EditData;


