import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';
import InputFormItem from 'components/FormItems/items/InputFormItem';
import IniValues from 'components/FormItems/iniValues';
import FormValidations from 'components/FormItems/formValidations';
import {withRouter} from "react-router";

const usersFields = {
    phoneNumber: { type: 'string', label: 'Phone Number',

    },
    email: { type: 'string', label: 'E-mail',

    },
    emailVerified: { type: 'boolean', label: 'emailVerified',

    },
    emailVerificationToken: { type: 'string', label: 'emailVerificationToken',

    },
    emailVerificationTokenExpiresAt: { type: 'datetime', label: 'emailVerificationTokenExpiresAt',

    }
}

class AddForm extends Component {

    async sendToAPI(email, phoneNumber) {
        const response = await fetch('http://localhost:8080/v1/auth/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                phoneNumber,
            }),
        });

        const data = await response.json();

        if (response.status >= 400) {
            throw new Error(data.message);
        }

        return data;
    }

    handleSubmit = async (values, actions) => {
        try {
            const data = await this.sendToAPI(values.email, values.phoneNumber);
            if (data.success) {
                this.props.toggleAdd();
                this.props.refreshUsers();
            } else {
                console.error('Error from the API:', data.message);
                // Handle other potential responses from your API.
            }
        } catch (error) {
            console.error('Error submitting the form:', error.message);
            // Handle error, maybe show an error message to the user.
        } finally {
            actions.setSubmitting(false);  // Stop form from submitting.
        }
    };

    iniValues = () => {
        return IniValues(usersFields, this.props.record || {});
    }

    formValidations = () => {
        return FormValidations(usersFields, this.props.record || {});
    }

    renderForm() {
        const { saveLoading } = this.props;

        return (
            <Formik
                onSubmit={this.handleSubmit} // Use the handleSubmit for the form submission.
                initialValues={this.iniValues()}
                validationSchema={this.formValidations()}
                render={(form) => {
                    return (
                        <form onSubmit={form.handleSubmit}>
                            <InputFormItem
                                name={'phoneNumber'}
                                schema={usersFields}
                            />

                            <InputFormItem
                                name={'email'}
                                schema={usersFields}
                            />

                            <div className="form-buttons">
                                <button
                                    className="btn btn-success me-1"
                                    disabled={saveLoading}
                                    type="button"
                                    onClick={form.handleSubmit}
                                >
                                    Save
                                </button>{' '}{' '}

                                <button
                                    className="btn btn-gray-default"
                                    type="button"
                                    disabled={saveLoading}
                                    onClick={form.handleReset}
                                >
                                    Reset
                                </button>{' '}{' '}
                            </div>
                        </form>
                    );
                }}
            />
        );
    }

    render() {
        const { isEditing, findLoading, record } = this.props;

        if (findLoading) {
            return <Loader />;
        }

        if (isEditing && !record) {
            return <Loader />;
        }

        return this.renderForm();
    }
}

export default AddForm;
