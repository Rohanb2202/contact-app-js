import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Col, Row, Card, Divider } from 'antd';
import { EyeFilled, DeleteFilled, EditFilled } from '@ant-design/icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as storage from '../../../utility/LocalStorage/storage.js';
import { getContactList } from '../../../reduxStore/ActionsLayout/actions.js';
import { errorAlert, successAlert } from '../../../utility/Alerts/ToasterTypes.js';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ContactListTable = (props) => {

    let dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [fetchedContactId, setFetchedContactId] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteAction = (id) => {
        var contacts = storage.get("contactListData") || [];

        // Find the index of the object with the given ID
        var index = contacts.findIndex(function (contact) {
            return contact.id === id;
        });

        if (index !== -1) {
            contacts.splice(index, 1);
            storage.set('contactListData', contacts);
            successAlert("Deleted contact successfully");
            dispatch(getContactList());
        } else {
            errorAlert("Access Denied");
        }

        handleClose();
    }

    return (
        <>
            <div className='contact_list_table_scrollbar'>
                {props?.contactListData?.length > 0 ? props.contactListData?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Row>
                                <Col span={3}>
                                    <p> {item?.id} </p>
                                </Col>
                                <Col span={15}>
                                    <Meta
                                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title={item?.name}
                                        description={item?.mobile}
                                    />
                                </Col>
                                <Col span={6}>
                                    <Link to={"/preview-contact/" + item?.id}> <EyeFilled style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }} /> </Link>
                                    {item?.id == 1 || item?.id == 2 ? null : (
                                        <>
                                            <span onClick={() => { handleShow(); setFetchedContactId(item.id) }}> <DeleteFilled style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }} /> </span>
                                            <Link to={"/update-contact/" + item?.id}> <EditFilled style={{ fontSize: '20px', color: 'black', cursor: 'pointer' }} /> </Link>
                                        </>
                                    )}
                                </Col>
                            </Row>
                            <Divider />
                        </div>
                    )
                }) : <h1> No Data </h1>}
            </div>

            {/* Delete Request Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body> Are you sure you want to delete this contact ? </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { handleDeleteAction(fetchedContactId); }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactListTable;