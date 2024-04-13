import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../../reduxStore/ActionsLayout/actions.js';
import ContacListQueries from '../QueryInsertModule/index.js';

const ContactListContainer = (props) => {

    let dispatch = useDispatch();
    let fetchedContactListData = useSelector((state) => (state.contactList));

    useEffect(() => {
        dispatch(getContactList());
    }, [!(fetchedContactListData)]);

    return (
        <div className='app_container'>

            {/* <div className='main_outer_card_container'> */}
            {/* <div className='main_outer_card'> */}
            {/* <div className='main_inner_card'> */}

            <ContacListQueries
                isLoading={fetchedContactListData.isLoading}
                contactListData={fetchedContactListData.contactListData}
            />

            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

        </div>
    );

};

export default ContactListContainer;