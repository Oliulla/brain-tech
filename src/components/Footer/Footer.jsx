import React from 'react';

const Footer = () => {
    return (
        <div className='text-yellow-500 w-full h-auto p-20 bg-gray-900 flex flex-col md:flex-row md:justify-evenly gap-8'>
            <div>
                <p>Social Links</p>
                <p>Fund Us</p>
                <p>Explore</p>
                <p>New Topics</p>
            </div>
            <div>
                <p>Follow Us</p>
                <p>Explore New</p>
                <p>Technologies</p>
                <p>Others</p>
            </div>
            <div>
                <p>Settings & Privacies</p>
                <p>Tearms and Conditions</p>
                <p>Social Links</p>
                <p>Copyright © 2018-2022. All Rights Reserved To Brain Tech.</p>
            </div>
        </div>
    );
};

export default Footer;