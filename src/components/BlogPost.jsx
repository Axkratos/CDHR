import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams(); // Get blog post ID from the URL

  const posts = [
    {
      id: 1,
      title: 'Strengthening Local Democracy in Nepal',
      content:
        'Grassroots movements have played a pivotal role in shaping the future of democratic governance in Nepal. This blog explores the impact of these movements and how they strengthen local democracy.',
      date: 'Mar 16, 2024',
      image: '/democracy.jpg',
    },
    {
      id: 2,
      title: 'Human Rights Education Initiative',
      content:
        'Empowering communities through education and awareness of fundamental human rights is essential for building a democratic society.',
      date: 'Mar 12, 2024',
      image: '/flag.jpg',
    },
    {
      id: 3,
      title: 'Youth Participation in Democracy',
      content:
        'Engaging the next generation in democratic processes ensures a sustainable future. Learn about the initiatives encouraging youth participation.',
      date: 'Mar 8, 2024',
      image: '/plant.jpg',
    },
  ];

  const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

  if (!post) {
    return <div className="text-center py-16 text-gray-500">Blog post not found.</div>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">{post.title}</h1>
        <p className="mt-2 text-sm text-gray-600">
          Published on <time dateTime={post.date}>{post.date}</time>
        </p>
        <img
          className="mt-6 w-full h-64 object-cover rounded-lg"
          src={post.image}
          alt={post.title}
        />
        <p className="mt-6 text-lg text-gray-700">{post.content}</p>
      </div>
    </section>
  );
}
