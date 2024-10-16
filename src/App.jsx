




// import React from 'react'
// import { useState, useEffect } from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Cart from './Component/Cart/Cart'
// import View from './Component/View/View';
// import getRec from './helper'
// import './App.css'
// import EditData from './Component/EditData/EditData';

// function App() {

//   const [formInput, setFormInput] = useState({
//     id: '',  
//     fname: '',
//     lname: '',
//     email: '',
//     address: '',
//     birth: '',
//     age: '',
//     course: ''
// });
// const [storage, setStorage] = useState(getRec());

// const navigator = useNavigate();
// const handleForm = (e) => {
//   let name = e.target.name;
//   let value = e.target.value;
//   setFormInput({ ...formInput, [name]: value });
// };

// const handleEditData = (data) => {
//   // setFormInput(data);  // Set the form input with the selected record's data
//   navigator('/edit', { state: data });
// };

// const handleSave = (saveRec) =>{

//   setStorage(saveRec);
//   navigator('/view')
// }

// const handleDelete = (id) => {
//   const updatedStorage = storage.filter((rec) => rec.id !== id);
//   setStorage(updatedStorage);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (formInput.id) {
  
//       const updatedStorage = storage.map((rec) => {
//           if (rec.id === formInput.id) {
//               return { ...formInput }; 
//           } else {
//               return rec;
//           }
//       });
//       setStorage(updatedStorage);
//   } else {
  
//       const newFormInput = { ...formInput, id: Math.floor(Math.random() * 10000) };
//       setStorage([...storage, newFormInput]);
//   }
//   alert('Form Submitted');
//   setFormInput({
//       id: '', 
//       fname: '',
//       lname: '',
//       email: '',
//       address: '',
//       birth: '',
//       age: '',
//       course: ''
//   });

//   navigator('/view');
// };
 
//   useEffect(() => {
//       localStorage.setItem('storageData', JSON.stringify(storage));
//   }, [storage]);


//   return (
//     <>
//     <Routes>
//         <Route path="/" element={<Cart formInput={formInput} handleForm={handleForm} handleSubmit={handleSubmit}/>} />   
//         <Route path="/view" element={<View storage={storage}  handleEdit={handleEditData} handleDelete={handleDelete}/>} />  
//         <Route path="/edit" element={<EditData storage={storage} handleSave={handleSave}/>} />
//         <Route path="/*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </>
//   )
// }

// export default App




import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './Component/Cart/Cart';
import View from './Component/View/View';
import getRec from './helper';
import './App.css';
import EditData from './Component/EditData/EditData';

function App() {
  const [formInput, setFormInput] = useState({
    id: '',  
    fname: '',
    lname: '',
    email: '',
    address: '',
    birth: '',
    age: '',
    course: ''
  });

  const [storage, setStorage] = useState(getRec());
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [filteredData, setFilteredData] = useState(storage); // New state for filtered data

  const navigator = useNavigate();

  // Handle form changes
  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormInput({ ...formInput, [name]: value });
  };

  // Handle edit data
  const handleEditData = (data) => {
    navigator('/edit', { state: data });
  };

  // Handle save data
  const handleSave = (saveRec) => {
    setStorage(saveRec);
    navigator('/view');
  };

  // Handle delete data
  const handleDelete = (id) => {
    const updatedStorage = storage.filter((rec) => rec.id !== id);
    setStorage(updatedStorage);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formInput.id) {
      const updatedStorage = storage.map((rec) => {
        if (rec.id === formInput.id) {
          return { ...formInput };
        } else {
          return rec;
        }
      });
      setStorage(updatedStorage);
    } else {
      const newFormInput = { ...formInput, id: Math.floor(Math.random() * 10000) };
      setStorage([...storage, newFormInput]);
    }

    alert('Form Submitted');
    setFormInput({
      id: '', 
      fname: '',
      lname: '',
      email: '',
      address: '',
      birth: '',
      age: '',
      course: ''
    });

    navigator('/view');
  };

  // Sync storage with localStorage
  useEffect(() => {
    localStorage.setItem('storageData', JSON.stringify(storage));
    // Update filtered data based on the current search query
    setFilteredData(
      storage.filter((data) => 
        data.fname.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [storage, searchQuery]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Cart formInput={formInput} handleForm={handleForm} handleSubmit={handleSubmit}/>} />
        
        {/* Pass search query, filteredData, and other props to View */}
        <Route path="/view" element={
          <View 
            storage={filteredData}  // Only pass filtered data here
            handleEdit={handleEditData} 
            handleDelete={handleDelete}
            searchQuery={searchQuery}  // Pass search query
            setSearchQuery={setSearchQuery}  // Function to update search query
          />
        }/>
        
        <Route path="/edit" element={<EditData storage={storage} handleSave={handleSave} />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
