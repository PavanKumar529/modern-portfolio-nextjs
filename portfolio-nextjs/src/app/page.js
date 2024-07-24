import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className="flex-grow pt-[4.5rem] sm:pt-[3.25rem] pb-[4.5rem] sm:pb-[3.25rem]">
        <h1 className="text-center text-4xl font-bold text-white py-10">Welcome to My Portfolio</h1>
        {/* Add content for the main section here */}
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
