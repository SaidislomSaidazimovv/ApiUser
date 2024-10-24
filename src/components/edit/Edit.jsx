// import React, { useState } from 'react'
// import './Edit.scss'
// import { editFromUsers } from "../../context/usersSlice";
// import { useDispatch } from "react-redux";
// import { usersSlice } from '../../context/usersSlice';

// const Edit = () => {
//   const [name, setName] = useState("");
//   const [profession, setProfession] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const dispatch = useDispatch();
//   const user = {
//     id: 1,
//     name,
//     profession,
//     age,
//     gender
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(editFromUsers(user));
//   };

//   return (
//     <div>
//       <form action="">

//       <input type="text" />
//       <input type="text" />
//       <input type="number" />

//       <button onClick={handleSubmit}>Edit</button>
//       </form>
//     </div>
//   )
// }

// export default Edit

import React, { useState } from 'react';
import './Edit.scss';
import { editFromUsers } from '../../context/usersSlice';
import { useDispatch } from 'react-redux';

const Edit = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: 1,
      name,
      profession,
      age,
      gender
    };

    dispatch(editFromUsers(user));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profession" />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
        <button type="submit" onClick={handleSubmit}>Edit</button>
      </form>
    </div>
  );
};

export default Edit;
