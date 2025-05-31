import React from 'react'

export default function Contact () {
    return(
        <section className='section--contact' id='contact'>
            <div className='section--container'>
                <h1 className='contact--heading'>CONTACT</h1>
                <p className='contact--info'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
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