class Form {
    constructor(selector) {
        this.selector = selector;

        this.formDOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;
        this.validations = {
            name: this.isValidName,
            email: this.isValidEmail,
            text: this.isValidText,
        };

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selector');
            return false;
        }

        this.formDOM = document.querySelector(this.selector);
        if (!this.formDOM) {
            console.error('ERROR: nerastas formos elementas');
            return false;
        }

        this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');
        this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');

        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidName(name) {
        if (typeof name !== 'string' || name === '') {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        if (typeof email !== 'string' || email === '') {
            return false;
        }
        return true;
    }

    isValidText(text) {
        if (typeof text !== 'string' || text === '') {
            return false;
        }
        return true;
    }

    addEvents() {
        this.submitButtonDOM.addEventListener('click', (event) => {
            // submit mygtuko paspaudimo metu reikia isjungti default veikima
            event.preventDefault();

            // issitraukti is visu formos lauku informacija
            // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
            let allGood = true;

            for (const inputDOM of this.allInputsDOM) {
                const validationRule = inputDOM.dataset.validation;
                const value = inputDOM.value;

                if (!this.validations[validationRule](value)) {
                    allGood = false;
                    break;
                }
            }


            // jei patikrinus visus laukus:
            // nerasta nei vienos klaidos, tai "siunciam pranesima"
            // nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
            console.log('All good:', allGood);
        })
    }
}

export { Form }