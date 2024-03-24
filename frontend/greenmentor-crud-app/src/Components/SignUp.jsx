import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { RgisterRequest } from "../Redux/userReducer/Action";
export const SignUp = ({ setIsLogin }) => {
  const [visible, setVisible] = useState(false);
  const [confirvisible, setConfirmVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    address: "",
    gender: "",
  });

  const handleChangeDetails = async (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
    // console.log(userDetails);
  };

  const handleNavigate = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    if (
      userDetails.username &&
      userDetails.dob &&
      userDetails.password &&
      userDetails.email
    ) {
      let AlluserDetails = { ...userDetails };

      dispatch(RgisterRequest(userDetails))
        .then((res) => {
          console.log(res);
          alert(res?.data.message);
          setIsLogin(true);
        })
        .catch((err) => {
          alert("there is an error");
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 text-left" onSubmit={handleNavigate}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.username}
                  onChange={handleChangeDetails}
                  id="username"
                  autoComplete="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.email}
                  onChange={handleChangeDetails}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.phone}
                  onChange={handleChangeDetails}
                  type="number"
                  id="phone"
                  name="phone"
                  autoComplete="phone"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.address}
                  onChange={handleChangeDetails}
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="address"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                DOB
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  id="dat-of-birht"
                  name="dob"
                  onChange={handleChangeDetails}
                  value={userDetails.dob}
                  autoComplete="dob"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  id="password"
                  type={visible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {visible ? (
                  <FaRegEye
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className="text-green-600">
                password lenth should be more than 8 contain number characters
                and special characters
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  value={userDetails.password}
                  onChange={handleChangeDetails}
                  name="password"
                  type={confirvisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {confirvisible ? (
                  <FaRegEye
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setConfirmVisible(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setConfirmVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <div className="mt-1">
                <select
                  onChange={handleChangeDetails}
                  value={userDetails.gender}
                  name="gender"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
          <div>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className=" cursor-pointer font-medium text-indigo-600 hover:text-indigo-900"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
