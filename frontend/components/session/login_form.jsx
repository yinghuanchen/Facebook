import React from 'react';
import SignUpFormContainer from './signup_form_container';
// import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', isModalOpen: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors(this.props.errors); 
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
           this.props.clearErrors(this.props.errors); 
       }
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const user = { 'email': email, 'password': password };
        this.props.login(user);
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.login({'email':'demo@email', 'password':'123456'}).then(() => this.props.history.push('/newsfeed'));
    }

    renderErrors() {
        return (
            <ul className="login-errors">
                {this.props.errors.map((error, idx) => (
                    <li key={`${idx}`}>
                        {error}
                    </li>
                ))}
                {/* {this.props.clearErrors(this.props.errors)} */}
            </ul>
        );
    }

    onOpenModal() {
        this.setState({ isModalOpen: true });
    };

    onCloseModal() {
        this.setState({ isModalOpen: false });
    };


    render() {
        const isModalOpen = this.state.isModalOpen;
        const modal = isModalOpen ? (
            <Modal open={isModalOpen} onClose={this.onCloseModal } classNames={{
                overlay: 'react-responsive-modal-overlay',
                modal: 'react-responsive-modal-modal',
                modalCenter: 'react-responsive-modal-modalCenter',
                closeButton: 'react-responsive-modal-closeButton',
            }}>

                <SignUpFormContainer/>
            </Modal>
        ) : null; 
        const errors = this.props.errors.length !== 0 && !isModalOpen ?  (
            <div className="login-errors-div">
                {this.renderErrors()}
            </div>
        ) : null;
        return (
            <div className="splash-page">
                <div className="welcome-login-page">
                    <div className="welcome-page">
                        <h1 className="logo">facebook</h1>
                        <h2 className="welcome-text">Connecting friends!</h2>
                    </div>
                    <div className="errors-and-login">
                        <div className="login-page" >
                            <form className="login-form" onSubmit={this.handleSubmit}>
                                <input type="text"
                                    className="input-box"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update('email')} />
                                <br />
                                <input type="password"
                                    className="input-box"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.update('password')} />
                                <br />
                                <button className="input-button log-in">Log In</button>
                            </form>
                            <button className="input-button create-new-user" onClick={this.onOpenModal}>Create New Account</button>
                            <button className="input-button demo-user" onClick={this.handleDemoUser}>Demo User</button>
                        </div>
                        {errors}
                    </div>    
                </div>
                {modal}
            </div>
        )
    }
}

export default LogInForm; 