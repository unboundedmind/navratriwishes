// Set the official start and end dates for Navratri and the date for Dussehra
const navratriStart = new Date('September 10, 2025 00:00:00').getTime();
const navratriEnd = new Date('October 19, 2025 23:59:59').getTime();
const dussehraDate = new Date('October 20, 2025 00:00:00').getTime();

// Data for the nine forms of Goddess Durga
const navratriGoddesses = [
    { name: 'Maa Shailaputri', description: 'The first form of Durga, worshipped on Day 1. She is the daughter of the mountains and represents nature.', mantra: 'ॐ देवी शैलपुत्र्यै नमः', image: 'images/shailaputri.png' },
    { name: 'Maa Brahmacharini', description: 'Worshipped on Day 2, she represents penance, celibacy, and devotion.', mantra: 'ॐ देवी ब्रह्मचारिण्यै नमः', image: 'images/brahmacharini.jpg' },
    { name: 'Maa Chandraghanta', description: 'The third form of Durga, worshipped on Day 3. She is a symbol of peace and tranquility.', mantra: 'ॐ देवी चन्द्रघण्टायै नमः', image: 'images/chandraghanta.jpg' },
    { name: 'Maa Kushmanda', description: 'The fourth form of Durga, worshipped on Day 4. She is believed to have created the universe with her divine laughter.', mantra: 'ॐ देवी कूष्माण्डायै नमः', image: 'images/kushmanda.webp' },
    { name: 'Maa Skandamata', description: 'Worshipped on Day 5, she is the mother of Skanda (Lord Kartikeya). She represents love and compassion.', mantra: 'ॐ देवी स्कन्दमातायै नमः', image: 'images/skandamata.jpg' },
    { name: 'Maa Katyayani', description: 'The sixth form of Durga, worshipped on Day 6. She is a symbol of courage and strength.', mantra: 'ॐ देवी कात्यायन्यै नमः', image: 'images/katyayani.jpg' },
    { name: 'Maa Kaalratri', description: 'Worshipped on Day 7, she is the fierce and destructive form of Durga, who kills all evil.', mantra: 'ॐ देवी कालरात्र्यै नमः', image: 'images/kaalratri.jpg' },
    { name: 'Maa Mahagauri', description: 'The eighth form of Durga, worshipped on Day 8 (Ashtami). She represents purity and serenity.', mantra: 'ॐ देवी महागौर्यै नमः', image: 'images/mahagauri.jpg' },
    { name: 'Maa Siddhidatri', description: 'The ninth form of Durga, worshipped on Day 9. She is the giver of all siddhis (supernatural powers).', mantra: 'ॐ देवी सिद्धिदात्र्यै नमः', image: 'images/siddhidatri.jpg' }
];

// Data for Dussehra
const dussehraInfo = { 
    name: 'Happy Vijayadashami!', 
    description: 'The tenth day of Navratri, celebrating the victory of good over evil. On this day, Lord Rama killed the demon king Ravana.', 
    mantra: 'जय श्री राम', 
    image: 'images/dussehra.jpg' 
};

// Get HTML elements
const preFestivalContent = document.querySelector('.pre-festival-content');
const mainHeader = document.querySelector('header');
const mainContent = document.querySelector('main');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const diyas = document.querySelectorAll('.diya');
const deviDarshanSection = document.querySelector('.devi-darshan-section');
const deviImage = document.getElementById('devi-image');
const deviTitle = document.getElementById('devi-title');
const deviDescription = document.getElementById('devi-description');
const deviMantraText = document.getElementById('devi-mantra-text');

const mainTitle = document.querySelector('.main-title');
const defaultTitle = mainTitle.textContent;
const statusMessage = document.querySelector('.status-message');
const dayTrackerGrid = document.querySelector('.days-grid');
const dayItems = document.querySelectorAll('.day-item');
const dussehraWish = document.getElementById('dussehra-wish');

const userNameInput = document.getElementById('userNameInput');
const personalizeBtn = document.getElementById('personalizeBtn');

const whatsappShare = document.getElementById('whatsapp-share');
const facebookShare = document.getElementById('facebook-share');
const xShare = document.getElementById('x-share');
const instagramShare = document.getElementById('instagram-share');

// Function to start diya animation
const startDiyaAnimation = () => {
    diyas.forEach(diya => {
        diya.classList.add('animate');
    });
};

// Function to handle day button clicks
const handleDayClick = (day) => {
    deviDarshanSection.style.display = 'block';
    dussehraWish.style.display = 'none'; // Hide the Dussehra wish by default for all days

    let selectedInfo;
    if (day === 11) {
        selectedInfo = dussehraInfo;
        dussehraWish.style.display = 'block';
        dussehraWish.textContent = 'और दशहरा की हार्दिक शुभकामनाएं!';
    } else {
        let goddessIndex;
        if (day === 4) {
            goddessIndex = 2; // Day 4 will also show Maa Chandraghanta (index 2)
        } else if (day > 4) {
            goddessIndex = day - 2; // Adjust for the extra day
        } else {
            goddessIndex = day - 1;
        }
        selectedInfo = navratriGoddesses[goddessIndex];
    }

    // Update content and image
    deviImage.src = selectedInfo.image;
    deviImage.alt = selectedInfo.name;
    deviTitle.textContent = selectedInfo.name;
    deviDescription.textContent = selectedInfo.description;
    deviMantraText.textContent = selectedInfo.mantra;

    dayItems.forEach(item => item.classList.remove('active-day'));
    dayItems[day - 1].classList.add('active-day');
};

dayItems.forEach(item => {
    item.addEventListener('click', () => {
        const day = parseInt(item.dataset.day);
        handleDayClick(day);
    });
});

const updatePage = () => {
    const now = new Date().getTime();
    
    if (now < navratriStart) {
        // Before Navratri
        preFestivalContent.style.display = 'flex';
        mainHeader.style.display = 'none';
        
        mainContent.style.display = 'block';
        document.querySelector('.main-message').style.display = 'block';
        document.querySelector('.name-input-section').style.display = 'flex';
        document.querySelector('.day-tracker-container').style.display = 'block';
        deviDarshanSection.style.display = 'none';

        const distance = navratriStart - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;

        statusMessage.textContent = 'Navratri is just around the corner! Celebrate the nine divine nights.';
        dussehraWish.style.display = 'none';
        
    } else if (now >= navratriStart && now <= navratriEnd) {
        // During Navratri
        preFestivalContent.style.display = 'none';
        mainHeader.style.display = 'flex';
        mainContent.style.display = 'block';
        
        document.querySelector('.main-message').style.display = 'block';
        document.querySelector('.name-input-section').style.display = 'flex';
        document.querySelector('.day-tracker-container').style.display = 'block';
        
        startDiyaAnimation();

        const currentDay = getCurrentDay();
        statusMessage.textContent = 'Today is Day ' + currentDay;
        
        handleDayClick(currentDay);

    } else if (now >= dussehraDate) {
        // On Dussehra
        preFestivalContent.style.display = 'none';
        mainHeader.style.display = 'none';
        
        mainContent.style.display = 'block';
        document.querySelector('.main-message').style.display = 'block';
        document.querySelector('.name-input-section').style.display = 'flex';
        document.querySelector('.day-tracker-container').style.display = 'block';
        deviDarshanSection.style.display = 'none';

        mainTitle.textContent = 'Happy Vijayadashami!';
        statusMessage.textContent = 'Thank you for celebrating with us! You can still explore all eleven days below.';
        dussehraWish.style.display = 'none';
        
    } else {
        // After Navratri and Dussehra
        clearInterval(updateInterval);
        preFestivalContent.style.display = 'none';
        mainHeader.style.display = 'none';
        
        mainContent.style.display = 'block';
        document.querySelector('.main-message').style.display = 'block';
        document.querySelector('.name-input-section').style.display = 'flex';
        document.querySelector('.day-tracker-container').style.display = 'block';
        deviDarshanSection.style.display = 'none';

        mainTitle.textContent = 'Navratri festival is over. See you next year!';
        statusMessage.textContent = 'Thank you for celebrating with us! You can still explore all eleven days below.';
        dussehraWish.style.display = 'none';
    }
};

const getCurrentDay = () => {
    const now = new Date().getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = now - navratriStart;
    return Math.floor(diffInTime / oneDay) + 1;
};

updatePage();

const updateInterval = setInterval(() => {
    const now = new Date().getTime();
    
    if (now < navratriStart) {
        const distance = navratriStart - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;
    }
}, 1000);

window.addEventListener('load', () => {
    const now = new Date().getTime();
    if (now >= navratriStart && now <= navratriEnd) {
        const currentDay = getCurrentDay();
        handleDayClick(currentDay);

        const savedName = localStorage.getItem('navratriUserName');
        if (savedName) {
            mainTitle.textContent = `Happy Navratri, ${savedName}!`;
        } else {
            mainTitle.textContent = defaultTitle;
        }

    }
});

personalizeBtn.addEventListener('click', () => {
    const userName = userNameInput.value.trim();
    const now = new Date().getTime();
    
    if (now >= navratriStart && now <= navratriEnd) {
        if (userName) {
            mainTitle.textContent = `Happy Navratri, ${userName}!`;
            localStorage.setItem('navratriUserName', userName);
        } else {
            mainTitle.textContent = defaultTitle;
            localStorage.removeItem('navratriUserName');
        }
    }
    // New code to scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // For a smooth scrolling effect
    });
});

const getShareMessage = () => {
    const currentTitle = mainTitle.textContent;
    const dussehraText = dussehraWish.style.display === 'block' ? ` ${dussehraWish.textContent}` : '';
    return encodeURIComponent(`${currentTitle}${dussehraText} ✨ May Goddess Durga bless you with happiness and prosperity!`);
};

whatsappShare.addEventListener('click', (e) => {
    e.preventDefault();
    const message = getShareMessage();
    window.open(`https://api.whatsapp.com/send?text=${message}%0A${window.location.href}`, '_blank');
});

facebookShare.addEventListener('click', (e) => {
    e.preventDefault();
    const message = getShareMessage();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${decodeURIComponent(message)}`, '_blank');
});

xShare.addEventListener('click', (e) => {
    e.preventDefault();
    const message = getShareMessage();
    window.open(`https://twitter.com/intent/tweet?text=${message}&url=${window.location.href}`, '_blank');
});

instagramShare.addEventListener('click', (e) => {
    e.preventDefault();
    const shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
});