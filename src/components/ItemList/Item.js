import Card from 'react-bootstrap/Card';


const Item = ({ product }) => {
    return (
<Card style= {{innerWidth: '20rem'}}>
        <Card.body>
    <Card.title>
        <Card.Text> ${product.price}</Card.Text>
        <Card.Text>${product.text}</Card.Text>
        <Card.Text>${product.description}</Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
    </Card.title>
        </Card.body>

</Card> 
    );
}

export default Item;