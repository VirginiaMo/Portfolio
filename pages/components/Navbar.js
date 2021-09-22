import Image from 'next/image'
import Mifoto from '/public/yo.jpg'



const Navbar = () => (
 


<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
<a className="navbar-brand js-scroll-trigger" href="#page-top">
   
    <div className="containerNav">
    <a className="navAbout" href="#about">About</a>
    <a className="navExperience" href="#experience">Experience</a>
    <a className="navEducation"href="#education">Education</a>
    <a className="navSkill"href="#skills">Skills</a>
    <a className="navProjects"href="#awards">Projects</a>
    </div>
    <span className="d-none d-lg-block"><Image  width={150}
      height={150} className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Mifoto} alt="..." /></span>
</a>

<div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Projects</a></li>
    </ul>
</div>
</nav>
);
export default Navbar;

