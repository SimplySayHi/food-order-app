
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'Pizza Margherita',
        description: 'This is a first product - amazing!'
    },
    {
        id: 'p2',
        price: 9,
        title: 'Pasta al Ragù',
        description: 'This is a second product - amazing!'
    },
    {
        id: 'p3',
        price: 4,
        title: 'Ceasar Salad',
        description: 'This is a third product - amazing!'
    },
    {
        id: 'p4',
        price: 5,
        title: 'Ice Cream',
        description: 'This is a fourth product - amazing!'
    },
    {
        id: 'p5',
        price: 8,
        title: 'Hamburger',
        description: 'This is a fifth product - amazing!'
    },
    {
        id: 'p6',
        price: 16,
        title: 'Steak',
        description: 'This is a sixth product - amazing!'
    },
    {
        id: 'p7',
        price: 6,
        title: 'Carrots',
        description: 'This is a seventh product - amazing!'
    }
];

const Products = (props) => {
    return (
        <div className="container max-w-3xl p-4 mx-auto">
            <div className="text-center mt-8 mb-12">
                <h2 className="text-4xl">Products List</h2>
                <p className="text-2xl font-light">Your favourite foods. In a tap.</p>
            </div>
            <div className="">
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
