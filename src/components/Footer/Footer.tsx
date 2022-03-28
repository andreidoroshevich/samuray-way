import React from 'react';
import classes from './Footer.module.css'

type FooterPropsType = {
    footerValue: string
}

const Footer = (props: FooterPropsType) => {
    return (
        <div className={classes.AppFooter}>
            <footer>
                <div>
                    {props.footerValue}
                </div>

            </footer>
        </div>

    );
};

export default Footer;