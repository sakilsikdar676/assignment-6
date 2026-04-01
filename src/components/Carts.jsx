import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Carts = ({ visitCount,handleRemoveCart ,handleRemoveAllCart }) => {
  const total = visitCount.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-100 mb-30">
      <h2 className="text-2xl font-bold mb-6 text-[#111827]">Your Cart</h2>

      {visitCount.length === 0 ? (
        <div className="text-center py-10 mb-4">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Your cart is empty! Add some tools to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {visitCount.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <img src={item.icon} alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveCart(item.id)} className='btn btn-soft btn-primary text-red-600'>Remove</button>
            </div>
          ))}
          
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Total:</span>
            <span className="text-2xl font-extrabold text-[#7C3AED]">${total}</span>
          </div>
          
          <button
          onClick={handleRemoveAllCart}
          className="w-full mt-6 bg-[#7C3AED] text-white font-bold py-4 rounded-2xl hover:bg-[#6D28D9] transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;