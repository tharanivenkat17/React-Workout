import './App.css';
// import Employee from './Employee';
// import EmployeeDetails from './EmployeeDetails';
// import Classcomponent from './Classcomponent';
// import Counter from './Counter';
// import Home from './Home';
// import Button from './Button';
// import Navigation from './Navigation';
// import Mountingclass from './Mountingclass';
// import Updatingclass from './Updatingclass';
// import Unmountingclass from './Unmountingclass';
// import ComponentFunction from './ComponentFunction';
import Hooks from './Hooks/Hooks';
import UseEffect from './Hooks/UseEffect';
import Forms from './Forms/Forms';
import UncontrolledForms from './Forms/UncontrolledForms';
import ControlledForms from './Forms/ControlledForms';
import Demo from './Demo';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Users } from './Users';
import form from './Forms/form.jsx';

function App() {

  // const employee = [
  //   { id: 12345, name: 'Siva', phone: 7418876453, salary: 30000, location: 'Chennai' },
  //   { id: 12234, name: 'Arun', phone: 7418337656, salary: 30000, location: 'Delhi' },
  //   { id: 13445, name: 'Sandhiya', phone: 8765456453, salary: 30000, location: 'Mumbai' },
  //   { id: 17655, name: 'Karthi', phone: 6543548453, salary: 30000, location: 'Kochi' }
  // ]

  return (
    <div >
      {/* <Button></Button>  class="div"
      <div>
      <Employee data={employee}></Employee>
       <EmployeeDetails details={employee}></EmployeeDetails>
      </div>
      <div>
      <Classcomponent>This is props.children</Classcomponent>
      <Counter></Counter>
      <Home></Home>
      </div> 
      <Navigation></Navigation> */}

      <BrowserRouter>
        {/* <Link to="/home">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
        <Link to="/employee">Employee</Link> &nbsp;
        <Link to="/Mountingclass">Mounting Class</Link> &nbsp;
        <Link to="/Updatingclass">Updating Class</Link> &nbsp;
        <Link to="/Unmountingclass">Unmounting Class</Link> &nbsp;
        <Link to="/ComponentFunction">Component Function</Link> &nbsp; */}
        <Link to="/Hooks">Hooks</Link> &nbsp;
        <Link to="/UseEffect">Use Effect</Link> &nbsp;
        <Link to="/Forms">Forms</Link> &nbsp;
        <Link to="/form">Forms</Link> &nbsp;
        <Link to="/UncontrolledForms">Uncontrolled Forms</Link> &nbsp;
        <Link to="/ControlledForms">Controlled Forms</Link> &nbsp;
        <Link to="/Demo">Demo</Link>
        <Link to="/user">User</Link>

        <Routes>
          {/* <Route path="/home" element={<Home data="Sample"/>} />
          <Route path="/about" element={<EmployeeDetails details={employee}/>} />
          <Route path="/employee" element={<Employee data={employee}/>} />
          <Route path="/Mountingclass" element={<Mountingclass />} />
          <Route path="/Updatingclass" element={<Updatingclass />} />
          <Route path="/Unmountingclass" element={<Unmountingclass />} />
          <Route path="/ComponentFunction" element={<ComponentFunction />} /> */}
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/Forms" element={<Forms />} />
          <Route path="/UncontrolledForms" element={<UncontrolledForms />} />
          <Route path="/ControlledForms" element={<ControlledForms />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/user" element={<Users />} />
          <Route path="/form" element={<form />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;