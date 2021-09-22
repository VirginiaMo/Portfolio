
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Button } from '@material-ui/core';


export default function Home() {
 
 

  return (
    <div>
     <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Resume - Start Bootstrap Theme</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    
  <Navbar />
       <div class="container-fluid p-0">
        <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Virginia &nbsp;
                        <span class="text-primary">Morilla</span>
                    </h1>
                    <div class="subheading mb-5">
                    &nbsp; &nbsp;TLF: 600 041 821,  &nbsp; Barcelona,  &nbsp; &nbsp;
                        <a href="mailto:name@email.com">virginia.morilla@gmail.com</a>
                    </div>
                    <h3>Frontend Developer</h3>
                    <p class="lead mb-5" align="justify">Multidisciplinary professional with a passion for web development and technology. Originally with philology studies, but over time I discovered that my calling was to be a part of the development industry. I am a self-made web developer, using the latest frontend technologies and frameworks, and can collaborate in an office environment working within a team.
I’m a responsible, motivated, hardworking and qualified person, I´m a fast learner and feel happy nurturing a positive working environment.
I´m good at adapting quickly to changes, self-organized and always on time.
I can communicate in different languages, and have experience in multicultural environments, as well as having lived in different countries, which gives me experience working with people from different cultures and backgrounds.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/virginiamorilla/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/VirginiaMo"><i class="fab fa-github"></i></a>
                        <Button className="pdf"variant="outlined"><a href="./Virginia-Morilla-cv-en.pdf" download> Download CV</a></Button>
                  
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Q/A Tester</h3>
                            <div class="subheading mb-3">Pole to Win</div>
                            <p>Pole to Win is a video game translation and localization company, in charge of different types of projects (small to big). I was a tester for several videogames, particularly developed by Nintendo, for handheld gaming devices.
I oversaw checking the correctness of test cases against a working copy of the games, raised issues, proposed corrections, and exploratory testing.
Apart from the functionality, I had to make sure that the translations were properly done, without grammar faults or incorrect sentences.
I worked in a team environment, closely reporting to my supervisor and sharing knowledge with my teammates.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">December 2017 - September 2019 </span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Webpage Translator</h3>
                            <div class="subheading mb-3">Maven of London</div>
                            <p>CI worked as a contractor performing English to Spanish translations.My role involved the correct translation of many static web pages, done directly over the HTML, and I had to make sure that the structure and content remained in a proper form.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">October 2016 - December 2017</span></div>
                    </div>
                    
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Frontend Web Development Course</h3>
                            <div class="subheading mb-3">CIFO Las Violetas (SOC)</div>
                            
                           
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">April 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Scrum Fundamentals Course</h3>
                            <div class="subheading mb-3">Barcelona Activa</div>
                            
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">May 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Master´s Degree in Audiovisual Translation</h3>
                            <div class="subheading mb-3">ISTRAD</div>
                            
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Juny 2017</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Master´s Degree in Literary Translation (EN/FR)  ES </h3>
                            <div class="subheading mb-3">Córdoba University</div>
                            
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">July 2015</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Bachelor’s Degree in Hispanic Philology  </h3>
                            <div class="subheading mb-3">Málaga University (Spain)y</div>
                            
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Juny 2007</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-github"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>
                    <Projects/>
                </div>
            </section>
      </div>
  
    
    </div>
  )
}
