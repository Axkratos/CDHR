import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Strengthening Local Democracy in Nepal',
      excerpt: 'How grassroots movements are shaping the future of democratic governance in Nepal.',
      date: 'Mar 16, 2024',
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Human Rights Education Initiative',
      excerpt: 'Empowering communities through knowledge and awareness of their fundamental rights.',
      date: 'Mar 12, 2024',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Youth Participation in Democracy',
      excerpt: 'Engaging the next generation in democratic processes and civic participation.',
      date: 'Mar 8, 2024',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="blog" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Updates
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Stay informed about our work and impact
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <time dateTime={post.date}>{post.date}</time>
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-500">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
