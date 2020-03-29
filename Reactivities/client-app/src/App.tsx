import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

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
    <div>
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
        {userData.map(user => <List.Item key={user.id}>{user.name}</List.Item>)}
      </List>
    </div>
  );
}

export default App;
