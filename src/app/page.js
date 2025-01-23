import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Blog Viewer</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(0, 9).map((post) => (
          <div key={post.id} className="card bg-slate-100 text-neutral-content ">
            <div className="card-body items-center text-center text-black">
              <Link href={`/blog/${post.id}`}><h2 className="card-title font-bold text-2xl">{post.title}</h2></Link>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${post.id}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
