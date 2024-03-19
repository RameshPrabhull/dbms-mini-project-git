import './css/customerrec.css';
import './css/buttonrec.css';
import {useState} from 'react';
function Zoorec(){
    const [rec,setRec]=useState([]);
    function send(){
        fetch('http://localhost:2000/zoorec')
          .then(response => {
            if(!response) console.error("cannot fetch data");
            return response.json();
          })
          .then(data=>{
            setRec(data);
            /* console.log(data); */
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
    }
return(
    <>
    <div className="customerrec">
        <div className='buttonrec' onClick={send}>Display All Registered Zoo</div>
        <div>
            <table>
                <thead>
                    <th>Zoo Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Location</th>
                </thead>
                <tbody>
                    {rec.map(recs=>(
                        <tr>
                            <td>{recs.zid}</td>
                            <td>{recs.zname}</td>
                            <td>{recs.contact}</td>
                            <td>{recs.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
)
}
export default Zoorec;