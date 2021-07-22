import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <Router>
            <Switch>
                <>
                    <NavBar/>
                    <Route exact path="/">
                        <ItemListContainer filter="0"/>
                    </Route>
                    <Route exact path="/:item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/category/:id">
                        <ItemListContainer/>
                    </Route>
                </>
            </Switch>
        </Router>
    );
}

export default App;
