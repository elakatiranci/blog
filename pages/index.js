import Link from 'next/link';
import posts from '../data/posts.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="container mx-auto p-4 flex-grow"> 
        <h1 className="text-2xl font-bold mb-4">Blog Yazıları</h1>
        <ul className="space-y-8">
  {posts.map(post => (
    <li key={post.id} className="bg-white rounded-lg shadow-xl p-4 flex items-start">
      <img src={post.profileImage} alt="Profile Image" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <p className="text-gray-500 text-sm">{post.username}</p>
        <Link href={`/posts/${post.id}`} className="text-black-500 text-lg font-bold mb-1">
          {post.title}
        </Link>
        <p className="text-gray-700 mt-2">
          {post.content.substring(0, 100)}... 
        </p>
      </div>
    </li>
  ))}
        </ul>
        <div className="mt-8"> 
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

