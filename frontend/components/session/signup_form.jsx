import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username:'',
            email: '',
            gender:'',
            password:'',
        }; 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signup(this.state).then(() => {this.props.history.push(`/newsfeed`)});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
       return (
           <div className="modal-body">           
               <div className="sign-up-text">
                    <h1>Sign Up</h1>
                    <h4 >It’s quick and easy.</h4>
                </div>
               {this.renderErrors()}
               <form className="sign-up-form" onSubmit={this.handleSubmit} >
                   <input type="text"
                       className="input-box"
                       placeholder="Username"
                       value={this.state.username}
                       onChange={this.update('username')} />
                   <br />
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
                   <div className="sign-up-gender">Gender:</div>
                   <label className="radio-container"> Male
                            <input type="radio" value="Male"  name="g" onChange={this.update('gender')} />
                   </label>
                   <label className="radio-container"> Female
                            <input type="radio" value="Female"  name="g" onChange={this.update('gender')} />
                   </label>
                   <label className="radio-container"> Custom
                            <input type="radio" value="Custom" name="g" onChange={this.update('gender')} />
                   </label>
                   <br />
                   <input type="submit" className="input-button sign-up-button" value="Sign Up" />
               </form>
           </div>
       )
    }
}

export default SignUpForm;