import React from 'react'

export default function About () {
    return(
        <section className='section--about' id='about'>
            <div className='section--container'>
                <div className='about--container'>
                    <h1>ABOUT ME</h1>
                    <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
                </div>
                <div className='explore--container'>
                    <h1 className='explore--title'>EXPLORE</h1>
                    <img src='./images/separatorBlack1.png' alt='seperator' />
                        <div className='details--container'>
                            <div className='details'>
                                <h1>DESIGN</h1>
                                <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                                <img src='./images/design.png' alt='design-logo' />
                            </div>
                            <div className='details'>
                                <h1>DEVELOPMENT</h1>
                                <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                                <img src='./images/development.png' alt='development-logo' />
                            </div>
                            <div className='details'>
                                <h1>MAINTENANCE</h1>
                                <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                                <img src='./images/maintenance.png' alt='maintenance-logo' />
                            </div>
                        </div>
                    <img src='./images/separatorBlack1.png' alt='seperator' />
                </div>
            </div>
        </section>
    )
}