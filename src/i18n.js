import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import productsEnglish from '../src/assets/json/products/english.json';
import productsMarathi from '../src/assets/json/products/marathi.json';
import productsHindi from '../src/assets/json/products/hindi.json';
const lang = {
    marathi: 'mr',
    english: 'en',
    hindi: 'hi'
};


i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: lang[localStorage.getItem('language')],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: {
                        navText: 'Home',
                        discount: 'discount',
                        slider: [
                            {
                                mainHeading1: 'Best Products',
                                mainHeading2: '',
                                subHeading1: 'We are committed to advancing agricultural productivity &',
                                subHeading2: 'sustainability',
                                tagLine1: 'Welcome to',
                                tagLine2: 'Enjo-Chem',
                                image: '/assets/images/home/home-slider-1.jpg',
                            },
                            {
                                mainHeading1: 'Best Products',
                                mainHeading2: '',
                                subHeading1: 'We are committed to advancing agricultural productivity &',
                                subHeading2: 'sustainability',
                                tagLine1: 'Welcome to',
                                tagLine2: 'Enjo-Chem',
                                image: '/assets/images/home/home-slider-2.jpg',
                            },
                        ],
                        introHeading: 'Premium Agricultural Goods for Farmer Prosperity',
                        introDescription: 'Enjo-Chem Agrochemical is dedicated to providing premium agricultural goods for farmer prosperity. As a leading manufacturer of crop protection, micronutrients, pesticides, and fertilizers, we are committed to advancing agricultural productivity and sustainability. Our innovative solutions encompass a wide range of crop protection products, fertilizers, plant growth regulators (PGR), pesticides, and micronutrient solutions. By empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.',
                        aboutHeading: 'About Us',
                        aboutDescription: 'Enjo-Chem Agrochemical Industries, led by CEO Mr. Arun Murlidhar Kotame, embodies a legacy of innovation and commitment to agricultural sustainability. Founded in 2011, the company has swiftly risen to prominence as a leading manufacturer of crop protection products, micronutrients, pesticides, and fertilizers. Enjo-Chem\'s mission is rooted in enhancing agricultural productivity while prioritizing the well-being of farmers and communities. By leveraging science and technology, the company delivers innovative solutions aimed at fostering resilient and prosperous agriculture. Enjo-Chem\'s vision extends globally, aspiring to be a trusted source of agricultural inputs, setting benchmarks in quality and customer satisfaction. Upholding core values of ethics, transparency, innovation, and environmental stewardship, Enjo-Chem maintains rigorous standards of total quality control and research and development leadership. With a dedicated team of professionals, the company remains steadfast in its pursuit of revolutionizing agriculture through continuous improvement and performance-driven products, marking a transformative journey in the field of agrochemicals. company remains steadfast in its pursuit of revolutionizing agriculture through continuous improvement and performance-driven products, marking a transformative journey in the field of agrochemicals.',
                        counting: {
                            product: 'Products',
                            farmer: 'Farmers',
                            dealer: 'Dealers',
                            manufacturingUnit: 'Manufacturing unit',
                        },
                        productHeading: 'Enjo-Chem Agrochemicals Products',
                        productSubHeading: 'Enjo-Chem Agrochemicals products are backed up by a strong R&D through in-house ANALYTICAL LABORATORY which is equipped with sophisticated laboratory equipments',
                    },
                    about: {
                        navText: "About",
                        text: 'About Us',
                        aboutCEOText: 'About CEO',
                        aboutCEODescription: 'Mr. Arun Murlidhar Kotame, the CEO of Enjo-Chem Agrochemical Industries, has an extensive professional journey. Beginning as a Field officer at Nashik in 1995, he ventured into entrepreneurship in 2011.',
                        aboutCompanyText: 'About Company',
                        aboutCompanyDescription: 'Enjo-Chem Agrochemical is a Manufacturer of Crop protection, Micronutrients, Pesticides and Fertilisers. Enjo-Chem is a leading agrochemical company dedicated to advancing agricultural productivity and sustainability. Our innovative solutions have a wide range of crop protection products, fertilisers, PGR, Pesticides and Micronutrients solutions. Committed to empowering farmers and nourishing communities, we leverage science and technology to create a more resilient and prosperous agriculture industry.',
                        ourVisionText: 'Our Vision',
                        ourVisionDescription: 'To be a global organization by enhancing and enriching core value for customers by setting up a benchmark in quality and determined to be one of the most trusted source of pesticides and fertilizers across the globe with focusing on satisfaction of the community who live the life by the seeds of their plants - The Farmers.',
                        ourMissionText: 'Our Mission',
                        ourMissionDescription: 'We are committed to supply the highest quality performance products to our customers within timelines at prevailing competitive prince and also to discover, develop & provide new formulations of pesticides while parallelly fulfilling our total quality control and quality assurance policy with no compromising our employees health and safety.',
                        coreValuesText: 'Core Values',
                        coreValuesDescription: 'Our core values are driven by a desire to improve the richness and protection of crop through scientific excellence with the highest standards of integrity. Our values are diamonds if our corporate reputation.',
                        coreValuesPoints: ['Ethics and Integrity', 'Transparency', 'Innovations', 'Total Quality Control', 'Nurture Environment', 'R & D Leadership through collaboration'],
                    },
                    product: {
                        navText: 'Products',
                        navs: {
                            'allProducts': 'All Products',
                            'cropProtection': 'Crop Protection',
                            'insecticide': 'Insecticides',
                            'fungicide': 'Fungicides',
                            'herbicide': 'Herbicides',
                            'micronutrients-fertiliser': 'Micro-Nutrients Fertilizers',
                            'pgr': 'Plant Growth Regulators',
                            'bio-fertilizer': 'Bio-Fertilizers',
                        },
                        call: 'Call US',
                        enquiry: 'Enquiry Now',
                    },
                    products: [...productsEnglish],
                    media: {
                        navText: 'Media',
                        newLaunch: {
                            navText: 'New Launch',
                            headerText: 'New Launch Products',
                            subSectionText: ['New Launch 2024', 'New Launch 2023'],
                        },
                        companyNews: {
                            navText: 'Company News',
                            headerText: 'Company News',
                            subSectionText: ['Company News'],
                        }
                    },
                    gallery: {
                        navText: 'Gallery',
                        annualDealersMeet: {
                            navText: 'Annual Dealers Meet',
                            headerText: 'Annual Dealer Meeting',
                            subSectionText: ['Annual Dealers meeting 2024 AT Chatrapati Sambhajinagar', 'Annual Dealers meeting 2023 AT Chatrapati Sambhajinagar', 'TOP SELLLERS MEET 2022 AT GOA', 'Annual Dealers meeting 2022 at Chatrapati Sambhajinagar', 'ANNUAL DEALERS MEETING 2017 AT WARDHA', 'TOP SELLERS MEET 2014 AT KERALA', 'ANNUAL DEALER MEET 2014 AT WARDHA'],
                        },
                        fieldVisits: {
                            navText: 'Field Visits',
                            headerText: 'Field Visits',
                            subSectionText: ['Field Visits'],
                        },
                        tour: {
                            navText: 'Tour Photos',
                            headerText: 'Tour Photos',
                            subSectionText: ['Thailand TOUR 2024', 'Kashmir TOUR 2024', 'Somnath, Diu, Sasan Gir tour 2024', 'Thailand TOUR 2023', 'SINGAPORE TOUR 2018', 'DWARKA TOUR 2017'],
                        },
                    },
                    contact: {
                        navText: 'Contact',
                    },
                    quickLinks: 'Quick Links',
                    footer: {
                        description: 'Enjo-Chem Agrochemical is a Manufacturer of Crop protection, Micronutrients, Pesticides and Fertilisers. Enjo-Chem is a leading agrochemical company dedicated to advancing agricultural productivity and sustainability.',
                        productTitle: 'Our Products',
                        product1: 'Insecticides',
                        product2: 'Fungicides',
                        product3: 'Herbicides',
                        product4: 'Micronutrients Fertilizers',
                        product5: 'Bio fertilizers',
                        product6: 'Plant Growth Regulators',
                        contactUsText: 'Contact Us',
                        address1: 'Office & Mfg. Premises',
                        address1Mini: 'Survey No. 53-2/1, kotamgaon, Tal. Yeola, Dist. Nashik, Maharashtra, India - 423401',
                        address2: 'Head Office',
                        address2Mini: 'B-14/10/12, Colgate chawk, MIDC waluj Kh, Gangapur, Chh. Sambhajinagar-431136',
                        phoneText: 'Phone',
                        phoneNumber: '+91 8275017003, +91 9579291495',
                        emailText: 'Email',
                        email: 'support@enjochemagro.com, enjochemagro133@gmail.com',
                        footerText: 'Enjo-Chem Agrochemical Industries, All Rights Reserved',
                    }
                },
            },
            mr: {
                translation: {
                    home: {
                        navText: 'घर',
                        discount: 'सवलत',
                        slider: [
                            {
                                mainHeading1: 'सर्वोत्तम उत्पादने',
                                mainHeading2: '',
                                subHeading1: 'आम्ही कृषी उत्पादकता वाढवण्यासाठी वचनबद्ध आहोत आणि',
                                subHeading2: 'टिकाऊपणा',
                                tagLine1: 'Enjo-Chem मध्ये',
                                tagLine2: 'आपले स्वागत आहे',
                                image: '/assets/images/home/home-slider-1.jpg',
                            },
                            {
                                mainHeading1: 'सर्वोत्तम उत्पादने',
                                mainHeading2: '',
                                subHeading1: 'आम्ही कृषी उत्पादकता वाढवण्यासाठी वचनबद्ध आहोत आणि',
                                subHeading2: 'टिकाऊपणा',
                                tagLine1: 'Enjo-Chem मध्ये',
                                tagLine2: 'आपले स्वागत आहे',
                                image: '/assets/images/home/home-slider-2.jpg',
                            },
                        ],
                        introHeading: 'शेतकरी समृद्धीसाठी प्रीमियम कृषी माल!',
                        introDescription: 'Enjo-Chem Agrochemical शेतकऱ्यांच्या समृद्धीसाठी प्रीमियम कृषी उत्पादने पुरविण्यासाठी समर्पित आहे. पीक संरक्षण, सूक्ष्म अन्नद्रव्ये, कीटकनाशके आणि खते यांचे एक प्रमुख उत्पादक म्हणून, आम्ही कृषी उत्पादनक्षमता आणि टिकाऊपणाच्या वृद्धीसाठी वचनबद्ध आहोत. आमचे अभिनव उपाय विविध प्रकारच्या पीक संरक्षण उत्पादने, खते, वनस्पती विकास नियंत्रक (PGR), कीटकनाशके आणि सूक्ष्म अन्नद्रव्ये समाधानांचा समावेश करतात. शेतकऱ्यांना सक्षम बनवून आणि समाजाचे पोषण करून, आम्ही विज्ञान आणि तंत्रज्ञानाचा वापर करून अधिक सक्षम आणि समृद्ध कृषी उद्योग निर्माण करण्याचा प्रयत्न करतो.',
                        aboutHeading: 'आमच्याबद्दल',
                        aboutDescription: 'एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीज, मुख्य कार्यकारी अरुण मुरलीधर कोटामे यांच्या नेतृत्वाखालील, कृषीच्या टिकाऊतेच्या आणि अभिवृद्धीच्या वारसेचा प्रतिष्ठान आहे. 2011 मध्ये स्थापित झालेल्या कंपनीने वापरणी उत्पादनांच्या, माइक्रोन्यूट्रिएंट्सच्या, कीटनाशकांच्या आणि खतांच्या अग्रणी निर्मात्याच्या रूपात त्वरितपणे उभे आहे. एन्जो-केमचे मिशन कृषीच्या उत्पादनशक्तीचे वाढवणे आहे, त्यांच्या विश्वासू ग्राहकांच्या आणि समुदायांच्या कल्याणाच्या प्राधान्याच्या सोयीसाठी. विज्ञान आणि तंत्रज्ञानाचा वापर करून, कंपनीने उद्यमी शेतीविद्यांसाठी अविकसित उपाय देते. एन्जो-केमचे आदर्श विश्वव्यापी आहे, ज्याने कृषीसाठीच्या प्रविष्टींची विश्वस्तरीय मान्यता आणि ग्राहक संतुष्टीचे मानक ठरवते. नैतिकता, पारदर्शिता, उद्योगशीलता आणि पर्यावरणीय संरक्षणाच्या मूल्यांचा पालन करणारे एन्जो-केम एकदिवसीय गुणवत्ता नियंत्रण आणि संशोधन नेतृत्व ठेवते. एक व्यावसायिक तंत्रज्ञांच्या टीमच्या सहभागाने, कंपनी शेतीविज्ञानातील सुधारणा आणि प्रदर्शन-निर्मित उत्पादनांच्या माध्यमातून कृषीविज्ञानाच्या क्षेत्रातील एक बदलाची यात्रा करण्याच्या उद्योगातील दृढतेने आहे',
                        counting: {
                            product: "उत्पादने",
                            farmer: "शेतकरी",
                            dealer: "डीलर्स",
                            manufacturingUnit: "उत्पादन युनिट"
                        },
                        productHeading: 'Enjo-Chem एग्रोकेमिकल उत्पाद',
                        productSubHeading: 'एन्जो-केम एग्रोकेमिकल उत्पाद एक मजबूत आर और डी के साथ समर्थित हैं, जो घरेलू एनालिटिकल प्रयोगशाला द्वारा सुसज्जित है जो विशेषज्ञ प्रयोगशाला उपकरणों से लैस है।'
                    },
                    product: {
                        navText: 'उत्पादन',
                        navs: {
                            'allProducts': 'सर्व उत्पादने',
                            'cropProtection': 'फसल संरक्षण',
                            'insecticide': 'कीटनाशक',
                            'fungicide': 'फंगीसाइड्स',
                            'herbicide': 'हरबिसाइड्स',
                            'micronutrients-fertiliser': 'माइक्रो-पोषक उर्वरक',
                            'pgr': 'पौधों के विकास नियंत्रक',
                            'bio-fertilizer': 'बायो-उर्वरक',
                        },
                        call: 'आमच्याशी संपर्क साधा',
                        enquiry: 'आता पूछताछ करा',
                    },
                    about: {
                        navText: "बद्दल",
                        text: 'आमच्याबद्दल',
                        aboutCEOText: 'मुख्य कार्यकारी अधिकारी बद्दल',
                        aboutCEODescription: 'एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीजचे सीईओ मिस्टर अरुण मुरलीधर कोटमे यांचा एक व्यापक पेशेवर अभियांत्रिकी आहे.1995 मध्ये नाशिकमध्ये फील्ड अधिकारी म्हणून सुरुवात करून, त्यांनी 2011 मध्ये उद्योजकतेत पाय पडले.',
                        aboutCompanyText: 'कंपनीबद्दल',
                        aboutCompanyDescription: 'एन्जो-केम अॅग्रोकेमिकल कृषी संरक्षण, मायक्रोन्यूट्रिएंट्स, कीटनाशक आणि उर्वरक चा निर्माता आहे. एन्जो-केम हे एक अग्रणी कृषी रसायन कंपनी आहे ज्याने कृषी उत्पादनशी आणि टिकाऊतेशी अग्रसर करण्यासाठी समर्पित आहे. आमच्या नवीनतम सोल्यूशनमध्ये कृषी संरक्षण उत्पादने, उर्वरक, पीजीआर, कीटनाशक आणि मायक्रोन्यूट्रिएंट्स सोल्यूशन्सची एक विशाल श्रृंखला आहे. किसानांना सशक्त करण्यासाठी आणि समुदायांना पोषण देण्यासाठी प्रतिबद्ध असून, आम्ही विज्ञान आणि प्रौद्योगिकीचा वापर करून एक अधिक सहनशील आणि समृद्ध कृषी उद्योग तयार करण्यासाठी प्रयत्नशील आहोत.',
                        ourVisionText: 'आमच्या दृष्टिकोन',
                        ourVisionDescription: 'गुणवत्तेत एक मानक स्थापित करून वैश्विक संस्था बनणे आणि ग्राहकांसाठी मूल्ये वाढवून आणि समृद्ध करून वर्षों तर्फे कीटनाशक आणि उर्वरकांचा सर्वांच्या विश्वात्मक स्रोत बनण्याचा निर्धार करून त्यांना जीवन जगण्याच्या बियांच्या बीजांनी जीवन जगणार्या समुदायाच्या संतुष्टीवर ध्यान केंद्रित करून.',
                        ourMissionText: 'आमचे मिशन',
                        ourMissionDescription: 'आम्ही आमच्या ग्राहकांना समयमळ अतिरिक्त प्रतिस्पर्धी किंमतावर उच्च गुणवत्तेचे प्रदर्शन उत्पादन प्रदान करण्यासाठी प्रतिबद्ध आहोत आणि साथ ही कीटनाशकांच्या नवीन नमुना शोधून, विकसित करून आणि प्रदान करून तसेच आमच्या कुल गुणवत्ता नियंत्रण आणि गुणवत्ता आश्वासन धोरणांचा पूर्ण करण्यासाठी आमच्या कर्मचारींच्या आरोग्य आणि सुरक्षेची कमी करून नाही.',
                        coreValuesText: 'मूल्य',
                        coreValuesDescription: 'आमच्या मूल्यांची इच्छा वैज्ञानिक उत्कृष्टतेच्या माध्यमातून फसलाची समृद्धी आणि संरक्षण सुधारण्याच्या इच्छेने चालित केली जाते आणि सर्वांत उच्च ईमानदारीच्या मानकांसह आमच्या मूल्ये आमच्या कॉर्पोरेट प्रतिष्ठेचे हीरे आहेत.',
                        coreValuesPoints: ['नैतिकता आणि अखंडता', 'पारदर्शिता', 'नवोत्कृष्टता', 'कुल गुणवत्ता नियंत्रण', 'पर्यावरणाची देखरेख', 'सहकार्यातून आर आणि डी नेतृत्व'],
                    },
                    products: [...productsMarathi],
                    media: {
                        navText: 'मीडिया',
                        newLaunch: {
                            navText: 'नवीन लॉन्च',
                            headerText: 'नवीन लॉन्च उत्पादने',
                            subSectionText: ['नवीन लॉन्च 2024', 'नवीन लॉन्च २०२३'],
                        },
                        companyNews: {
                            navText: 'कंपनीची बातम्या',
                            headerText: 'कंपनीची बातम्या',
                            subSectionText: ['कंपनीची बातम्या'],
                        }
                    },
                    gallery: {
                        navText: 'गॅलरी',
                        annualDealersMeet: {
                            navText: 'वार्षिक विक्रेता सभा',
                            headerText: 'वार्षिक डीलर सभा',
                            subSectionText: ['छत्रपती संभाजीनगर येथे वार्षिक डीलर्स सभा 2024', 'छत्रपती संभाजीनगर येथे वार्षिक डीलर्स सभा २०२३', 'छत्रपती संभाजीनगर येथे वार्षिक डीलर्स सभा २०२२', 'वार्षिक डीलर सभा २०१७ वर्धा', 'केरळ येथे टॉप सेलर्स मीट २०१४', 'वार्षिक डीलर सभा २०१४ वर्धा'],
                        },
                        fieldVisits: {
                            navText: 'फील्ड भेट',
                            headerText: 'फील्ड भेट',
                            subSectionText: ['फील्ड भेट'],
                        },
                        tour: {
                            navText: 'प्रवास फोटो',
                            headerText: 'टूर फोटो',
                            subSectionText: ['थाईलैंड यात्रा 2024', 'कश्मीर यात्रा 2024', 'सोमनाथ, दिउ, सासन गिर यात्रा 2024', 'थाईलैंड यात्रा 2023', 'सिंगापुर यात्रा 2018', 'द्वारका यात्रा 2017'],
                        },
                    },
                    contact: {
                        navText: 'संपर्क',
                    },
                    quickLinks: 'द्रुत दुवे',
                    footer: {
                        description: 'एन्जो-केम अॅग्रोकेमिकल एक क्रॉप प्रोटेक्शन, मायक्रोन्यूट्रिएंट्स, पेस्टिसाइड्स आणि फर्टिलायझर्सचे निर्माता आहे. एन्जो-केम हे एक अग्रणी अॅग्रोकेमिकल कंपनी आहे ज्याने कृषीविज्ञान आणि शेतीविज्ञानाचा वापर करून कृषीची उत्पादनशीलता आणि सतततेचे वाढवण्यास समर्पित आहे.',
                        productTitle: 'आमचे उत्पादन',
                        product1: 'कीटनाशके',
                        product2: 'फंगीसाइड्स',
                        product3: 'जैविक नाशके',
                        product4: 'मायक्रोन्यूट्रिएंट्स फर्टिलायझर्स',
                        product5: 'जैविक खते',
                        product6: 'प्लांट ग्रोथ रेग्युलेटर्स',
                        contactUsText: 'आमच्याशी संपर्क साधा',
                        address1: 'कार्यालय आणि निर्माण ठिकाण',
                        address1Mini: 'सर्वेक्षण क्रमांक 53-2/1, कोटमगाव, ता. येवला, जि. नाशिक, महाराष्ट्र, भारत - 423401',
                        address2: 'मुख्य कार्यालय',
                        address2Mini: 'बी-14/10/12, कोलगेट चौक, मिडसी वाळूज खंड, गंगापूर, छ. संभाजीनगर-431136',
                        phoneText: 'फोन',
                        phoneNumber: '+91 8275017003, +91 9579291495',
                        emailText: 'ईमेल',
                        email: 'support@enjochemagro.com, enjochemagro133@gmail.com',
                        footerText: 'एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीज, सर्व हक्क राखीव',
                    }
                },
            },
            hi: {
                translation: {
                    home: {
                        navText: 'घर',
                        discount: 'छूट',
                        slider: [
                            {
                                mainHeading1: 'सर्वश्रेष्ठ उत्पाद',
                                mainHeading2: '',
                                subHeading1: 'हम कृषि उत्पादकता, स्थिरता और स्थिरता को बढ़ाने के लिए',
                                subHeading2: 'प्रतिबद्ध हैं',
                                tagLine1: 'Enjo-Chem में',
                                tagLine2: 'स्वागत है',
                                image: '/assets/images/home/home-slider-1.jpg',
                            },
                            {
                                mainHeading1: 'सर्वश्रेष्ठ उत्पाद',
                                mainHeading2: '',
                                subHeading1: 'हम कृषि उत्पादकता, स्थिरता और स्थिरता को बढ़ाने के लिए',
                                subHeading2: 'प्रतिबद्ध हैं',
                                tagLine1: 'Enjo-Chem में',
                                tagLine2: 'स्वागत है',
                                image: '/assets/images/home/home-slider-2.jpg',
                            },
                        ],
                        introHeading: 'किसानों की समृद्धि के लिए प्रीमियम कृषि उत्पाद',
                        introDescription: 'Enjo-Chem Agrochemical किसानों की समृद्धि के लिए प्रीमियम कृषि उत्पाद प्रदान करने के लिए समर्पित है। फसल सुरक्षा, सूक्ष्म पोषक तत्व, कीटनाशक और उर्वरक के एक प्रमुख निर्माता के रूप में, हम कृषि उत्पादकता और स्थिरता को बढ़ाने के लिए प्रतिबद्ध हैं। हमारे नवाचार समाधान फसल सुरक्षा उत्पादों, उर्वरकों, पौधों की वृद्धि नियंत्रक (PGR), कीटनाशक और सूक्ष्म पोषक तत्व समाधानों की एक विस्तृत श्रृंखला को शामिल करते हैं। विज्ञान और प्रौद्योगिकी का उपयोग करके हम किसानों को सशक्त बनाते हुए और समुदायों का पोषण करते हुए, अधिक सशक्त और समृद्ध कृषि उद्योग का निर्माण करने का प्रयास करते हैं।',
                        aboutHeading: 'हमारे बारे में',
                        aboutDescription: 'एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज, सीईओ मिस्टर अरुण मुरलीधर कोटामे के नेतृत्वामध्ये, कृषी स्थायित्वाच्या विचारांच्या आणि प्रतिबद्धतेच्या वारसेचा आदर्श आहे. 2011 मध्ये स्थापित झालेल्या कंपनीने वापरणी उत्पादनांच्या, मायक्रोन्यूट्रिएंट्सच्या, कीटनाशकांच्या आणि खतांच्या अग्रणी निर्मात्याच्या रूपात त्वरितपणे उभे आहे. एन्जो-केमचे मिशन कृषीच्या उत्पादनशक्तीचे वाढवणे आहे, त्यांच्या विश्वासू ग्राहकांच्या आणि समुदायांच्या कल्याणाच्या प्राधान्याच्या सोयीसाठी. विज्ञान आणि तंत्रज्ञानाचा वापर करून, कंपनीने उद्यमी शेतीविद्यांसाठी अविकसित उपाय देते. एन्जो-केमचे आदर्श विश्वव्यापी आहे, ज्याने कृषीसाठीच्या प्रविष्टींची विश्वस्तरीय मान्यता आणि ग्राहक संतुष्टीचे मानक ठरवते. नैतिकता, पारदर्शिता, उद्योगशीलता आणि पर्यावरणीय संरक्षणाच्या मूल्यांचा पालन करणारे एन्जो-केम एकदिवसीय गुणवत्ता नियंत्रण आणि संशोधन नेतृत्व ठेवते. एक व्यावसायिक तंत्रज्ञांच्या टीमच्या सहभागाने, कंपनी शेतीविज्ञानातील सुधारणा आणि प्रदर्शन-निर्मित उत्पादनांच्या माध्यमातून कृषीविज्ञानाच्या क्षेत्रातील एक बदलाची यात्रा करण्याच्या उद्योगातील दृढतेने आहे',
                        counting: {
                            product: "उत्पाद",
                            farmer: "किसान",
                            dealer: "डीलर",
                            manufacturingUnit: "उत्पादन इकाई"
                        },
                        productHeading: 'Enjo-Chem अॅग्रोकेमिकल उत्पाद',
                        productSubHeading: 'Enjo-Chem अॅग्रोकेमिकल उत्पाद घरच्या एनालिटिकल प्रयोगशाळेद्वारे सुसज्जित असलेल्या उन्नत प्रयोगशाळा उपकरणांच्या सहाय्याने समर्थित आहेत'
                    },
                    about: {
                        navText:"बारेमें",
                        text: 'हमारे बारे में',
                        aboutCEOText: 'मुख्य कार्यकारी अधिकारी के बारे में',
                        aboutCEODescription: 'एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज के सीईओ मिस्टर अरुण मुरलीधर कोटमे का एक व्यापक पेशेवर यात्रा है। 1995 में नाशिक में फील्ड अधिकारी के रूप में शुरू होकर, उन्होंने 2011 में उद्यमिता में कदम रखा।',
                        aboutCompanyText: 'कंपनी के बारे में',
                        aboutCompanyDescription: 'एन्जो-केम एग्रोकेमिकल क्रॉप संरक्षण, माइक्रोन्यूट्रिएंट्स, कीटनाशक और उर्वरकों का निर्माता है। एन्जो-केम एक अग्रणी कृषि रसायन कंपनी है जो कृषि उत्पादकता और टिकाऊता को बढ़ाने के लिए समर्पित है। हमारे नवाचारी समाधानों में क्रॉप संरक्षण उत्पादों, उर्वरकों, पीजीआर, कीटनाशकों और माइक्रोन्यूट्रिएंट्स समाधानों की एक विस्तृत श्रृंखला है। किसानों को सशक्त बनाने और समुदायों को पोषण देने के लिए प्रतिबद्ध, हम विज्ञान और प्रौद्योगिकी का सहारा लेते हैं ताकि एक अधिक सहनशील और समृद्ध कृषि उद्योग बनाया जा सके।',
                        ourVisionText: 'हमारी दृष्टि',
                        ourVisionDescription: 'गुणवत्ता में एक मानक स्थापित करके ग्लोबल संगठन बनना और ग्राहकों के लिए मूल्यों को बढ़ाकर और समृद्ध करके वर्षों तक कीटनाशक और उर्वरकों का सबसे विश्वसनीय स्रोत बनने का निर्धारित है जो अपने पौधों के बीजों से जीवन जीते हैं - किसानों की संतुष्टि पर ध्यान केंद्रित करके।',
                        ourMissionText: 'हमारा मिशन',
                        ourMissionDescription: 'हम अपने ग्राहकों को समय सीमाओं के भीतर प्रतिस्पर्धी मूल्य पर सर्वोत्तम गुणवत्ता वाले प्रदर्शन उत्पादों प्रदान करने के लिए प्रतिबद्ध हैं और साथ ही कीटनाशकों के नए नमूने खोजने, विकसित करने और प्रदान करने के लिए भी अपनी कुल गुणवत्ता नियंत्रण और गुणवत्ता आश्वासन नीति को पूरा करते हुए अपने कर्मचारियों के स्वास्थ्य और सुरक्षा को कमी करते हुए नहीं।',
                        coreValuesText: 'मूल्य',
                        coreValuesDescription: 'हमारे मूल्यों को वैज्ञानिक उत्कृष्टता के माध्यम से फसल की समृद्धि और संरक्षण में सुधार करने की इच्छा से चलाया जाता है और सबसे उच्च ईमानदारी के मानकों के साथ। हमारे मूल्य हमारे कॉर्पोरेट प्रतिष्ठा के हीरे हैं।',
                        coreValuesPoints: ['नैतिकता और अखंडता', 'पारदर्शिता','नवाचार', 'कुल गुणवत्ता नियंत्रण','पर्यावरण की देखभाल','सहयोग के माध्यम से आर एंड डी नेतृत्व'],
                    },
                    product: {
                        navText: 'उत्पाद',
                        navs: {
                            'allProducts': 'सभी उत्पाद',
                            'cropProtection': 'फसल संरक्षण',
                            'insecticide': 'कीटनाशक',
                            'fungicide': 'फंगीसाइड्स',
                            'herbicide': 'हरबिसाइड्स',
                            'micronutrients-fertiliser': 'माइक्रो-पोषक उर्वरक',
                            'pgr': 'पौधों के विकास नियंत्रक',
                            'bio-fertilizer': 'बायो-उर्वरक',
                        },
                        call: 'हमें कॉल करें',
                        enquiry: 'अब पूछताछ करें',
                    },
                    contact: {
                        navText: 'संपर्क',
                    },
                    products: [...productsHindi],
                    media: {
                        navText: 'मीडिया',
                        newLaunch: {
                            navText: 'नई लॉन्च',
                            headerText: 'नई लॉन्च उत्पादने',
                            subSectionText: ['नई लॉन्च 2024', 'नई लॉन्च 2023'],
                        },
                        companyNews: {
                            navText: 'कंपनी की खबरें',
                            headerText: 'कंपनी की खबरें',
                            subSectionText: ['कंपनी की खबरें'],
                        }
                    },
                    gallery: {
                        navText: 'गैलरी',
                        annualDealersMeet: {
                            navText: 'वार्षिक डीलर्स मीट',
                            headerText: 'वार्षिक डीलर सम्मेलन',
                            subSectionText: ['छत्रपति संभाजीनगर में वार्षिक डीलर सम्मेलन 2024', 'छत्रपति संभाजीनगर में वार्षिक डीलर सम्मेलन 2023', 'गोवा में शीर्ष विक्रेताओं की मीट 2022', 'छत्रपति संभाजीनगर में वार्षिक डीलर सम्मेलन 2022', 'वार्षिक डीलर सम्मेलन 2017 वर्धा', 'केरला में शीर्ष विक्रेताओं की मीट 2014', 'वार्षिक डीलर सम्मेलन 2014 वर्धा'],
                        },
                        fieldVisits: {
                            navText: 'फील्ड दौरा',
                            headerText: 'फील्ड दौरा',
                            subSectionText: ['फील्ड दौरा'],
                        },
                        tour: {
                            navText: 'यात्रा फ़ोटो',
                            headerText: 'यात्रा फ़ोटो',
                            subSectionText: ['थाईलैंड यात्रा 2024', 'कश्मीर यात्रा 2024', 'सोमनाथ, दिउ, सासन गिर यात्रा 2024', 'थाईलैंड यात्रा 2023', 'सिंगापुर यात्रा 2018', 'द्वारका यात्रा 2017'],
                        },
                    },
                    quickLinks: 'त्वरित सम्पक',
                    footer: {
                        description: 'एन्जो-केम एग्रोकेमिकल एक क्रॉप प्रोटेक्शन, माइक्रोन्यूट्रिएंट्स, पेस्टिसाइड्स और फर्टिलाइजर्स का निर्माता है। एन्जो-केम एक अग्रणी एग्रोकेमिकल कंपनी है जो कृषि उत्पादकता और स्थायित्व को बढ़ाने के लिए समर्पित है',
                        productTitle: 'हमारे उत्पाद',
                        product1: 'कीटनाशक',
                        product2: 'फंगाइसाइड्स',
                        product3: 'हर्बिस',
                        product4: 'माइक्रोन्यूट्रिएंट्स फर्टिलाइझर्स',
                        product5: 'जैविक खाद',
                        product6: 'प्लांट ग्रोथ रेगुलेटर्स',
                        contactUsText: 'हमसे संपर्क करें',
                        address1: 'कार्यालय और निर्माण स्थल',
                        address1Mini: 'सर्वेक्षण संख्या 53-2/1, कोटमगाव, ता. येवला, जि. नासिक, महाराष्ट्र, भारत - 423401',
                        address2: 'मुख्य कार्यालय',
                        address2Mini: 'बी-14/10/12, कोलगेट चौक, मिडसी वाळूज खंड, गंगापूर, छ. संभाजीनगर-431136',
                        phoneText: 'फोन',
                        phoneNumber: '+91 8275017003, +91 9579291495',
                        emailText: 'ईमेल',
                        email: 'support@enjochemagro.com, enjochemagro133@gmail.com',
                        footerText: 'एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज, सर्वाधिकार सुरक्षित',
                    }
                },
            },
        },
    });

export default i18n;