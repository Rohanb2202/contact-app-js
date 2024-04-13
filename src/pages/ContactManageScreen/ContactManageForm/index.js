import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { keyRoutes } from '../../../components/RoutePaths/RouteConstant';

const ContactManageForm = (props) => {

    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        // Populate form fields with fetched contact details when component mounts
        setValue('name', props?.currentContactData?.name);
        setValue('email', props?.currentContactData?.email);
        setValue('mobile', props?.currentContactData?.mobile);
        setValue('address', props?.currentContactData?.address);
    }, [setValue, props?.paramId && props?.currentContactData?.id]);

    return (
        <>
            <div class="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <div className="text-center mb-3">
                            <div className="col-lg-7 mx-auto">
                                <h1 className="mb-0" style={{ color: '#4a4a4a', fontWeight: '500', fontSize: '35px' }}> {props.paramId ? 'Update Contact' : 'Create Contact'} </h1>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(props.onSubmit)}>
                            <Form.Group as={Row} className="d-flex justify-content-center align-items-center flex-column mb-2" controlId="formPlaintextName">
                                <Col sm="8" className="text-align-start fsize_20 fweight_bold">
                                    <Form.Label column sm="3"> Name </Form.Label>
                                </Col>
                                <Col sm="8">
                                    <input type="text" id="name" name="name" class="form-control" {...register("name", { required: 'Name is required' })} />
                                    {errors.name && <p class="text-danger fsize_15 text-align-start mt-1">{errors.name.message}</p>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="d-flex justify-content-center align-items-center flex-column mb-2" controlId="formPlaintextEmail">
                                <Col sm="8" className="text-align-start fsize_20 fweight_bold">
                                    <Form.Label column sm="3"> Email </Form.Label>
                                </Col>
                                <Col sm="8">
                                    <input type="text" name="email" class="form-control" {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Email is not valid."
                                        }
                                    })} />
                                    {errors.email && <p class="text-danger fsize_15 text-align-start mt-1">{errors.email.message}</p>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="d-flex justify-content-center align-items-center flex-column mb-2" controlId="formPlaintextMobile">
                                <Col sm="8" className="text-align-start fsize_20 fweight_bold">
                                    <Form.Label column sm="3"> Phone Number </Form.Label>
                                </Col>
                                <Col sm="8">
                                    <input type="number" name="mobile" class="form-control" {...register("mobile", {
                                        required: 'Phone number is required',
                                        minLength: {
                                            value: 10,
                                            message: "Number should be at-least 10 integers"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Number should be at-most 10 integers"
                                        }
                                    })} />
                                    {errors.mobile && <p class="text-danger fsize_15 text-align-start mt-1">{errors.mobile.message}</p>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="d-flex justify-content-center align-items-center flex-column mb-2" controlId="formPlaintextAddress">
                                <Col sm="8" className="text-align-start fsize_20 fweight_bold">
                                    <Form.Label column sm="3"> Address </Form.Label>
                                </Col>
                                <Col sm="8">
                                    <input type="text" name="address" class="form-control" {...register("address", { required: 'Address is required' })} />
                                    {errors.address && <p class="text-danger fsize_15 text-align-start mt-1">{errors.address.message}</p>}
                                </Col>
                            </Form.Group>

                            <div className='d-flex justify-content-evenly mt-5 mb-5'>
                                <Button className='width_30' type='submit' variant="primary" size="lg"> {props.paramId ? 'Update' : 'Create'} </Button>
                                <Button className='width_30' variant="outline-secondary" size="lg" onClick={() => navigate(keyRoutes.CONTACT_LIST)}> Back </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactManageForm;