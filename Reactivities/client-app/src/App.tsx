import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface UserData {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {userData.map(user => <li key={user.id}>{user.name}</li>)}
    </div>
  );
}

export default App;
