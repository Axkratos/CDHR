import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Strengthening Local Democracy in Nepal',
    date: 'Mar 16, 2024',
    image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Detailed content about Strengthening Local Democracy in Nepal.',
  },
  {
    id: 2,
    title: 'Human Rights Education Initiative',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Detailed content about Human Rights Education Initiative.',
  },
  {
    id: 3,
    title: 'Youth Participation in Democracy',
    date: 'Mar 8, 2024',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Detailed content about Youth Participation in Democracy.',
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          <time dateTime={post.date}>{post.date}</time>
        </p>
        <img className="w-full h-auto rounded-lg mb-8" src={post.image} alt={post.title} />
        <p className="text-lg text-gray-700">{post.content}</p>
      </div>
    </section>
  );
}
