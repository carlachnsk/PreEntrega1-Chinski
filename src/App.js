import './App.css';
import ItemList from './components/ItemList/ItemList.js';
import ItemDetail from './ItemDetail.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Checkout.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar'



function App () {

return (

<App>
    <BrowserRouter>

    <NavBar />
        <Routes>

        <Route path='/'></Route>
        <Route path='./item/:id' element={<ItemDetailContainer></ItemDetailContainer>} />
        <Route path='./Item/ItemDetail.js' element={<ItemDetail></ItemDetail> } />
        <Route path='./src/ItemDetailContainer.js' element={<Container/>} />
        <Route path='./src/ItemDetailContainer.js' element={<Container/>} />
        <Route path='./src/components/Checkout.js' element={<Checkout></Checkout>} />
        <Route path='./src/components/ItemList/ItemListContainer.js' element={<ItemList/>} />
        <Route path='./utils/NavBar.js' element={<NavBar/>} />
        

        </Routes>

</BrowserRouter>

</App>

);
};

export default App;