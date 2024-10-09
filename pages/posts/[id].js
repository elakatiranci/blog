import Link from 'next/link';
import posts from '../../data/posts.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Post({ post }) {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <div className="container mx-auto flex-grow p-4"> 
        <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
        <div className="flex items-start mb-6">
    <img src={post.profileImage} alt="Profile Image" className="w-16 h-16 rounded-full mr-4" />
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <h2 className="text-xl text-gray-500 mb-2">{post.username}</h2>
      <p className="text-gray-500 mb-2">{post.date}</p>
    </div>
  </div>
  <div>
    <p className="text-gray-700">{post.content}</p>
  </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const post = posts.find(post => post.id.toString() === params.id);
  return { props: { post } };
}
