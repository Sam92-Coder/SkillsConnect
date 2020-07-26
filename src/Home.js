import React from 'react';
import main from './assets/main.svg';
import styled from 'styled-components';


const Styles = styled.div`
 {
    background: url(${main});
    max-height: 100%;
    max-width: 100%;
    text-align: center;
    position: relative;
    font-familiy: vardana;
    left: 2px;  
    padding:10px;
    color: black;
}
h4{
    color: white;
    margin-top: 20px;
}
`;
export const Home = () => (
   <Styles> <div>
<h2 style={{color:"brown"}}><b>About SkillsConnect</b></h2>
<p>SkillsConnect is an Innovative Platform marketPlace were Software Developers, Softeware Designers, Content Writers and Creators, Digital Marketers, Graphic Designers and freelancers etc register their profiles, share experience and connect with others or Employers. All fields of discipline are recommended to profiled with SkillsConnect and Connect digitally. This platform recruits, trains and deploys young professionals from all over the world to become professionals in their fields of study.
</p>
<p>Its also deepen the status of young people in the Tech Ecosystem as key actors in the world ICT development targets and goals, enhancing their participation in innovative Training, programs and initiatives towards the realization of their dreams – ‘The World We Want’. It brings people together to share skills, knowledge, creativity and learning to build a more integrated, prosperous, and peaceful Continent driven by its Innovative creativity.</p>

 <hr style={{ color: "white" }}></hr>
<section className="services">
    <h4>Why We Should Work together?</h4>
    <div className="service-container">
        <div className="services-card service-one"></div>
        <div className="service-description">
            <h3>knowledge Sharing</h3>
            <div>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            </div>
            </div>

            <div className="service-container">
        <div className="services-card service-two"></div>
        <div className="service-description">
            <h3>Clear &amp; Optimized Code</h3>
            <div>
 <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            </div>
            </div>

            <div className="service-container">
        <div className="services-card service-three"></div>
        <div className="service-description">
            <h3>Experience and Connect.</h3>
            <div>
 <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            </div>
            </div>
</section>

<section>
    <h2>Join our Newsletter</h2>
    <form className="newsletter">
        <input type ="email" placeholder=" Your Email Address" />
        <input type ="submit" value="Join Now!" />
    </form>
</section>


    </div>
    <div>
    <section>
<div className="footer">
        <span style={{color: "white",
    top: "1.5rem",
    position: "relative",
    textAlign: "center"
    }}
    >
            &copy;{new Date().getFullYear()} All Rights Reserved SkillsConnect.
        </span>
        </div>
</section>
    </div>
    </Styles>

)


export default Home;
