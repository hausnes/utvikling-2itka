class Sporsmal {
    constructor(sporsmal, enig, uenig) {
        this.question = sporsmal;
        this.enig = {
            MDG: enig[0],
            A: enig[1],
            H: enig[2],
            V: enig[3]
        }
        this.uenig = {
            MDG: uenig[0],
            A: uenig[1],
            H: uenig[2],
            V: uenig[3],
        }
    }
    appendMyself(target) {
        const container = document.createElement('div');        
        const sporsmal = document.createElement("p");
        sporsmal.innerHTML = this.question;
        container.appendChild(sporsmal);
        target.appendChild(container);
    }
}

const spm1 = new Sporsmal('Jeg er enig i gratis SFO', [2, 2, 0, 0], [0, 0, 0, 0]);
const spm2 = new Sporsmal('Jeg er enig i gratis Barnehage', [1, 2, 3, 5], [2, 3, 1, 4]);

const spmArray =  [spm1, spm2];
for (let spm of spmArray) {
    spm.appendMyself(document.getElementById('sporsmalsContainer'));
}
spm1.appendMyself(document.getElementById('sporsmalsContainer'))