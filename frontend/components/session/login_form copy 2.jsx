import React from 'react'; 
import SignUpFormContainer from './signup_form_container';
import {Modal} from "react-responsive-modal";

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', isModalOpen: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {user: {email: this.state.email, password: this.state.password}};
        this.props.login(user);
    }

    onOpenModal() {
        this.setState({isModalOpen: true });
    };

    onCloseModal() { 
        this.setState({ isModalOpen: false }); 
    };

    
    render() {
        console.log('In render');
        console.log(this.state);
        const isModalOpen = this.state.isModalOpen;
        const x = isModalOpen?'true':'false';
        return (
         <div>
            <form className="login-form" onSubmit={this.handleSubmit}>
                <input type="text"
                    className="input-box"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')} />
                <br />
                <input type="password"
                    className="input-box"
                    value={this.state.password}
                    onChange={this.update('password')} />
                <br />
                <input type="submit"
                    className="input-submit"
                    value="Log In" />
            </form>
            <button className="input-button" onClick={this.onOpenModal}>Create New Acoount</button> 
            <h3>Is Modal Open:{x}</h3>
            <Modal open={isModalOpen} onClose={this.onCloseModal} >
                <h3>Is Modal Open2:{isModalOpen}</h3>
                <h3>In Modal!</h3>
                {/* <SignUpFormContainer /> */}
            </Modal>
         </div>
        )
    }
}

export default LogInForm; 