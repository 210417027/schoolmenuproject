import React from 'react';
import { useGlobalContext_xx } from '../pages/order/Context_27';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const {amount} = useGlobalContext_xx()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get('inputValue');



  return (
    <nav>
      <div className='nav-center'>
      <h3 className="tablenumber">歡迎來到點餐頁面 結帳請按頁面下方送出按鈕 您的桌號：{inputValue}</h3>
        {/* <h3>Order Menu</h3> */}
        <div className='nav-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
        <div className='nav-container2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
    
  );
  
};

export default Navbar;
