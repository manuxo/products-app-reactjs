import ProductListItem from "./ProductListItem";

function ProductList(props) {
    const { products } = props;
    return (<div className='row'>
        {products?.map(p => (
            <ProductListItem key={p.id} product={p}/>
        ))}
    </div>);
}

export default ProductList;