import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md';

function ProductListItem(props) {
    const { product } = props;
    return (
        <div className='col col-12 col-md-6 col-lg-3 my-2'>
            <div className="card mx-auto w-100" style={{ width: '18rem', minHeight: '30rem' }}>
                <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '18rem' }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                    <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`}><span style={{ fontSize: '1.5rem' }}>Details <MdKeyboardArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
}

export default ProductListItem;