import React, {useState} from 'react'

export default function Forms() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
 
  const handleSubmit = (event) => {
    // console.log(event.target.value)
    event.preventDefault();
    alert(`
            DETAILS ENTERED:
      The Name you entered was: ${username}              
      The Email you entered was:${email}
      The Phone you entered was:${phone}
      The Posistion you entered was:${position}
      `)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label for="username">User Name</label><br></br>
        <input type="text" value={username} id='username'  placeholder='User Name' onChange={(e) => setName(e.target.value)}/>
        <br></br>
        <label for="email">Email</label><br></br>
        <input type="text" value={email} id='email'  placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <br></br>
        <label for="phone">Phone Number</label><br></br>
        <input type="phone" value={phone} id='phone'  placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)}/>
        <br></br>
        <label for="position">Position</label><br></br>
        <input type="position" value={position} id='position'  placeholder='Position' onChange={(e) => setPosition(e.target.value)}/>
        <br></br>
        {/* <label for="gender" >Gender</label>
        &nbsp;
        <label for="male">Male</label>
        <input type="radio" value={gender} id='male'  name='gender'/>
        <label for="female">Female</label>
        <input type="radio" value={gender} id='female'  name='gender'/>
        <br></br> */}
        <hr></hr>
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}
