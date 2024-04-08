import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, addToCart, remove } from '../../slices/cartSlice';
export default function Product({ items }) {

  const { cart } = useSelector((state) => state);
  const { token } = useSelector((state) => state.auth)

  const dispatch = useDispatch();

  const addToCart = () => {
    if (token) {
      toast.success('Item added to Cart');
      dispatch(add(items));
    }else{
    // if user not login then show toast 
    toast.error('Login to add an item to the Cart ');      
    }

  }

  const removeFromCart = () => {
    dispatch(remove(items.id));
    toast.error("Item removed from Cart");
  }


  return (
    <div>
      <div className='py-3 flex flex-col items-center justify-between w-full gap-3 p-4 transition  ease-in rounded-xl border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03] md:hover:scale-[1.05] h-[375px] bg-[#faf5ff]'>
        <div>
          <p className='text-[#008080] font-semibold text-lg '>{items.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
        </div>

        <div>
          <p className='w-40 font-normal text-gray-400 text-[10px] text-left'>{items.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>

        <div className='h-[180px]'>
          <img src={items.image} alt="" className='w-full h-full' />
        </div>

        <div className='flex items-center justify-between w-full mt-5'>
          <div>
            <p className='font-semibold text-[#008080]'>${items.price}</p>
          </div>
          {
            cart.some((p) => p.id == items.id) ?
              (
                <button className='font-semibold text-[#008080] border-2 border-[#008080] rounded-full text-[12px] p-1 px-3 uppercase
                 hover:bg-[#008080] hover:text-white duration-300' onClick={removeFromCart}>
                  Remove Item
                </button>
              ) :
              (
                <button className='font-semibold text-[#008080] border-2 border-[#008080] rounded-full text-[12px] p-1 px-3 uppercase
                 hover:bg-[#008080] hover:text-white duration-300' onClick={addToCart}>
                  Add To Cart
                </button>
              )
          }


        </div>
      </div>
    </div>
  )
}
