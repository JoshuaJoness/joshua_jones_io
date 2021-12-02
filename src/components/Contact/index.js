import React from 'react';

const Contact = ({ mobile }) => (
    <div 
        id="contact"
        className={mobile ? "titleMobile" : "title"} 
        style={
            mobile ? { padding: '5vh' } 
            :   { 
                    backgroundColor: '#333', 
                    color: 'grey', 
                    fontSize: 22, 
                    padding: '5vh'
                }}>
        <div style={{ display: 'flex', width: !mobile ? '40%' : undefined, marginRight: 'auto', marginLeft: mobile ? 0 : 50, alignItems: 'center', flexDirection: mobile ? 'column' : undefined }}>
            <img 
                src="/images/candid.jpg"
                style={mobile ? { height: '170px', margin: 'auto', display: 'block', borderRadius: '100%' } : { height: '250px', borderRadius: '100%' }}
            />
            <ul className={mobile ? "contactListMobile" : "contactList"}>
                <li className="contact-list-li" style={{ fontSize: mobile ? 28 : 36, color: 'grey' }}>Joshua Jones</li>
                <li className="contact-list-li" style={{ fontSize: mobile ? 16 :18, color: 'pink', marginBottom: mobile ? 10 : 25 }}>Creative Fullstack Developer</li>
                <li className="contact-list-li" style={{ textTransform: 'none', marginBottom: 5, fontSize: mobile ? 18 : undefined }}>joshuajonesdev@gmail.com</li>
                <li className="contact-list-li" style={{ textTransform: 'none', marginBottom: 5, fontSize: mobile ? 18 : undefined }}>
                    <a className="contact-list-link" href="https://github.com/JoshuaJoness" target="_blank">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    </div> 
);

export default Contact;
