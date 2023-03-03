function SearchBox(props) {
    const { value, onChange } = props;
    return (
        <div className='row'>
            <div className='col col-sm-12 col-lg-6 mx-auto'>
                <div className="mb-3">
                    <input value={value} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search products...' />
                </div>
            </div>
        </div>
    );
}

export default SearchBox;