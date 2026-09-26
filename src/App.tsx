import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Collection from "./components/Collection";
import Vission from "./components/Vission";
import Workprice from "./components/Workprice";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="website">

      <Navbar />

      <main>
        <Hero />
        <Collection/>
     <Vission/>
     <Workprice/>
     <About/>
     <Contact/>
<Footer/>
        {/* <section className="dummy-section" id="collections">
          <p>OUR COLLECTION</p>
          <h2>Discover Timeless Jewellery</h2>
        </section>

        <section className="dummy-section" id="about">
          <p>OUR STORY</p>
          <h2>Crafted With Passion</h2>
        </section> */}

      </main>

    </div>
  );
}

export default App;