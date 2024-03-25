import React, { useState } from 'react';
import './App.css';

const Interns = [
  {
    name: 'Tekena Ajuzieogu',
    picture: './defaultmale.png',
    info: 'Front-end Intern',
    grades: "A",
    attendance: '90%',
  },
  {
    name: 'Jane Smith',
    picture: './defaultfem.jpeg',
    info: 'Product Design Intern',
    grades: "C",
    attendance: '65%',
  },
  {
    name: 'Bobby Portis',
    picture: './defaultmale.png',
    info: 'Back-end',
    grades: "B",
    attendance: '81%',
  },
  {
    name: 'Chioma Jesus',
    picture: './defaultfem.jpeg',
    info: 'Front-end',
    grades: "C",
    attendance: '68%'
  },
  {
    name: 'Penelope Bridgerton',
    picture: './defaultfem.jpeg',
    info: 'Product Design Intern',
    grades: "C",
    attendance: '63%',
  },
  {
    name: 'Jorja Smith',
    picture: './defaultfem.jpeg',
    info: 'Back-end',
    grades: "B",
    attendance: '84%',
  },
  {
    name: 'Christiano Ronaldo',
    picture: './defaultmale.png',
    info: 'Back-end',
    grades: "B",
    attendance: '82%',
  },
  {
    name: 'Samuel Johnson',
    picture: './defaultmale.png',
    info: 'Product Design Intern',
    grades: "F",
    attendance: '0',
  },
  {
    name: 'Emmanuella Shaibu',
    picture: './defaultfem.jpeg',
    info: 'Product Design Intern',
    grades: "C",
    attendance: '60%',
  },
  {
    name: 'Umar Yusuf',
    picture: './defaultmale.png',
    info: 'UI/UX Designer',
    grades: "C",
    attendance: '60%',
  }, {
    name: 'Victor Boniface',
    picture: './defaultmale.png',
    info: 'UI/UX Design',
    grades: "A",
    attendance: '92%',
  },
];

const App = () => {
  const [interns, ] = useState(Interns);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredInterns = interns.filter((intern) =>
    intern.name.toLowerCase().includes(search.toLowerCase())
  );
  
  
  return (
    <div className="App">
     
      <input
        type="text"
        placeholder="Search interns by name"
        value={search}
        onChange={handleSearch}
      />
      <button className='sortname' onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
              Sort by name
      </button>
    

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Info</th>
            <th>Grades</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
        {filteredInterns.sort((a, b) => {
  if (sortOrder === 'asc') {
    return a.name.localeCompare(b.name);
  } else {
    return b.name.localeCompare(a.name);
  }
})
.map((intern) => (
  <tr key={intern.name}>
    <td>{intern.name}</td>
    <td>
      <img src={intern.picture} alt={intern.name} width="100" />
    </td>
    <td>{intern.info}</td>
    <td>{intern.grades}</td>
    <td type="text">{intern.attendance}</td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default App;