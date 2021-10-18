import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui';
import Cart from '../Cart/Cart';

const MainHeader = props => {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cartQty = useSelector(state => state.cart.totalQuantity);
    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    };

    return (
        <div className="sticky top-0">
            <header className="bg-indigo-800">
                <div className="container mx-auto flex items-center p-4">
                    <h1 className="text-2xl">FoodyApp</h1>
                    <nav className="flex ml-auto">
                        <button onClick={toggleCartHandler} type="button" className="btn-gray">Cart ({cartQty})</button>
                    </nav>
                </div>
            </header>
            {showCart && <Cart />}
        </div>
    )
}

export default MainHeader
