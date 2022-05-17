
const headerStart=[
    {
        id:1,
        "image":"svg/svg-0.svg",
        "nome":"home",
        "active":"false",
        "link":""
    },
    {
        id:2,

        image:'',
        "nome":"pages",
        "active":"false",
        "link":""
    },
    {
        id:3,

        image:'',
        "nome":"menu",
        "active":"false",
        "link":""
    },
    {
        id:4,

        nome:'',
        "image":"img/h5-logo-divided-header.png",
        "link":"",
        active:'false'
    },
    {
        id:5,

        image:'',
        "nome":"event",
        "active":"false",
        "link":""
    },
    {
        id:6,

        image:'',
        "nome":"blog",
        "active":"false",
        "link":""
    },
    {
        id:7,

        image:'',
        "nome":"landing",
        "active":"false",
        "link":""
    }
];
const headerEnd=[
        {
            id:1,
            "image":"svg/svg-1.svg",
            "nome":"cart",
            "active":"false",
            "link":""
        },
        {
            id:2,
            image:'',
            "nome":"search",
            "active":"false",
            "link":""
        } 
    ];
    const jumboSlider=[
        {
            "background":"img/h3-rev-img-1.png",
            "image":"h3-rev-img-2.png",
            "active":"false"
        },
        {
            "background":"img/h3-rev-img-3.png",
            "image":"h3-rev-img-4.png",
            "active":"false"
        },
        {
            "background":"img/h3-rev-img-5.png",
            "image":"h3-rev-img-6.png",
            "active":"false"
        }
    ];
    const cardSlider=[
        {
            "image":"img/h3-img-1.jpg",
            "onHover":"svg/svg-5.svg"
        },
        {
            "image":"img/h3-img-2.jpg",
            "onHover":"svg/svg-5.svg"
        },
        {
            "image":"img/h3-img-3.jpg",
            "onHover":"svg/svg-5.svg"
        },
        {
            "image":"img/h3-img-4.jpg",
            "onHover":"svg/svg-5.svg"
        }
    ];
    const pizzaSpecials=[
        {
            "nome":"combo piccolo",
            "prezzo":"$10",
            "text":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis accusantium exercitationem."
        },
        {
            "nome":"combo mezzo",
            "prezzo":"$20",
            "text":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis accusantium exercitationem."
        },
        {
            "nome":"combo grande",
            "prezzo":"$30",
            "text":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis accusantium exercitationem."
        }
    ];
    const peopleRow=[
        {
            "nome":"Jonathan Hopkins",
            "task": "head waiter",
            "image":"img/h1-team-1a-700x700.jpg"
        },
        {
            "nome":"Brittany Moriarty",
            "task": "waitress",
            "image":"img/h1-team-2a.jpg"
        },
        {
            "nome":"Eddy G. Lee",
            "task": "kitchen porter",
            "image":"img/h1-team-4a.jpg"
        },
        {
            "nome":"Vera Hammett",
            "task": "cashier",
            "image":"img/h1-team-3a.jpg"
        }
    ];
    const partnerRow=[
        {
            "nome":"cowboy",
            "image":"img/h1-clients-img-4.png"
        },
        {
            "nome":"gordon street food",
            "image":"img/h1-clients-img-3.png"
        },
        {
            "nome":"big cheese",
            "image":"img/h1-clients-img-1.png"
        },
        {
            "nome":"bludoos bar",
            "image":"img/h1-clients-img-2.png"
        },
        {
            "nome":"vegan",
            "image":"img/h1-clients-img-5.png"
        }
        
    ];
    const pizzeSlider =[
        {
            "nome":"bismarck",
            "prezzo": "$5.00 - $30.00",
            "image":"h3-product-img-1a-100x100.png"
        },
        {
            "nome":"fiori di zucca",
            "prezzo": "$7.00 - $50.00",
            "image":"h3-product-img-2a-100x100.png"
        },
        {
            "nome":"valdostana",
            "prezzo": "$55.00",
            "image":"h3-product-img-3a-100x100.png"
        },
        {
            "nome":"pizza tartufata",
            "prezzo": "$45.00",
            "image":"h3-product-img-4a-100x100.png"
        },
        {
            "nome":"francescana",
            "prezzo": "$25.00",
            "image":"h3-product-img-5a-100x100.png"
        },
        {
            "nome":"campagnola",
            "prezzo": "$50.00 - $95.00 ",
            "image":"h3-product-img-6a-100x100.png"
        }
    ];
    const eventDate =[
        {
            "day":"02",
            "month":"nov",
            "event":"traditional neapolitan pies in kyoto pizza mercato",
            "address":"204 E.Pizzetta Tommaso"
        },
        {
            "day":"03",
            "month":"nov",
            "event":"Terarazza patio dining space opening this weekend",
            "address":"204 E.Pizzetta Tommaso"
        },
        {
            "day":"05",
            "month":"nov",
            "event":"sienna private dining room with stèphane brunn",
            "address":"204 E.Pizzetta Tommaso"
        }
    ];
    const restaurantAddress=[
        {
            "address":"1614 E.Bell Rd #104",
            "city":"Salerno,AZ 85022",
            "phoneNumber":"(602)867-1010"
        },
        {
            "address":"204 E.Piazzetta Tommaso",
            "city":"Sorrento,AZ 85022",
            "phoneNumber":"(358)867-1010"
        },
        {
            "address":"Viale Puglia 54",
            "city":"Torre Del Greco,AZ 85022",
            "phoneNumber":"(359)867-1010"
        },
        {
            "address":"Corso Italia A",
            "city":"Napoli,AZ 85022",
            "phoneNumber":"(989)867-1010"
        }
    ];
    const timeTables=[
        {
            "day":"monday",
            "openingTime":"Kitchen Closed"
        },
        {
            "day":"tuesday until friday",
            "openingTime":"9.00 - 22.00"
        },
        {
            "day":"msaturday",
            "openingTime":"Saturday 11am to midnight"
        },
        {
            "day":"Sunday",
            "openingTime":"9.00 - 22.00"
        }
    ];

    export {headerStart,headerEnd,jumboSlider,cardSlider,pizzaSpecials,peopleRow,partnerRow,pizzeSlider,restaurantAddress,eventDate,timeTables};