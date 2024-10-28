import React, { useState } from 'react';
import './BillingHome.css';
import { useDispatch, useSelector } from 'react-redux';
import SectionOne from './Sections/SectionOne/SectionOne';
import FinalBill from './Sections/BillingFol/FinalBill';
import SectionTwo from './Sections/SectionTwo/SectionTwo';
import ErrorPopup from './ErrorComp/ErrorPopup';
import item1 from '../assests/non-veg-items/chicken-dum-biryani.jpg';
import item2 from '../assests/non-veg-items/chicken-fried-biriyani.jpeg';
import item3 from '../assests/non-veg-items/chicken-with-bagara.jpg';
import item4 from '../assests/non-veg-items/chicken-curry.jpg';
import item5 from '../assests/non-veg-items/chicken-fry-curry.jpg';
import item6 from '../assests/non-veg-items/notukodi-curry.jpg';
import item7 from '../assests/non-veg-items/gongura-chicken.jpeg';
import item8 from '../assests/non-veg-items/mutton-curry.jpg';
import item9 from '../assests/non-veg-items/mutton-fry.jpg';
import item10 from '../assests/non-veg-items/egg-curry.jpg';
import item11 from '../assests/veg-items/full-meals.jpg';
import item12 from '../assests/veg-items/paneer-curry.jpg';
import item13 from '../assests/veg-items/mushroom-curry.jpg';
import item14 from '../assests/veg-items/bendi-frry.jpeg';
import item15 from '../assests/veg-items/curd-rice.jpg';
import item16 from '../assests/veg-items/potato-fry.jpg';
import item17 from '../assests/veg-items/tomato-pappu.jpg';
import item18 from '../assests/veg-items/rasam.jpeg';
import item19 from '../assests/veg-items/pulihora.jpg';
import item20 from '../assests/veg-items/bhagara-rice.jpg';
import { setInvoiceDataReducer } from '../Redux/slice';

const BillingHome = () => {
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState('non-veg');
  const [isError, setIsError] = useState(false);

  const { countVItem1, countVItem2, countVItem3, countVItem4, countVItem5, countVItem6, countVItem7, countVItem8, countVItem9, countVItem10, 
    countNVItem1, countNVItem2, countNVItem3, countNVItem4, countNVItem5, countNVItem6, countNVItem7, countNVItem8, 
    countNVItem9, countNVItem10 } = useSelector((state) => state.itemsStore);

  const handleNavbarClick = (section) => {
    setActiveSection(section);
  };

  const invoiceData = [
    { id: 1, item_Name: 'Chicken Dum Biriyani', itemImg: item1, quantity: countNVItem1, price: 100 },
    { id: 2, item_Name: 'Chicken Fried Biriyani', itemImg: item2, quantity: countNVItem2, price: 200 },
    { id: 3, item_Name: 'Chicken with Bagara', itemImg: item3, quantity: countNVItem3, price: 400 },
    { id: 4, item_Name: 'Chicken Curry', itemImg: item4, quantity: countNVItem4, price: 150 },
    { id: 5, item_Name: 'Chicken Fry Curry', itemImg: item5, quantity: countNVItem5, price: 100 },
    { id: 6, item_Name: 'Natukodi Curry', itemImg: item6, quantity: countNVItem6, price: 200 },
    { id: 7, item_Name: 'Gongura Chicken', itemImg: item7, quantity: countNVItem7, price: 400 },
    { id: 8, item_Name: 'Mutton Curry', itemImg: item8, quantity: countNVItem8, price: 150 },
    { id: 9, item_Name: 'Mutton Fry Curry', itemImg: item9, quantity: countNVItem9, price: 150 },
    { id: 10, item_Name: 'Egg Curry', itemImg: item10, quantity: countNVItem10, price: 150 },
    { id: 11, item_Name: 'Veg - Full Meals', itemImg: item11, quantity: countVItem1, price: 100 },
    { id: 12, item_Name: 'Paneer Curry', itemImg: item12, quantity: countVItem2, price: 200 },
    { id: 13, item_Name: 'Mushroom Curry', itemImg: item13, quantity: countVItem3, price: 400 },
    { id: 14, item_Name: 'Bendi Fry', itemImg: item14, quantity: countVItem4, price: 150 },
    { id: 15, item_Name: 'Curd Rice', itemImg: item15, quantity: countVItem5, price: 100 },
    { id: 16, item_Name: 'Potato Fry', itemImg: item16, quantity: countVItem6, price: 200 },
    { id: 17, item_Name: 'Tomato Pappu / Dal', itemImg: item17, quantity: countVItem7, price: 400 },
    { id: 18, item_Name: 'Rasam', itemImg: item18, quantity: countVItem8, price: 150 },
    { id: 19, item_Name: 'Pulihora', itemImg: item19, quantity: countVItem9, price: 150 },
    { id: 20, item_Name: 'Bagara Rice', itemImg: item20, quantity: countVItem10, price: 150 },
  ];

  const toInvoicePage = () => {
    if (countNVItem1 > 0 || countNVItem2 > 0 || countNVItem3 > 0 || countNVItem4 > 0 ||
      countNVItem5 > 0 || countNVItem6 > 0 || countNVItem7 > 0 || countNVItem8 > 0 || 
      countVItem1 > 0 || countVItem2 > 0 || countVItem3 > 0 || countVItem4 > 0 || 
      countVItem5 > 0 || countVItem6 > 0 || countVItem7 > 0 || countVItem8 > 0) {
      setIsError(false); // close the error popup
      dispatch(setInvoiceDataReducer(invoiceData));
    } else {
      setIsError(true);
    }
  }

  const handleClose = () => {
    setIsError(false);
  }

  return (
    <div className='container'>
      <div className='page-container'>
        <header className='header-container'>
          <h1 className='test-title'>SRI SUNANDA MECHANAS.S</h1>
        </header>
        <main className='main-container'>
          <section className='section1-container'>
            <nav className='nav-container'>
              <button className='nonVeg-button' onClick={() => handleNavbarClick('non-veg')}>Non-Veg</button>
              <button className='veg-button' onClick={() => handleNavbarClick('veg')}>Veg</button>
            </nav>

            <div>
              {activeSection === 'non-veg' && (
                <div className="section">
                  <SectionOne />
                </div>
              )}
              {activeSection === 'veg' && (
                <div className="section">
                  <SectionTwo />
                </div>
              )}
            </div>
            <div className='section1-checkout-container'>
              <button className='section1-checkout-btn' onClick={toInvoicePage}>Add to cart</button>
              {isError && (
                <ErrorPopup
                  message="Choose atleast 1 item"
                  onClose={handleClose}
                />
              )}
            </div>
          </section>

          <section className='section2-container'>
            <FinalBill />
          </section>

        </main>
        {/* <footer className='footer-container'>

        </footer> */}
      </div>
    </div>
  )
}

export default BillingHome
