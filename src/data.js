// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //   Header Details ---------------------
  name: "Romaine",
  headerTagline: [
    //Line 1 For Header
    "I build digital",
    //Line 2 For Header
    "products",
     "and experiences",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a software engineer who currently resides in Japan. I have had a lifelong fascination with all things tech and I am especially excited about the future possibilities of cloud computing. In a previous life I also dabbled in video editing and graphic design.",

  //Contact Email
  contactEmail: "romallen1@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "E-Mina", //Project Title - Add Your Project Title Here
      para:
        "An android mobile app that helps users to find and visit real life locations from anime and movies.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s3.ap-northeast-1.amazonaws.com/romallen.com/images/emina_text.png",
      //Project URL - Add Your Project Url Here
      urlRepo: "https://github.com/YACT-jp",
      urlApp: "https://play.google.com/store/apps/details?id=com.reactnativehello",
    },
    {
      title: "JSE Web Scraper", //Project Title - Add Your Project Title Here
      para:
        "Data scraping and charting app for Jamaica Stock Exchange trading data.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s3.ap-northeast-1.amazonaws.com/romallen.com/images/JSE+STOCK+APP.png",
      //Project URL - Add Your Project Url Here
      urlRepo: "https://github.com/romallen/jse-scraper",
      urlApp: "https://jse-chart.romallen.com/",
    },
    {
      title: "Truck Stop Finder", //Project Title - Add Your Project Title Here
      para:
        "A web app that helps travelers find and filter truck stops on a map.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s3.ap-northeast-1.amazonaws.com/romallen.com/images/truckstop.png",
      //Project URL - Add Your Project Url Here
      urlRepo: "https://github.com/romallen/Truck-Stop-Finder",
      urlApp: "http://truck-stop-searcher.herokuapp.com/",
    },
    {
      title: "Quiz Game CRUD API", //Project Title - Add Your Project Title Here
      para:
        "A CRUD API service for a quiz game using Express.js, Node.js, Prisma & PostgreSQL.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s3.ap-northeast-1.amazonaws.com/romallen.com/images/crud-API.jpeg",
      //Project URL - Add Your Project Url Here
      urlRepo: "https://github.com/romallen/Quiz-Game-API-Project",
      urlApp: "https://reqbin.com/8kljaach",
    },
   /* {
      title: "Jeopardy", //Project Title - Add Your Project Title Here
      para:
        "A quiz game built using React Native", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
        url: "https://github.com/romallen/QuizApp",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
*/
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  /*aboutParaOne:
    "",
*/
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "",
    },
    {
      img: cssIcon,
      para:
        "",
    },
    {
      img: jsIcon,
      para:
        "",
    },
    {
      img: reactIcon,
      para:
        "",
    },
    {
      img: designIcon,
      para:
        "",
    },
    {
      img: codeIcon,
      para:
        "",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/romallen" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/romaine-allen/",
    },
 
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
