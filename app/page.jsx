import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">Welcome</h1>
      <Link href="/properties">Show Property</Link>
    </main>
  );
}

export default Home;