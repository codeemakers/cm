// ==================== Image Imports ============================
import {
  webExam,
  webInterior,
  webPetShop,
  webPortfolio,
  onRoad,
  objectDetector,
} from '../images/ImagePaths'

// ==================== Image Imports ============================

const products = [

  // ================= Online Pet Shop GS11-01 ======================

  {
    id: "GS11-01",
    productName: "Online Pet Shop",
    imgUrl: webPetShop,
    category: "PHP",
    price: 4000,

    abstract: 'Online Pet Shop is an web application where the purchase and sale of pets took place. Thus this website provides a platform where the users could buy or sell pets by providing the contact details of the buyers/sellers. Our project also includes a special feature for buying street dogs through the app whereas its maintenance and operation are carried out by different non-government organizations [NGO] through a website. Through this, we desire to contribute something for reducing the count of street dogs in public places. We are building this web application in a way that we create a login for all users. Thus this app makes a perfect choice for the ones who loves pets and seeks variant breeds of them.',

    objectives: "This application ‘Online Pet Store’ is a platform for buying and selling different categories of pets. This project also enables NGO's to advertise their campaigns. Through this project, users can directly contact the buyer/seller so that they are benefited by removing the commission fee paid to agents while buying their favoured pets.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP, MYSQL\nControl End: Xampp',

    proposed: 'Digitalize the process of pet marketing. Eliminating the commission paid to agents. This project reduces human efforts, saves time and resources. A special feature for adopting street dogs from NGO Campaigns. Can locate nearby pet shop through maps. An advanced search option for searching desired breeds of pets.',

    modules: [
      {
        desc: 'Login\nVerify NGO\nView User Details\nView NGO Details',
        name: 'Admin'
      },
      {
        desc: 'Register\nLogin\nCreate Pet\nUpdate/Delete Pet\nBuy Pet\nContact Sellers\nMake Wishlist\nLogout\nSearch Pet\nFilter Posts',
        name: 'User'
      },
      {
        desc: 'Register\nLogin\nPost Ads\nEdit Ads\nDelete Ads\nLogout',
        name: 'NGO'
      }
    ],

    documentLink: '1S8UBxmxyZ3DkW_kHXGAV2p2YcaYRJbzu',
    youtubeLink: 'ryHwtdwA84A',
  },

  // ================= Photographer Portfolio Website GS11-02 ======================

  {
    id: "GS11-02",
    productName: "Photographer Portfolio Website",
    imgUrl: webPortfolio,
    category: "PHP",
    price: 3500,

    abstract: 'Step into the world of visual storytelling, where the art of photography transforms fleeting moments into timeless memories. My portfolio website is a curated collection of photographs that transcend the ordinary and invite you to see the world through lens. Each image you encounter has a story to tell, an emotion to convey, or a scene to capture. I believe in the power of photography to freeze a single moment in time, preserving its essence and allowing you to relive it whenever you visit my site. Photography to me is a language that speaks without words. It transcends barriers and connects us through the universal language of visuals.',

    objectives: "To promote one’s photography services and attract potential clients. To demonstrate technical skills, proficiency with photography equipment and mastery of various photographic techniques. To use the portfolio as a marketing tool in photography competitions, exhibitions, or grant applications.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'Design an intuitive and user friendly interface for managing and showcasing the portfolio, which include options like photo upload, selection and categorization. Enable the user to select and mark their best photographs for inclusion in the portfolio. Implement a mobile-friendly design to ensure a seamless viewing experience on smartphones',

    modules: [
      {
        desc: 'Portfolio Management\nBooking Management\nAdd/Update Details\nReviews Management',
        name: 'Admin'
      },
      {
        desc: 'View Photos\nBook Photographer\nWrite Review',
        name: 'User'
      },
    ],

    documentLink: '1ik-IVO76zaU0-tNbvfD7UVwh6eCnOZDs',
    youtubeLink: '_E3xsYKSZgk',
  },

  // ================= Online Exam System GS11-03 ======================

  {
    id: "GS11-03",
    productName: "Online Exam System",
    imgUrl: webExam,
    category: "PHP",
    price: 4000,

    abstract: "The Online Exam System represents a groundbreaking initiative aimed at modernizing and enhancing the examination processes within educational institutions. This project addresses the inherent challenges and limitations associated with traditional paper-based examination systems by introducing a contemporary, efficient, and user-centric online platform. The system comprises three distinct but interconnected modules: Admin, Teacher, and Student, each tailored to fulfill specific roles within the examination ecosystem. The system's accessibility feature allows students to access exams from any location with an internet connection, making it more inclusive for remote learners",

    objectives: "The project aims to streamline and automate various aspects of examination processes, from class management to exam creation and result analysis. By centralizing these functions into an integrated online platform, the project simplifies the dministrative burden and reduces the scope for manual errors.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'The system will be divided into three core modules: Admin, Teacher, and Student, each with specific roles and responsibilities. Administrators will be able to manage classes, teachers, and students efficiently, streamlining the user registration and allocation processes. Teachers can set custom timers for each exam, enabling flexibility in exam duration.',

    modules: [
      {
        desc: 'User Management\nClass Management\nExam Approval\nUser Support\nData Management',
        name: 'Admin'
      },
      {
        desc: 'Exam Creation\nResult Analysis\nUser Profile\nExam Management',
        name: 'Teacher'
      },
      {
        desc: 'Exam Participation\nTimer and Navigation\nUser Profile\nInstant Results',
        name: 'Student'
      }
    ],

    documentLink: '1JNCd7z16wA435jKEUhORDfUtp1io5PJy',
    youtubeLink: 'vLjxjkMGGzs',
  },

  // ================= Interior Design Website GS11-04 ======================

  {
    id: "GS11-04",
    productName: "Interior Design Website",
    imgUrl: webInterior,
    category: "PHP",
    price: 3500,

    abstract: "The “Interior Design Website” project presents an innovative online platform that bridges the gap between homeowners seeking interior design solutions and the expertise of professional designers. This web-based solution is designed to offer a comprehensive and user- friendly experience, enabling homeowners to explore, engage and envision their dream living spaces. It categorizes projects into “Completed”, “Running” and “Upcoming” providing homeowners with a curated gallery of design inspiration. The website also empowers users to book appointments, initiate direct communication and access a wide array of educational resources.The project encompasses two primary modules: the “User Module” and the “Admin Module”. Users can explore projects, book appointments, contact the company, view company information, access team member profiles and monitor project statuses. Meanwhile, administrators can efficiently manage website content, add project details, include team member information, and directly respond to user inquiries.",

    objectives: "Educate homeowners about the interior design process and available options, fostering transparency and informed decision-making. Showcase the expertise and talents of interior design companies, helping them stand out in a competitive market. Streamline project management by categorizing and presenting projects in an organized manner, making it easier for clients to explore the company's portfolio.",

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'The proposed system for the Jisha Interiors project is a comprehensive and user-centric online platform that aims to revolutionize the interior design industry by bridging the gap between homeowners and design professionals.',

    modules: [
      {
        desc: 'Login\nAdding Team Members\nProject Portfolio Management',
        name: 'Admin'
      },
      {
        desc: 'Appointment Booking\nProject Exploration\nReviews and Feedback',
        name: 'User'
      },
    ],

    documentLink: '1PEfH55JIpcnyTlmU92j4EGfXEXyaRjTp',
    youtubeLink: 'VD8DMya16yY',
  },

  // ================= Onroad Breakdown Assistant GS11-05 =================

  {
    id: "GS11-05",
    productName: "Onroad Breakdown Assistant",
    imgUrl: onRoad,
    category: "PHP",
    price: 3000,

    abstract: 'All vehicles will cause some issues in the long run due to wear and tear it is uncertain to predict them in advance. So as to tackle this problem I have come up with this project which helps the users in the uncertain situations to find assistance through our website. It is a web based application that was designed to ensure faster and efficiency of user search on the local mechanics nearby. This also give full control to the admins over the data of mechanics contact details, their personal information like name, location etc. to provide more authentic details to its website users',

    objectives: 'The main objective of this project is to create a web application in which admin can view each customer order and give a solution and contact details of the nearby mechanic to the customer to solve those vehicle problems.',

    swreq: 'Front End: HTML, CSS\nBack End: PHP,MYSQL\nControl End: Xampp',

    proposed: 'In this website users can find assistance easily by just visiting in the website and just taping on the help key, to find the nearby servicemen and let them know your problem and by sharing your location the servicemen will reach the destination to help you with the problem that has been occurred. And also, this helps in saving work and time, which also saves more of the manual work of the user. The user has to just login in the website and have to request a nearby servicemen for help.',

    modules: [
      {
        desc: 'Login\nEdit Profile\nEdit Address\nUpdate Location\nView History\nApprove/Decline Requests',
        name: 'Mechanic'
      },
      {
        desc: 'Login\nUpdate Location\nUpdate Location\nSearch Mechanics\nGive Request to Mechanic',
        name: 'User'
      },
    ],

    documentLink: '1kNK8W620cbREJWt1dP8O61DzuranP7V5',
    youtubeLink: 'mrq5RWRJHBg',
  },

  // ================= Object Detector Python App GS11-06 =================

  {
    id: "GS11-06",
    productName: "Object Detector Python App",
    imgUrl: objectDetector,
    category: "Android",
    price: 4000,

    abstract: 'The core functionality of the application revolves around utilizing pre-trained machine learning models to detect objects within the input frames. Leveraging the Python programming language, the project focuses on training custom object detection models using state-of-the-art machine learning algorithms and frameworks. The user interface (UI) of the application is designed with Flutter, providing an intuitive and seamless experience for users. The UI incorporates features for accessing the device camera for real-time object detection and selecting images from the device gallery for analysis.',

    objectives: 'Develop a Flutter-based mobile application for real-time object detection through the device camera. Implement object detection functionality for images sourced from the device gallery. Create an intuitive and visually appealing user interface for seamless interaction.',

    swreq: 'Front End: Flutter & Dart\nServer Side: Python',

    proposed: 'Optimised Performance: The application will utilise optimised machine learning models and inference mechanisms to ensure efficient processing and minimal latency. This enhances performance and responsiveness, providing users with a seamless object detection experience. Intuitive User Interface: The user interface will be designed to be intuitive and user friendly, featuring clear controls, visual feedback, and guidance to assist users in performing object detection tasks effectively. ',

    modules: [
      {
        desc: 'Camera Access\nGallery Selection',
        name: 'User'
      },
    ],

    documentLink: '1qKrurTqC592uSFX-wT2mbGci5Jzifw8h',
    youtubeLink: 'Be0vyF0sQSw',
  },

]

export default products;