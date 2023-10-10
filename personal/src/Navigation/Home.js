import React from 'react';
import TheArm from '../Images/The_arm.jfif'
import Toji from '../Images/Toji.jfif'
import TheArm2 from "../Images/arms.svg"
import Toji2 from "../Images/Running.svg"
import "./Home.css";

const Home = () => {
    return (
        <div className='HomeMain container   '>
            <div className='row HomeRow'>
                <div className='col col-lg-6 col-12 Row1Col1'>
                    <img src={TheArm2} className='image1' alt='something went wrong' />
                </div>
                <div className='col col-lg-6 col-12 Row1Col2'>
                    <center>
                        <div className='HomeHeading'>One Day <br></br> or<br></br> Day One<br></br> You Decide!</div>
                        <div className="HomeDescription">We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort. </div>
                    </center>
                </div>
            </div>
            <hr></hr>
            <div className='row HomeRow'>
                <div className='col col-lg-6 col-12 Row2Col1'>
                    <center>
                    <div className='HomeHeading'>Why Exercise?</div>
                    <div className="HomeDescription">Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
                <br></br>
                <br></br>
                    Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits. Only a few lifestyle choices have as large an impact on your health as physical activity.

                        Everyone can experience the health benefits of physical activity – age, abilities, ethnicity, shape, or size do not matter.</div>
                        </center>
                </div>
                <div className='col col-lg-6 col-12 Row2Col2'>
                    <img src={Toji2} alt='something went wrong' className='image2' />
                </div>
            </div>
        </div>
    );
}

export default Home;
