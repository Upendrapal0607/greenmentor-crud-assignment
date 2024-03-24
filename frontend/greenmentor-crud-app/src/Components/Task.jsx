import React, { useState } from 'react';
import { AddnewTask } from './AddnewTask';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DeletelProduct, getAllTask, updateTask } from '../Redux/postReducer/Action';
import { Loading } from './Loading';

const TaskList = () => {
const [isUpdate,setisUpdate] = useState(1)
const [updateUser,setUpdateUser] = useState({})

    const dispatch = useDispatch()
    const {isLoading,isError,Task} = useSelector(state=>state.postReducer)
    const {token} = useSelector(state=>state.userReducer)
console.log({Task});
    const handleDelete = id => {
      dispatch(DeletelProduct(id, token)).then((res) => {
        getAllTaskList()
      }).catch((err) =>{

      });
    }
    const handleUpdateChek = task => {
      setisUpdate(task._id)
      setUpdateUser(task)
    }

    const handleUpdate = (id) => {
      let updatedTask = {...updateUser};
      dispatch(updateTask(id, updatedTask,token)).then((res) => {
        setisUpdate(1);
        setUpdateUser({});

        getAllTaskList()
      }).catch((err) =>{
        console.log(err);
      })

    }
const handleUpdateStatus = (id, status) => {
  let updatedTask = {completed:!status};
  dispatch(updateTask(id, updatedTask,token)).then((res) => {
    setisUpdate(1);
    getAllTaskList()
  }).catch((err) =>{
    console.log(err);
  })

}

    
    const handleUpdateChange = e=> {
     const {value,name} = e.target;
     setUpdateUser(prev=>({...prev,[name]:value}))
    }
   function getAllTaskList() {
  dispatch(getAllTask()).then((res) =>{

  }).catch(err=>{
    console.log({err});
  })
    };

    useEffect(()=>{
      getAllTaskList()
    },[])
  return isLoading?<Loading/>:<div className="max-w-2lg min-h-[77vh] mx-auto bg-gray-100 sm:p-[20px]" >
      <AddnewTask getAllTaskList ={getAllTaskList}/>
      <div className="overflow-y-hidden bg-white shadow-md sm:rounded-lg" >
        <div className="">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-center font-bold">
              <tr>
              <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                Title
                </th>
                
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Description
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Status
                </th>
               
                <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-center uppercase">
                  Action
                </th>
        
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Task.map((task, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                     {isUpdate==task._id?<td className="px-6 py-4 whitespace-nowrap text-wrap text-justify">
                     <input value={updateUser.title} onChange={handleUpdateChange} id="title" autoComplete='title' name="title" type="text" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </td>:<td className="px-6 py-4 whitespace-nowrap text-center">{task.title}</td>}
                  {isUpdate==task._id?<td className="px-6 py-4 whitespace-nowrap text-wrap text-justify">
                  <input value={updateUser.description} onChange={handleUpdateChange} id="description" autoComplete='description' name="description" type="text" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </td>
                  :<td className="px-6 py-4 whitespace-nowrap text-wrap text-justify">{task.description}</td>}
                 {isUpdate==task._id?<td className="px-6 py-4 whitespace-nowrap text-wrap text-justify">
                 <button onClick={()=>handleUpdate(task?._id)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
              EDIT TASK
                    </button >
                 </td> :<td className="px-6 py-4 whitespace-nowrap">
                   {task?.completed?<button className='text-green-600' onClick={()=>handleUpdateStatus(task._id,task.completed)}>
                    Completed
                    </button>:
                    <button className='text-yellow-500'  onClick={()=>handleUpdateStatus(task._id,task.completed)}>
                        Pending
                    </button>
                    }
                  </td>}
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div  className='flex justify-center items-center gap-4'>
                    <button onClick={()=>handleUpdateChek(task)}
                      className=" focus:outline-none p-3 text-gray-200 hover:bg-gray-700 bg-gray-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
               Edit
                    </button>
                  <button onClick={()=>handleDelete(task._id)}
                      className="text-slate-200 hover:text-slate-100-900 hover:bg-red-700 mr-2 bg-red-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                  Delete
                    </button> 
                   </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
 
};

export default TaskList;





