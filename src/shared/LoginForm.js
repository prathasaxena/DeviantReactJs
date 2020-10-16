import React from 'react';
import "../App.scss";
import { Form, Button } from 'react-bootstrap';
import { callGet } from '../utility/callApi';
import { LanguageContext } from '../context';

const LoginForm = (props) => { 
    const text = React.useContext(LanguageContext)
    return (
    <div>
        <h1>Log in</h1>
        <p>Become a deviant. <a>Join</a></p>
        <form >
        <div className="form-group">
            <input type="email" />
            <label>Username</label>
        </div>
        <div  className="form-group">
          <input type="password" />
          <label>Password</label>
        </div>
        <div className="form-group-row">
            <input
                name="isGoing"
                type="checkbox"
                checked={true}/>
            <label> Keep me logged in </label>       
         </div>
                <Button variant="primary" type="submit">
                    <LanguageContext.Consumer>
                        {(text) =>  text}
                    </LanguageContext.Consumer>
        </Button>
    </form>
    </div>
    )
}

export default LoginForm;
