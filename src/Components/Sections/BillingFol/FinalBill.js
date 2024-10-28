import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../../Redux/slice';
import './FinalBill.css'

const FinalBill = () => {
  const dispatch = useDispatch();
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


  //to print the invoice
  const handlePrint = () => {
    if (totalItems?.length) {
      window.print();
    }
  };

  return (
    <div className='finalBill-container'>
      <div className='finalBill-main-container'>
        <h3 className='finalBill-title'>Total Items</h3>
        <div className='finalBill-invoice-table'>
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
                <div style={{color: 'black'}}>No Items Added</div>
              )}
            </tbody>
          </table>
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
        <div className='finalBill-show-total'>
          {totalItems?.length ? <div className='displayTotal'>Total: {calculateTotal(totalItems)}/-</div> : ''}
        </div>
        <div className='finalBill-print-container'>
          {totalItems?.length ? <button className='finalBill-print-button' onClick={handlePrint}>Print</button> : ''}
        </div>
      </div>
    </div>
  )
}

export default FinalBill
