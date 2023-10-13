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
    about: `Tôi tên là Phi đến từ trường đại học Nha Trang. Mong muốn có thể trau dồi, tích lũy kinh nghiệm và tương lai trở thành FullStack Developer.`,
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
        Position: "Công nghệ thông tin",
        Company: `Đại học Nha Trang`,
        Location: "Nha Trang",
        Type: "Full Time",
        Duration: "10/2020 - Hiện tại",
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
        title: "Ứng dụng thuật toán tìm kiếm",
        image: projectImage1,
        description: `Áp dụng thuật toán tìm kiếm nhị phân và thuật toán tìm kiếm tuyến tính để tìm kiếm các phần tử trong mảng`,
        techstack: "Dart, Flutter",
        githubLink: "https://github.com/phiahihi/search_algorithm",
    },
    {
        title: "Ứng dụng đo độ ẩm và nhiệt độ",
        image: projectImage2,
        description: `Ứng dụng này tôi kết hợp giữa Arduino và Flutter để đo độ ẩm và nhiệt độ, tôi dùng Arduino để đo nhiệt độ và độ ẩm và gửi dữ liệu lên Firebase, sau đó tôi dùng Flutter để lấy dữ liệu từ Firebase và hiển thị lên màn hình`,
        techstack: "Dart, Flutter, Arduino, Firebase",
        previewLink: "",
        githubLink: "https://github.com/phiahihi/iot_app",
    },
    {
        title: "Ứng dụng báo thức",
        image: projectImage3,
        description: `Ứng dụng này tôi sử dụng react native để xây dựng, ứng dụng này có chức năng như một chiếc đồng hồ báo thức, có thể đặt nhiều báo thức, tôi có dụng một số chức năng ở native như chọn nhạc chuông, thông báo, đặt báo thức...`,
        techstack: "React Native, JavaScript, Redux, TypeScript",
        previewLink: "",
        githubLink: "https://github.com/phiahihi/react_alarm",
    },
    {
        title: "My Portfolio website",
        image: projectImage4,
        description: `Trang web này nhằm mục đích giới thiệu bản thân, cũng như làm quen với ReactJS, Tailwind CSS và AWS. Trang web này được xây dựng bằng ReactJS, Tailwind CSS và được deploy lên AWS S3.`,
        techstack: "ReactJS, JavaScript, Tailwind CSS, AWS",
        previewLink: "https://google.com",
        githubLink: "https://github.com/phiahihi/my_portfolio",
    },

];

// Enter your Contact Details here
export const contactDetails = {
    email: "nguyenduchoangphi922016@gmail.com",
    phone: "+84 38 514 0807",
};