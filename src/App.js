import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "./Components/Header/Header";
import Books from "./Components/Books/Books";
import SelectedBook from "./Components/SelectedBook/SelectedBook";
import Spinner from "./Components/Spinner/Spinner";
import { getBooksOperation } from "./redux/operations/getBooksOperation";

import "./App.css";


function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBooksOperation());
   }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {loader && <Spinner/>}
      <Switch>
        {!loader && <Route exact path="/" component={Books} />}       
        {!loader && <Route exact path="/selected-book" component={SelectedBook} />}
      </Switch>
    </div>
  );
}

export default App;
