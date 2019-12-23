import React from 'react';
import './Contacts.css';
import { Link } from '@reach/router';

class Contact extends React.Component{
    renderContact(){
        return <div className="contact-page">
            <div className="social-buttons">
            <Link to="https://www.facebook.com/jackptoke" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                <span className="social-button__inner">
                <i className="fab fa-facebook"></i>
                </span>
            </Link>
            <Link to="https://www.linkedin.com/in/jackptoke/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                <span className="social-button__inner">
                <i className="fab fa-linkedin"></i>
                </span>
            </Link>
            <Link to="https://github.com/jackptoke" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                <span className="social-button__inner">
                <i className="fab fa-github"></i>
                </span>
            </Link>
            <Link to="https://www.hackerrank.com/jackptoke" className="social-buttons__button social-button social-button--hackerrank" aria-label="HackerRank">
                <span className="social-button__inner">
                <i class="fab fa-hackerrank"></i>
                </span>
            </Link>
            </div>
        </div>;
    }

    render(){
        return this.renderContact();
    }
}

export default Contact;