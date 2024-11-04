import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, setCountNVItem1, setCountNVItem10, setCountNVItem2, setCountNVItem3, setCountNVItem4, 
  setCountNVItem5, setCountNVItem6, setCountNVItem7, setCountNVItem8, setCountNVItem9, setInvoiceDataReducer, setCountVItem1, setCountVItem10, setCountVItem2, setCountVItem3, setCountVItem4, setCountVItem5, 
  setCountVItem6, setCountVItem7, setCountVItem8, setCountVItem9  } from '../../../Redux/slice';
import './FinalBill.css'
import { fetchAddBills, fetchDayBills } from '../../../Redux/actions';
import moment from 'moment';

const FinalBill = () => {
  const dispatch = useDispatch();
  //initial value is given as 0 for now later, the initial value should be based on billNum present in the db for the current date
  const [billNumber, setBillNumber] = useState(1);
  const [billTotalAmount, setBillTotalAmount] = useState(0);

  const { totalItems } = useSelector((state) => state.itemsStore);
  const filteredInvoiceData = totalItems?.filter(item => item.quantity > 0);

  //to calculate the grand total of the added items
  const calculateTotal = (items) => {
    return items?.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  //to completely remove the item
  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const convertDateTime = (inputTime) => {
    let outputTime = moment(inputTime).format('MM/DD/YYYY');
    return outputTime;
  }

  useEffect(() => {
    //get the Bills for a whole day
    // if(billNumber === 1)
    dispatch(fetchDayBills()).then((resp) => {
      if (resp?.payload) {
        //filters the bills according to the date
        const filteredBills = resp?.payload.filter(bill => convertDateTime(bill.billDate) === convertDateTime(new Date()));
        //calculates the highest bill number to proceed with the next bill
        const highestBillNumber = Math.max(...filteredBills.map(bill => bill.billNum));
        if (!isNaN(highestBillNumber)) {
          setBillNumber(highestBillNumber + 1);
        } else {
          setBillNumber(0);
        }
      }
    })
  }, []);

  //to print the invoice
  const handlePrint = async () => {
    if (totalItems?.length) {
      //generates sequential bill number
      setBillNumber(prevNumber => prevNumber + 1);
      const bill = {
        billNumber: billNumber,
        billDate: new Date(),
        billAmount: parseFloat(calculateTotal(totalItems)),
    };

      try {
        // const result = await axios.post('http://localhost:3000/addbill', bill);
        // console.log(result.data.id)
        dispatch(fetchAddBills(bill)).then((resp) => {
          if (resp?.payload?.id) {
              alert('Bill sent successfully with ID: ' + resp?.payload?.id);
              dispatch(setInvoiceDataReducer([]));
              dispatch(setCountNVItem1(0));
              dispatch(setCountNVItem2(0));
              dispatch(setCountNVItem3(0));
              dispatch(setCountNVItem4(0));
              dispatch(setCountNVItem5(0));
              dispatch(setCountNVItem6(0));
              dispatch(setCountNVItem7(0));
              dispatch(setCountNVItem8(0));
              dispatch(setCountNVItem9(0));
              dispatch(setCountNVItem10(0));
    
              dispatch(setCountVItem1(0));
              dispatch(setCountVItem2(0));
              dispatch(setCountVItem3(0));
              dispatch(setCountVItem4(0));
              dispatch(setCountVItem5(0));
              dispatch(setCountVItem6(0));
              dispatch(setCountVItem7(0));
              dispatch(setCountVItem8(0));
              dispatch(setCountVItem9(0));
              dispatch(setCountVItem10(0));
          }
        })
        
      } catch (error) {
        console.error('Error:', error);
        alert('Error sending bill: ' + error.message);
      }

      window.print();
    }
  };

  return (
    <div className='finalBill-container'>
      <div className='finalBill-main-container'>
        <div className='finalBill-invoice-table'>
          <div className='finalBill-normal-view'>
            <h3 className='finalBill-title'>Cart Items</h3>
            <div className='table-view'>
            <table className='finalBill-normal-table'>
              <tbody>
                {filteredInvoiceData?.length ? (
                  filteredInvoiceData.map((item, index) => (
                    <tr key={index}>
                      <td className='td-img'>
                        <img src={item.itemImg} alt={item.item_Name} className='item-img' />
                      </td>
                      <td>
                        <span className='item-quant'>
                          {item.item_Name} ({item.quantity})
                        </span>
                      </td>
                      <td><span className='item-total'>{(item.quantity * item.price)}/-</span></td>
                      <button onClick={() => handleRemoveItem(item.id)} className='removeItem-button'>X</button>
                    </tr>
                  ))
                ) : (
                  <div style={{ color: 'black' }}>No Items Added</div>
                )}
              </tbody>
            </table>
            </div>
          </div>
          <div className='finalBill-print-view'>
            <div className='res-address-col'>Address 1 lane, Shop no: 03, Nallaganda, Gopanapally</div>
            <div className='billing-details'>
              <div className='date-time-display'>Date: 29/10/2024</div>
              <div className='date-time-display'>Bill no: {billNumber}</div>
            </div>
            <h3 className='finalBill-title'>Total Items</h3>
            <table className='finalBill-print-table'>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {filteredInvoiceData?.length ? (
                  filteredInvoiceData?.map((item, index) => (
                    <tr key={index}>
                      <td className='td-img'>
                        <span className='item-text'>{item.item_Name}</span>
                      </td>
                      <td>
                        <span className='item-text'>{item.quantity} PC</span>
                      </td>
                      <td>{item.price}</td>
                      <td>{(item.quantity * item.price)}</td>
                    </tr>
                  ))
                ) : (
                  <div>No Items Added</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='finalBill-show-total'>
          {totalItems?.length ? <div className='displayTotal'>Grand Total: {calculateTotal(totalItems)}/-</div> : ''}
        </div>
        <div className='finalBill-print-container'>
          {totalItems?.length ? <button className='finalBill-print-button' onClick={handlePrint}>Print</button> : ''}
        </div>
      </div>
    </div>
  )
}

export default FinalBill
