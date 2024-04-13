import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../reduxStore/ActionsLayout/actions.js';
import Button from 'react-bootstrap/Button';
import { keyRoutes } from '../../components/RoutePaths/RouteConstant';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../utility/Spinners/spinner.js';

const PreviewSingleContact = () => {

    const [singleContactData, setSingleContactData] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchedContactListData = useSelector((state) => state.contactList);

    useEffect(() => {
        if (!fetchedContactListData || fetchedContactListData?.contactListData?.length === 0) {
            dispatch(getContactList());
        }
    }, [dispatch, fetchedContactListData]);

    useEffect(() => {
        if (fetchedContactListData && fetchedContactListData?.contactListData?.length > 0) {
            const contact = fetchedContactListData?.contactListData?.find((item) => item.id === parseInt(id));
            setSingleContactData(contact);
        } else {
            setSingleContactData(null);
        }
    }, [fetchedContactListData, id]);

    if (fetchedContactListData.isLoading) {
        return <Spinner isLoading={fetchedContactListData.isLoading} />
    }
    else {
        return (
            <div className='app_container'>
                <div className='contactListTable' style={{ width: '50vw', height: '60vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                    <div className="text-center mb-4">
                        <div className="col-lg-7 mx-auto">
                            <h1 className="mb-0" style={{ color: '#4a4a4a', fontWeight: '500', fontSize: '37px' }}> Preview Contact </h1>
                        </div>
                    </div>

                    <div className="col-lg-9 mx-auto">
                        <ul className="list-group shadow rounded" style={{ marginLeft: '10%', marginRight: '10%' }}>

                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                        <div className="media-body">
                                            <h5 className="mt-0 font-weight-bold mb-2 text-dark"> Name </h5>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="ml-lg-0 order-1 order-lg-2 text-muted"> {singleContactData?.name} </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                        <div className="media-body">
                                            <h5 className="mt-0 font-weight-bold mb-2 text-dark"> Mobile No </h5>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="ml-lg-0 order-1 order-lg-2 text-muted"> {singleContactData?.mobile} </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                        <div className="media-body">
                                            <h5 className="mt-0 font-weight-bold mb-2 text-dark"> Email </h5>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="ml-lg-0 order-1 order-lg-2 text-muted"> {singleContactData?.email} </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                        <div className="media-body">
                                            <h5 className="mt-0 font-weight-bold mb-2 text-dark"> Location </h5>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="ml-lg-0 order-1 order-lg-2 text-muted"> {singleContactData?.location} India </h5>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg-9 mx-auto mt-5">
                        <Button variant="secondary" size="lg" onClick={() => navigate(keyRoutes.CONTACT_LIST)}> Back </Button>
                    </div>

                </div>
            </div>
        );
    }

};

export default PreviewSingleContact;