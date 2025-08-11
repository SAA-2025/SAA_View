const clients = [
    { 
        id: 3,
        name: 'Kakheti Wine House',
        description: 'ღვინის წარმოება',
        logo: '/client_logos/kakheti-wine-house.jpg',
        author: 'გიორგი ქავთარაძე, მმართველი პარტნიორი',
        testimonial: 'მომსახურება იყო ზუსტი, დროული და ტექნიკურად გამართული.' 
    },
    { 
        id: 4,
        name: 'Elite Travel',
        description: 'ტურიზმი',
        logo: '/client_logos/elite-travel.jpg',
        author: 'ნინო ჯავახიშვილი, საოპერაციო მენეჯერი',
        testimonial: 'საიტის განახლება და ბექ-ოფისის ავტომატიზაცია საგრძნობლად გააუმჯობესა ჩვენი მუშაობის ეფექტურობა.' 
    },
    { 
        id: 5,
        name: 'Torque',
        description: 'მონტაჟი, სერვისი',
        logo: '/client_logos/torque.png',
        author: 'დათო მაღრაძე, ტექნიკური დირექტორი',
        testimonial: 'მათგან მიღებული გადაწყვეტა იდეალურად მოერგო ჩვენს სპეციფიკურ ტექნიკურ მოთხოვნებს.' 
    },
    { 
        id: 6,
        name: 'Total Charm Denti',
        description: 'სტომატოლოგია',
        logo: '/client_logos/total-charm-dent.jpg',
        author: 'ქეთი თოთაძე, კლინიკის მენეჯერი',
        testimonial: 'სისტემა მარტივია, სტაბილური და ჩვენს პაციენტებს უკეთეს გამოცდილებას სთავაზობს.' 
    },
    { 
        id: 7,
        name: 'Total Charm Vake',
        description: 'მედიცინა',
        logo: '/client_logos/total-charm-vake.jpg',
        author: 'მარიამ ხარძიანი, დირექტორი',
        testimonial: 'პროექტი იყო პროფესიონალურად დაგეგმილი და დროულად დასრულებული – რაც იშვიათია დღეს.' 
    },
    { 
        id: 8,
        name: 'Elite Export',
        description: 'ექსპორტი',
        logo: '/client_logos/elite-export.jpg',
        author: 'ალექსი ღოღობერიძე, იმპორტის მენეჯერი',
        testimonial: 'ინტეგრირებული ERP სისტემა, რომელიც მათ დაგვიმზადეს, ჩვენს ბიზნეს პროცესებს მეტად დააწყობდა.' 
    },
    { 
        id: 9,
        name: 'Elite Delivery',
        description: 'მიწოდება',
        logo: '/client_logos/elite-delivery.jpg',
        author: 'ლაშა გაბელია, ოპერაციების უფროსი',
        testimonial: 'დროის მენეჯმენტის ავტომატიზაცია შეგვაძლებინა მიტანის დროის შემცირება 30%-ით.' 
    },
    { 
        id: 10,
        name: 'BQ Construction',
        description: 'სამშენებლო',
        logo: '/client_logos/bq-construction.jpg',
        author: 'ზურაბ კიკნაველიძე, პროექტ მენეჯერი',
        testimonial: 'საბუღალტრო და პროექტების მართვის ერთიანმა სისტემამ მნიშვნელოვნად გაგვიადვილა ყოველდღიური პროცესები.' 
    },
    { 
        id: 11,
        name: 'e-Buildway',
        description: 'სამშენებლო',
        logo: '/client_logos/e-buildway.jpg',
        author: 'ირაკლი ონიანი, ტექნიკური დირექტორი',
        testimonial: 'მათ მიერ მიწოდებული გადაწყვეტები იყო ინოვაციური და მარტივი გამოსაყენებლად.' 
    },
    { 
        id: 12,
        name: 'Agrozuma',
        description: 'სოფლის მეურნეობა',
        logo: '/client_logos/agrozua.jpg',
        author: 'დავით ცინცაძე, დირექტორი',
        testimonial: 'ინვენტარიზაციის ციფრული მართვა მეტად გაამარტივა ჩვენი ყოველდღიური საქმიანობა.' 
    },
    { 
        id: 13,
        name: 'Uridia',
        description: 'თხევადი გაზი',
        logo: '/client_logos/uridia.jpg',
        author: 'ლევან გაჩეჩილაძე, CEO',
        testimonial: 'მათთან თანამშრომლობით მივიღეთ სტაბილური და დაცული სისტემა გაზის მარაგების მართვისთვის.' 
    },
    { 
        id: 14,
        name: 'Nugbari',
        description: 'წარმოება, სოფლის მეურნეობა',
        logo: '/client_logos/nugbari.jpg',
        author: 'სოფო შალიკაშვილი, დირექტორი',
        testimonial: 'გაყიდვების ანალიტიკის მოდული ღრმა შეხედულებას გვაძლევს ბაზარზე.' 
    },
    { 
        id: 15,
        name: 'Apart Development',
        description: 'უძრავი ქონება',
        logo: '/client_logos/apart-development.jpg',
        author: 'მიხეილ ლორთქიფანიძე, კომერციული დირექტორი',
        testimonial: 'ვებგვერდის დიზაინი სრულად შეესაბამება ჩვენს ბრენდს და მარტივია მომხმარებლებისთვის.' 
    },
    { 
        id: 16,
        name: 'Old Tunnel Hotel',
        description: 'სასტუმრო, სოფლის მეურნეობა',
        logo: '/client_logos/old-tunnle-hotel.webp',
        author: 'ეკა ურუშაძე, სასტუმროს მენეჯერი',
        testimonial: 'ონლაინ დაჯავშნის სისტემა მოსახერხებელია და გაზრდილია სტუმრების რაოდენობა.' 
    },
    { 
        id: 17,
        name: 'Social Solutions',
        description: 'სოციალური მომსახურება',
        logo: '/client_logos/social-solutions.png',
        author: 'თამარ აბრამიშვილი, ხელმძღვანელი',
        testimonial: 'ჩვენი სამიზნე აუდიტორია უკეთესი მომსახურებით სარგებლობს მათი სისტემის მეშვეობით.' 
    },
    { 
        id: 18,
        name: 'Social Production',
        description: 'სოციალური საწარმო',
        logo: '/client_logos/social-production.png',
        author: 'ბექა გეგელია, პროექტ კოორდინატორი',
        testimonial: 'მარტივი და ხელმისაწვდომი გადაწყვეტა, რომელიც რეალურ ცვლილებებს ქმნის.' 
    },
    { 
        id: 19,
        name: 'Estemed',
        description: 'იმპორტ-ექსპორტი',
        logo: '/client_logos/estemed.jpg',
        author: 'ელენე ბეგიაშვილი, COO',
        testimonial: 'ავტომატიზაციის დონე, რაც მათ უზრუნველყვეს, საგრძნობლად ამცირებს ხელით მუშაობას.' 
    },
    { 
        id: 20,
        name: 'Ellada',
        description: 'საბითუმო ვაჭრობა',
        logo: '/client_logos/ellada.jpg',
        author: 'თემო ჩხიკვაძე, ლოჯისტიკის მენეჯერი',
        testimonial: 'ანგარიშგების სისტემა ახლა ბევრად უფრო სანდო და სწრაფია.' 
    },
    { 
        id: 21,
        name: 'Prime Import',
        description: 'იმპორტი',
        logo: '/client_logos/prime-import.png',
        author: 'ანა პაპასკირი, მთავარი ანალიტიკოსი',
        testimonial: 'მათთან ერთად მუშაობამ მნიშვნელოვნად გააუმჯობესა ჩვენი მიწოდების პროცესები.' 
    },
    { 
        id: 22,
        name: 'არაგვი',
        description: 'საბაჟო ტერმინალი',
        logo: '/client_logos/aragvi.png',
        author: 'კახა ურუშაძე, ოპერაციების დირექტორი',
        testimonial: 'საბაჟო პროცედურების ციფრული მართვა ბევრად ეფექტიანად წარიმართება მათთან თანამშრომლობით.' 
    },
    { 
        id: 23,
        name: 'Smarteli',
        description: 'online მაღაზია',
        logo: '/client_logos/user.jpg',
        author: 'მიხეილ ნოდია, CTO',
        testimonial: 'ჩვენი პლატფორმა მუშაობს შეუფერხებლად და ადვილად მასშტაბირდება.' 
    },
    { 
        id: 24,
        name: 'რამაჰი',
        description: 'უძრავი ქონება',
        logo: '/client_logos/user.jpg',
        author: 'დიანა ბარათაშვილი, მარკეტინგის ხელმძღვანელი',
        testimonial: 'ვებგვერდი მინიმალისტური და ეფექტურია – ზუსტად ის, რაც გვჭირდებოდა.' 
    }, 
    {
        id: 1,
        name: 'Baskin Robins',
        description: 'საჭმელი და სასმელი',
        logo: '/client_logos/baskin-robins.png',
        author: 'ნატო ქარჩავა, ფილიალის მენეჯერი',
        testimonial: 'CRM სისტემა, რომელიც შეიმუშავეს, გვეხმარება მომხმარებლის გამოცდილების გაუმჯობესებაში.' 
    },
    { 
        id: 2,
        name: 'Kvareli Wine Company',
        description: 'ღვინის წარმოება, ექსპორტი',
        logo: '/client_logos/kvareli-wine-company.jpg',
        author: 'ლევან ბაღდავაძე, მფლობელი',
        testimonial: 'ჩვენი საექსპორტო ოპერაციები ბევრად უფრო გამჭვირვალე გახდა მათი დახმარებით.' 
    }
];

export default clients;
