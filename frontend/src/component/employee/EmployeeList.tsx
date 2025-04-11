import { useEffect } from 'react';
import { RootState } from '../../reduxStore/store';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delEmployee, getEmployee } from '../../reduxStore/employeeSlice';
import { Button } from 'react-bootstrap';

const EmployeeList: React.FC = () => {
    const dispatch = useDispatch();
    const { list} = useSelector((state: RootState)=> state.employee);

    useEffect(()=>{
      dispatch(getEmployee() as any );
    }, []);
    const handleDelete = (empId: number) =>{
      dispatch(delEmployee(empId) as any);
    }
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list) && list.map((emp, i)=>(
              <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.phone}</td>
              <td>{emp.address}</td>
              <td>{emp.join_date}</td>
              <td><Button variant="danger" onClick={() => handleDelete(emp.id)}>Delete</Button></td>
            </tr>
            ))}
            
            
          </tbody>
        </Table>
      );
}

export default EmployeeList