import React from 'react'

export default function Portfolio () {
    return (
        <section className='section--portfolio' id='portfolio'>
            <div className='portfolio--container'>
                <div className='portfolio--header'>
                    <h1>PORTFOLIO</h1>
                </div>
                <div className='portfolio--display'>
                    <p>ALL</p>
                    <div className='portfolios'>
                        <div className='portfolios--img'>
                            <img src='./images/project1.png' alt='project1' />
                        </div>
                        <div className='portfolios--img'>
                            <img src='./images/project2.png' alt='project2' />
                        </div>
                        <div className='portfolios--img'>
                            <img src='./images/project3.png' alt='project3' />
                        </div>
                        <div className='portfolios--img'>
                            <img src='./images/project4.png' alt='project4' />
                        </div>
                        <div className='portfolios--img'>
                            <img src='./images/project3.png' alt='project3' />
                        </div>
                        <div className='portfolios--img'>
                            <img src='./images/project1.png' alt='project1' />
                        </div>
                    </div>
                    <p className='end--p'>And many more to come...</p>
                </div>
            </div>

        </section>
    )
}