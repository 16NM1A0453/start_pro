import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import item1 from '../../../assests/veg-items/full-meals.jpg';
import item2 from '../../../assests/veg-items/paneer-curry.jpg';
import item3 from '../../../assests/veg-items/mushroom-curry.jpg';
import item4 from '../../../assests/veg-items/bendi-frry.jpeg';
import item5 from '../../../assests/veg-items/curd-rice.jpg';
import item6 from '../../../assests/veg-items/potato-fry.jpg';
import item7 from '../../../assests/veg-items/tomato-pappu.jpg';
import item8 from '../../../assests/veg-items/rasam.jpeg';
import item9 from '../../../assests/veg-items/pulihora.jpg';
import item10 from '../../../assests/veg-items/bhagara-rice.jpg';
import './SectionTwo.css'
import { setCountVItem1, setCountVItem2, setCountVItem3, setCountVItem4, setCountVItem5,
     setCountVItem6, setCountVItem7, setCountVItem8, setCountVItem9, setCountVItem10 } from '../../../Redux/slice';
import ErrorPopup from '../../ErrorComp/ErrorPopup';
import { setInvoiceDataReducer } from '../../../Redux/slice';

const SectionTwo = () => {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);
    const { countVItem1, countVItem2, countVItem3, countVItem4, countVItem5, countVItem6, countVItem7, countVItem8, countVItem9, countVItem10 } = useSelector((state) => state.itemsStore);

    return (
        <div className='sectionTwo-container'>
            <div className='sectionTwo-main-container'>
                <div className='sectionTwo-items-container'>
                    {/* row one */}
                    <div className='sectionTwo-row-one'>
                        <div className='sectionTwo-item1-class'>
                            <img src={item1} alt="Veg - Full Meals" className='sectionTwo-item1-img' />
                            <p className='item-name'>Veg - Full Meals</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem1 > 0) && dispatch(setCountVItem1(countVItem1 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem1}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem1(countVItem1 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item2-class'>
                            <img src={item2} alt="Paneer Curry" className='sectionTwo-item2-img' />
                            <p className='item-name'>Paneer Curry</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem2 > 0) && dispatch(setCountVItem2(countVItem2 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem2}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem2(countVItem2 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item3-class'>
                            <img src={item3} alt="Mushroom Curry" className='sectionTwo-item3-img' />
                            <p className='item-name'>Mushroom Curry</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem3 > 0) && dispatch(setCountVItem3(countVItem3 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem3}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem3(countVItem3 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item4-class'>
                        <img src={item4} alt="Bendi Curry" className='sectionTwo-item4-img' />
                        <p className='item-name'>Bendi Curry</p>
                        <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem4 > 0) && dispatch(setCountVItem4(countVItem4 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem4}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem4(countVItem4 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                    {/* row two */}
                    <div className='sectionTwo-row-two'>
                        <div className='sectionTwo-item5-class'>
                            <img src={item5} alt="Curd Rice" className='sectionTwo-item5-img' />
                            <p className='item-name'>Curd Rice</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem5 > 0) && dispatch(setCountVItem5(countVItem5 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem5}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem5(countVItem5 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item6-class'>
                            <img src={item6} alt="Potato Fry" className='sectionTwo-item6-img' />
                            <p className='item-name'>Potato Fry</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem6 > 0) && dispatch(setCountVItem6(countVItem6 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem6}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem6(countVItem6 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item7-class'>
                            <img src={item7} alt="Dal/Tomato Pappu" className='sectionTwo-item7-img' />
                            <p className='item-name'>Tomato Pappu / Dal</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem7 > 0) && dispatch(setCountVItem7(countVItem7 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem7}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem7(countVItem7 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item8-class'>
                            <img src={item8} alt="Rasam" className='sectionTwo-item8-img' />
                            <p className='item-name'>Rasam</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem8 > 0) && dispatch(setCountVItem8(countVItem8 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem8}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem8(countVItem8 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                    {/* row three */}
                    <div className='sectionTwo-row-three'>
                        <div className='sectionTwo-item9-class'>
                            <img src={item9} alt="Pulihora" className='sectionTwo-item9-img' />
                            <p className='item-name'>Pulihora</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem9 > 0) && dispatch(setCountVItem9(countVItem9 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem9}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem9(countVItem9 + 1))}>+</button>
                            </div>
                        </div>

                        <div className='sectionTwo-item10-class'>
                            <img src={item10} alt="Bagara Rice" className='sectionTwo-item10-img' />
                            <p className='item-name'>Bagara Rice</p>
                            <div className='sectionTwo-addItem'>
                                <button className='sectionTwo-minus-btn' onClick={() => (countVItem10 > 0) && dispatch(setCountVItem10(countVItem10 - 1))}>-</button>
                                <span className='sectionTwo-count-class'>{countVItem10}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(setCountVItem10(countVItem10 + 1))}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
