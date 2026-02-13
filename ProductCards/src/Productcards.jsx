import './Productcards.css'
function Productcards(){
    return(
        <>
            <h1>Product cards</h1>
            <div className='card'>
                <h2>Wireless Mouse</h2>
                <p>Price : 129.99</p>
                <p>In Stock</p>
            </div>
            <div className='card'>
                <h2>kaju Briyani Masala</h2>
                <p>Price : 138.99</p>
                <p>In Stock</p>
            </div>
            <div className='card'>
                <h2>Bread Alwa </h2>
                <p>Price : 12.99</p>
                <p>Out Stock</p>
            </div>
        </>
        
    );
}
export default Productcards;
