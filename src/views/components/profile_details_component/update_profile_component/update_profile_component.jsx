import React, { useEffect, useState } from 'react';
import './update_profile_style.scss';
import { faCogs, faSave, faStar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpaceComponent from '../../core/space_component';
import TextFieldControlComponent from '../../core/input_components/controls/text_field_control_component';
import FilePickerControlComponent from '../../core/input_components/controls/file_picker_control_component';


function UpdateProfileComponent(props) {

    const [state, setState] = useState({
        id: props.user ? props.user.id : null,
        name: null,
        rating: null,
    });
    const [errorMessages, setErrorMessages] = useState({
        firstNameErrorMessage: null,
        lastNameErrorMessage: null,
        emailErrorMessage: null,
        avatarErrorMessage: null,
        coverErrorMessage: null,
    });
    const validate = (callBack) => {
        var newErrorMessages = { ...errorMessages }
        newErrorMessages.firstNameErrorMessage = Validator.validate(state.name, [Validations.REQUIRED]);
        newErrorMessages.lastNameErrorMessage = Validator.validate(state.rating, [Validations.REQUIRED]);
        newErrorMessages.emailErrorMessage = Validator.validate(state.rating, [Validations.REQUIRED]);
        newErrorMessages.avatarErrorMessage = Validator.validate(state.name, [Validations.REQUIRED]);
        newErrorMessages.coverErrorMessage = Validator.validate(state.rating, [Validations.REQUIRED]);


        let valid = props.user ? true : newErrorMessages.nameErrorMessage == null &&
            newErrorMessages.ratingErrorMessage == null

        setErrorMessages(newErrorMessages);
        if (valid)
            callBack();

    };

    return (
        <div className='modify-user-form-component-root'
            style={props.dialogMod ? { height: 'auto', marginTop: '60px', marginBottom: '20px' } : {}}>
            {/* <ToastContainer position="top-center" autoClose={5000} /> */}
            <div className='modify-user-form-component-content'>
                <SpaceComponent height={'40px'} />
                <div className='modify-user-form-section'>
                    <div className='modify-user-form-header-title-outer-row'>
                        <div className='modify-user-form-header-title-row'>
                            <FontAwesomeIcon icon={faCogs}
                                style={{
                                    width: '36px', height: '36px', backgroundColor: 'rgb(200,200,200)',
                                    borderRadius: '10px', padding: '10px'
                                }} />
                            <SpaceComponent width={'20px'} />
                            <h4 className='modify-user-form-header-title-text'>
                                Update Profile
                            </h4>
                        </div>
                    </div>
                    <SpaceComponent height={'20px'} />
                    <div className='modify-user-form-container'>
                        <div className='modify-user-form-row'>
                            <div className='modify-user-form-left-column'>
                                <div className='user-name-row'>
                                    <TextFieldControlComponent
                                        icon={faStar}
                                        hint={'first name'}
                                        label={'First Name'}
                                        type={'text'}
                                        initialValue={props.user ? props.user.rating : ''}
                                        validator={() => { return 'done' }}
                                        onChange={(value) => {
                                            setState({ ...state, firstName: value })
                                        }}
                                        errorMessage={errorMessages.ratingErrorMessage} />
                                    <SpaceComponent width={'20px'} />
                                    <TextFieldControlComponent
                                        icon={faStar}
                                        hint={'last name'}
                                        label={'Last Name'}
                                        type={'text'}
                                        initialValue={props.user ? props.user.rating : ''}
                                        validator={() => { return 'done' }}
                                        onChange={(value) => {
                                            setState({ ...state, lastName: value })
                                        }}
                                        errorMessage={errorMessages.ratingErrorMessage} />
                                </div>
                                <SpaceComponent height={'20px'} />
                                <TextFieldControlComponent
                                    hint={'enter email address'}
                                    label={'E-mail'}
                                    type={'text'}
                                    initialValue={props.user ? props.user.email : ''}
                                    validator={() => { return 'done' }}
                                    onChange={(value) => {
                                        setState({ ...state, email: value })
                                    }}
                                    errorMessage={errorMessages.email} />
                                <SpaceComponent height={'20px'} />
                            </div>
                            <div className='modify-user-form-right-column'>
                                <SpaceComponent height={'20px'} />
                            </div>
                        </div>
                    </div>
                    <div className='photo-picker-row'>
                        <FilePickerControlComponent
                            label={'upload picture'}
                            accept={'images'}
                            validator={() => { return 'done' }}
                            onChange={(value) => {
                                setState({ ...state, avatar: value })
                            }}
                            errorMessage={errorMessages.avatar} />
                        <SpaceComponent width={'20px'} />
                        <FilePickerControlComponent
                            label={'upload picture'}
                            accept={'images'}
                            validator={() => { return 'done' }}
                            onChange={(value) => {
                                setState({ ...state, cover: value })
                            }}
                            errorMessage={errorMessages.cover} />
                        <SpaceComponent width={'20px'} />
                    </div>
                    <SpaceComponent height={'40px'} />
                    <div className='modify-user-form-button-row'>
                        <div className='modify-user-form-button'
                            onClick={() => {
                                validate(() => {
                                    props.onSubmit(state);
                                })
                            }}>
                            <FontAwesomeIcon icon={props.user ? faEdit : faSave} />
                            <SpaceComponent width={'10px'} />
                            {props.user ? 'Update' : 'Create'}
                        </div>
                    </div> : <></>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfileComponent;