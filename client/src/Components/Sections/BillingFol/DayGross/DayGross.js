import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DayGross.css'
import FinalBill from '../FinalBill';
import { fetchDayBills } from '../../../../Redux/actions';
import moment from 'moment';

const DayGross = () => {
    const dispatch = useDispatch();
    const { totalDayBills } = useSelector((state) => state.itemsStore);
    const [showDate, setShowDate] = useState();
    const [tableResponse, setTableResponse] = useState([]);

    const convertDateTime = (inputTime) => {
        let outputTime = moment(inputTime).format('MM/DD/YYYY');
        return outputTime;
    }

    useEffect(() => {
        //get the Bills for a whole day
        dispatch(fetchDayBills()).then((resp) => {
            if(resp?.payload) {
                const filteredBills = resp?.payload.filter(bill => convertDateTime(bill.billDate) === convertDateTime(new Date()));
                setTableResponse(filteredBills);
            }
        })
        setShowDate(moment(new Date()).format('DD/MM/YYYY'));
    }, []);

    const calculateDayTotal = (bills) => {
        return bills?.reduce((acc, currBill) => acc + currBill.billAmount, 0);
    }

    return (
        <div className='dayGross-header-container'>
            <div className='title-container'>
                <h2 className='bill-title'>Today's Bill</h2>
                <p className='bill-date'>- {showDate}</p>
            </div>
                {totalDayBills?.length ? (
                    <div className='gross-table-view'>
                    <table>
                        <thead>
                            <tr>
                                <th>Bill Number</th>
                                <th>Bill Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableResponse?.length ? (
                                tableResponse.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.billNum}</td>
                                        <td>{item.billAmount}</td>
                                    </tr>
                                ))
                            ) : (
                                <div className='no-style'>
                                    <p>No bills</p>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>
                ) : (
                    <div className='no-style'>
                        <p>No bills</p>
                    </div>
                )}
            <div className='dayGross-footer-container'>
                {tableResponse?.length ? <p className='display-day-gross'>Day Gross: {calculateDayTotal(tableResponse)}/-</p> : ''}
            </div>
        </div>
    )
}

export default DayGross
