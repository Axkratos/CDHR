import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null); // State to handle modal visibility

  const posts = [
    {
      id: 1,
      title: 'Strengthening Local Democracy in Nepal',
      content:
        'Grassroots movements have played a pivotal role in shaping the future of democratic governance in Nepal. This blog explores the impact of these movements and how they strengthen local democracy.',
      date: 'Mar 16, 2024',
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Human Rights Education Initiative',
      content:
        'Empowering communities through education and awareness of fundamental human rights is essential for building a democratic society.',
      date: 'Mar 12, 2024',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Youth Participation in Democracy',
      content:
        'Engaging the next generation in democratic processes ensures a sustainable future. Learn about the initiatives encouraging youth participation.',
      date: 'Mar 8, 2024',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="blog" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Updates</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Stay informed about our work and impact.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <time dateTime={post.date}>{post.date}</time>
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{post.content.slice(0, 100)}...</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center text-blue-600 hover:text-blue-500"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal for Blog Post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-4xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              className="w-full h-64 object-cover rounded-lg mb-4"
              src={selectedPost.image}
              alt={selectedPost.title}
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPost.content}</p>
            <p className="text-sm text-gray-500">
              Published on <time dateTime={selectedPost.date}>{selectedPost.date}</time>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
