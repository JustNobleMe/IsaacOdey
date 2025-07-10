import React from 'react'

export default function Header(props) {
    const social = [props.socialHeader]

    const socialData = social.map(items => {
        return (
            items.map(infos => {
                return (
                    <div className='links'>
                        <a href={`${infos.link}`} ><img src={`./images/${infos.image}`} alt='link-logo' /></a>
                    </div>
                )
            })
        )
    })

    // const [screenWidth, setScreenWidth] = useState(false)

    // const mobileview = () => {
    //     if(window.innerWidth <= 700) {
    //         setScreenWidth(true)
    //     } else {
    //         setScreenWidth(false)
    //     }
    // }

    // window.addEventListener('resize', mobileview);


    return (
        <section>
            {/* wideScreen */}
            <header className='wideScreen'>

                <div className='header--container'>
                    <div className='block--container'>
                        <div className='block1'>
                            <div className='available'>
                                <p><span> </span> Available for related Job</p>
                            </div>
                            <div className='info'>
                                <p>Hi,</p>
                                <div>
                                    <h1>I'm <span className='name'>{props.firstName} {props.lastName}</span></h1>
                                    <h2> a creative <span>{props.gig}</span></h2>
                                </div>
                                <p>Creating Fullstack Responsive Web Applications. I develop beautiful, 
                                    functional websites and applications for Brands, Startups, and NGOs. 
                                </p>

                            </div>

                            <div className='link--container'>
                                {socialData}
                            </div>
                        </div>
                        <div className='block2'>
                            <div>
                                <div className='rotate'></div>
                                <div className='rotate'></div>
                                <div className='rotate'></div>
                            </div>
                            <div>
                                <div className='rotateSecond'>
                                    
                                </div>
                                <div className='rotateSecond'></div>
                                <div className='rotateSecond'></div>
                            </div>
                            <img src='./images/isaac.png' alt='developer.png' />
                            <div className='frontRotate'>
                                <div className='skill'>REACT</div>
                                {/* <div className='skill'>Tailwind CSS</div> */}
                                {/* <div className='skill'>GIT & GITHUB</div> */}
                                <div className='skill'>NODE JS</div>
                                <div className='skill'>Express</div>
                                <div className='skill'>Mongo DB</div>
                                {/* <div className='skill'>MYSQL</div> */}
                            </div>

                        </div>
                    </div>
                <div className='berries'>
                    <div className='berries--content'>
                        <div className='details'>
                            <h2>5+</h2>
                            <p>Years of Experience</p>
                        </div>
                        <div className='details'>
                            <h2>25+</h2>
                            <p>Projects Done</p>
                        </div>
                        <div className='details'>
                            <h2>15+</h2>
                            <p>Feedback/Reviews</p>
                        </div>
                    </div>
                    <img className='itb--logo' src='./images/itb.png' alt='itb logo' />
                </div>
                </div>
            </header>

            {/* mobileScreen */}
            <header className='mobileScreen'>
                <div className='details--display'>
                    <div className='info--display'>
                        <h3>my name is {props.firstName}</h3>
                        <h1>I'M A DEVELOPER</h1>
                        <h4>{props.gig}</h4>
                    </div>
                    <div className='social--display'>
                        {socialData}
                    </div>
                </div>
            </header>
        </section>
    )
}