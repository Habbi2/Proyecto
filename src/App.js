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
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/tetris/:id">
                        <ItemDetailContainer id='1'/>
                    </Route>
                    <Route exact path="/roguelike/:id">
                        <ItemDetailContainer id='2'/>
                    </Route>
                    <Route exact path="/infinite-runner/:id">
                        <ItemDetailContainer id='3'/>
                    </Route>
                </>
            </Switch>
        </Router>
    );
}

export default App;
