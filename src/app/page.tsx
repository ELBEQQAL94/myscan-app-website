import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="space-y-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Hello world!
        </h1>
        <p className="text-slate-600">
          This is the home page content. The Navbar comes from the root layout.
        </p>
      </section>
    </>
  );
}
