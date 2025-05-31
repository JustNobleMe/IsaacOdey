import React from 'react'

export default function Header (props) {
    const social = [props.socialHeader]

    const socialData = social.map(items => {
        return(
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
                    <div className='block1'>
                        <div className='info'>
                            <h3>Hi, I am</h3>
                            <div>
                                <h1>{props.firstName} {props.lastName}</h1>
                            </div>
                            <h4>{props.gig}</h4>

                        </div>

                        <div className='link--container'>
                            {socialData}
                        </div>
                    </div>
                    <div className='block2'>

                        <img src='./images/isaac.png' alt='developer.png' />

                    </div>
                </div>
                <div className='berries'>
                    <div className='berries--content'>
                        <h1>IT BERRIES</h1>
                        <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. </p>

                        <button>READ MORE</button>
                    </div>
                    <img className='itb--logo' src='./images/itb.png' alt='itb logo' />
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