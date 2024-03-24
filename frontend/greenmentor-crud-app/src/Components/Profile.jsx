import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutRequest } from '../Redux/userReducer/Action';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const {userDetails,token,userName} = useSelector(state=>state.userReducer);
  console.log({userDetails,userName});
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
dispatch(LogoutRequest(token)).then((res) => {
alert(res.message);
navigate("/login")
}).catch(error=>{
  console.log(error);
})
  }
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="min-w-[98%] sm:min-w-[80%] bg-white rounded-lg overflow-hidden shadow-lg" >
        <div className="p-4">
          <div className="flex items-center justify-center">
            <img
              className="sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
              src="https://avatars.githubusercontent.com/u/112810287?v=4"
              alt="User Avatar"
            />
          </div>
          <div className="sm:text-center text-start mt-4">
  <h1 className="text-xl font-bold">{userName||userDetails?.username}</h1>
  <div className="sm:flex justify-between items-center mt-2">
    <div className="mr-4">
      <p className="text-gray-600">DOB</p>
      <p className="text-gray-900 font-semibold">{userDetails?.dob}</p>
    </div>
    <div className="mr-4">
      <p className="text-gray-600">Gender</p>
      <p className="text-gray-900 font-semibold">{userDetails?.gender}</p>
    </div>
    <div>
      <p className="text-gray-600">Email</p>
      <p className="text-gray-900 font-semibold">{userDetails?.email}</p>
    </div>
  </div>
</div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Other Details</h2>
            <ul>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a1 1 0 112 0 1 1 0 01-2 0zm4-4a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Occupation: Software Engineer
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm16 2a1 1 0 00-1-1H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V4zM8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 100 2h4a1 1 0 100-2H8zm8-4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Location: {userDetails?.address}
              </li>
            </ul>
            <button onClick={handleLogout} className="justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log out
              </ button>
      
          </div>
      
        </div>
  
      </div>
  
    </div>
  );
};


