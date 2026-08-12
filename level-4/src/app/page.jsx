import Image from "next/image";

export default async function Home() {
  
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <h1>Welcome to the App Router - (Part 3)</h1>

        <p>This is a Parallel Routes</p>


      </div>
    </main>
  );
}