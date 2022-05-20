// import { list } from 'postcss';
import React, { createElement } from 'react'
import Avatar from 'react-avatar';
import user from './Users';



var name = [];
var email = [];

var n = 1;
var x = 0;



function Modal({ closeModal ,mylist,update}) {

    
function addRow(event) {
    closeModal(false);
    name[x] = document.getElementById("username").value;
    email[x] = document.getElementById("useremail").value;

    const user_details={name:name[x],email:email[x]};
    //user.push(user_details);
    mylist.push(user_details);
    update(mylist);
    n++;
    x++;
}


    return (
        <div className="modalBackground bg-white rounded-lg border shadow-md sm:p-8 light:bg-white text-gray-900 justify-center align-middle fixed opacity-100 inset-0 z-50 my-40">
            <div className="modalContainer flex flex-col w-50 h-50 border-12 bg-white shadow-lg shadow-black p-25  ">
                <button className=" border-none flex-end font-bold my-10 text-2xl " onClick={() => closeModal(false)} >X</button>

                <form action="#">

                    <div className="mb-6 mx-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="name" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div>
                    <div className="mb-6 mx-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <input type="email" id="useremail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required="" />
                    </div>
                    
                    {/* <div className="mb-6 mx-5">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Your Role</label>
                        <input type="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div> */}

                    <button onClick={addRow} type="submit" className="mx-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Modal
