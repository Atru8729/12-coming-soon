class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
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
        //patikrinti, ar validus selector
        if (!this.isValidSelector()) {
            //jei ne, baigiam darba
            console.error('ERROR: nevalidus selector');
            return false;
        }

        //susirasti formos DOM elementa
        this.formDOM = document.querySelector(this.selector);
        //jei rasti nepavyksta, baigiam darba
        if (!this.formDOM) {
            console.error('ERROR: nerastas formos elementas');
            return false;
        }

        //susirasti visus formos laukus: input, textarea
        this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');

        //susirasti formos submit mygtuka
        this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');

        //uzregistruojame mygtuko paspaudimo ivyki
        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidName(name) {

        return true;
    }
    isValidEmail(name) {
        return true;
    }
    isValidText(name) {
        return true;
    }

    isEmptyString(string) {
        return typeof string !== || string === '';
    }

    addEvents() {
        //submit mygtuko paspaudimo metu reikia isjungti default veikima
        this.submitButtonDOM.addEventListener('click', (event) => {
            event.preventDefault();

            // issitraukti is visu formos lauku informacija
            //eiti per visus laukus ir atpazinus informacijos tipa, atlikti tos informacijos validacija
            let allGood = true;

            for (const inputDOM of this.allInputsDOM) {
                const validationRule = inputDOM.dataset.validation;
                if (validationRule === 'email' && this.isValidEmail(value)) {
                    allGood = false;
                    break;

                }
                if (validationRule === 'name' && this.isValidName(value)) {
                    allGood = false;
                    break;

                }
                if (validationRule === 'text' && this.isValidText(value)) {
                    allGood = false;
                    break;

                }

                console.log('All good', allGood);
            }

        });



        //jei patikrinus visus laukus, nerasta ne vienos klaidos, tai "siunciam pranesima"
        //jei patikrinus visus laukus, rasta bent viena klaida, tai parodome visus klaidos pranesimus (kol kas viskas pateikiama i console)

    }

}

export { Form }