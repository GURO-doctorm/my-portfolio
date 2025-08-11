// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language configuration
    const languages = {
        'en': {
            name: 'English',
            path: '../x-english/',
            flag: '🇺🇸'
        },
        'fr': {
            name: 'Français',
            path: '../x-french/',
            flag: '🇫🇷'
        }
    };

    // Get current page path to determine target
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page;
    }

    // Switch language function
    function switchLanguage(langCode) {
        const targetLang = languages[langCode];
        if (targetLang) {
            const currentPage = getCurrentPage();
            const targetUrl = targetLang.path + currentPage;
            window.location.href = targetUrl;
        }
    }

    // Create language switcher dropdown
    function createLanguageSwitcher() {
        const switcherContainer = document.createElement('div');
        switcherContainer.className = 'relative inline-block text-left';
        switcherContainer.id = 'language-switcher';

        // Get current language from URL
        const currentPath = window.location.pathname;
        let currentLang = 'en'; // default
        if (currentPath.includes('/x-arabic/')) {
            currentLang = 'ar';
        } else if (currentPath.includes('/x-french/')) {
            currentLang = 'fr';
        }

        const currentLanguage = languages[currentLang];

        switcherContainer.innerHTML = `
            <div>
                <button type="button" 
                        class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-lg border border-light bg-white px-3 py-2 text-sm font-medium text-dark transition hover:bg-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-dark dark:bg-black dark:text-white dark:hover:bg-dark-2" 
                        id="language-dropdown-button"
                        aria-expanded="false"
                        aria-haspopup="true">
                    <span class="text-lg">${currentLanguage.flag}</span>
                    <span class="hidden sm:inline">${currentLanguage.name}</span>
                    <svg class="hs-dropdown-open:rotate-180 h-4 w-4 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>
                </button>

                <div class="hs-dropdown-menu absolute right-0 z-10 mt-2 hidden min-w-48 rounded-lg border border-light bg-white p-2 shadow-lg dark:border-dark dark:bg-black" 
                     id="language-dropdown-menu">
                    ${Object.entries(languages).map(([code, lang]) => `
                        <button type="button" 
                                class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-dark transition hover:bg-light dark:text-white dark:hover:bg-dark-2 ${code === currentLang ? 'bg-light dark:bg-dark-2' : ''}"
                                onclick="switchLanguage('${code}')">
                            <span class="text-lg">${lang.flag}</span>
                            <span>${lang.name}</span>
                            ${code === currentLang ? '<span class="ml-auto text-primary">✓</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        return switcherContainer;
    }

    // Initialize language switcher
    function initLanguageSwitcher() {
        const headerButtons = document.querySelector('.hidden.items-center.gap-4.lg\\:flex');
        if (headerButtons) {
            const switcher = createLanguageSwitcher();
            
            // Insert before the theme toggler
            const themeToggler = headerButtons.querySelector('.hs-dark-mode');
            if (themeToggler) {
                headerButtons.insertBefore(switcher, themeToggler.parentElement);
            } else {
                headerButtons.appendChild(switcher);
            }

            // Add dropdown functionality
            const button = switcher.querySelector('#language-dropdown-button');
            const menu = switcher.querySelector('#language-dropdown-menu');

            if (button && menu) {
                button.addEventListener('click', function() {
                    const isOpen = menu.classList.contains('hidden');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.hs-dropdown-menu').forEach(dropdown => {
                        dropdown.classList.add('hidden');
                    });
                    
                    if (isOpen) {
                        menu.classList.remove('hidden');
                        button.setAttribute('aria-expanded', 'true');
                    } else {
                        menu.classList.add('hidden');
                        button.setAttribute('aria-expanded', 'false');
                    }
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', function(event) {
                    if (!switcher.contains(event.target)) {
                        menu.classList.add('hidden');
                        button.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        }
    }

    // Initialize when DOM is ready
    initLanguageSwitcher();

    // Make switchLanguage function globally available
    window.switchLanguage = switchLanguage;
}); 