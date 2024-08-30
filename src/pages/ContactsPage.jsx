import { useDispatch, useSelector } from "react-redux"
import Title from "../components/Title/Title"
import { selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";


const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <div>
            <Title>Your Phonebook</Title>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList />
        </div>
    )
}

export default ContactsPage
