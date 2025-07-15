import React from 'react'

export default function Contact () {
    return(
        <section className='section--contact' id='contact'>
            <div className='section--container'>
                <h1 className='contact--heading'>CONTACT</h1>
                <p className='contact--info'>Reach out via form, social media, or support platforms</p>
                <img src='./images/separatorBlack1.png' alt='seperator' />

                <form>
                    <input type='text' name='name' placeholder='ENTER YOUR NAME*' required />
                    <input type='email' name='email' placeholder='ENTER YOUR EMAIL*' required />
                    <input type='text' name='pnumber' placeholder='ENTER YOUR PHONE NUMBER' />
                    <textarea placeholder='YOUR MESSAGE*' required />
                    <button>SUBMIT</button>
                </form>
            </div>
        </section>
    )
}