window.addEventListener('load', function () {
    let selectSections = this.document.querySelectorAll('select');
    for (let s of selectSections) {
        s.addEventListener('focus', function () {
            if (s === selectSections[0]) this.setAttribute('size', '3');
            else this.setAttribute('size', '8');
            this.setAttribute('style', 'position: absolute');
        });
        s.addEventListener('change', function () {
            this.setAttribute('size', '1');
            this.setAttribute('style', 'position: relative');
            this.blur();
        });
        s.addEventListener('blur', function () {
            this.setAttribute('size', '1');
            this.setAttribute('style', 'position: relative');
            this.blur();
        });
    }
});
