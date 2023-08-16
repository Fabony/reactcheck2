
import './App.css';
import Card from 'react-bootstrap/Card';
import Product from './Components/Product/'
import Discription from './Components/productDiscription';
import Image from './Components/productImage';
import Name from './Components/productName';
import Price from './Components/productPrice';


function App() {
  const firstName = "Onyema Fabian"

  return (
  
    
       <div className='Appe'>

      <Card className="text-center">
      <Card.Header style={{color:"red"}}><h1>My Cards Display</h1></Card.Header>
      <Card.Body>
          <Image productImage={Product.image} />
          <Name productName={Product.name} />
          <Discription productDescription={Product.description} />
          <Price productPrice={Product.price} />
      </Card.Body>
      <Card.Footer className="text-muted"><h3 style={{color:"green"}}>6 days ago</h3></Card.Footer>
    </Card>
    <div className="apt">Hello, {firstName ? firstName : "there"}!</div>
      {firstName && <Image productImage={Product.image} />}

      </div>
  
    
  )
}




    



export default App
