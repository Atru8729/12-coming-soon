class Progressbar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            console.error('ERROR: nepraejo pirmine patikros');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nerastas elementas, pagal duota selector');
            return false;
        }

        this.render();


        // patikrinti, ar validus selector
        // patikrinti, ar validus data
        // jei bent vienas is ju nevalidus, tai baigiam darba

        // susirandame reikiama vieta, pagal pateikta selector
        // jeigu vieta neegzistuoja, tai baigiam darba

        //generuojame turini ir istatome i reikiama vieta
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                <div class="top">
                    <div class="title">${bar.title}</div>
                    <div class="value">${bar.value}%</div>
                </div>
                <div class="bottom">
                    <div class="progress" style="width: ${bar.value}%;">
                        <div class="value"></div>
                    </div>
                </div>`;
        }

        this.DOM.innerHTML += HTML;
    }
}


export { Progressbar };