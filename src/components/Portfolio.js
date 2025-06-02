import React from 'react';

export default function Portfolio (props) {
    const portfolios = [props.portfolio]
    
    const displayFolios = portfolios.map(details => {
        return (
            details.map(info => {
                return(
                <div className='portfolios--img'>
                    <a href={`${info.link}`}>
                        <img src={`./images/${info.image}`} alt={`${info.name}`} />
                    </a>
                    <div className='over--portfolio'>
                        <p>coded and designed</p>
                        <h2>{`${info.name}`}</h2>
                        <p>{`${info.description}`}</p>
                        <button>VIEW</button>
                    </div>
                </div>
                )
            })
        )
    })

    return (
        <section className='section--portfolio' id='portfolio'>
            <div className='portfolio--container'>
                <div className='portfolio--header'>
                    <h1>PORTFOLIO</h1>
                </div>
                <div className='portfolio--display'>
                    <p>ALL</p>
                    <div className='portfolios'>
                        {displayFolios}
                    </div>
                    <p className='end--p'>And many more to come...</p>
                </div>
            </div>

        </section>
    )
}