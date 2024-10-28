import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import item1 from '../../../assests/non-veg-items/chicken-dum-biryani.jpg';
import item2 from '../../../assests/non-veg-items/chicken-fried-biriyani.jpeg';
import item3 from '../../../assests/non-veg-items/chicken-with-bagara.jpg';
import item4 from '../../../assests/non-veg-items/chicken-curry.jpg';
import item5 from '../../../assests/non-veg-items/chicken-fry-curry.jpg';
import item6 from '../../../assests/non-veg-items/notukodi-curry.jpg';
import item7 from '../../../assests/non-veg-items/gongura-chicken.jpeg';
import item8 from '../../../assests/non-veg-items/mutton-curry.jpg';
import item9 from '../../../assests/non-veg-items/mutton-fry.jpg';
import item10 from '../../../assests/non-veg-items/egg-curry.jpg';
import './SectionOne.css'
import { setInvoiceDataReducer, setCountNVItem1, setCountNVItem2, setCountNVItem3, setCountNVItem4, setCountNVItem5,
     setCountNVItem6, setCountNVItem7, setCountNVItem8, setCountNVItem9, setCountNVItem10 } from '../../../Redux/slice';
import ErrorPopup from '../../ErrorComp/ErrorPopup';

const SectionOne = () => {
    const dispatch = useDispatch();
    const { countNVItem1, countNVItem2, countNVItem3, countNVItem4, countNVItem5, countNVItem6, countNVItem7, countNVItem8, countNVItem9, countNVItem10 } = useSelector((state) => state.itemsStore);

    return (
        <div className='sectionOne-container'>
            <div className='sectionOne-main-container'>
                <div className='sectionOne-items-container'>
                    {/* row one */}
                    <div className='sectionOne-row-one'>
                        <div className='sectionOne-item1-class'>
                            <img src={item1} alt="Chicken Dum Biriyani" className='sectionOne-item1-img' />
                            <p className='item-name'>Chicken Dum Biriyani</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem1 > 0) && dispatch(setCountNVItem1(countNVItem1 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem1}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem1(countNVItem1 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item2-class'>
                            <img src={item2} alt="Chicken Fried Biriyani" className='sectionOne-item2-img' />
                            <p className='item-name'>Chicken Fried Biriyani</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem2 > 0) && dispatch(setCountNVItem2(countNVItem2 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem2}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem2(countNVItem2 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item3-class'>
                            <img src={item3} alt="Chicken with Bagara" className='sectionOne-item3-img' />
                            <p className='item-name'>Chicken with Bagara</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem3 > 0) && dispatch(setCountNVItem3(countNVItem3 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem3}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem3(countNVItem3 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item4-class'>
                        <img src={item4} alt="Chicken Curry" className='sectionOne-item4-img' />
                        <p className='item-name'>Chicken Curry</p>
                        <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem4 > 0) && dispatch(setCountNVItem4(countNVItem4 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem4}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem4(countNVItem4 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                    {/* row two */}
                    <div className='sectionOne-row-two'>
                        <div className='sectionOne-item5-class'>
                            <img src={item5} alt="Chicken Fry Curry" className='sectionOne-item5-img' />
                            <p className='item-name'>Chicken Fry Curry</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem5 > 0) && dispatch(setCountNVItem5(countNVItem5 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem5}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem5(countNVItem5 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item6-class'>
                            <img src={item6} alt="Natukodi Curry" className='sectionOne-item6-img' />
                            <p className='item-name'>Natukodi Curry</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem6 > 0) && dispatch(setCountNVItem6(countNVItem6 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem6}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem6(countNVItem6 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item7-class'>
                            <img src={item7} alt="Dosa display" className='sectionOne-item7-img' />
                            <p className='item-name'>Gongura Chicken</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem7 > 0) && dispatch(setCountNVItem7(countNVItem7 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem7}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem7(countNVItem7 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item8-class'>
                            <img src={item8} alt="Mutton Curry" className='sectionOne-item8-img' />
                            <p className='item-name'>Mutton Curry</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem8 > 0) && dispatch(setCountNVItem8(countNVItem8 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem8}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem8(countNVItem8 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                    {/* row three */}
                    <div className='sectionOne-row-three'>
                        <div className='sectionOne-item9-class'>
                            <img src={item9} alt="Mutton Fry Curry" className='sectionOne-item9-img' />
                            <p className='item-name'>Mutton Fry Curry</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem9 > 0) && dispatch(setCountNVItem9(countNVItem9 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem9}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem9(countNVItem9 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionOne-item10-class'>
                            <img src={item10} alt="Egg Curry" className='sectionOne-item10-img' />
                            <p className='item-name'>Egg Curry</p>
                            <div className='sectionOne-addItem'>
                                <button className='sectionOne-minus-btn' onClick={() => (countNVItem10 > 0) && dispatch(setCountNVItem10(countNVItem10 - 1))}>-</button>
                                <span className='sectionOne-count-class'>{countNVItem10}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(setCountNVItem10(countNVItem10 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
