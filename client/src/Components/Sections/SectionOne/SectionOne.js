import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SectionOne.css'
import { setInvoiceDataReducer, setCountNVItem1, setCountNVItem2, setCountNVItem3, setCountNVItem4, setCountNVItem5,
     setCountNVItem6, setCountNVItem7, setCountNVItem8, setCountNVItem9, setCountNVItem10 } from '../../../Redux/slice';
import ErrorPopup from '../../ErrorComp/ErrorPopup';

const SectionOne = () => {
    const dispatch = useDispatch();
    const { countNVItem1, countNVItem2, countNVItem3, countNVItem4, countNVItem5, countNVItem6, countNVItem7, countNVItem8, countNVItem9, countNVItem10 } = useSelector((state) => state.itemsStore);
    const items = [
        { name: 'Chicken Dum Biriyani', count: countNVItem1, setCount: setCountNVItem1 },
        { name: 'Chicken Fried Biriyani', count: countNVItem2, setCount: setCountNVItem2 },
        { name: 'Chicken with Bagara', count: countNVItem3, setCount: setCountNVItem3 },
        { name: 'Chicken Curry', count: countNVItem4, setCount: setCountNVItem4 },
        { name: 'Chicken Fry Curry', count: countNVItem5, setCount: setCountNVItem5 },
        { name: 'Natukodi Curry', count: countNVItem6, setCount: setCountNVItem6 },
        { name: 'Gongura Chicken', count: countNVItem7, setCount: setCountNVItem7 },
        { name: 'Mutton Curry', count: countNVItem8, setCount: setCountNVItem8 },
        { name: 'Mutton Fry Curry', count: countNVItem9, setCount: setCountNVItem9 },
        { name: 'Egg Curry', count: countNVItem10, setCount: setCountNVItem10 },
    ];

    return (
        <div className='sectionOne-container'>
            <div className='sectionOne-main-container'>
                <div className='sectionOne-items-container'>
                    {items.map((item, index) => (
                        <div key={index} className='sectionOne-addItem'>
                            <span className='item-name'>{item.name}</span>
                            <div className='add-buttons'>
                                <button className='sectionOne-minus-btn' onClick={() => item.count > 0 && dispatch(item.setCount(item.count - 1))}>
                                    -
                                </button>
                                <span className='sectionOne-count-class'>{item.count}</span>
                                <button className='sectionOne-plus-btn' onClick={() => dispatch(item.setCount(item.count + 1))}>
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

export default SectionOne
