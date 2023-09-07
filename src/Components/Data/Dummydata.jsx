import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

// import CloudLinedIcon from '@mui/icons-material/CloudLined';


export const navlink = [
{
    url: "/",
    text: "Home",
},
{
    url: "/about",
    text: "About",
},
{
    url: "/services",
    text: "Service",
},
{
    url: "/portfolio",
    text: "PortFolio",
},
{
    url: "/blog",
    text: "Blog",
},

{
    url: "/contact",
    text: "Contact",
},

]
export const home = [
{
text: "HELLO I'M",
name: "RAHUL SINGH RAJPUT",
post: "MERN STACK DEVELOPER",
design: "REACT JS DEVELOPER",
skills: "NODE JS DEVELOPER ",
basic: "JAVASCRIPT,EXPRESS JS",
basic2: "BOOTSTRAP,CSS,HTML",
basic3: "DEVELOPER",


desc: "Enthusiastic about embracing challenges head-on, my projects are a reflection of my growth mindset, ready to collaborate and contribute fresh ideas to your dynamic team."
},
]
export const about = [
{
    desc: "Hello there! I'm Rahul Singh Rajput, a passionate MERN stack developer currently pursuing Computer Science Engineering.  Crafting user-friendly websites and captivating web apps using Node.js, React, and JavaScript is what I love doing.",
    desc1: "Beyond my expertise in web development, I have a penchant for problem-solving and love tackling Data Structure and Algorithm challenges. The thrill of unraveling complex problems drives me to constantly improve my skills. As an aspiring developer, I'm eager to explore the realm of accessibility in web design, ensuring that technology is inclusive and accessible to all users.I am enthusiastic about collaborating with forward-thinking teams and contributing my skills and creativity to take projects to new heights.",
    cover: "./images/a.jpg"
},

]
export const services = [
    {
        id: 1,
        icon: <SettingsIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
    {
        id: 2,
        icon: <CropRotateIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
    {
        id: 3,
        icon: <ViewInArIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
    {
        id: 4,
        icon: <PieChartOutlineIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
    {
        id: 2,
        icon: <CropRotateIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
    {
        id: 3,
        icon: <ViewInArIcon/>,
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus",

    },
   
 
]
export const project = [
    {
        title : "Full stack project",
        icon: <SettingsIcon/>,
        num: 5,

    },
    {
        title : "Frontend Project",
        icon: <SettingsIcon/>,
        num: 20,

    },
    {
        title : "live Projects",
        icon: <SettingsIcon/>,
        num: 2,

    },
    {
        title : "Reviews/FeedBack",
        icon: <SettingsIcon/>,
        num: 100,

    },
    {
        title : "solved DSA problems",
        icon: <SettingsIcon/>,
        num: 1000,

    },
]
export const portfolio = [
  {
    id:1,
    cover:  "./Images/project2.png" , 
    name: "Brand",
    category: "FullStack",
    title: "BlogVibe",
    link: "https://blogvibe.netlify.app/login",
    button: "Go to Live Project"
},
{
    id:2,
    cover:  "./Images/eduadda.png" , 
    name: "Brand",
    category: "FrontEnd",
    title: "EduAdda",
    link: "https://edu-adda.netlify.app/",
    button: "Go to Live Project"
},
{
    id:3,
    cover:  "./Images/newsapp.png" , 
    name: "Brand",
    category: "API Integration",
    title: "NewsBird",
    link: "https://github.com/Rahul7879/ReactNewsApiApp",
    button: "Go to Github",
    warn: "In Production we cant use free API"
},
{
    id:4,
    cover:  "./Images/todo-app.png" , 
    name: "Brand",
    category: "FrontEnd",
    title: "DoWell (todo-app)",
    link: "https://do-well.netlify.app/",
    button: "Go to Live Project",
   
},
{
    id:5,
    cover:  "./Images/naukri.png" , 
    name: "Brand",
    category: "FrontEnd",
    title: "Naukri.com (Clone)",
    link: "https://naukri-clone-app.netlify.app",
    button: "Go to Live Project",
   
},


 
]
export const blog = [
    {

     title: "Journey Plan",
     author: "Rahul",
     date: "12/12/23"
    },
    {
        
        title: "Journey Plan",
        author: "Rahul",
        date: "12/12/23"
       }
]
export const contact = [

    {
        icon: <LocationOnOutlinedIcon/>,
        text1: "72 Devlop Colony Bhopal",
        text2: "Bairagarh Bhopal"
    },
    {
        icon: <LinkIcon/>,
        text1: "LinkedIn",
        text2: "Growing on LinkedIn"
    },
    {
        icon: <LocationOnOutlinedIcon/>,
        text1: "Git/GitHub",
        text2: "Project handling on GITHUB"
    },
]
export const social = [
    {
        icon: <LinkedInIcon/>,
        url: "https://www.linkedin.com/in/rahulsinghrajput8/"
    },
    {
        icon: <GitHubIcon/>,
        url: "https://github.com/Rahul7879"
    },
    {
        icon: <MailIcon/>,
        url:"mailto:rahulbanarajput8@gmail.com"
    },
    {
        icon: <PhoneIcon/>,
        url: "tel:+917879622689"
    },
    {
        icon: <InstagramIcon/>,
        url: "https://www.instagram.com/rahulbana4u/"
    }
]