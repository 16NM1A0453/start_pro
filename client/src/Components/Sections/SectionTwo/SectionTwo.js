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
    const items = [
        { name: 'Veg - Full Meals', count: countVItem1, setCount: setCountVItem1 },
        { name: 'Paneer Curry', count: countVItem2, setCount: setCountVItem2 },
        { name: 'Mushroom Curry', count: countVItem3, setCount: setCountVItem3 },
        { name: 'Bendi Curry', count: countVItem4, setCount: setCountVItem4 },
        { name: 'Curd Rice', count: countVItem5, setCount: setCountVItem5 },
        { name: 'Potato Fry', count: countVItem6, setCount: setCountVItem6 },
        { name: 'Tomato Pappu / Dal', count: countVItem7, setCount: setCountVItem7 },
        { name: 'Rasam', count: countVItem8, setCount: setCountVItem8 },
        { name: 'Pulihora', count: countVItem9, setCount: setCountVItem9 },
        { name: 'Bagara Rice', count: countVItem10, setCount: setCountVItem10 },
    ];
    return (
        <div className='sectionTwo-container'>
            <div className='sectionTwo-main-container'>
                <div className='sectionTwo-items-container'>
                {items.map((item, index) => (
                        <div key={index} className='sectionTwo-addItem'>
                            <span className='item-name'>{item.name}</span>
                            <div className='add-buttons'>
                                <button className='sectionTwo-minus-btn' onClick={() => item.count > 0 && dispatch(item.setCount(item.count - 1))}>
                                    -
                                </button>
                                <span className='sectionTwo-count-class'>{item.count}</span>
                                <button className='sectionTwo-plus-btn' onClick={() => dispatch(item.setCount(item.count + 1))}>
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
