import React from "react";
import {} from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {
  setDecreaseCartQty,
  setIncreaseCartQty,
  setRemoveItemFromCart,
} from "../../app/CartSlice";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseCartQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseCartQty({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center bg-gradient-to-b ${color} ${shadow}`}
          >
            <img
              src={img}
              className="w-36 h-auto object-fill lg:w-28"
              alt={`img/cart-item/${id}`}
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={() => onDecreaseItemQTY()}
                className="bg-theme-cart rounded h-6 w-6 lg:h-5 lg:w-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-slate-100 stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-slate-100 font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {cartQuantity}
              </div>
              <button
                type="button"
                onClick={() => onIncreaseItemQTY()}
                className="bg-theme-cart rounded h-6 w-6 lg:h-5 lg:w-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-slate-100 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-items-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-items-center">
            <button
              type="button"
              onClick={() => onRemoveItem()}
              className="bg-theme-cart rounded cursor-pointer p-1 lg:p-0.5 grid items-center justify-items-center active:scale-90"
            >
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
