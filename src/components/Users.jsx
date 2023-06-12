import { render } from "@testing-library/react";
import axios from "axios";
import { Component, useState , useEffect } from "react";

const Users = () =>{


    function MyComponent (){

        const[users , setUsers] = useState(0);

        useEffect(() =>{
            const response = axios.get('https://reqres.in/api/users');
            setUsers(response)
        })
    }

  
    // const [users , setusers] = useState([])

    // useEffect(() =>{

    //     const response = axios.get('https://reqres.in/api/users');
    //     ({setusers : response })
        
    // } , [users])




    
    return(
           <div>
            <button onClick={handeleCreate} className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">create</button>
            <div>
                {
                     MyComponent.users.map((p) =>{
                        return(
                            <div>
                                <img src={ p.avatar} alt="" />
                                <h4>{p.first_name} {p.last_name} </h4>
                                <h5>{p.email}</h5>
                                <h5>{p.id}</h5>

                            <div className="grid grid-rows-3 grid-flow-col gap-4">
                                <div className="row-span-3">
                                <button onClick={handeleUpdate} className=" m-5 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">update</button>
                                </div>

                                <div >
                                <button onClick={handeleDelet} className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">delet</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
           </div>
    )

    function handeleDelet(){

    }

    function handeleCreate(users){
        
    }

    function handeleUpdate(users){
        
    }
} 
export default Users;