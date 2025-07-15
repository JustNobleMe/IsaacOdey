import React from 'react'

export default function About () {
    return(
        <section className='section--about' id='about'>
            <div className='section--container'>
                <div className='about--container'>
                    <h1>ABOUT ME</h1>
                    <p>Discover my journey, passions, and the story behind my work</p>
                    <div className='info-container'>
                        <div className='info-img'>
                            <img src='./images/isaac.png' alt='developer.png' />
                        </div>
                        <div className='info-details'>
                            <div className='about-details-container'>
                                <div className='about-details'>
                                    <h2>Who Am I</h2>
                                    <p>I'm a Fullstack developer who crafts Responsive, interactive, and clean softwares.
                                        With a background in Machine Learning, I blend design sense with technical logic.
                                    </p>
                                </div>
                                <div className='about-details'>
                                    <h2>My Approach</h2>
                                    <p>I focus on user-centered target, performance, and accessibility always evolving with modern tech
                                        to deliver seamless digital experience.
                                    </p>
                                </div>
                            </div>
                            <div className='about-bio'>
                                <h2>Personal Info</h2>
                                <div className='about-bio-container'>
                                    <div>
                                        <div className='detail'>
                                            <p>Name: <span>Odey Isaac</span></p>
                                        </div>
                                        <div className='detail'>
                                            <p>Nationality: <span>Nigerian</span></p>
                                        </div>
                                        <div className='detail'>
                                            <p>Phone: <span><a href='tel:+2348140287102'>+2348140287102</a></span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='detail'>
                                            <p>Email: <span><a href="mailto:isaacodey01@gmail.com" target="_blank">isaacodey01@gmail.com</a></span></p>
                                        </div>
                                        <div className='detail'>
                                            <p>Course of Study: <span>Computer Science</span></p>
                                        </div>
                                    </div>
                                </div>
                                <button><a href="./document/Odey Isaac's Resume.pdf" download>Dowuload My Resume</a></button>
                            </div>
                        </div>
                    </div>
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