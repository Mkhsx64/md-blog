import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';

// Displays a list of pages on the homepage sorted by date/time
export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    if (new Date(a.date).getTime() >= new Date(b.date).getTime()) {
      return -1;
    }

    return 1;
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">Hello there!</h1>
      <p className="text-slate-700">Welcome to my new blog</p>
    </>
  )
}
