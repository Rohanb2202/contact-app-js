import React, { useState, useEffect } from 'react';
import { Avatar, Col, Row, Card, Divider } from 'antd';
import ContactListTable from '../TableListModule';
import Spinner from '../../../utility/Spinners/spinner';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant';

const ContacListQueries = (props) => {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedValue, setSearchedValue] = useState(props.contactListData);

    useEffect(() => {
        // Update searchedValue whenever props.contactListData changes
        setSearchedValue(props.contactListData);
    }, [props.contactListData]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        filterData(event.target.value);
    };

    const filterData = (query) => {
        const filtered = props.contactListData.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.mobile.includes(query)
        );
        setSearchedValue(filtered);
    };

    return (
        <>
            <div className='contactListTable' style={{ width: '50vw', height: '60vh', display: 'flex', justifyContent: 'center' }}>
                <Col span={24}>
                    <Card title={"Contact List" + " " + '(' + props.contactListData.length + ')'} bordered={false}>

                        <div className="contactListQueries list-group rounded mb-5">
                            <Row>
                                <Col span={16}>
                                    <InputGroup size="lg">
                                        <InputGroup.Text id="inputGroup-sizing-lg"> Search </InputGroup.Text>
                                        <input type="text" class="form-control" placeholder="Eg: name / mobile number" value={searchQuery} onChange={handleSearchChange} />
                                    </InputGroup>
                                </Col>
                                <Col span={8}>
                                    <Button variant="outline-primary" size="lg" onClick={() => navigate(keyRoutes.CREATE_CONTACT)}> Create Contact </Button>
                                </Col>
                            </Row>
                        </div>

                        {props.isLoading ? <Spinner isLoading={props.isLoading} /> : <ContactListTable {...props} contactListData={searchedValue} />}

                    </Card>
                </Col>
            </div>
        </>
    );
};

export default ContacListQueries;