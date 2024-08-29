// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from './redux/contacts/operations';


// import ContactList from './components/ContactList/ContactList';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactForm from './components/ContactForm/ContactForm';
// import Title from './components/Title/Title'

import './App.css'
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';



const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);

  // useEffect(() => {
  //   dispatch(fetchContacts());

  // }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegistrationPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/contacts' element={<ContactsPage />} />
    </Routes>
    // <div>
    //   <Title />
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <ContactList />
    // </div>
  );

}


export default App;