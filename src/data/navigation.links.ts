const navLinks = [
    {
        text: 'მთავარი',
        link: '',
        isDropdown: false
    },
    {
        text: 'ჩვენს შესახებ',
        link: 'about-us',
        isDropdown: true,
        dropdownItems: [
            { text: 'სრულად', link: 'about-us/' },
            { text: 'ხარისხი SAA-a', link: 'about-us/saa-quality' },
            { text: 'გამორჩეული მომსახურება', link: 'about-us/special-service' },
            { text: 'მისია/ფასეულობები', link: 'about-us/mission' },
            { text: 'გუნდი', link: 'about-us/team' },
            { text: 'კარიერა', link: 'about-us/career' },
            { text: 'მედია', link: 'about-us/media' },
            { text: 'დამკვეთები', link: 'about-us/clients' }
        ]
    },
    {
        text: 'სერვისები',
        link: 'services',
        isDropdown: true,
        dropdownItems: [
            { text: 'სრულად', link: 'services/' },
            { text: 'SAA-360', link: 'services/saa-360' },
            { text: 'ბუღალტერია', link: 'services/accounting' },
            { text: 'ფინანსები', link: 'services/finance' },
            { text: 'აუდიტი', link: 'services/audit' },
            { text: 'საგადასახადო', link: 'services/tax' },
            { text: 'მთავარი ბუღალტერი', link: 'services/arch-accountant' },
            { text: 'კონსულტაცია', link: 'services/communication' },
            { text: 'digital', link: 'services/digital' },
            { text: 'ინვენტარიზაცია', link: 'services/inventory' }
        ]
    },
    {
        text: 'კურსი',
        link: 'courses',
        isDropdown: true,
        dropdownItems: [
            { text: 'სრულად', link: 'courses/' },
            { text: 'უნივერსალური', link: 'courses/universal-accounting' },
            { text: 'მთავარი ბუღალტერი', link: 'courses/chief-accountant' },
            { text: 'IFRS for SMEs', link: 'courses/ifrs-smes' },
            { text: 'ფინანსური ანგარიშები', link: 'courses/financial-reporting' },
            { text: 'ფინანსური ანალიზი', link: 'courses/financial-analysis' },
            { text: 'ACCA', link: 'courses/acca' },
            { text: 'საგადასახადო კოდექსი', link: 'courses/tax-code' },
            { text: 'საბუღალტრო პროგრამები', link: 'courses/accounting-software' },
            { text: 'სპეციფიკური მიმართულებები', link: 'courses/specialized-fields' }
        ]
    },
    {
        text: 'ინდუსტრია',
        link: 'industry',
        isDropdown: true,
        dropdownItems: [
            { text: 'წარმოება', link: 'industry/production' },
            { text: 'მშენებლობა', link: 'industry/construction' },
            { text: 'მედიცინა', link: 'industry/medicine' },
            { text: 'ტურიზმი', link: 'industry/tourism' },
            { text: 'სოფლის მეურნეობა', link: 'industry/agriculture' },
            { text: 'ლოჯისტიკა', link: 'industry/logistics' },
            { text: 'კაფე-რესტორნები', link: 'industry/cafes-restaurants' },
            { text: 'სასტუმრო', link: 'industry/hotels' },
            { text: 'ვაჭრობა', link: 'industry/trade' },
            { text: 'მომსახურება', link: 'industry/services' }
        ]
    },
    {
        text: 'პუბლიცია',
        link: 'blog',
        isDropdown: false
    },
    {
        text: 'კონტაქტი',
        link: '#contact-section',
        isDropdown: false
    }
];


export default navLinks;