function SearchBox(props) {
    const { value, onChange } = props;
    return (
        <div className='row'>
            <div className='col col-sm-12 col-lg-6 mx-auto'>
                <form className='form'>
                    <div className="mb-3">
                        <input value={value} onChange={onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search for products...' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBox;