import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Customer(){
   /*  const [id,setId]=useState(0) */
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState(0);
    const [gid,setGid]=useState([]);
    const [sid,setsid]=useState();
    const [time,setTime]=useState('');
    const [vis,setVis]=useState('hidden');
    useEffect(()=>{
        fetch('http://localhost:2000/animalguideid')
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setGid(data);
            /* console.log(data); */
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      });
    function send(){
        fetch("http://localhost:2000/customer",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                name:name,
                email:email,
                address:address,
                phone:phone,
                gid:sid,
                time:time
            })
        })
        .then(()=>{
        console.log("request sent")
    }).catch(err=>{
        console.error('error creating table',err);
    });
    setVis('visible');
    };
    return(
        <>
<div class="login-container">
        <h2>Customer Details</h2>
        <div className='ticket' style={{visibility:vis}}>
                <h2>***Entry ticket***</h2>
                <div>Customer Name:{name}</div>
                {/* <div >Date:{date}</div> */}
                <div>Time:{time}</div>
                <input type="number" placeholder='Enter number of Tickets'></input>
                <input type="button" value="print" className='print' onClick={()=>setVis('hidden')}></input>

            </div>
        <form>
            <div class="form-group">
                <label for="username">Customer Name:</label>
                <input type="text" id="cusname" placeholder="Enter the customer name" onChange={(e)=>setName(e.target.value)} required></input>
            </div>
{/*            <div class="form-group">
                <label for="username">Customer ID:</label>
                <input type="text" id="cid" placeholder="Enter the customer id" required></input>
            </div> */}
            <div class="form-group">
                <label for="username">Email:</label>
                <input type="text" id="email" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>  
            <div class="form-group">
                <label for="username">Adress:</label>
                <input type="text" id="address" placeholder="Enter customer address" onChange={(e)=>setAddress(e.target.value)}required></input>
            </div>
            <div class="form-group">
                <label for="username">Phone No.:</label>
                <input type="text" id="phoneno" placeholder="Enter phone number" onChange={(e)=>setPhone(e.target.value)}required></input>
            </div>
            <div class="form-group">
                <label for="username">Animal Guide ID</label>
                <select onChange={(e)=>setsid(e.target.value)}>
                 {gid.map(item => (
          <option>{item.gid}</option> // Assuming 'name' is one of the fields
        ))}  
                </select>
            </div>
            <div>
                    <label>Select Timings:</label>
                    <select onChange={(e)=>{setTime(e.target.value)}}>
                        <option defaultValue="Select Timing">Select Timing</option>
                        <option value="9:00AM to 12:00PM">9:00AM to 12:00PM</option>
                        <option value="12:00PM to 3:00PM">12:00PM to 3:00PM</option>
                        <option value="3:00PM to 6:00PM">3:00PM to 6:00PM</option>
                    </select>
            </div>
            <div>

            </div>
            <button type="submit" className="login-btn" /* className="ticket-sub" */ onClick={send}>Submit</button>
        </form>
        {vis}
    </div>
        </>
    )
}
export default Customer;