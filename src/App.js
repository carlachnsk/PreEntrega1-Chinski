import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App () {

    return  (
        <>

        <div className="App">
        <header className="app-header">
            <NavBar />
            <ItemListContainer greeting ={'Bienvenidos a SeatHero'} />
    
        
        </header>
        </div>


        </>
    )
}
console.log('Hola')

export default App;