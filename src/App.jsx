import { useState, useEffect } from 'react';
import './App.css'
import {getAllStudents} from './components/client/Client'
import {Avatar, Table} from 'antd'
import Container from './components/client/Container';


function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    getAllStudents()
      .then(res => res.json())
      .then(students => {
        setStudents(students);
        console.log(students);
      });
  };


  const columns = [
    {
      title: '',
      key: 'avatar',
      render: (text, student) => (
        <Avatar>
          {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
        </Avatar>
      )
    },
        {
      title: 'StudentId',
      dataIndex: 'studentId',
      key: 'studentId'
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
  ]
  
  useEffect(() => {
    fetchStudents();
  }, []);



  return (
    <>
      <Container>
      <Table 
      dataSource={students} 
      columns={columns} 
      pagination={false}
      rowKey="studentId" />
      </Container>
    </>
  );
}
export default App
