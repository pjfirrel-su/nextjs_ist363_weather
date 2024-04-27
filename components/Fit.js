const Fit = ({ amount }) => {

    let response;
    
    if (amount < 30) {
        response = "Bundle Up!";
    } else if (amount >= 30 && amount < 40) {
        response = "Jacket and Hoodie";
    } else if (amount >= 40 && amount < 50) {
        response = "Hoodie and Pants";
    } else if (amount >= 50 && amount < 70) {
        response = "Hoodie and Shorts or T Shirt and Pants";
    } else if (amount >= 70) {
        response = "T Shirt and Shorts";
    }
    
    return (
        <div>
            <p>Recommended Fit:</p>
            <br />
            <p>{response}</p>
        </div>
    );
}

export default Fit;