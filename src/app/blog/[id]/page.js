import Link from "next/link";

export default async function BlogDetails({ params }) {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
  
    return (
      <div className="container mx-auto px-4 py-8 bg-cyan-50 rounded-md ">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/" className="text-blue-500 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }
  