// Curated Vault Items with Dual-Language support (en = English, hi = Hinglish)
const CURATED_VAULT = [
    {
        id: 'vault-1',
        category: 'relationships',
        title: {
            en: 'Record the Stories of Your Parents & Elders',
            hi: 'Parents aur Elders Ki Stories Record Karo'
        },
        description: {
            en: 'Sit down with them, open a voice recorder, and ask 10 sweet questions about their childhood, love story, and life lessons.',
            hi: 'Unke saath baithkar voice recorder chalao aur unke childhood, love story, aur life lessons ke baare me 10 sweet questions pucho.'
        },
        impact: {
            en: 'Life-long family memories',
            hi: 'Life-long family memories'
        },
        timeframe: {
            en: '1 Weekend',
            hi: '1 Weekend'
        },
        steps: {
            en: [
                'Write down 5 best questions on paper (15 mins)',
                'Fix a time to sit together over tea/coffee',
                'Start a 30-minute voice recording on your phone',
                'Securely backup the audio file to Google Drive'
            ],
            hi: [
                'Paper par 5 best questions likho (15 mins)',
                'Chai/Coffee ke saath baithne ka time fix karo',
                'Phone me 30-minute voice recording start karo',
                'Audio file ko Google Drive par securely backup karo'
            ]
        }
    },
    {
        id: 'vault-2',
        category: 'relationships',
        title: {
            en: 'Write a Sincere Thank You Letter to an Old Mentor',
            hi: 'Purane Mentor/Teacher Ko Dil Se Thank You Letter Likho'
        },
        description: {
            en: 'Write a letter to someone who changed your life years ago, telling them the positive impact they had on you.',
            hi: 'Kuch saal pehle jisne aapki life badli thi, unhe ek sweet letter likhkar send karo aur batao ki unka aapki life par kya impact raha.'
        },
        impact: {
            en: 'A deep relationship and true gratitude',
            hi: 'Ek deep relationship aur true gratitude'
        },
        timeframe: {
            en: '1 Hour',
            hi: '1 Hour'
        },
        steps: {
            en: [
                'Open a blank page and write the first paragraph (15 mins)',
                'List 3 specific things they did that changed your path',
                'Search for their email or mailing address',
                'Send the letter and put a smile on their face'
            ],
            hi: [
                'Ek blank page open karo aur pehla paragraph likho (15 mins)',
                'Unki 3 specific baatein likho jisse aapki life badli',
                'Unka email ya address search karo',
                'Letter send karo aur unke face par smile laao'
            ]
        }
    },
    {
        id: 'vault-3',
        category: 'creativity',
        title: {
            en: 'Record Your First Original Song or Poem',
            hi: 'Apna Pehla Original Song / Poem Record Karo'
        },
        description: {
            en: 'Compose a simple tune on a guitar, piano, or phone app, write a few verses, and share it with 3 friends.',
            hi: 'Guitar, piano ya mobile app par ek simple tune banao, uspar lines write karo aur apne 3 friends ko sunao.'
        },
        impact: {
            en: 'Unleash your inner creativity forever',
            hi: 'Internal creativity ko hamesha ke liye free karo'
        },
        timeframe: {
            en: '2 Weeks',
            hi: '2 Weeks'
        },
        steps: {
            en: [
                'Hum a simple tune and record it on your phone (15 mins)',
                'Write 2 verses and 1 chorus line',
                'Record it using a voice memo app',
                'Share it with a close friend'
            ],
            hi: [
                'Ek simple tune gungunao ya phone me record karo (15 mins)',
                '2 small verses aur 1 chorus line likho',
                'Voice memo app me record karo',
                'Apne close friend ko sunao'
            ]
        }
    },
    {
        id: 'vault-4',
        category: 'adventure',
        title: {
            en: 'Go on a Solo Camping or Nature Trip',
            hi: 'Akele Camping / Nature Trip Par Jaao'
        },
        description: {
            en: 'Spend 24 hours in nature away from your phone, watch the sunrise, and let your mind completely unplug.',
            hi: 'Nature ke beech 24 hours phone se door rehkar bitao, subah ka sunrise dekho aur mind ko relax karo.'
        },
        impact: {
            en: 'Mental clarity and a fresh perspective',
            hi: 'Mind ki clarity aur fresh feeling'
        },
        timeframe: {
            en: '1 Weekend',
            hi: '1 Weekend'
        },
        steps: {
            en: [
                'Search for a peaceful camping site nearby (15 mins)',
                'Pack essential gear and a water bottle',
                'Spend one night without any mobile notifications',
                'Write down your thoughts in a diary the next morning'
            ],
            hi: [
                'Aaspas koi peaceful camping site search karo (15 mins)',
                'Zaroori packing aur water bottle ready karo',
                'Bina mobile notifications ke 1 night bitao',
                'Subah diary me apne thoughts write karo'
            ]
        }
    },
    {
        id: 'vault-5',
        category: 'creativity',
        title: {
            en: 'Master Cooking 3 Restaurant-Style Dishes',
            hi: '3 Restaurant-style Dishes Cook Karna Seekho'
        },
        description: {
            en: 'Learn and perfect 3 signature dishes that you can cook with confidence for guests or family members.',
            hi: '3 aisi amazing dishes master karo jinhe aap kisi bhi guest ya family member ke liye khushi se cook kar sako.'
        },
        impact: {
            en: 'Self-reliance and hospitality confidence',
            hi: 'Amazing cooking confidence'
        },
        timeframe: {
            en: '3 Weeks',
            hi: '3 Weeks'
        },
        steps: {
            en: [
                'Select 3 recipes and make a grocery list (15 mins)',
                'Buy fresh ingredients for the first recipe',
                'Cook the first dish step-by-step',
                'Serve it lovingly to your family members'
            ],
            hi: [
                '3 recipes select karke grocery list banao (15 mins)',
                'Pehli recipe ke taaza ingredients buy karo',
                'Pehli dish step by step cook karo',
                'Family members ko pyaar se serve karo'
            ]
        }
    },
    {
        id: 'vault-6',
        category: 'legacy',
        title: {
            en: 'Publish Your Own Digital Mini-Guide or Book',
            hi: 'Apni Khud Ki Pocket Book / PDF Guide Banayein'
        },
        description: {
            en: 'Compile your life lessons, specialized skills, or experiences into a beautiful 20-page PDF handbook.',
            hi: 'Apni life learnings, experiences ya knowledge ko 20 pages ki ek beautiful PDF ya mini-book me compile karo.'
        },
        impact: {
            en: 'A permanent document of your unique knowledge',
            hi: 'Aapki knowledge ka ek permanent document'
        },
        timeframe: {
            en: '1 Month',
            hi: '1 Month'
        },
        steps: {
            en: [
                'Write down 5 main outline topics on paper (15 mins)',
                'Write 300 words every morning for 7 days',
                'Design a clean PDF in Canva or Google Docs',
                'Share it with 10 friends and colleagues'
            ],
            hi: [
                'Paper par 5 main topics ke name likho (15 mins)',
                'Har morning 300 words write karo (7 days tak)',
                'Canva ya Google Docs me beautiful PDF design karo',
                '10 friends ke saath share karo'
            ]
        }
    },
    {
        id: 'vault-7',
        category: 'adventure',
        title: {
            en: 'Complete a 48-Hour Digital Detox',
            hi: '48-Hours Ka Digital Detox'
        },
        description: {
            en: 'Shut down your smartphone, laptop, and social media for 2 full days and experience absolute presence.',
            hi: 'Smartphone, laptop aur social media ko 2 days ke liye off kardo aur true peace feel karo.'
        },
        impact: {
            en: 'Dopamine reset and screen addiction relief',
            hi: 'Dopamine reset aur screen addiction se relief'
        },
        timeframe: {
            en: '1 Weekend',
            hi: '1 Weekend'
        },
        steps: {
            en: [
                'Inform family how to reach you in emergencies (15 mins)',
                'Lock your phone in a drawer',
                'Read physical books, write, and walk in nature',
                'Write about your experience in a paper journal'
            ],
            hi: [
                'Family ko inform karo ki emergency me kaise contact karein (15 mins)',
                'Phone ko drawer me lock kardo',
                'Books read karo aur walk par jaao',
                'Aapko kaisa feel hua diary me write karo'
            ]
        }
    },
    {
        id: 'vault-8',
        category: 'creativity',
        title: {
            en: 'Create a Canvas Painting for Your Room',
            hi: 'Apne Room Ke Liye Canvas Painting Banao'
        },
        description: {
            en: 'Buy a blank canvas and acrylic paints, and create a custom piece of art to hang on your wall.',
            hi: 'Ek bada canvas aur acrylic colors buy karo, aur apne haath se ek beautiful painting banakar wall par decorate karo.'
        },
        impact: {
            en: 'Daily joy of seeing your handmade art',
            hi: 'Hand-made art ko daily dekhne ki khushi'
        },
        timeframe: {
            en: '1 Weekend',
            hi: '1 Weekend'
        },
        steps: {
            en: [
                'Order a canvas and acrylic paints online (15 mins)',
                'Select color shades matching your room interior',
                'Paint freely without judgment or fear of mistakes',
                'Frame and hang it proudly on your wall'
            ],
            hi: [
                'Online canvas aur paints order karo (15 mins)',
                'Apne room colors ke match ka shade select karo',
                'Bina kisi fear/hesitation ke paint karo',
                'Deewar par frame karke hang karo'
            ]
        }
    }
];

// Localization Dictionary
const TRANSLATIONS = {
    // Nav Tabs
    tab_reality: { en: "My Time", hi: "Mera Time" },
    tab_vault: { en: "Someday Vault", hi: "Someday Vault" },
    tab_blueprint: { en: "Action Plans", hi: "Action Plans" },
    tab_sprint: { en: "15-Min Sprint", hi: "15-Min Sprint" },
    tab_weekly: { en: "Goals & Wins", hi: "Goals & Wins" },
    tab_contract: { en: "Future Promise", hi: "Future Promise" },
    tab_reality_mob: { en: "Time", hi: "Time" },
    tab_vault_mob: { en: "Vault", hi: "Vault" },
    tab_blueprint_mob: { en: "Plans", hi: "Plans" },
    tab_sprint_mob: { en: "Sprint", hi: "Sprint" },
    tab_weekly_mob: { en: "Wins", hi: "Wins" },
    tab_contract_mob: { en: "Promise", hi: "Promise" },
    
    // Tab 1: Reality
    hero_tag: { en: "Life Time Visualizer & Precision Calculator", hi: "Life Time Visualizer & Precision Calculator" },
    hero_title: { en: "How Much Time Do You Have Left?", hi: "Aapka Kitna Time Baaki Hai?" },
    hero_desc: { en: "We all think we have plenty of time, which is why we put off our dearest dreams for 'one day'. When you see your whole life in weeks, you realize how precious every single week is!", hi: "Hum sab sochte hain ki hamare paas bohot time hai, isliye hum apne sweet dreams \"Ek Din Karenge\" par chor dete hain. Jab aap apni full life ko weeks me dekhte hain, tab samajh aata hai ki har ek week kitna important hai!" },
    control_title: { en: "Set Your Exact Timeline", hi: "Apni Exact Timeline Set Karo" },
    control_birth: { en: "Birth Year & Month", hi: "Birth Year & Month" },
    control_lifespan: { en: "Target Lifespan (Years)", hi: "Target Lifespan (Years)" },
    control_parent_age: { en: "Parents Ki Age", hi: "Parents Ki Age" },
    control_visits: { en: "Year Me Kitni Baar Milte Ho?", hi: "Year Me Kitni Baar Milte Ho?" },
    stat_weeks_lived_lbl: { en: "Weeks Lived", hi: "Weeks Lived" },
    stat_weeks_lived_desc: { en: "of your life complete", hi: "life complete" },
    stat_weeks_left_lbl: { en: "Weeks Left", hi: "Weeks Left" },
    stat_weeks_left_desc: { en: "Your golden opportunity", hi: "Aapki golden opportunity" },
    stat_summers_left_lbl: { en: "Summer Weekends Left", hi: "Summer Weekends Left" },
    stat_summers_left_desc: { en: "Remaining summer weekends", hi: "Remaining summer weekends" },
    stat_parents_left_lbl: { en: "Parents Se Milne Ke Remaining Days", hi: "Parents Se Milne Ke Remaining Days" },
    stat_parents_left_desc: { en: "Estimate milne ke moments", hi: "Estimate milne ke moments" },
    grid_title: { en: "Aapki Life Ka Visual Grid Matrix", hi: "Aapki Life Ka Visual Grid Matrix" },
    grid_subtitle: { en: "Har row = 1 Year (52 Weeks). Har small square = 1 Week.", hi: "Har row = 1 Year (52 Weeks). Har small square = 1 Week." },
    legend_lived: { en: "Lived", hi: "Lived" },
    legend_this_week: { en: "This Week", hi: "This Week" },
    legend_remaining: { en: "Baaki Time", hi: "Baaki Time" },
    grid_tooltip_instruction: { en: "Hover or tap any square to view exact age and week status.", hi: "Kisi bhi square par hover ya tap karke exact age aur week status dekhein." },
    motivational_title: { en: "What are you waiting for?", hi: "Kis baat ka wait kar rahe ho, dost?" },
    motivational_desc: { en: "\"The trouble is, you think you have time.\" — The biggest regret of the elderly is that they did not take risks on their creative dreams.", hi: "\"Sabse badi galatfehmi yeh hai ki humein lagta hai hamare paas bohot time hai.\" — Logon ka sabse bada regret hota hai ki unhone apne creative dreams par risk nahi liya." },
    motivational_btn: { en: "Browse Someday Vault", hi: "Someday Vault Dekho" },
    
    // Tab 2: Vault
    vault_tag: { en: "Dil Ki Wishlist", hi: "Dil Ki Wishlist" },
    vault_title: { en: "Wo Dreams Jo Hum \"Bas Sochte Hain, Par Karte Nahi\"", hi: "Wo Dreams Jo Hum \"Bas Sochte Hain, Par Karte Nahi\"" },
    vault_desc: { en: "Curated dreams that people hamesha postpone. Choose one and START NOW!", hi: "Curated dreams jo log hamesha postpone karte hain. Koi ek select karo aur ABHI START KARO!" },
    vault_btn_custom: { en: "Apna Personal Dream Add Karo", hi: "Apna Personal Dream Add Karo" },
    vault_filter_all: { en: "All Dreams", hi: "All Dreams" },
    vault_filter_relationships: { en: "Relationships & Family", hi: "Relationships & Family" },
    vault_filter_creativity: { en: "Creativity & Skills", hi: "Creativity & Skills" },
    vault_filter_adventure: { en: "Travel & Adventure", hi: "Travel & Adventure" },
    vault_filter_legacy: { en: "Projects & Legacy", hi: "Projects & Legacy" },
    
    // Tab 3: Action Plans
    blueprint_tag: { en: "Action Blueprint Breakdown", hi: "Action Blueprint Breakdown" },
    blueprint_title: { en: "Aapke Active Action Plans", hi: "Aapke Active Action Plans" },
    blueprint_desc: { en: "Big dreams intimidate us. We break down every dream into a 15-minute small first step!", hi: "Big dreams humein darate hain. Hum har dream ko ek 15-minute ke small first step me break karte hain!" },
    blueprint_progress_lbl: { en: "Total Progress", hi: "Total Progress" },
    blueprint_empty_title: { en: "Abhi Koi Active Plan Plan Nahi Hai", hi: "Abhi Koi Active Plan Plan Nahi Hai" },
    blueprint_empty_desc: { en: "You haven't chosen any dream from the 'Someday Vault' yet. Visit the Vault to select one or add your own!", hi: "Aapne abhi tak 'Someday Vault' se koi dream choose nahi kiya hai. Vault me jaakar koi ek dream select karo ya apna khud ka add karo!" },
    blueprint_empty_btn: { en: "Go to Someday Vault", hi: "Someday Vault Me Jaao" },
    
    // Tab 4: 15-Min Sprint
    sprint_tag: { en: "Micro-Action Sprint Engine", hi: "Micro-Action Sprint Engine" },
    sprint_title: { en: "15-Minute Quick Action Sprint", hi: "15-Minute Quick Action Sprint" },
    sprint_desc: { en: "Destroy laziness and overthinking. Don't worry about the whole project — just focus on Step #1 for 15 minutes!", hi: "Laziness aur overthinking ko khatam karo. Poore project ka dimaag mat chalao — bas 15 minutes ke liye Step #1 par focus karo!" },
    sprint_target_lbl: { en: "What task are you focusing on right now?", hi: "Abhi kis task par focus kar rahe ho?" },
    sprint_start_btn: { en: "15-Min Sprint Start Karo", hi: "15-Min Sprint Start Karo" },
    sprint_reset_btn: { en: "Reset", hi: "Reset" },
    sprint_ambient_btn: { en: "Focus Ambient Sound (Off)", hi: "Focus Ambient Sound (Off)" },
    sprint_motivation_quote: { en: "\"Don't wait for motivation; action breeds motivation. 15 minutes of real work beats months of overthinking.\"", hi: "\"Motivation ka wait mat karo, ACTION se motivation aata hai. 15 minutes ka real work mahino ki overthinking ko khatam kar deta hai.\"" },
    
    // Tab 5: Goals & Wins
    weekly_tag: { en: "Is Week Ka Goal & Wall of Wins", hi: "Is Week Ka Goal & Wall of Wins" },
    weekly_title: { en: "Is Week Ka Target & My Past Wins", hi: "Is Week Ka Target & My Past Wins" },
    weekly_desc: { en: "Big dreams are achieved week-on-week. Set your This Week goals, and when achieved, add them to your permanent Wall of Wins!", hi: "Big dreams week-on-week poore hote hain. Apne This Week Events/Goals set karo, aur achieve hone par unhe apni permanent Wall of Wins me add karke celebrate karo!" },
    weekly_total_wins_lbl: { en: "Total Wins Earned", hi: "Total Wins Earned" },
    weekly_total_wins_sub: { en: "Milestones Logged", hi: "Milestones Logged" },
    weekly_left_title: { en: "Is Week Me Kya Kar Dikhana Hai?", hi: "Is Week Me Kya Kar Dikhana Hai?" },
    weekly_left_badge: { en: "Active Target", hi: "Active Target" },
    weekly_left_form_lbl: { en: "Naya Weekly Event / Target Title", hi: "Naya Weekly Event / Target Title" },
    weekly_left_form_day: { en: "Target Day / Date", hi: "Target Day / Date" },
    weekly_left_form_cat: { en: "Emoji / Category", hi: "Emoji / Category" },
    weekly_left_form_btn: { en: "Is Week Ka Target Set Karo", hi: "Is Week Ka Target Set Karo" },
    weekly_right_title: { en: "Wall of Fame (My Wins & Past Events)", hi: "Wall of Fame (My Wins & Past Events)" },
    weekly_right_btn: { en: "Past Win Add Karo", hi: "Past Win Add Karo" },
    weekly_right_desc: { en: "See all the big and small wins you have earned in life. Whenever you feel demotivated, browse this gallery!", hi: "Aapne life me jo bhi small-big wins hasil ki hain, unhe yahan dekhein. Jab bhi demotivated feel karein, apni gallery dekhein!" },
    
    // Tab 6: Promise
    contract_tag: { en: "Saccha Commitment", hi: "Saccha Commitment" },
    contract_title: { en: "Apne Future Self Se Ek Contract (Promise)", hi: "Apne Future Self Se Ek Contract (Promise)" },
    contract_desc: { en: "Write a letter to your future self today. When we write down our commitments, our chances of achieving them increase by 80%!", hi: "Apne future self ko aaj ek written letter send karo. Jo baatein hum paper par likhte hain, unhe complete karne ke chances 80% increase ho jaate hain!" },
    contract_date_lbl: { en: "Target Date:", hi: "Target Date:" },
    contract_promise_lbl: { en: "Wo kaunsa 1 dream hai jo main har haal me complete karke rahunga/rahungi?", hi: "Wo kaunsa 1 dream hai jo main har haal me complete karke rahunga/rahungi?" },
    contract_promise_placeholder: { en: "e.g., Record parents' life stories, solo travel, write a book...", hi: "e.g., Parents ki life story record karna, Solo travel, book write karna..." },
    contract_message_lbl: { en: "Apne Future Self ke liye ek Message / Note:", hi: "Apne Future Self ke liye ek Message / Note:" },
    contract_message_placeholder: { en: "Dear Future Me, I am making this promise today because life is short and I want to live with no regrets...", hi: "Dear Future Me, Main aaj yeh promise kar raha/rahi hu kyunki life short hai aur mujhe kisi regret ke saath nahi jeena..." },
    contract_sig_lbl: { en: "Neeche Apna Digital Signature Karo:", hi: "Neeche Apna Digital Signature Karo:" },
    contract_clear_btn: { en: "Clear Signature", hi: "Clear Signature" },
    contract_save_btn: { en: "Is Promise Ko Seal Karo (Save)", hi: "Is Promise Ko Seal Karo (Save)" },
    contract_list_lbl: { en: "Aapke Sealed Contracts", hi: "Aapke Sealed Contracts" },
    
    // Header Custom modal
    custom_btn_add: { en: "Naya Dream Add Karo", hi: "Naya Dream Add Karo" }
};

let currentLanguage = localStorage.getItem('someday_lang') || 'hi';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('someday_lang', lang);
    
    // Update data-i18n items
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[key]) {
            el.innerText = TRANSLATIONS[key][lang] || TRANSLATIONS[key]['en'];
        }
    });

    // Update data-i18n-placeholder items
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[key]) {
            el.placeholder = TRANSLATIONS[key][lang] || TRANSLATIONS[key]['en'];
        }
    });

    // Update active tab text in page header selector
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        const btnLang = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (btnLang === lang) {
            btn.classList.add('bg-cyan-600', 'text-white');
            btn.classList.remove('bg-gray-900', 'text-gray-400');
        } else {
            btn.classList.remove('bg-cyan-600', 'text-white');
            btn.classList.add('bg-gray-900', 'text-gray-400');
        }
    });

    document.querySelectorAll('.mob-lang-toggle-btn').forEach(btn => {
        const btnLang = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (btnLang === lang) {
            btn.classList.add('bg-cyan-600', 'text-white');
            btn.classList.remove('bg-gray-900', 'text-gray-400');
        } else {
            btn.classList.remove('bg-cyan-600', 'text-white');
            btn.classList.add('bg-gray-900', 'text-gray-400');
        }
    });

    // Refresh dynamic widgets
    updateLifeGrid();
    renderVaultItems();
    renderBlueprints();
    renderWeeklyTargets();
    renderPastAchievements();
    updateSprintSelect();
}

function getI18nText(key) {
    if (TRANSLATIONS[key]) {
        return TRANSLATIONS[key][currentLanguage] || TRANSLATIONS[key]['en'];
    }
    return key;
}

window.setLanguage = setLanguage;

// Global Application State
let activeBlueprints = JSON.parse(localStorage.getItem('someday_blueprints')) || [];
let savedContracts = JSON.parse(localStorage.getItem('someday_contracts')) || [];
let weeklyTargets = JSON.parse(localStorage.getItem('someday_weekly_targets')) || [
    { id: 'wt-1', title: 'Apne mentor ko 1 thank you WhatsApp message send karna', day: 'Wednesday', emoji: 'heart', completed: false },
    { id: 'wt-2', title: '30 Minutes park me bina phone ke walk karna', day: 'Saturday', emoji: 'activity', completed: false }
];
let pastAchievements = JSON.parse(localStorage.getItem('someday_past_achievements')) || [
    { id: 'pa-1', title: 'First Salary se Papa ke liye glasses khareede', date: '2023', badge: 'Heartwarming', note: 'Papa ki smile sabse sweet thi.' },
    { id: 'pa-2', title: '10km Walk Challenge complete kiya', date: 'Last Month', badge: 'Overcame Fear', note: 'Pehle lagta tha nahi ho payega.' }
];
let currentFilter = 'all';
let lifeGridEvents = JSON.parse(localStorage.getItem('someday_life_events')) || {};

// Timer & Sound state
let sprintInterval = null;
let sprintTotalSeconds = 15 * 60;
let sprintSecondsLeft = 15 * 60;
let isSprintRunning = false;
let isAmbientPlaying = false;
let synthOscillator = null;

// Signature canvas state
let sigCanvas = null;
let sigCtx = null;
let isSigning = false;

window.addEventListener('DOMContentLoaded', () => {
    // Load timeline values from localStorage if they exist
    const savedBirthdate = localStorage.getItem('someday_birthdate');
    if (savedBirthdate) {
        const birthdateInput = document.getElementById('input-birthdate');
        if (birthdateInput) birthdateInput.value = savedBirthdate;
    }
    const savedLifespan = localStorage.getItem('someday_lifespan');
    if (savedLifespan) {
        const lifespanInput = document.getElementById('input-lifespan');
        if (lifespanInput) lifespanInput.value = savedLifespan;
    }
    const savedParentAge = localStorage.getItem('someday_parent_age');
    if (savedParentAge) {
        const parentAgeInput = document.getElementById('input-parent-age');
        if (parentAgeInput) parentAgeInput.value = savedParentAge;
    }
    const savedVisits = localStorage.getItem('someday_visits_year');
    if (savedVisits) {
        const visitsInput = document.getElementById('input-visits-year');
        if (visitsInput) visitsInput.value = savedVisits;
    }

    if (window.lucide) lucide.createIcons();

    setLanguage(currentLanguage);
    renderContractsList();
    initSignaturePad();
});

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('bg-cyan-600', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-400');
    });
    document.querySelectorAll('.mob-tab').forEach(btn => {
        btn.classList.remove('text-cyan-400');
        btn.classList.add('text-gray-400');
    });

    const target = document.getElementById(`tab-${tabId}`);
    if (target) target.classList.add('active');

    const desktopBtn = document.getElementById(`tab-btn-${tabId}`);
    if (desktopBtn) {
        desktopBtn.classList.add('bg-cyan-600', 'text-white', 'shadow-md');
        desktopBtn.classList.remove('text-gray-400');
    }

    const mobBtn = document.getElementById(`mob-btn-${tabId}`);
    if (mobBtn) {
        mobBtn.classList.add('text-cyan-400');
        mobBtn.classList.remove('text-gray-400');
    }

    // Fix the minor/miner signature size issue when the contract tab is activated
    if (tabId === 'contract') {
        resizeSignatureCanvas(true);
    }

    if (window.lucide) lucide.createIcons();
}

function updateLifeGrid() {
    const birthDateVal = document.getElementById('input-birthdate').value || '1998-05';
    const lifespan = parseInt(document.getElementById('input-lifespan').value) || 80;
    const parentAge = parseInt(document.getElementById('input-parent-age').value) || 62;
    const visitsPerYear = parseInt(document.getElementById('input-visits-year').value) || 4;

    // Save inputs to localStorage so they persist across page refreshes
    localStorage.setItem('someday_birthdate', birthDateVal);
    localStorage.setItem('someday_lifespan', lifespan);
    localStorage.setItem('someday_parent_age', parentAge);
    localStorage.setItem('someday_visits_year', visitsPerYear);

    const [birthYear, birthMonth] = birthDateVal.split('-').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    // Precise calendar-based week calculations (accounting for exact days elapsed, leap years, etc.)
    const birthDate = new Date(birthYear, birthMonth - 1, 1);
    const msDiff = now.getTime() - birthDate.getTime();
    const livedWeeks = Math.max(0, Math.floor(msDiff / (7 * 24 * 60 * 60 * 1000)));

    const totalWeeks = lifespan * 52;
    const remainingWeeks = Math.max(0, totalWeeks - livedWeeks);
    const pctLived = Math.min(100, Math.round((livedWeeks / totalWeeks) * 100));

    const parentRemainingYears = Math.max(0, 85 - parentAge);
    const remainingParentVisits = Math.round(parentRemainingYears * visitsPerYear);
    const remainingSummers = Math.max(0, Math.floor((lifespan - (livedWeeks / 52))));

    document.getElementById('stat-weeks-lived').innerText = livedWeeks.toLocaleString();
    document.getElementById('stat-pct-lived').innerText = `${pctLived}% ${getI18nText('stat_weeks_lived_desc')}`;
    document.getElementById('stat-weeks-left').innerText = remainingWeeks.toLocaleString();
    document.getElementById('stat-summers-left').innerText = remainingSummers.toLocaleString();
    document.getElementById('stat-parent-visits').innerText = remainingParentVisits.toLocaleString();

    const gridContainer = document.getElementById('life-grid');
    gridContainer.innerHTML = '';

    for (let yr = 0; yr < lifespan; yr++) {
        const yearRow = document.createElement('div');
        yearRow.className = 'flex items-center gap-1 w-full';

        const yearLabel = document.createElement('span');
        yearLabel.className = 'text-[9px] font-mono text-gray-500 w-7 text-right pr-1 flex-shrink-0';
        yearLabel.innerText = yr % 10 === 0 ? `Y${yr}` : '';
        yearRow.appendChild(yearLabel);

        const weeksRow = document.createElement('div');
        weeksRow.className = 'weeks-grid';

        for (let wk = 0; wk < 52; wk++) {
            const currentWeekIndex = (yr * 52) + wk;
            const sq = document.createElement('div');
            sq.className = 'week-square cursor-pointer';

            if (currentWeekIndex < livedWeeks) {
                sq.classList.add('bg-cyan-600/60', 'border', 'border-cyan-500/20');
            } else if (currentWeekIndex === livedWeeks) {
                sq.classList.add('current-week-pulse');
            } else {
                sq.classList.add('bg-gray-900', 'border', 'border-gray-800/80');
            }

            // Highlight week if user has logged a milestone/achievement event
            const lifeEvent = lifeGridEvents[currentWeekIndex];
            if (lifeEvent) {
                sq.classList.remove('bg-cyan-600/60', 'bg-gray-900', 'border-cyan-500/20', 'border-gray-800/80');
                switch (lifeEvent.category) {
                    case 'relationships':
                        sq.classList.add('bg-rose-500', 'shadow-[0_0_8px_rgba(244,63,94,0.7)]');
                        break;
                    case 'creativity':
                        sq.classList.add('bg-amber-500', 'shadow-[0_0_8px_rgba(245,158,11,0.7)]');
                        break;
                    case 'adventure':
                        sq.classList.add('bg-emerald-500', 'shadow-[0_0_8px_rgba(16,185,129,0.7)]');
                        break;
                    case 'legacy':
                        sq.classList.add('bg-sky-500', 'shadow-[0_0_8px_rgba(56,189,248,0.7)]');
                        break;
                    default:
                        sq.classList.add('bg-cyan-500', 'shadow-[0_0_8px_rgba(6,182,212,0.7)]');
                }
            }

            // Calculate exact calendar date range
            const dateRange = getWeekDateRange(birthDateVal, currentWeekIndex);
            
            let statusText = '';
            if (currentWeekIndex < livedWeeks) {
                statusText = currentLanguage === 'en' ? 'Past Week' : 'Past Week';
            } else if (currentWeekIndex === livedWeeks) {
                statusText = currentLanguage === 'en' ? 'CURRENT WEEK' : 'CURRENT WEEK';
            } else {
                statusText = currentLanguage === 'en' ? 'Future Week' : 'Future Week';
            }

            const ageLabelText = currentLanguage === 'en' ? 'Age' : 'Age';
            const yearsLabelText = currentLanguage === 'en' ? 'Years' : 'Years';
            const weekLabelText = currentLanguage === 'en' ? 'Week' : 'Week';

            // Native Browser Hover Tooltip (shows up right at cursor)
            let nativeTooltip = `${ageLabelText}: ${yr} ${yearsLabelText} (${weekLabelText} ${wk + 1}/52) [${dateRange}] — ${statusText}`;
            if (lifeEvent) {
                const iconEmojiMap = {
                    'graduation-cap': '🎓',
                    'briefcase': '💼',
                    'rocket': '🚀',
                    'heart': '❤️',
                    'plane': '✈️',
                    'activity': '🏃',
                    'star': '🌟'
                };
                const emojiSymbol = iconEmojiMap[lifeEvent.emoji] || lifeEvent.emoji || '🌟';
                const eventLabelPrefix = currentLanguage === 'en' ? 'Event' : 'Event';
                nativeTooltip += `\n${eventLabelPrefix}: ${emojiSymbol} ${lifeEvent.title}`;
                if (lifeEvent.note) {
                    const noteLabelPrefix = currentLanguage === 'en' ? 'Note' : 'Note';
                    nativeTooltip += `\n${noteLabelPrefix}: ${lifeEvent.note}`;
                }
            }
            sq.title = nativeTooltip;

            // Also update the bottom panel tooltip detail on mouseenter
            sq.addEventListener('mouseenter', () => {
                let tooltipText = `${ageLabelText}: ${yr} ${yearsLabelText} (${weekLabelText} ${wk + 1}/52) [${dateRange}] — ${statusText}`;
                if (lifeEvent) {
                    const iconEmojiMap = {
                        'graduation-cap': '🎓',
                        'briefcase': '💼',
                        'rocket': '🚀',
                        'heart': '❤️',
                        'plane': '✈️',
                        'activity': '🏃',
                        'star': '🌟'
                    };
                    const emojiSymbol = iconEmojiMap[lifeEvent.emoji] || lifeEvent.emoji || '🌟';
                    const eventLabelPrefix = currentLanguage === 'en' ? 'Event' : 'Event';
                    tooltipText += ` | ${eventLabelPrefix}: ${emojiSymbol} ${lifeEvent.title}`;
                }
                document.getElementById('tooltip-detail').innerText = tooltipText;
            });

            sq.addEventListener('click', () => {
                openLifeEventModal(currentWeekIndex, birthDateVal);
            });

            weeksRow.appendChild(sq);
        }

        yearRow.appendChild(weeksRow);
        gridContainer.appendChild(yearRow);
    }
}

function renderVaultItems() {
    const container = document.getElementById('vault-grid');
    if (!container) return;
    container.innerHTML = '';

    const filtered = currentFilter === 'all' 
        ? CURATED_VAULT 
        : CURATED_VAULT.filter(item => item.category === currentFilter);

    filtered.forEach(item => {
        const title = typeof item.title === 'object' ? item.title[currentLanguage] : item.title;
        const description = typeof item.description === 'object' ? item.description[currentLanguage] : item.description;
        const impact = typeof item.impact === 'object' ? item.impact[currentLanguage] : item.impact;
        const timeframe = typeof item.timeframe === 'object' ? item.timeframe[currentLanguage] : item.timeframe;

        const isAlreadyAdopted = activeBlueprints.some(b => b.title === title || b.vaultId === item.id);

        const card = document.createElement('div');
        card.className = 'glass-panel-interactive p-5 rounded-3xl flex flex-col justify-between space-y-4';

        const benefitLabel = currentLanguage === 'en' ? 'Benefit' : 'Fayda';
        const buttonText = isAlreadyAdopted 
            ? (currentLanguage === 'en' ? 'Plan Already Added' : 'Plan Me Added Hai')
            : (currentLanguage === 'en' ? 'Start This Plan' : 'Is Plan Ko Shuru Karo');

        card.innerHTML = `
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <span class="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full ${getCategoryBadge(item.category)}">
                        ${item.category}
                    </span>
                    <span class="text-[11px] text-gray-400 font-bold flex items-center gap-1">
                        <i data-lucide="clock" class="w-3 h-3 text-amber-400"></i> ${timeframe}
                    </span>
                </div>
                <h3 class="text-base font-bold text-white leading-snug">${title}</h3>
                <p class="text-xs text-gray-300 leading-relaxed">${description}</p>
            </div>

            <div class="space-y-3 pt-3 border-t border-gray-800/80">
                <div class="text-[11px] text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${benefitLabel}: ${impact}
                </div>

                <button onclick="adoptVaultItem('${item.id}')" ${isAlreadyAdopted ? 'disabled' : ''} class="w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all ${isAlreadyAdopted ? 'bg-gray-800/80 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/20'}">
                    <i data-lucide="${isAlreadyAdopted ? 'check' : 'plus'}" class="w-3.5 h-3.5"></i>
                    ${buttonText}
                </button>
            </div>
        `;

        container.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

function getCategoryBadge(cat) {
    switch(cat) {
        case 'relationships': return 'bg-rose-500/10 text-rose-400 border border-rose-500/30';
        case 'creativity': return 'bg-amber-500/10 text-amber-400 border border-amber-500/30';
        case 'adventure': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
        case 'legacy': return 'bg-sky-500/10 text-sky-400 border border-sky-500/30';
        default: return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30';
    }
}

function filterVault(cat) {
    currentFilter = cat;
    document.querySelectorAll('.vault-filter').forEach(btn => {
        btn.classList.remove('bg-cyan-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-gray-900', 'text-gray-300');
    });
    if (event && event.target) {
        event.target.classList.remove('bg-gray-900', 'text-gray-300');
        event.target.classList.add('bg-cyan-600', 'text-white', 'shadow-md');
    }
    renderVaultItems();
}

function adoptVaultItem(id) {
    const item = CURATED_VAULT.find(v => v.id === id);
    if (!item) return;

    const newBlueprint = {
        id: 'bp-' + Date.now(),
        vaultId: item.id, // Reference to original vault item for translations!
        title: item.title.hi,
        category: item.category,
        timeframe: item.timeframe.hi,
        steps: item.steps.hi.map((s, idx) => ({
            id: idx,
            title: s,
            completed: false,
            isFirstStep: idx === 0
        })),
        createdAt: new Date().toLocaleDateString()
    };

    activeBlueprints.push(newBlueprint);
    saveBlueprintsToStorage();
    renderVaultItems();
    renderBlueprints();
    updateSprintSelect();

    const adoptedTitle = item.title[currentLanguage];
    const toastTitle = currentLanguage === 'en' ? 'Plan Adopted!' : 'Plan Ban Gaya!';
    const toastDesc = currentLanguage === 'en' ? `"${adoptedTitle}" has been added to your Active Plans.` : `"${adoptedTitle}" aapke Active Plans me add ho gaya.`;
    showToast(toastTitle, toastDesc);
    playSuccessChime();

    switchTab('blueprint');
}

function renderBlueprints() {
    const emptyState = document.getElementById('blueprint-empty');
    const listContainer = document.getElementById('blueprint-list');
    const badge = document.getElementById('active-badge');

    if (!emptyState || !listContainer) return;

    if (activeBlueprints.length === 0) {
        emptyState.style.display = 'block';
        listContainer.innerHTML = '';
        if (badge) badge.classList.add('hidden');
        updateOverallProgress(0, 0);
        return;
    }

    emptyState.style.display = 'none';
    if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = activeBlueprints.length;
    }

    listContainer.innerHTML = '';

    let totalStepsAll = 0;
    let totalDoneAll = 0;

    activeBlueprints.forEach(bp => {
        const vaultItem = CURATED_VAULT.find(v => v.id === bp.vaultId);
        const displayTitle = vaultItem ? vaultItem.title[currentLanguage] : bp.title;

        const totalSteps = bp.steps.length;
        const completedSteps = bp.steps.filter(s => s.completed).length;
        totalStepsAll += totalSteps;
        totalDoneAll += completedSteps;

        const pct = Math.round((completedSteps / totalSteps) * 100);

        const card = document.createElement('div');
        card.className = 'glass-panel p-6 rounded-3xl space-y-5 border border-gray-800';

        const createdLabel = currentLanguage === 'en' ? 'Created' : 'Banaya Gaya';
        const completedLabel = currentLanguage === 'en' ? 'completed' : 'poore hue';
        const completeLabel = currentLanguage === 'en' ? 'Complete' : 'Poora Hua';
        const actionLabel = currentLanguage === 'en' ? 'Action Steps' : 'Action Steps';
        const phaseLabel = currentLanguage === 'en' ? 'Phase' : 'Phase';

        let stepsHtml = bp.steps.map((step, idx) => {
            const stepTitle = vaultItem ? (vaultItem.steps[currentLanguage] ? vaultItem.steps[currentLanguage][idx] : step.title) : step.title;
            const stepBadge = step.isFirstStep 
                ? (currentLanguage === 'en' ? 'Step #1 — 15 Min Jumpstart' : 'Step #1 — 15 Min Jumpstart')
                : `${phaseLabel} ${idx + 1}`;

            return `
                <div onclick="toggleStep('${bp.id}', ${idx})" class="flex items-start gap-3 p-3.5 rounded-2xl ${step.completed ? 'bg-emerald-950/20 border border-emerald-900/40' : (step.isFirstStep ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-gray-950/60 border border-gray-800')} cursor-pointer hover:border-cyan-500/50 transition-all">
                    <div class="pt-0.5">
                        <div class="w-5 h-5 rounded-lg flex items-center justify-center transition-all ${step.completed ? 'bg-emerald-500 text-black' : 'border border-gray-600 text-transparent'}">
                            <i data-lucide="check" class="w-3.5 h-3.5 stroke-[3]"></i>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center gap-2">
                            ${step.isFirstStep ? `<span class="text-[9px] uppercase font-black px-2 py-0.5 rounded-full bg-amber-500 text-black">${stepBadge}</span>` : `<span class="text-[10px] text-gray-400 font-bold">${stepBadge}</span>`}
                        </div>
                        <p class="text-xs ${step.completed ? 'line-through text-gray-500 font-normal' : 'text-gray-200 font-bold'} mt-1">${stepTitle}</p>
                    </div>
                    ${step.isFirstStep && !step.completed ? `
                        <button onclick="event.stopPropagation(); launchSprintForStep('${bp.title}', '${step.title}')" class="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-[11px] flex items-center gap-1 shadow">
                            <i data-lucide="zap" class="w-3 h-3"></i> Sprint
                        </button>
                    ` : ''}
                </div>
            `;
        }).join('');

        card.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800">
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${getCategoryBadge(bp.category)}">
                            ${bp.category}
                        </span>
                        <span class="text-[11px] text-gray-400">${createdLabel}: ${bp.createdAt}</span>
                    </div>
                    <h3 class="text-lg font-extrabold text-white">${displayTitle}</h3>
                </div>

                <div class="flex items-center gap-3">
                    <div class="text-right">
                        <span class="text-xs font-bold text-amber-400 font-mono">${pct}% ${completeLabel}</span>
                        <p class="text-[10px] text-gray-400">${completedSteps} of ${totalSteps} ${completedLabel}</p>
                    </div>
                    <button onclick="deleteBlueprint('${bp.id}')" class="p-2 rounded-xl bg-gray-950 hover:bg-rose-950/50 text-gray-500 hover:text-rose-400 border border-gray-800 transition-all">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>

            <div class="space-y-2">
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">${actionLabel}:</span>
                <div class="grid grid-cols-1 gap-2">
                    ${stepsHtml}
                </div>
            </div>
        `;

        listContainer.appendChild(card);
    });

    document.querySelectorAll('.week-square').forEach(el => {
        // Double check life grid highlights are in-sync
    });

    updateOverallProgress(totalDoneAll, totalStepsAll);
    if (window.lucide) lucide.createIcons();
}

function toggleStep(bpId, stepIdx) {
    const bp = activeBlueprints.find(b => b.id === bpId);
    if (!bp) return;

    bp.steps[stepIdx].completed = !bp.steps[stepIdx].completed;
    saveBlueprintsToStorage();
    renderBlueprints();

    if (bp.steps[stepIdx].completed) {
        playSuccessChime();
        triggerConfetti();
        showToast('Kamaal Kar Diya!', 'Kya baat hai! Aapne alasy ko hara diya.');
    }
}

function deleteBlueprint(bpId) {
    activeBlueprints = activeBlueprints.filter(b => b.id !== bpId);
    saveBlueprintsToStorage();
    renderVaultItems();
    renderBlueprints();
    updateSprintSelect();
    showToast('Plan Remove Kar Diya', 'Item aapke active plans se remove ho gaya.');
}

function saveBlueprintsToStorage() {
    localStorage.setItem('someday_blueprints', JSON.stringify(activeBlueprints));
}

function updateOverallProgress(done, total) {
    const stats = document.getElementById('blueprint-stats');
    const circle = document.getElementById('progress-circle');
    if (stats) stats.innerText = `${done} of ${total} Steps Done`;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    if (circle) circle.innerText = `${pct}%`;
}

function toggleSprintTimer() {
    if (isSprintRunning) {
        pauseSprintTimer();
    } else {
        startSprintTimer();
    }
}

function startSprintTimer() {
    isSprintRunning = true;
    document.getElementById('sprint-start-btn').innerHTML = `<i data-lucide="pause" class="w-4 h-4 fill-current"></i> Sprint Pause`;
    document.getElementById('sprint-status-label').innerText = 'Focus Lagao! 15 Min Action!';
    document.getElementById('sprint-status-label').classList.replace('text-gray-400', 'text-amber-400');

    sprintInterval = setInterval(() => {
        if (sprintSecondsLeft > 0) {
            sprintSecondsLeft--;
            updateSprintTimerDisplay();
        } else {
            pauseSprintTimer();
            triggerConfetti();
            playSprintFinishChime();
            showToast('Sprint Poora Hua!', '15 Minutes Ka Asli Kaam Ho Gaya!');
            document.getElementById('sprint-status-label').innerText = '🎉 Mubarak Ho! Sprint Completed!';
        }
    }, 1000);

    if (window.lucide) lucide.createIcons();
}

function pauseSprintTimer() {
    isSprintRunning = false;
    clearInterval(sprintInterval);
    document.getElementById('sprint-start-btn').innerHTML = `<i data-lucide="play" class="w-4 h-4 fill-current"></i> Sprint Resume`;
    document.getElementById('sprint-status-label').innerText = 'Sprint Ruka Hua Hai';
    document.getElementById('sprint-status-label').classList.replace('text-amber-400', 'text-gray-400');
    if (window.lucide) lucide.createIcons();
}

function resetSprintTimer() {
    pauseSprintTimer();
    sprintSecondsLeft = 15 * 60;
    updateSprintTimerDisplay();
    document.getElementById('sprint-start-btn').innerHTML = `<i data-lucide="play" class="w-4 h-4 fill-current"></i> 15-Min Sprint Shuru`;
    document.getElementById('sprint-status-label').innerText = 'Taiyaar Ho? Play Dabao!';
    if (window.lucide) lucide.createIcons();
}

function updateSprintTimerDisplay() {
    const mins = Math.floor(sprintSecondsLeft / 60);
    const secs = sprintSecondsLeft % 60;
    const display = document.getElementById('sprint-timer-display');
    if (display) {
        display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Radial progress ring calculation
    const ring = document.getElementById('timer-progress-ring');
    if (ring) {
        const totalDash = 263.89; // 2 * PI * 42
        const offset = totalDash - (sprintSecondsLeft / sprintTotalSeconds) * totalDash;
        ring.style.strokeDashoffset = offset;
    }
}

function updateSprintSelect() {
    const select = document.getElementById('sprint-target-select');
    if (!select) return;

    const generalText = currentLanguage === 'en' ? 'General 15-Minute Friction Buster' : 'General 15-Minute Friction Buster';
    select.innerHTML = `<option value="General Focus Sprint">${generalText}</option>`;

    activeBlueprints.forEach(bp => {
        const uncompleted = bp.steps.find(s => !s.completed);
        if (uncompleted) {
            const vaultItem = CURATED_VAULT.find(v => v.id === bp.vaultId);
            const bpTitle = vaultItem ? vaultItem.title[currentLanguage] : bp.title;
            
            let stepTitle = uncompleted.title;
            if (vaultItem) {
                const localizedStepsList = vaultItem.steps[currentLanguage] || vaultItem.steps['en'];
                const stepIdx = bp.steps.indexOf(uncompleted);
                stepTitle = localizedStepsList[stepIdx] || uncompleted.title;
            }

            const opt = document.createElement('option');
            opt.value = `${bp.title}: ${uncompleted.title}`;
            opt.innerText = `🎯 ${bpTitle} — ${stepTitle}`;
            select.appendChild(opt);
        }
    });
}

function launchSprintForStep(bpTitle, stepTitle) {
    switchTab('sprint');
    const select = document.getElementById('sprint-target-select');
    if (!select) return;
    const val = `${bpTitle}: ${stepTitle}`;
    
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === val) {
            select.selectedIndex = i;
            found = true;
            break;
        }
    }
    if (!found) {
        const opt = document.createElement('option');
        opt.value = val;
        opt.innerText = `🎯 ${bpTitle} — ${stepTitle}`;
        select.appendChild(opt);
        select.value = val;
    }
}

function renderWeeklyTargets() {
    const container = document.getElementById('weekly-targets-list');
    if (!container) return;
    container.innerHTML = '';

    if (weeklyTargets.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-500 italic p-3 text-center">Is hafe ka koi target set nahi hai. Form se add karein!</p>`;
        return;
    }

    weeklyTargets.forEach(wt => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-3.5 rounded-2xl bg-gray-950 border border-gray-800 hover:border-emerald-500/40 transition-all';

        item.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-emerald-400 flex items-center justify-center bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                    <i data-lucide="${wt.emoji || 'target'}" class="w-4 h-4"></i>
                </span>
                <div>
                    <p class="text-xs font-bold text-white">${wt.title}</p>
                    <span class="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Target: ${wt.day}</span>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="completeWeeklyTarget('${wt.id}')" class="px-3 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[11px] flex items-center gap-1 shadow-md">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5 stroke-[3]"></i> Win Log
                </button>
                <button onclick="deleteWeeklyTarget('${wt.id}')" class="p-1.5 rounded-lg bg-gray-900 text-gray-500 hover:text-rose-400 transition-all">
                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `;

        container.appendChild(item);
    });

    if (window.lucide) lucide.createIcons();
}

function handleWeeklyTargetSubmit(e) {
    e.preventDefault();
    const titleInput = document.getElementById('weekly-target-title');
    const dayInput = document.getElementById('weekly-target-day');
    const emojiInput = document.getElementById('weekly-target-emoji');

    if (!titleInput || !titleInput.value.trim()) return;

    const newTarget = {
        id: 'wt-' + Date.now(),
        title: titleInput.value.trim(),
        day: dayInput ? dayInput.value : 'Aaj Hi (Today)',
        emoji: emojiInput ? emojiInput.value : '🎯',
        completed: false
    };

    weeklyTargets.push(newTarget);
    localStorage.setItem('someday_weekly_targets', JSON.stringify(weeklyTargets));
    titleInput.value = '';

    renderWeeklyTargets();
    showToast('Weekly Target Set!', `"${newTarget.title}" focus me add ho gaya.`);
    playSuccessChime();
}

function completeWeeklyTarget(id) {
    const wt = weeklyTargets.find(t => t.id === id);
    if (!wt) return;

    const newAchievement = {
        id: 'pa-' + Date.now(),
        title: wt.title,
        date: `Is Week (${wt.day})`,
        badge: '🌟 Weekly Win',
        note: 'Is week set kiya tha aur successfully complete kar liya!'
    };

    pastAchievements.unshift(newAchievement);
    localStorage.setItem('someday_past_achievements', JSON.stringify(pastAchievements));

    weeklyTargets = weeklyTargets.filter(t => t.id !== id);
    localStorage.setItem('someday_weekly_targets', JSON.stringify(weeklyTargets));

    renderWeeklyTargets();
    renderPastAchievements();

    triggerConfetti();
    playSuccessChime();
    showToast('Waah! Win Earned!', `"${wt.title}" Wall of Wins me add ho gaya!`);
}

function deleteWeeklyTarget(id) {
    weeklyTargets = weeklyTargets.filter(t => t.id !== id);
    localStorage.setItem('someday_weekly_targets', JSON.stringify(weeklyTargets));
    renderWeeklyTargets();
}

function toggleAddPastModal() {
    const form = document.getElementById('past-win-form');
    if (form) form.classList.toggle('hidden');
}

function handlePastAchievementSubmit(e) {
    e.preventDefault();
    const titleInput = document.getElementById('past-win-title');
    const dateInput = document.getElementById('past-win-date');
    const badgeInput = document.getElementById('past-win-badge');
    const noteInput = document.getElementById('past-win-note');

    if (!titleInput || !titleInput.value.trim()) return;

    const title = titleInput.value.trim();
    const date = (dateInput && dateInput.value.trim()) || 'Past Win';
    const badge = badgeInput ? badgeInput.value : '🏆 Major Milestone';
    const note = (noteInput && noteInput.value.trim()) || '';

    const newAchievement = {
        id: 'pa-' + Date.now(),
        title: title,
        date: date,
        badge: badge,
        note: note
    };

    pastAchievements.unshift(newAchievement);
    localStorage.setItem('someday_past_achievements', JSON.stringify(pastAchievements));

    titleInput.value = '';
    if (noteInput) noteInput.value = '';
    toggleAddPastModal();

    renderPastAchievements();
    triggerConfetti();
    playSuccessChime();
    showToast('Win Save Ho Gayi!', `"${title}" Wall of Wins me shaamil ho gaya.`);
}

function renderPastAchievements() {
    const container = document.getElementById('past-achievements-list');
    const countLabel = document.getElementById('total-achievements-count');

    if (countLabel) countLabel.innerText = pastAchievements.length;
    if (!container) return;

    container.innerHTML = '';

    if (pastAchievements.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-500 italic col-span-2 text-center py-6">Abhi tak koi past win log nahi hui. Pehli win add karein!</p>`;
        return;
    }

    pastAchievements.forEach(pa => {
        const card = document.createElement('div');
        card.className = 'glass-panel p-4 rounded-2xl border border-amber-500/20 bg-gray-950/60 space-y-2 relative group hover:border-amber-500/50 transition-all';

        let iconName = 'award';
        const badgeText = pa.badge || 'Milestone';
        if (badgeText.includes('Milestone')) iconName = 'trophy';
        else if (badgeText.includes('Pride')) iconName = 'star';
        else if (badgeText.includes('Heart')) iconName = 'heart';
        else if (badgeText.includes('Fear')) iconName = 'shield';

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1 text-[9px] uppercase font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <i data-lucide="${iconName}" class="w-3 h-3 text-amber-400"></i>
                    ${badgeText}
                </span>
                <span class="text-[10px] text-gray-400 font-medium font-mono">${pa.date}</span>
            </div>

            <h4 class="text-xs font-bold text-white leading-snug">${pa.title}</h4>
            ${pa.note ? `<p class="text-[11px] text-gray-300 italic">"${pa.note}"</p>` : ''}

            <button onclick="deletePastAchievement('${pa.id}')" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-gray-900 text-gray-400 hover:text-rose-400 transition-all">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
        `;

        container.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

function deletePastAchievement(id) {
    pastAchievements = pastAchievements.filter(p => p.id !== id);
    localStorage.setItem('someday_past_achievements', JSON.stringify(pastAchievements));
    renderPastAchievements();
}

function initSignaturePad() {
    sigCanvas = document.getElementById('signature-pad');
    if (!sigCanvas) return;
    
    sigCtx = sigCanvas.getContext('2d');

    sigCanvas.addEventListener('mousedown', startSig);
    sigCanvas.addEventListener('mousemove', drawSig);
    sigCanvas.addEventListener('mouseup', endSig);

    sigCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); startSig(e.touches[0]); });
    sigCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); drawSig(e.touches[0]); });
    sigCanvas.addEventListener('touchend', endSig);

    // Initial resize call (only works if tab is already active/displayed, else width=0)
    resizeSignatureCanvas();

    const future = new Date();
    future.setMonth(future.getMonth() + 6);
    const dateInput = document.getElementById('contract-date');
    if (dateInput) dateInput.value = future.toISOString().split('T')[0];
}

function resizeSignatureCanvas(force = false) {
    if (sigCanvas && (sigCanvas.width === 0 || sigCanvas.height === 0 || force)) {
        if (sigCanvas.offsetWidth > 0) {
            sigCanvas.width = sigCanvas.offsetWidth;
            sigCanvas.height = sigCanvas.offsetHeight;
            
            // Reapply drawing settings because resizing the canvas clears its configuration
            sigCtx.strokeStyle = '#f59e0b';
            sigCtx.lineWidth = 2.5;
            sigCtx.lineCap = 'round';
        }
    }
}

function startSig(e) {
    isSigning = true;
    const rect = sigCanvas.getBoundingClientRect();
    sigCtx.beginPath();
    sigCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function drawSig(e) {
    if (!isSigning) return;
    const rect = sigCanvas.getBoundingClientRect();
    sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    sigCtx.stroke();
}

function endSig() {
    isSigning = false;
}

function clearSignature() {
    if (sigCtx && sigCanvas) {
        sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
    }
}

function saveContract() {
    const date = document.getElementById('contract-date').value;
    const promise = document.getElementById('contract-promise').value;
    const message = document.getElementById('contract-message').value;

    if (!promise || !message) {
        showToast('Warning', 'Aapna promise aur message complete karein.');
        return;
    }

    const newContract = {
        id: 'contract-' + Date.now(),
        targetDate: date,
        promise: promise,
        message: message,
        sealedAt: new Date().toLocaleDateString()
    };

    savedContracts.push(newContract);
    localStorage.setItem('someday_contracts', JSON.stringify(savedContracts));
    renderContractsList();
    clearSignature();

    document.getElementById('contract-promise').value = '';
    document.getElementById('contract-message').value = '';

    triggerConfetti();
    playSuccessChime();
    showToast('Waada Seal Ho Gaya!', 'Aapka promise local vault me save ho gaya.');
}

function renderContractsList() {
    const container = document.getElementById('contracts-list');
    if (!container) return;
    container.innerHTML = '';

    if (savedContracts.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-500 italic">Abhi tak koi contract seal nahi kiya. Upar apna waada likhein.</p>`;
        return;
    }

    savedContracts.forEach(c => {
        const card = document.createElement('div');
        card.className = 'glass-panel p-4.5 rounded-2xl space-y-2 border border-cyan-500/20';

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-mono">
                    Target Date: ${c.targetDate}
                </span>
                <span class="text-[10px] text-gray-500 font-mono">Sealed on ${c.sealedAt}</span>
            </div>
            <h4 class="text-xs font-bold text-white">${c.promise}</h4>
            <p class="text-xs text-gray-300 italic">"${c.message}"</p>
        `;

        container.appendChild(card);
    });
}

function openCustomModal() {
    const modal = document.getElementById('modal-custom');
    if (modal) modal.classList.remove('hidden');
}

function closeCustomModal() {
    const modal = document.getElementById('modal-custom');
    if (modal) modal.classList.add('hidden');
}

function handleCustomDreamSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('custom-title').value;
    const category = document.getElementById('custom-category').value;
    const timeframe = document.getElementById('custom-timeframe').value;
    const step1 = document.getElementById('custom-step1').value;
    const step2 = document.getElementById('custom-step2').value;

    const newBp = {
        id: 'bp-' + Date.now(),
        title: title,
        category: category,
        timeframe: timeframe,
        steps: [
            { id: 0, title: step1, completed: false, isFirstStep: true },
            { id: 1, title: step2, completed: false, isFirstStep: false },
            { id: 2, title: 'Main Milestone complete karo', completed: false, isFirstStep: false },
            { id: 3, title: 'Win celebrate karo!', completed: false, isFirstStep: false }
        ],
        createdAt: new Date().toLocaleDateString()
    };

    activeBlueprints.push(newBp);
    saveBlueprintsToStorage();
    renderBlueprints();
    updateSprintSelect();
    closeCustomModal();
    showToast('Naya Dream Add Kar Diya!', `"${title}" ka plan ready hai.`);
    playSuccessChime();

    switchTab('blueprint');
}

function toggleAmbientSound() {
    if (!isAmbientPlaying) {
        try {
            if (window.Tone) {
                Tone.start();
                if (!synthOscillator) {
                    synthOscillator = new Tone.PolySynth(Tone.Synth, {
                        oscillator: { type: "sine" },
                        envelope: { attack: 2, decay: 3, sustain: 0.8, release: 4 }
                    }).toDestination();
                }
                synthOscillator.volume.value = -18;
                synthOscillator.triggerAttack(["D3", "A3", "F#4"]);
            }

            isAmbientPlaying = true;
            document.getElementById('ambient-sound-text').innerText = 'Focus Ambient Sound (Playing)';
            document.getElementById('sound-ambient-btn').classList.add('border-amber-500/50', 'text-amber-300');
        } catch(e) {
            console.log("Audio synth error", e);
        }
    } else {
        if (synthOscillator) {
            synthOscillator.releaseAll();
        }
        isAmbientPlaying = false;
        document.getElementById('ambient-sound-text').innerText = 'Focus Ambient Sound (Off)';
        document.getElementById('sound-ambient-btn').classList.remove('border-amber-500/50', 'text-amber-300');
    }
}

function playSuccessChime() {
    try {
        if (window.Tone) {
            Tone.start();
            const synth = new Tone.Synth().toDestination();
            synth.volume.value = -10;
            synth.triggerAttackRelease("C5", "8n");
            setTimeout(() => synth.triggerAttackRelease("E5", "8n"), 100);
            setTimeout(() => synth.triggerAttackRelease("G5", "8n"), 200);
        }
    } catch(e) {}
}

function playSprintFinishChime() {
    try {
        if (window.Tone) {
            Tone.start();
            const synth = new Tone.PolySynth().toDestination();
            synth.triggerAttackRelease(["C4", "E4", "G4", "C5"], "2n");
        }
    } catch(e) {}
}

// Global hook to attach to window objects so onclick="..." handles can reach them
window.switchTab = switchTab;
window.updateLifeGrid = updateLifeGrid;
window.renderVaultItems = renderVaultItems;
window.getCategoryBadge = getCategoryBadge;
window.filterVault = filterVault;
window.adoptVaultItem = adoptVaultItem;
window.renderBlueprints = renderBlueprints;
window.toggleStep = toggleStep;
window.deleteBlueprint = deleteBlueprint;
window.saveBlueprintsToStorage = saveBlueprintsToStorage;
window.updateOverallProgress = updateOverallProgress;
window.toggleSprintTimer = toggleSprintTimer;
window.startSprintTimer = startSprintTimer;
window.pauseSprintTimer = pauseSprintTimer;
window.resetSprintTimer = resetSprintTimer;
window.updateSprintTimerDisplay = updateSprintTimerDisplay;
window.updateSprintSelect = updateSprintSelect;
window.launchSprintForStep = launchSprintForStep;
window.renderWeeklyTargets = renderWeeklyTargets;
window.handleWeeklyTargetSubmit = handleWeeklyTargetSubmit;
window.completeWeeklyTarget = completeWeeklyTarget;
window.deleteWeeklyTarget = deleteWeeklyTarget;
window.toggleAddPastModal = toggleAddPastModal;
window.handlePastAchievementSubmit = handlePastAchievementSubmit;
window.renderPastAchievements = renderPastAchievements;
window.deletePastAchievement = deletePastAchievement;
window.initSignaturePad = initSignaturePad;
window.resizeSignatureCanvas = resizeSignatureCanvas;
window.startSig = startSig;
window.drawSig = drawSig;
window.endSig = endSig;
window.clearSignature = clearSignature;
window.saveContract = saveContract;
window.renderContractsList = renderContractsList;
window.openCustomModal = openCustomModal;
window.closeCustomModal = closeCustomModal;
window.handleCustomDreamSubmit = handleCustomDreamSubmit;
window.toggleAmbientSound = toggleAmbientSound;
window.playSuccessChime = playSuccessChime;
window.playSprintFinishChime = playSprintFinishChime;
window.triggerConfetti = triggerConfetti;
window.showToast = showToast;

// Global life grid event handlers
window.openLifeEventModal = openLifeEventModal;
window.closeLifeEventModal = closeLifeEventModal;
window.handleLifeEventSubmit = handleLifeEventSubmit;
window.deleteLifeEvent = deleteLifeEvent;

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

function showToast(title, msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-msg').innerText = msg;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
}

// Visual life grid helpers & controller functions
function getWeekDateRange(birthDateVal, weekIndex) {
    const [birthYear, birthMonth] = birthDateVal.split('-').map(Number);
    const birthDate = new Date(birthYear, birthMonth - 1, 1);
    
    const startDate = new Date(birthDate);
    startDate.setDate(startDate.getDate() + (weekIndex * 7));
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
}

function openLifeEventModal(weekIndex, birthDateVal) {
    document.getElementById('life-event-week-index').value = weekIndex;
    const dateRange = getWeekDateRange(birthDateVal, weekIndex);
    const age = Math.floor(weekIndex / 52);
    document.getElementById('life-event-date-label').innerText = `${dateRange} (Umar: ${age} Saal)`;
    
    const lifeEvent = lifeGridEvents[weekIndex];
    const deleteBtn = document.getElementById('life-event-delete-btn');
    
    if (lifeEvent) {
        document.getElementById('life-event-title').value = lifeEvent.title;
        document.getElementById('life-event-category').value = lifeEvent.category;
        document.getElementById('life-event-emoji').value = lifeEvent.emoji || '🎓';
        document.getElementById('life-event-note').value = lifeEvent.note || '';
        if (deleteBtn) deleteBtn.classList.remove('hidden');
    } else {
        document.getElementById('life-event-title').value = '';
        document.getElementById('life-event-category').value = 'relationships';
        document.getElementById('life-event-emoji').value = '🎓';
        document.getElementById('life-event-note').value = '';
        if (deleteBtn) deleteBtn.classList.add('hidden');
    }
    
    const modal = document.getElementById('modal-life-event');
    if (modal) modal.classList.remove('hidden');
}

function closeLifeEventModal() {
    const modal = document.getElementById('modal-life-event');
    if (modal) modal.classList.add('hidden');
}

function handleLifeEventSubmit(e) {
    e.preventDefault();
    const weekIndex = document.getElementById('life-event-week-index').value;
    const title = document.getElementById('life-event-title').value.trim();
    const category = document.getElementById('life-event-category').value;
    const emoji = document.getElementById('life-event-emoji').value;
    const note = document.getElementById('life-event-note').value.trim();
    
    if (!title) return;
    
    lifeGridEvents[weekIndex] = { title, category, emoji, note };
    localStorage.setItem('someday_life_events', JSON.stringify(lifeGridEvents));
    
    closeLifeEventModal();
    updateLifeGrid();
    showToast('Event Logged!', 'Memory has been added to your visual life timeline.');
    playSuccessChime();
    triggerConfetti();
}

function deleteLifeEvent() {
    const weekIndex = document.getElementById('life-event-week-index').value;
    if (lifeGridEvents[weekIndex]) {
        delete lifeGridEvents[weekIndex];
        localStorage.setItem('someday_life_events', JSON.stringify(lifeGridEvents));
    }
    closeLifeEventModal();
    updateLifeGrid();
    showToast('Event Deleted', 'Memory removed from your visual life timeline.');
}
