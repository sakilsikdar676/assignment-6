
import Navbar from './Navbar';



const Button = ({ visitCount, activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-center pb-10">
      <div className="flex items-center bg-white border border-gray-100 rounded-full p-1 shadow-sm">
        
        
        <button
          onClick={() => setActiveTab('products')}
          className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            activeTab === 'products' 
            ? "bg-[#7C3AED] text-white shadow-md shadow-purple-200" 
            : "bg-transparent text-[#4338CA] hover:bg-gray-50"
          }`}
          >
          Products
        </button>

       
        <button
          onClick={() => setActiveTab('cart')}
          className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            activeTab === 'cart' 
            ? "bg-[#7C3AED] text-white shadow-md shadow-purple-200" 
            : "bg-transparent text-[#4338CA] hover:bg-gray-50"
          }`}
          >
          Cart ({visitCount.length})
        </button>
        
      </div>
    </div>
  );
};
export default Button;