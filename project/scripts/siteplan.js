document.addEventListener('DOMContentLoaded', () => {
    // select the DOM elements for output
    const lastModified = document.querySelector("#lastModified");
    const currentYear = document.querySelector("#currentyear");

    // use the date object
    const today = new Date();

    // display the formatted current date and last-modified info (if element exists)
    if (lastModified) {
        lastModified.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat("en-US", {
            dateStyle: "full"
        }).format(today)}</span>`;

        if (document.lastModified) {
            const lastModDate = new Date(document.lastModified);
            lastModified.innerHTML += `<br>Last modified: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "short"
            }).format(lastModDate)}</span>`;
        }
    }

    // setting the current year
    if (currentYear) {
        currentYear.textContent = today.getFullYear();
    }

    // hamburger menu
    const mainnav = document.querySelector('nav');
    const hambutton = document.querySelector('#menu');

    if (hambutton && mainnav) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');
        });
    }

    // ===== MENU FAVORITES SYSTEM =====
    // Array of meal objects
    const meals = [
        { id: 1, name: "Waakye And Salad", image: "images/waakye.jpg" },
        { id: 2, name: "Beans and Plantain", image: "images/beans.jpg" },
        { id: 3, name: "Lebanese Rice and Vegeseges", image: "images/lebanese-rice.jpg" },
        { id: 4, name: "Rice and Stew", image: "images/rice-and-stew.jpg" },
        { id: 5, name: "Yam Fries", image: "images/yam-fries.webp" },
        { id: 6, name: "Banku and Pepper", image: "images/banku.jfif" },
        { id: 7, name: "Kenkey and Fish", image: "images/kenkey.jfif" },
        { id: 8, name: "Yam and Sauce", image: "images/yamandsauce.jfif" },
        { id: 9, name: "Jollof Rice and Chicken", image: "images/jollof.jpg" }
    ];

    // Function to initialize favorites from localStorage
    function initializeFavorites() {
        const stored = localStorage.getItem('ekuaFavorites');
        return stored ? JSON.parse(stored) : [];
    }

    // Function to save favorites to localStorage
    function saveFavorites(favorites) {
        localStorage.setItem('ekuaFavorites', JSON.stringify(favorites));
        updateFavoritesDisplay();
    }

    // Function to toggle favorite status
    function toggleFavorite(mealName) {
        let favorites = initializeFavorites();
        const index = favorites.indexOf(mealName);

        if (index > -1) {
            // Remove from favorites (conditional: if already exists, remove it)
            favorites.splice(index, 1);
        } else {
            // Add to favorites (conditional: if doesn't exist, add it)
            favorites.push(mealName);
        }

        saveFavorites(favorites);
        return favorites.length;
    }

    // Function to display favorites count
    function updateFavoritesDisplay() {
        const favorites = initializeFavorites();
        const favCount = document.querySelector('.fav-count');

        if (favCount) {
            favCount.textContent = `${favorites.length}`;
        }

        // Update button visual states using array method
        const menuSections = document.querySelectorAll('.menu-sect');
        menuSections.forEach((section, index) => {
            const figcaption = section.querySelector('figcaption');
            const mealName = figcaption ? figcaption.textContent : '';

            // Conditional: check if meal is in favorites
            if (favorites.includes(mealName)) {
                section.classList.add('favorited');
            } else {
                section.classList.remove('favorited');
            }
        });
    }

    // Function to add favorite button to menu items
    function addFavoriteButtons() {
        const menuSections = document.querySelectorAll('.menu-sect');

        menuSections.forEach((section, index) => {
            const figure = section.querySelector('figure');
            const figcaption = section.querySelector('figcaption');

            if (figure && figcaption) {
                const mealName = figcaption.textContent;

                // Create image dynamically
                const meal = meals[index];
                if (meal) {
                    const img = document.createElement('img');
                    img.src = meal.image;
                    img.alt = mealName;
                    img.loading = 'lazy';

                    // Insert image before figcaption
                    figure.insertBefore(img, figcaption);
                }

                // Create favorite button
                const favBtn = document.createElement('button');
                favBtn.className = 'fav-btn';
                favBtn.setAttribute('aria-label', `Add ${mealName} to favorites`);
                favBtn.innerHTML = '♥';

                // Event listener for favorite button
                favBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const newCount = toggleFavorite(mealName);
                    updateFavoritesDisplay();
                });

                figure.appendChild(favBtn);
            }
        });

        updateFavoritesDisplay();
    }

    // Call function to add favorite buttons if on menu page
    if (document.querySelector('.menu-container')) {
        addFavoriteButtons();
    }

    // Function to get favorites summary using template literal
    function getFavoritesSummary() {
        const favorites = initializeFavorites();

        if (favorites.length === 0) {
            return `You haven't added any favorites yet!`;
        }

        // Using array methods and template literals
        const favoritesList = favorites.map((meal, index) => `${index + 1}. ${meal}`).join('\n');
        return `Your ${favorites.length} Favorite${favorites.length !== 1 ? 's' : ''}:\n${favoritesList}`;
    }

    // Function to clear all favorites
    function clearAllFavorites() {
        localStorage.removeItem('ekuaFavorites');
        updateFavoritesDisplay();
    }

    // Expose functions to global scope for potential external use
    window.mealApp = {
        toggleFavorite,
        clearAllFavorites,
        getFavoritesSummary,
        initializeFavorites
    };

    // ===== FORM VALIDATION =====
    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate form fields
    function validateFormField(fieldName, value) {
        // Conditional branching for different field types
        if (fieldName === 'email') {
            return validateEmail(value);
        } else if (fieldName === 'password') {
            return value.length >= 6;
        } else if (fieldName === 'text') {
            return value.trim().length > 0;
        }
        return false;
    }

    // Function to show form feedback
    function showFormFeedback(fieldId, isValid, message) {
        const field = document.getElementById(fieldId);
        if (field) {
            if (isValid) {
                field.classList.remove('form-error');
                field.classList.add('form-valid');
            } else {
                field.classList.add('form-error');
                field.classList.remove('form-valid');
            }
        }
    }

    // Add event listeners to form fields
    const formInputs = document.querySelectorAll('.pdform input[type="text"], .pdform input[type="email"], .pdform input[type="password"]');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            const fieldType = input.type === 'email' ? 'email' : input.type === 'password' ? 'password' : 'text';
            const isValid = validateFormField(fieldType, input.value);
            showFormFeedback(input.id, isValid, `${input.id} is ${isValid ? 'valid' : 'invalid'}`);
        });
    });
});


