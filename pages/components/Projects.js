
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import Image from 'next/image';
import project from '/public/project.png';
import foto from '/public/project2.png';
import imagen from '/public/project3.png';
import fotito from '/public/project4.png';


const Projects = () => {
    return ( 
        <>
        
            <Card id="card" className="card">
      <CardHeader className="titleFood"
        title="Food App"
      />
      <Image
      className="imgFood"
       src={project} 
       height="400"
       width="300"/>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This Food App provides a colletion of a variety of yummy, delicious and healthy dishes from different countries.

        </Typography>
      </CardContent>
     <Button 
    
      variant="outlined"
      href="https://github.com/VirginiaMo/Food-App"
      > Click to see code
      </Button> 
     
    </Card>

<Card id="card1" className="card">
    <CardHeader className="webPage"
    title="Web Page"
    >
    </CardHeader>
    <Image
    className="imgweb"
       src={foto} 
       height="400"
       width="300"/>
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        This is a Web Page with a responsive design, where I ve worked with HTML and CSS.

        </Typography>
      </CardContent>
     <Button
    
      variant="outlined"
      href="https://github.com/VirginiaMo/Responsive-Web-Design"
      > Click to see code
      </Button> 

</Card>

<Card id="card2" className="card">
    <CardHeader className="birthday"
    title="Birthday Reminder"
    >
    </CardHeader>
    <Image
    className="imgBirthday"
       src={imagen} 
       height="400"
       width="300"/>
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">  
This is a Birthday Reminder App done with React js.
The idea is to use this app as a birthday reminder of your friends. 


        </Typography>
      </CardContent>
     <Button
    
      variant="outlined"
      href="https://github.com/VirginiaMo/Birthday-Reminder"
      > Click to see code
      </Button> 

</Card>
<Card id="card3" className="card">
    <CardHeader className="form"
    title="Form Validation"
    >
    </CardHeader>
    <Image
    className="imgForm"
       src={fotito} 
       height="400"
       width="300"/>
       <CardContent>
        <Typography className="text"variant="body2" color="textSecondary" component="p">  
This is a form validation to send a message by email. 


        </Typography>
      </CardContent>
     <Button
    
      variant="outlined"
      href="https://github.com/VirginiaMo/Form-Validation"
      > Click to see code
      </Button> 

</Card>

    </>
  );
}
       
export default Projects;