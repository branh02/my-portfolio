// src/components/Content.js
import React from 'react';
import emailjs from 'emailjs-com';
import './content.css';

const Content = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cvsw9ji', 'template_ltqb658', e.target, 'x7gXC_aM391s5JBRI')
      .then((result) => {
        console.log('Email sent successfully!');
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Unable to send form, developer has been notified.');
      });

    e.target.reset();
  };


  return (
    <div className="content">
      <section id="about">
        <p>My name is Branavan Daniel Haran, though I am often referred to as Bran. My journey into programming began during the latter stages of the COVID-19 pandemic in 2021. I'm passionate about software development, specializing in backend work like data scraping and API utilization, as well as frontend design and database management. I thrive on creating elegant solutions that bridge the gap between innovation and practicality.</p>
        <p>In my free time, I engage in chart and price analysis in the forex market, and provide business consultation services. I enjoy helping businesses optimize their operations and achieve their goals through strategic planning and data-driven decisions.</p>
        <p>Delve into my journey as a self-taught full stack developer, since 2022. Within this portfolio, you will discover a curated collection of my latest and captivating projects. Each of these endeavors showcases my dedication to crafting outstanding user experiences by harnessing my proficiency in both frontend and backend technologies, encompassing the realm of web development. Explore my body of work and my unwavering enthusiasm for the ever-evolving world of web development.</p>
      </section>
      <section id="projects">
      <div className="projects-container">
          <div className="right-column">
            <div className="experience-wrapper">
              <div className="experience-container">
                <div className="experience-content" style={{ cursor: 'pointer' }} onClick={() => window.open('https://11notify.co.uk/')}>
                  <div className="date-header">
                    May 2022 ━ PRESENT
                  </div>
                  <div className="job-info">
                    <div className="experience-title-11n">
                      Backend Software Developer - 11Notify
                    </div>
                    <div className="experience-text">
                      Crafted many monitors, scrapers and scripts tailored to assist collectors and resellers. These tools have been instrumental in helping resellers keep a keen eye on restocks and swiftly assess stock levels.
                    </div>
                    <div className="skills-container">
                      <div className="skill-bubbles">Node.JS</div>
                      <div className="skill-bubbles">Javascript</div>  
                      <div className="skill-bubbles">Python</div>  
                      <div className="skill-bubbles">Discord.JS/PY</div>  
                      <div className="skill-bubbles">RESTful APIs</div>
                      <div className="skill-bubbles">Web Scraping</div>  
                      <div className="skill-bubbles">Automation</div>
                      <div className="skill-bubbles">Database Knowledge</div>
                      <div className="skill-bubbles">Data Visualisation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-wrapper">
              <div className="experience-container">
                <div className="experience-content" style={{ cursor: 'pointer' }} onClick={() => window.open('https://auroratools.online/')}>
                  <div className="date-header">Oct 2022 ━ PRESENT</div>
                  <div className="job-info">
                    <div className="experience-title-11n">
                      Fullstack Software Developer - Aurora Tools
                    </div>
                    <div className="experience-text">
                      Actively developing an application that integrates a wide range of backend modules and tools, designed to streamline processes and enhance user experiences. With countless modules at my disposal, I've crafted a seamless GUI, demonstrating my prowess as a full-stack developer. This project highlights my ability to create innovative solutions by bridging the gap between backend integrations and user-friendly frontend interfaces.
                    </div>
                    <div className="skills-container">
                      <div className="skill-bubbles">Node.JS</div>
                      <div className="skill-bubbles">HTML</div>
                      <div className="skill-bubbles">CSS</div>
                      <div className="skill-bubbles">React</div>
                      <div className="skill-bubbles">MySQL</div>
                      <div className="skill-bubbles">Electron.JS</div>
                      <div className="skill-bubbles">Chart.JS</div>
                      <div className="skill-bubbles">Software Development</div>
                      <div className="skill-bubbles">Web Interface Design</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-wrapper">
              <div className="experience-container">
                <div className="experience-content" style={{ cursor: 'pointer' }} onClick={() => window.open('https://currency-converter.branh.co.uk/')}>
                  <div className="date-header">Nov 2023</div>
                  <div className="job-info">
                    <div className="experience-title-11n">
                      Fullstack Software Development Project - Currency Converter
                    </div>
                    <div className="experience-text">
                      Developed a user-centric Currency Converter web application, providing a streamlined solution for real-time currency exchange calculations. Utilizing the robust Exchange-Rate API, the application delivers up-to-the-minute exchange rates and currency conversions for users ranging from financial analysts to international travelers. This intuitive platform features a clean, responsive design, ensuring optimal usability across various devices and browsers.
                    </div>
                    <div className="skills-container">
                      <div className="skill-bubbles">Javascript</div>
                      <div className="skill-bubbles">HTML</div>
                      <div className="skill-bubbles">CSS</div>
                      <div className="skill-bubbles">RESTful APIs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-wrapper">
              <div className="experience-container">
                <div className="experience-content" style={{ cursor: 'pointer' }} onClick={() => window.open('https://spotify-aio.branh.co.uk/')}>
                  <div className="date-header">Nov 2023 ━ Jan 2024</div>
                  <div className="job-info">
                    <div className="experience-title-11n">
                      Fullstack Software Development Project - Spotify AIO
                    </div>
                    <div className="experience-text">
                      Pioneered the Spotify AIO (all in one), a dynamic and interactive web application that harnesses <a href="https://developer.spotify.com/documentation/web-api" target="_blank">Spotify's comprehensive online documentation</a> to fetch and display detailed the user's most listened to tracks and artists, as well as artist profiles, track data, and other related content. Leveraging Spotify's API, the application presents a rich set of data including artist information, track popularity, track durations, and much more, all within a sleek, responsive user interface that emphasizes accessibility and ease of use.
                    </div>
                    <div className="skills-container">
                      <div className="skill-bubbles">Javascript</div>
                      <div className="skill-bubbles">HTML</div>
                      <div className="skill-bubbles">CSS</div>
                      <div className="skill-bubbles">Chart.JS</div>
                      <div className="skill-bubbles">AWS Hosting</div>
                      <div className="skill-bubbles">OAuth 2.0</div>
                      <div className="skill-bubbles">RESTful APIs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="right-column">
          <form id="contact-form" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Content;
