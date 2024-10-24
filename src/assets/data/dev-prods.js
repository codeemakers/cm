// ==================== Image Imports ============================
import {
	jarvis,
	apkColorFinder,
	apkPetShop,
	webArtStore,
	webExpense,
  } from '../images/ImagePaths'
  
// ==================== Image Imports ============================

const devproducts = [

	// ================= Android Pet Store ======================

	{
		id: "G1102",
		productName: "Android Pet Shop",
		imgUrl: apkPetShop,
		category: "Android",
		price: 4000,

		abstract: 'Online Pet Shop is an Android application where the purchase and sale of pets took place. Thus this website provides a platform where the users could buy or sell pets by providing the contact details of the buyers/sellers. Our project also includes a special feature for buying street dogs through the app whereas its maintenance and operation are carried out by different non-government organizations [NGO] through a website. Through this, we desire to contribute something for reducing the count of street dogs in public places. We are building this web application in a way that we create a login for all users. Thus this app makes a perfect choice for the ones who loves pets and seeks variant breeds of them.',

		objectives: "This application ‘Online Pet Store’ is a platform for buying and selling different categories of pets. This project also enables NGO's to advertise their campaigns. Through this project, users can directly contact the buyer/seller so that they are benefited by removing the commission fee paid to agents while buying their favoured pets.",

		swreq: 'Front End: Flutter\nBack End: Google Firebase',

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

		documentLink: 'https://drive.google.com/file/d/1UblW9vcH0ENFwT1SMKN-PiZMFIQ5ZFFt/view?usp=drive_link',
		youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
	},

	// ================= Color Finder App ======================

	{
		id: "G1103",
		productName: "Color Finder App",
		imgUrl: apkColorFinder,
		category: "Android",
		price: 173,

		abstract: 'Coloration is an android application to create their own color combination. Today we came to know the circumstances that most of the people are dependent on physical designers or manuals to get color combinations. Through this application the user can get to know more about unknown colors and creative combinations. This application will be utilized for a variety of purposes, including animation, web design, art, architecture, costume design and etc. This project also includes a special feature where the user can create their own combinations of colors through this application. The user has many choices that can be selected by themselves instead of the designers influence or the limited options given by their designers. The details of each color have been provided under each family of colors such as color name, hexacode and description of the color. One could know all about the unknown colors in the color family so that they could decide their favorite colors and it perfect complementary color.',

		objectives: "This project helps to consumes the time and effort of the user. This project helps to create new colors using the complementary color. This project helps to create new colors using the complementary color. It also helps the user to make their vision into reality. We can also add our favorite combinations to Wishlist.",

		swreq: 'Front End: Flutter, Dart\nBack End: Google Firebase',

		proposed: 'Users activities can be tracked through the Admin. The concept of color theory can also be referred through this app. Application has a login system which makes the app portable. Search option will benefit the users to access all the colors. Users can create their own colors with their own complementary colors. Create colors has two modes i.e., custom mode and coloration mode.',

		modules: [
			{
				desc: 'Login\nAdd Colors\nAdd Color Family\nColor Management',
				name: 'Admin'
			},
			{
				desc: 'Color Exploration\nFavourites\nCreate Colors',
				name: 'User'
			},
		],

		documentLink: 'https://drive.google.com/file/d/1e2F22doNbOG9yFGBGteGllPiETuyTdqX/view?usp=drive_link',
		youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
	},

	// ================= Online Art Store ======================

	{
		id: "G1107",
		productName: "Online Art Store",
		imgUrl: webArtStore,
		category: "React JS",
		price: 5000,

		abstract: 'The project aims to create a system that makes it easy for artists to sell their artwork and for buyers to find and purchase artwork. It includes features like showcasing artwork, connecting with buyers, chatting through WhatsApp, following and unfollowing artists, saving posts for future reference, zooming in on images, sharing artwork on social media, downloading images, and filtering artwork categories. The system also has a user-friendly interface and an admin module for managing accounts. The admin module allows for viewing registered users, posted artwork, login/logout, and tracking saved posts and followers.',

		objectives: "The main objective of this project is to create a application in which the users can buy arts from the website that have been posted in the application by the seller. If the user likes it he can contact the seller via inbuilt Chat Application",

		swreq: 'Front End: HTML,CSS\nBack End: Google Firebase\nServer End: React JS',

		proposed: 'The proposed system is an online platform that provides a marketplace for artists to showcase and sell their artwork to potential buyers. The system allows artists to create accounts, upload images of their artwork, and provide information such as pricing and descriptions. Buyers can create accounts, browse the available artwork, and engage in chat conversations with artists through WhatsApp integration and chat option. The system also includes an administrative interface for managing artist and buyer accounts. This intermediate system aims to simplify the process of buying, selling and showcasing the artworks, facilitating communication and fostering connections between artists and buyers',

		modules: [
			{
				desc: 'Login\nUser Management\nPost Management',
				name: 'Admin'
			},
			{
				desc: 'Login\nUpdate Profile\nFollow/Unfollow\nSearch Arts\nText Sellers\nShare Post\nAdd/Update Post',
				name: 'User'
			},
		],

		documentLink: 'https://drive.google.com/file/d/1_TJnQtDeZoS79B6Ut-z9Z92i0-noAvLI/view?usp=drive_link',
		youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
	},

	// ================= Online Expense Tracker ======================

	{
		id: "G1108",
		productName: "Online Expense Tracker",
		imgUrl: webExpense,
		category: "PHP",
		price: 4500,

		abstract: 'This project is based on an expense and income tracking system. This project aims to create an easy, faster and smooth tracking system between the expense and the income.This project also offers some opportunities that will help the user to sustain all financial activities like digital automated diary. So, for the better expense tracking system, we developed our project that will help the users a lot. Most of the people cannot track their expenses and income one way they face a money crisis, in this case daily expense tracker can help the people to track income-expense day to day and making life tension free. Money is the most valuable portion of our daily life and without money we will not last one day on the earth. So using the daily expense tracker application is important to load a happy family.',

		objectives: 'Daily expense tracker helps the user to avoid unexpected expenses and bad financial situations. This Project will save time and provide a responsible lifestyle.',

		swreq: 'Front End: HTML, CSS, Bootstrap\nBack End: PHP, MYSQL\nControl End: Java Script',

		proposed: 'To bring a seamless interface for all type of users where they can track their expenses and also comes to a solution about their spends. Having a various cards options to store the users balance and categorsiing the users spends.',

		modules: [
			{
				desc: 'Login\nAdd/Edit Expense\nView Spends\nDebit Cards Management\nCategory Management',
				name: 'User'
			},
		],

		documentLink: '',
		youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
	},

	// ================= Jarvis Desktop Assistant ======================

	{
		id: "G1110",
		productName: "Jarvis Desktop Assistant",
		imgUrl: jarvis,
		category: "Python",
		price: 8000,

		abstract: 'In an era where flexibility and mobility are paramount, the Bike Rental Management System Application emerges as a game-changer in the urban transportation. This innovative application redefines the way individuals interact with bike rentals, seamlessly connecting users with a multitude of vendors through a unified, user-friendly platform. The proposed application presents a unique multi-vendor approach, allowing various bike rental vendors to showcase their offerings. Vendors can effortlessly post their bikes, and handle bookings, offering users a diverse array of options. Users experience unparalleled convenience in discovering bikes for rent. Through an intuitive interface, they can explore a wide selection of bikes, view detailed specifications, and seamlessly book their preferred ride. This streamlined process ensures a hassle-free experience from selection to confirmation. Navigating the city becomes effortless as users can locate bikes but also reach the vendor’s precise location using integrated Google Maps.',

		objectives: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut',

		swreq: 'Front End: HTML5, CSS3, Bootstrap\nEnd: PHP, MYSQL\nControl End: Angular Java Script',

		proposed: 'The proposed Bike Rental Management System introduces a comprehensive digital platform that revolutionizes the bike rental process. Utilizing advanced technologies, user-friendly interfaces, and robust backend systems, the proposed system ensures seamless interactions between vendors and users, enhancing efficiency, transparency, and overall user satisfaction.',

		modules: [
			{
				desc: 'Login\nApprove Vendor\nView User Details',
				name: 'Admin'
			},
			{
				desc: 'Register\nLogin\nCreate Bike\nUpdate/Delete Bike\nUpdate Google geo Location\nUpdate Booking request\nView Feedback & Rating\nMy Profile',
				name: 'Vendor'
			},
			{
				desc: 'Register\nLogin\nSearch Bike\nSearch City, area wise\nView Google Geo location\nMake Booking Request\nView Booking Status\nPost Feedback & Rating\nMy Profile',
				name: 'User'
			}
		],

		documentLink: 'drive.com',
		youtubeLink: 'https://www.youtube.com/embed/mB8ajdvRnC0?si=KQaQ5s2vm_ffVBfu',
	},

];