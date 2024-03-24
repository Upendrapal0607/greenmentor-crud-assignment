import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTask, getAllTask } from '../Redux/postReducer/Action';
export const AddnewTask = ({getAllTaskList}) => {
    const [newTask,setNewTask] = useState({
        title: "",
        description: "",
    });
    const {token} = useSelector(state=>state.userReducer)
    const dispatch = useDispatch()
    const handleChange = e => {
        let {value,name} = e.target;
        setNewTask(prev=>({...prev,[name]:value}),)
    }

const handleAdd = e => {
e.preventDefault();
  let ObjOfTask = {...newTask}
    if(newTask.title&&newTask.description){
dispatch(AddTask(ObjOfTask,token)).then(res=>{
    alert(res.message);
        getAllTaskList()
}).catch(error=>{
    console.log({error});
})
    }
}

  return (
    <div className=" bg-gray-100 flex justify-center py-12 sm:px-6 lg:px-8">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div> */}

      <div className="mt-4 w-full sm:w-full max-w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 sm:flex justify-between items-center" onSubmit={handleAdd}>
            <div className="sm:w-[33%]">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input value={newTask.title} onChange={handleChange}  placeholder='Title' id="title" name="title" type="text" autoComplete="title" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div className="sm:w-[33%]">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
               Description
              </label>
              <div className="mt-1">
                <textarea  value={newTask.description} onChange={handleChange} placeholder='Description'  id="desctiption" name="description" type="text" autoComplete="description" required className="appearance-none block w-[100%] px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              ADD
              </ button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
