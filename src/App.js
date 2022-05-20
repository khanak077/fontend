import { useState } from 'react';
import './App.css';
import Avatar from 'react-avatar';
import Modal from './Components/Modal';
import user from './Components/Users';





function App() {
  
const [list, updateList] = useState(user);
  const [openModal, setOpenModal] = useState(false);


  function deleteRow(event)
{
  event.preventDefault();
  let myname=event.target.getAttribute("name");
  console.log("Deleting : "+myname);
  // user.pop(name);
  updateList(list.filter(item => item.name !== myname)); 
}

function search() {
  //let x=document.getElementById("username").value;
  //console.log("username : "+x);
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("query");
  filter = input.value.toUpperCase();
  //console.log(" searching for : "+filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("th")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


  return (
    <>
    
      <div className="App flex justify-center mt-56  flex-col ">
      <div className="flex justify-start mx-2 my-5">
        <img src="data:image/jpg;base64,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" alt="image" className="w-10 h-10 flex mt-2 "/>
         
         <div clasName="flex flex-col ">
            <h1 className=' flex mx-2 text-xl font-extrabold space-x-0'>YOUR SPOTTABLE TEAM</h1>
              <p className="flex mx-3 text-sm space-x-0 font-normal">Spottabl supports you all throughout</p>
         </div>
      </div>
        <div className="p-4 w-screen bg-white rounded-lg border shadow-md sm:p-8 light:bg-white text-gray-900">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 ">Customer Success Managers</h5>




          </div>
          <div className="container flex flex-row">
            <form className="flex items-center flex-grow">
              <label htmlFor="simple-search" className="sr-only">Search by Name or Email</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input onChange={search} type="text" id="query" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search by Name or Email" required="" />
              </div>

            </form>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-800  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " onClick={() => {
              setOpenModal(true);
            }}>Add CMS</button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
            <table id="myTable" className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="p-4 flex sr-only items-center">
                    Avatar
                  </th>
                  <th scope="col" className="sr-only px-6 py-3">
                    Product name
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
         {   list.length>0 && list.map((item,index)=>( 
           <tr key={item.email} className="bg-white border-b ">
           <td className="w-4 p-4">
             <div className="flex items-center">
               <Avatar name={item.name} size='40' color="#9370DB" fgColor='#4B0082' round={true} />
             </div>
           </td>
           <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
             {item.name}
             <p id="email" className="text-sm font-light my-2">{item.email}</p>
           </th>

           <td className="px-6 py-4 text-right"  >
             <button name={item.name}  onClick={()=>{
              //  console.log("Delete : "+item.name);
               //user.pop();
               updateList(list.filter((x)=>{return (x.email!==item.email) }));
              // const result=user.filter((x)=>{return x.name!==item.name});
               //const result = list.filter((x)=>{return x.name!==item.name});
              //  updateList(result);
             // updateList(result);
              //if(result.length==0)
              // let x=item.name;
              // list.splice(list.findIndex(v => v.name === item.name && v.email === item.email), 1);
              // updateList(list);
                    // if(list.length===0)
                    // console.log("Alredy empty!!");
                    // else
                    // list.forEach((x)=>{console.log("cur : "+x.name+" email : "+x.email)});
              //  result.forEach((x)=>{console.log("cur : "+x.name+" email : "+x.email)});
              //  item.filter(x => x.name !== item.name);
              //  for(let i in item)
              //  {
              //     console.log(" present : "+i.name);
              //  }
               //updateList(user); 
                // updateList(list.filter( function(item2){  item2.name !== item.name }));
             }} href="/" className="font-medium text-blue-600  hover:underline">
               <svg  width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <g>
                   <path fill="none" d="M0 0h24v24H0z" />
                   <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" />
                 </g>
               </svg>
             </button>
           </td>
         </tr>
         ))    }
               </tbody>
            </table>
          </div>


        </div>




      </div>
      {openModal && <Modal closeModal={setOpenModal} update={updateList} mylist={list} />}
    </>
  );
}

export default App;
