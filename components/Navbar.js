import { useState } from 'react';
import { useRouter } from 'next/router'; 

export default function Navbar() {
  const router = useRouter(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const post = { username: "Ela" }; 
  const profileImage = "https://fastly.picsum.photos/id/445/4256/2819.jpg?hmac=99qT1IPidZrzaXTgG1ixRRVwElWXUlNepU2k692G44c"; // Placeholder for profile image URL

  const handleLogout = () => {
    setIsLoggedIn(false); 
    router.push('/login'); 
  };

  return (
    <nav className="p-4">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4 rounded-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-slate-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
              <path stroke="none" d="M0 0h24v24H0z"/>  
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  
              <line x1="13" y1="8" x2="15" y2="8" />  
              <line x1="13" y1="12" x2="15" y2="12" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-3">
              Blog.com
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)} 
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Ana Sayfa
                </a>
              </li>
              <li>
              <a href="/login" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                  Sign
                </a>
              </li>
              <li className="flex items-center relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2" 
                />
                <span className="text-white mr-2">{post.username}</span> 
                <svg
                  onClick={() => setIsOpen(!isOpen)} // Toggle logout menu
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down cursor-pointer" 
                >
                <path d="m6 9 6 6 6-6" />
                </svg>
                {isOpen && (
                  <ul className="absolute right-0 mt-14 w-30 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block py-2 px-3 text-blue-700 hover:bg-gray-100 dark:text-blue-700"
                      >
                        Çıkış Yap
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
