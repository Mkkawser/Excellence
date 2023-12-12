import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const len = cart.items.length;

  const handleCheckout = () => {
    console.log("Checkout button clicked");
    // Add your checkout logic here

    window.alert( `Do You Want to Buy` );
  };
  console.log(cart);
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 [600px]:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          {cart.items.map((itemId) => {
            const product = cart.products[itemId];
            const count = cart.counts[itemId];
            return (
              <div
                key={itemId}
                className="bg-white p-4 rounded-md shadow-md mb-4"
              >
                <div className="w-[150px] h-[150px] border mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-2">
                  <p className="text-lg font-semibold">
                    {product.title} X {count}
                  </p>
                </div>
                <div className="text-gray-700">${product.price}</div>
              </div>
            );
          })}
        </div>

        <div className="col-span-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-4">Order Summary</p>
            <div className="flex justify-between mb-2">
              <p>Subtotal ({len} items)</p>
              {/* Add logic to calculate subtotal */}
            </div>
            <div className="flex justify-between">
              <p>Total : {cart.total} </p>
              {/* Add logic to calculate total */}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
