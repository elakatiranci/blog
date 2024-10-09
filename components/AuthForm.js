import { useState } from "react";
import { useRouter } from "next/router"; 

export default function AuthForm() {
  const router = useRouter(); 
  const [isLogin, setIsLogin] = useState(true); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (isLogin) {
      if (username === "admin" && password === "12345") {
        alert("Giriş başarılı!");
        router.push("/"); 
      } else {
        setError("Kullanıcı adı veya şifre hatalı.");
      }
    } else {
      alert("Kayıt işlemi henüz desteklenmiyor.");
    }
  };

  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://fastly.picsum.photos/id/445/4256/2819.jpg?hmac=99qT1IPidZrzaXTgG1ixRRVwElWXUlNepU2k692G44c')" }}>
      <div className="absolute inset-0 bg-blue-950 opacity-50 backdrop-blur-lg"></div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <svg className="h-8 w-8 text-slate-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  
            <line x1="13" y1="8" x2="15" y2="8" />  
            <line x1="13" y1="12" x2="15" y2="12" />
          </svg>
          Blog.com
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {isLogin ? "Lütfen Giriş Yapınız" : "Lütfen Kayıt Olunuz"}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Şifre
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex items-center justify-between">
                {isLogin && (
                  <a href="#" className="text-sm font-medium text-gray-400 hover:underline dark:text-primary-500">Şifremi hatırlamıyorum.</a>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {isLogin ? "Giriş Yapın" : "Kayıt Olun"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {isLogin ? (
                  <>
                    Henüz bir hesabınız yok mu?{" "}
                    <a
                      href="#"
                      className="font-medium text-white hover:underline dark:text-primary-500"
                      onClick={() => setIsLogin(false)}
                    >
                      Kayıt olun
                    </a>
                  </>
                ) : (
                  <>
                    Zaten bir hesabınız var mı?{" "}
                    <a
                      href="#"
                      className="font-medium text-white hover:underline dark:text-primary-500"
                      onClick={() => setIsLogin(true)}
                    >
                      Giriş yapın
                    </a>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
