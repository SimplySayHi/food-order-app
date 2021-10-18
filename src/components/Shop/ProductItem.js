
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const ProductItem = props => {
    const dispatch = useDispatch();
    const { id, title, price, description, image = 'https://via.placeholder.com/200x200' } = props;

    const addToCartHandler = () => {
        const item = { id, title, price, description, image };
        dispatch(cartActions.addItemToCart(item));
    };

    return (
        <div className="flex flex-start flex-col md:flex-row items-center my-6 bg-white text-gray-400 rounded-lg overflow-hidden shadow-md">
            <div className="flex-shrink-0 w-48 h-48">
                <img src={image} className="w-full h-full" alt="" />
            </div>
            <div className="w-full flex-1 p-4">
                <h3 className="text-2xl font-bold text-indigo-800">{title}</h3>
                <p>{description}</p>
            </div>
            <div className="flex-shrink-0 self-stretch p-4 text-center flex flex-col">
                <h4 className="font-bold text-black text-xl mb-3">&euro; {price.toFixed(2)}</h4>
                <button onClick={addToCartHandler} className="btn-indigo mt-auto">ADD</button>
            </div>
        </div>
    )
}

export default ProductItem
