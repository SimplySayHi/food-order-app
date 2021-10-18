import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const Cart = props => {
    const items = useSelector(state => state.cart.items);
    const sendOrderHandler = () => {
        console.log('ORDER SENT!');
    };
    let cartContent = <div className="mx-auto p-4">Cart is empty!</div>;

    if( items.length > 0 ){
        cartContent = (
            <div className="flex items-center">
                <div className="flex-1 flex overflow-auto">
                    {items.map(item => (
                        <CartItem 
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
                <div className="p-4">
                    <button onClick={sendOrderHandler} className="btn-indigo">SEND ORDER</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto">
                {cartContent}
            </div>
        </div>
    )
}

export default Cart
