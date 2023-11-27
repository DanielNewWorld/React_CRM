import './App.css';
import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Admin/Login/Login";
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";

//const UsersContainer = React.lazy(() => import("./components/Users/UserContainer"));

class App extends Component {
    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert("Some error occured");
        console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        //this.props.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        // if (!this.props.initialized) {
        //   return <Preloader/>
        // }

        return (
            <div className='gridApp'>
                <HeaderContainer/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/admin' element={<AdminPanel/>}/>
                </Routes>
                <FooterContainer/>
            </div>
        );
    }
}

export default App;