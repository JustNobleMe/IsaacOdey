import React from 'react'

export default function Skills (props) {
    const usingSkills = props.usingSkills;
    const learningSkills = props.learningSkills;
    const otherSkills = props.otherSkills

    const displayUsingSkills = usingSkills.map(data => {
                return(
                    <div className='program'>
                        <img src={`./images/${data.logo}`} alt='logo' />
                        <p>{data.name}</p>
                    </div>
                )
            })
    
    const displayLearningSkills = learningSkills.map(data => {
        return(
            <div className='program'>
                <img src={`./images/${data.logo}`} alt='logo' />
                <p>{data.name}</p>
            </div>
                )
            })
    
    const displayOtherSkills = otherSkills.map(data => {
        return(
            <div className='program'>
                <img src={`./images/${data.logo}`} alt='logo' />
                <p>{data.name}</p>
            </div>
                )
            })

    return ( 
        <section className='section--skills' id='skills'>
            <div className='section--container'>
                <h1 className='skills-header'>SKILLS</h1>
                <div className='using--now'>
                    <h2>USING NOW:</h2>
                    <div className='using--container'>
                        {displayUsingSkills}
                    </div>
                    <h2>LEARNING:</h2>
                    <div className='learning--container'>
                        {displayLearningSkills}
                    </div>
                    <h2>OTHER SKILLS:</h2>
                    <div className='learning--container'>
                        {displayOtherSkills}
                    </div>
                </div>
                </div>
                
                
         
        </section>
    )
}