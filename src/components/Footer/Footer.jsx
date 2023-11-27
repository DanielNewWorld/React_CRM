import React from 'react';
import styleCSS from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={styleCSS.footer}>
            <div className={styleCSS.gridFooter}>
                <div className={styleCSS.dateCopiright}>
                    2023
                </div>

                <div className={styleCSS.nameFirma}>
                    {props.data.name}
                </div>

                <div className={styleCSS.emailFirma}>
                    <a href={`mailto:${props.data.email}`}>Email Us!</a>
                </div>

                <div className={styleCSS.telephoneFirma}>
                    {props.data.telephone}
                </div>
            </div>
        </div>
    );
};

export default Footer;