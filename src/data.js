// Logo images
import logogradient from './assets/icons/logo.svg';
import logo from './assets/icons/logo2.svg';

// Profile images
import profile from './assets/icons/profile.jpg';

// Tech stack images
import html from './assets/images/tech_stack/html.png';
import css from './assets/images/tech_stack/css.png';
import js from './assets/images/tech_stack/js.png';
import react from './assets/images/tech_stack/react.png';
import redux from './assets/images/tech_stack/redux.png';
import tailwind from './assets/images/tech_stack/tailwind.png';
import vscode from './assets/images/tech_stack/vscode.png';
import git from './assets/images/tech_stack/git.png';
import github from './assets/images/tech_stack/github.png';
import npm from './assets/images/tech_stack/npm.png';
import postman from './assets/images/tech_stack/postman.png';
import figma from './assets/images/tech_stack/figma.png';
import flutter from './assets/images/tech_stack/flutter.png';
import dart from './assets/images/tech_stack/dart.png';
import firebase from './assets/images/tech_stack/firebase.png';
import rn from './assets/images/tech_stack/rn.png';

// Project images
import projectImage1 from './assets/images/projects/project1.jpg';
import projectImage2 from './assets/images/projects/project2.jpg';
import projectImage3 from './assets/images/projects/project3.jpg';
import projectImage4 from './assets/images/projects/project4.jpg';
import text_constants from './constants/constants';

// Logos
export const logos = {
    logogradient,
    logo
}

export const personalDetails = {
    name: "Phi",
    tagline: text_constants.iBuildThingsForWebAndMobile,
    img: profile,
    about: `Hello, my name is Phi, currently a student at Nha Trang University. My passion lies in the vast field of technology and I look forward to honing my skills and gaining valuable experience on my journey to becoming a proficient FullStack Developer in the future. Nha Trang University has provided me with a solid foundation and I look forward to leveraging the knowledge gained here to contribute meaningfully to the field of web and mobile development. With dedication and a constant thirst for learning, I am determined to navigate the dynamic landscape of programming languages, frameworks, and technologies. My ultimate goal is to combine both front-end and back-end expertise, creating seamless and innovative digital solutions. I look forward to the challenges and opportunities ahead, embracing each experience as a stepping stone towards my aspirations as a FullStack Developer.`,
};

export const socialMediaUrl = {
    linkdein: "https://www.linkedin.com/in/phi-nguyễn-đức-hoàng-409b13235",
    github: "https://github.com/phiahihi",
    facebook: "https://www.facebook.com/hoangfree/",
};

export const workDetails = [
    {
        Position: "Flutter Developer",
        Company: `JoyTech`,
        Location: "Nha Trang",
        Type: "Part Time",
        Duration: "04/2022 - 07/2022",
    },
    {
        Position: "Flutter Developer",
        Company: `Online`,
        Location: "Nha Trang",
        Type: "Freelancer",
        Duration: "09/2022 - 07/2023",
    },

];

// Enter your Education Details here
export const eduDetails = [

    {
        Position: "Bachelor of Information Technology",
        Company: `Nha Trang University`,
        Location: "Nha Trang",
        Type: "Full Time",
        Duration: "10/2020 - Now",
    },
];

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    redux: redux,
    tailwind: tailwind,
    vscode: vscode,
    postman: postman,
    npm: npm,
    dart: dart,
    flutter: flutter,
    rn: rn,
    firebase: firebase,
    git: git,
    github: github,
    figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
    {
        title: "Application of search algorithms",
        image: projectImage1,
        description: `Apply binary search algorithm and linear search algorithm to search for elements in the array`,
        techstack: "Dart, Flutter",
        githubLink: "https://github.com/phiahihi/search_algorithm",
    },
    {
        title: "Application for measuring humidity and temperature",
        image: projectImage2,
        description: `In this application, I combine Arduino and Flutter to measure humidity and temperature. I use Arduino to measure temperature and humidity and send data to Firebase, then I use Flutter to get data from Firebase and display it. screen`,
        techstack: "Dart, Flutter, Arduino, Firebase",
        previewLink: "",
        githubLink: "https://github.com/phiahihi/iot_app",
    },
    {
        title: "Alarm application",
        image: projectImage3,
        description: `I used react native to build this application. This application functions as an alarm clock, can set multiple alarms, I use some native functions such as selecting ringtones, notifications, set alarm...`,
        techstack: "React Native, JavaScript, Redux, TypeScript",
        previewLink: "https://play.google.com/store/apps/details?id=com.react_alarm",
        githubLink: "https://github.com/phiahihi/react_alarm",
    },
    {
        title: "My Portfolio website",
        image: projectImage4,
        description: `This website is intended to introduce yourself, as well as familiarize yourself with ReactJS, Tailwind CSS, and Hostinger. This website was built with ReactJS, Tailwind CSS and deployed to Hostinger.`,
        techstack: "ReactJS, JavaScript, Tailwind CSS, AWS",
        previewLink: "#",
        githubLink: "https://github.com/https-github-com-phiahihi/my_portfolio",
    },

];

// Enter your Contact Details here
export const contactDetails = {
    email: "nguyenduchoangphi922016@gmail.com",
    phone: "+84 38 514 0807",
};