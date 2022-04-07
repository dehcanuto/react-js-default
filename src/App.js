import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="main w-max m-auto mt-10">
        <div className="login">
            <h2 className="text-2xl mb-6">Login</h2>
            <div className="username flex border rounded text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <input className="outline-none px-2 h-full py-2 text-lg" type="text" placeholder="username" />
            </div>

            <div className="password flex border rounded text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              <input className="outline-none px-2 h-full py-2 text-lg" type="password" placeholder="password" />
            </div>

            <div className="show_info text-sm mb-4 w-max text-red-400"></div>

            <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
              <div className="wrapper flex w-max mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>
                <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Login" />
              </div>
            </div>    
        </div>
        <div className="register">
            <h2 className="text-2xl mb-6">Register</h2>
            <div className="display_name flex border rounded text-gray-500 mb-4">
              <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="display name" />
            </div>

            <div className="username flex border rounded text-gray-500 mb-4">
              <input className="outline-none px-4 h-full py-2 text-lg" type="text" placeholder="username" />
            </div>

            <div className="password flex border rounded text-gray-500 mb-4">
              <input className="outline-none px-4 h-full py-2 text-lg" type="password" placeholder="password" />
            </div>

            <div className="gender flex border rounded text-gray-500 mb-4">
            <div className="title m-2 ml-4">Gender</div>
            <label className="flex items-center cursor-pointer m-2">
              <input className="scale-125 mr-2 cursor-pointer" type="radio" name="gender" value="m" checked />
              <div className="title -mt-1">male</div>
            </label>
            
            <label className="flex items-center cursor-pointer m-2">
              <input className="scale-125 mr-2 cursor-pointer" type="radio" name="gender" value="f" />
              <div className="title -mt-1">female</div>
            </label>
            </div>
            <div className="show_info text-sm mb-4 w-max text-red-400">username already taken</div>
            <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
              <div className="wrapper flex w-max mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="button" value="Register" />
              </div>
            </div>
        </div>
      </div>
  );
}

export default App;
