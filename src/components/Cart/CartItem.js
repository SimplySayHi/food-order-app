import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartItem = props => {
    const dispatch = useDispatch();
    const { id, title, quantity, price, totalPrice } = props.item;
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    };
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id, title, price
        }));
    };

    return (
        <div key={id} className="flex-shrink-0 m-4 w-64 p-4 rounded-lg border-2 border-purple-100">
            <h3 className="text-xl font-bold text-indigo-800">{title}</h3>
            <p>
                &euro;{totalPrice}
            </p>
            <div className="flex mt-4">
                <button onClick={removeItemHandler} className="btn-indigo btn-circle p-0 flex-shrink-0 -mr-4 relative text-lg">-</button>
                <span className="w-full border-b-2 border-indigo-900 text-center flex items-center justify-center"
                >
                    x{quantity}
                </span>
                <button onClick={addItemHandler} className="btn-indigo btn-circle p-0 flex-shrink-0 -ml-4 relative text-lg">+</button>
            </div>
        </div>
    )
}

export default CartItem
