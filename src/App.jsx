import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feedbac from './components/Feedbac'
import Cards from './components/Cards'
import Button from './components/Button'
import Carts from './components/Carts'
import GetStarted from './components/GetStarted';
import SimplePricingSection from './components/SimplePricingSection';
import Workflow from './components/Workflow';
import Footer from './components/Footer';


const fetchCards = fetch(`./products.json`).then((res) => res.json());


function App() {

  const [visitCount, setVisitCount] = useState([]);

  const addVisit = (card) => {
    const newVisitCount = [...visitCount, card];
    setVisitCount(newVisitCount);

    toast.success(`${card.name} added to cart!`, {
    position: "top-right",
    autoClose: 2000,
  });

  };

  // const [visitCard, setVisitCard] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  // const toggleVisitCard = () => {
  //   setVisitCard(!visitCard);
  //   activeTab === "products" ? setActiveTab("cart") : setActiveTab("products");
  // };


  const handleRemoveCart = (id) => {
    const clickedCartRemove = visitCount.filter(item => item.id !== id);
    setVisitCount(clickedCartRemove);

    toast.error("Item removed from cart", {
    position: "top-right",
    autoClose: 2000,
  });
  };


  const handleRemoveAllCart = () => {
    setVisitCount([]);

      toast.error(" All Item removed from cart", {
    position: "top-right",
    autoClose: 2000,
  });
  };





  return (
    <>
      <Navbar
        visitCount={visitCount}
        addVisit={addVisit}
      ></Navbar>
      <Hero></Hero>

      <Feedbac> </Feedbac>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

      </section>

      <Button
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        visitCount={visitCount}
      />


      {activeTab === 'cart' ? (
        <Carts
        handleRemoveAllCart={handleRemoveAllCart}
        handleRemoveCart={handleRemoveCart}
        visitCount={visitCount} />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Cards
            addVisit={addVisit}
            visitCount={visitCount}
            fetchCards={fetchCards}
          />
        </Suspense>
      )}

      <GetStarted></GetStarted>

      <SimplePricingSection></SimplePricingSection>

      <Workflow></Workflow>

      <Footer></Footer>

     
  <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>

  )
}

export default App







git init
