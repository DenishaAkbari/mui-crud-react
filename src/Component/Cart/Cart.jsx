import React from 'react'
import { Container } from 'react-bootstrap';
import './Cart.css'



function Cart({formInput, handleForm, handleSubmit}) {
    
    
    
    return (
        <>
           <Container>
                <h1 className='text-center fw-bold mb-5 mt-5'> Student Registration Form</h1>
                <div className="box">
                    
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" className="form-control p-3" name='fname' id="fname" placeholder="First Name" value={formInput.fname} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control p-3" name='lname' id="lname" placeholder="Last Name" value={formInput.lname} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control p-3" name='email' id="email" placeholder="Email" value={formInput.email} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control p-3" name='address' id="address" placeholder="1234 Main St" value={formInput.address} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="birth" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control p-3" name='birth' id="birth" value={formInput.birth} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control p-3" name='age' id="age" placeholder="Age" value={formInput.age} onChange={handleForm} required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="course" className="form-label">Course</label>
                        <input type="text" className="form-control p-3" name='course' id="course" placeholder="Course" value={formInput.course} onChange={handleForm} required/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary px-5 py-3 mt-5">
                            {formInput.id ? "Update" : "Register"}
                        </button>
                    </div>
                </form>
                </div>
           </Container>
        </>
    )

}

export default Cart
