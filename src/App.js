import { Component } from "react";
import { useSelector, connect } from "react-redux";
import Navbar from "./Components/Navigation/Navbar.js";
import MobileNavbar from "./Components/Navigation/MobileNavbar.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";


class App extends Component{
  constructor(props){
    super(props);

    this.media_query = window.matchMedia("(min-width: 768px)")

    this.state = {
      navbar: this.media_query.matches ? <Navbar /> : <MobileNavbar />,
    }
  }

  handleMediaChange(event){
    this.setState({navbar: this.media_query.matches ? <Navbar /> : <MobileNavbar />,});
  }

  componentDidMount(){
    this.media_query.addEventListener("change", this.handleMediaChange.bind(this));
  }

  render(){
    return(
      <BrowserRouter>
        { this.state.navbar }
      </BrowserRouter>
    );
  }
};

export default App;