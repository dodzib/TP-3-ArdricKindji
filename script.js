/*---------------------formulaire--de contact----------------------------------------------------------------------*/

const validateForm = () => {

    let noError = true;

    const origine = document.getElementById('origine');
    const branch = document.getElementById('branch');
    const agent = document.getElementById('agent');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const codePostal = document.getElementById('codePostal');
    const message = document.getElementById('message');

    const origineValue = origine.value.trim();
    const branchValue = branch.value.trim();
    const agentValue = agent.value.trim();
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();  // Correction ici (anciennement "message")
    const emailValue = email.value.trim();
    const codePostalValue = codePostal.value.trim();
    const messageValue = message.value.trim();

    // Expressions régulières pour les validations
    const regexPhone = /^\d{3}-\d{3}-\d{4}$/; // Format pour téléphone: xxx-xxx-xxxx
    const regexCodePostal = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/; // Format pour code postal canadien

    // Validation de l'origine
    if (origineValue === '') {
        setError(origine, 'Sélectionnez une région d\'origine');
        noError = false;
    } else {
        setSuccess(origine);
    }

    // Validation de la succursale
    if(branchValue === '') {
        setError(branch, 'Sélectionnez un succursale');
        noError = false;
    } else {
        setSuccess(branch);
    }

    // Validation de l'agent
    if(agentValue === '') {
        setError(agent, 'Sélectionnez un agent');
        noError = false;
    } else {
        setSuccess(agent);
    }

    // Validation du nom
    if(nameValue === '') {
        setError(name, 'Un nom est requis');
        noError = false;
    } else {
        setSuccess(name);
    }

    // Validation du téléphone
    if(phoneValue === '') {
        setError(phone, 'Le téléphone est requis');
        noError = false;
    } else if (!regexPhone.test(phoneValue)) {
        setError(phone, 'Veuillez entrer un numéro de téléphone valide (ex: 123-456-7890).');
        noError = false;
    } else {
        setSuccess(phone);
    }

    // Validation de l'email
    if(emailValue === '') {
        setError(email, 'Le courriel est requis');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Fournir une adresse valide');
        noError = false;
    } else {
        setSuccess(email);
    }

    // Validation du code postal
    if(codePostalValue === '') {
        setError(codePostal, 'Le code postal est requis');
        noError = false;
    } else if (!regexCodePostal.test(codePostalValue)) {
        setError(codePostal, 'Veuillez entrer un code postal valide (ex: A1A 1A1).');
        noError = false;
    } else {
        setSuccess(codePostal);
    }

    // Validation du message
    if(messageValue === '') {
        setError(message, 'Un message est requis');
        noError = false;
    } else {
        setSuccess(message);
    }

    return noError;
};

// Fonctions de gestion des erreurs et succès
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// Fonction pour valider l'email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





/************************Tarifs et réservations **********/

function validateForm2() {
    let noError = true;
    const formElements = document.querySelectorAll('.input-control');
    formElements.forEach(element => {
        const input = element.querySelector('input, select');
        const errorDiv = element.querySelector('.input-control__error');
        if (!input.value.trim()) {
            errorDiv.textContent = 'Ce champ est requis.';
            noError = false;
        } else {
            errorDiv.textContent = '';
        }

        if (input.type === 'email' && input.value.trim()) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!emailPattern.test(input.value.trim())) {
                errorDiv.textContent = 'Veuillez entrer une adresse email valide.';
                noError = false;
            }
        }

        if (input.type === 'tel' && input.value.trim()) {
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(input.value.trim())) {
                errorDiv.textContent = 'Veuillez entrer un numéro de téléphone valide.';
                noError = false;
            }
        }
    });

    return noError;
}

const setError2 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.input-control__error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess2 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.input-control__error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail2 = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}





/*********************Login et signup******************** */


const validateLoginForm = () => {
    let noError = true;

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setError1(email, 'Le courriel est requis');
        noError = false;
    } else if (!isValidEmail1(emailValue)) {
        setError1(email, 'Fournir une adresse valide');
        noError = false;
    } else {
        setSuccess1(email);
    }

    if (passwordValue === '') {
        setError1(password, 'Le mot de passe est requis');
        noError = false;
    } else {
        setSuccess1(password);
    }

    return noError;
};

const validateSignupForm = () => {
    let noError = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (nameValue === '') {
        setError1(name, 'Un nom est requis');
        noError = false;
    } else {
        setSuccess1(name);
    }

    if (emailValue === '') {
        setError1(email, 'Le courriel est requis');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError1(email, 'Fournir une adresse valide');
        noError = false;
    } else {
        setSuccess1(email);
    }

    if (passwordValue === '') {
        setError1(password, 'Le mot de passe est requis');
        noError = false;
    } else {
        setSuccess1(password);
    }

    if (confirmPasswordValue === '') {
        setError1(confirmPassword, 'Confirmez votre mot de passe');
        noError = false;
    } else if (passwordValue !== confirmPasswordValue) {
        setError1(confirmPassword, 'Les mots de passe ne correspondent pas');
        noError = false;
    } else {
        setSuccess1(confirmPassword);
    }

    return noError;
};

const setError1 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess1 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail1 = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




/**carrousel */

let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('[data-carousel-slide-to]');
        const prevButton = document.querySelector('[data-carousel-prev]');
        const nextButton = document.querySelector('[data-carousel-next]');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                indicators[i].setAttribute('aria-current', 'false');
                if (i === index) {
                    slide.classList.add('active');
                    indicators[i].setAttribute('aria-current', 'true');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Automatic slideshow
        setInterval(nextSlide, 3000); // Change image every 3 seconds

        // Event listeners for indicators
        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });

        // Event listeners for controls
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);