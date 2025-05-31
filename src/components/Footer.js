import React from 'react'



export default function Footer (props) {

    
    const footerSocial = [props.socialFooter].map(items => (
        items.map(details => {
            return (
                <div>
                    <a href={details.link}><img src={`./images/${details.image}`} alt='socialMedia-logo' /></a>
                </div>
            )
        })
    ))


    function moveUp() {
        window.scrollTo(0, 0)
    }



    return (
        <footer>
            <div className='footer--container'>
                <div onClick={moveUp} className='move--up'>
                    <img src='./images/arrow.svg' alt='arrow-up' />
                    
                    <p>BACK TO TOP</p>
                </div>
                <div className='footer--social'>
                    {footerSocial}
                </div>
                <p className='copyright'>@ 2023 Isaac Odey <span>All Rights Reserved.</span></p>
            </div>
        </footer>
    )
}