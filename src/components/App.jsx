import { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export const App = () => {
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {!contacts.length ? (
        <div className="noContacts">NO CONTACTS IN BOOK</div>
      ) : (
        <div className="container">
          <Filter />
          <h2>Contacts</h2>
          {<ContactList />}
        </div>
      )}
    </div>
  );
};
