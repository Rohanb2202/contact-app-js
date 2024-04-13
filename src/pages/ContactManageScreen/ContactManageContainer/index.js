import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getContactList } from '../../../reduxStore/ActionsLayout/actions.js';
import Spinner from '../../../utility/Spinners/spinner.js';
import ContactManageForm from '../ContactManageForm';
import { CreateContact } from '../../../reduxStore/ReducersLayout/CreateContactSlice/createContactSlice';
import { UpdateContact } from '../../../reduxStore/ReducersLayout/UpdateContactSlice/UpdateContactSlice.js';

const ContactManageContainer = () => {

    const dispatch = useDispatch();
    const { contactId } = useParams();
    const [fetchedCurrentUserData, setFetchedCurrentUserData] = useState(null);
    let fetchedContactListData = useSelector((state) => (state.contactList));

    useEffect(() => {
        if (contactId) {
            if (!fetchedContactListData || fetchedContactListData?.contactListData?.length === 0) {
                dispatch(getContactList());
            }
        }
    }, [dispatch, fetchedContactListData]);

    useEffect(() => {
        if (contactId) {
            if (fetchedContactListData && fetchedContactListData?.contactListData?.length > 0) {
                const contact = fetchedContactListData?.contactListData?.find((item) => item.id === parseInt(contactId));
                setFetchedCurrentUserData(contact);
            } else {
                setFetchedCurrentUserData(null);
            }
        }
    }, [fetchedContactListData, contactId]);

    /* Submit Form */
    const handleSubmit = (data) => {

        if (contactId) {
            const contactGenerator = { ...data, id: parseInt(contactId) }; // Generating new id
            dispatch(UpdateContact(contactGenerator));
        } else {
            const contactGenerator = { ...data, id: fetchedContactListData?.contactListData?.length + 1 }; // Generating new id
            dispatch(CreateContact(contactGenerator));
        }

    };

    if (contactId && fetchedContactListData.isLoading) {
        return <Spinner isLoading={fetchedContactListData.isLoading} />
    } else {
        return (
            <div className='app_container'>
                <div className='contactListTable' style={{ width: '50vw', height: '60vh', display: 'flex', justifyContent: 'center' }}>
                    <ContactManageForm
                        onSubmit={handleSubmit}
                        paramId={contactId}
                        currentContactData={fetchedCurrentUserData}
                    />
                </div>
            </div>
        );
    }

};

export default ContactManageContainer;