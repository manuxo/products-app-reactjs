import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PRODUCTS_BASE_URL } from "../common/Constants";

function ProductDetailsPage() {
    let urlParams = useParams();
    const { id } = urlParams;

    const [product, setProduct] = useState(null);

    const getProduct = async () => {
        const productRes = await fetch(`${PRODUCTS_BASE_URL}/${id}`);
        const productData = await productRes.json();
        console.log(productData);
        const product = productData;
        setProduct(product);
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (<>
        <div className='row'>
            <div className='col col-sm-12 col-lg-4 mx-auto text-center'>
                <h4>Product Details</h4>
            </div>
        </div>
        <div className="row">
            <div className="col col-sm-12 col-lg-6 mx-auto my-4">
                <Link style={{textDecoration: 'none'}} to="/"><span style={{ fontSize: '1.5rem' }}><MdKeyboardArrowLeft /> Back</span></Link>
                <div className="card w-100 my-2">
                    <div className="card-body">
                        <h5 className="card-title">{product?.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product?.brand}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Category: {product?.category}</h6>
                        <div id="productCarousel" className="carousel slide carousel-fade carousel-dark" data-bs-interval="false">
                            <div className="carousel-inner">
                                {product?.images?.map((imgSrc, index) => {
                                    const imgClassName = index > 0 ? "carousel-item" : "carousel-item active";
                                    return (
                                        <div key={`product_${product?.id}_img_${index + 1}`} className={imgClassName}>
                                            <img style={{ height: '18rem', width: '75%', objectFit: 'fill' }} src={imgSrc} className="d-block w-100" alt="..." />
                                        </div>
                                    );
                                })}
                            </div>
                            {(product?.images?.length > 1) && (<>
                                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </>)}
                        </div>
                        <p className="card-text">{product?.description}</p>
                        <p className="text-primary" style={{ fontWeight: 'bold' }}>&bull;&nbsp;&nbsp;Exclusive web price: ${product?.price}</p>
                        <button className="btn btn-primary btn-">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ProductDetailsPage;