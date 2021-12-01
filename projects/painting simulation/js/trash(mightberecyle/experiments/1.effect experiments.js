function setup() {   //learn from the tutorial 
    createCanvas(700, 500)
    background(0)
    noStroke()
    translate(width / 2, height / 2) // make DarkBramble flash effect
    darkBramble = new DarkBramble(20)
    darkBramble.generateDarkBramble()
}

setInterval(function() {
    darkBramble.traverseTheList()
    darkBramble.changeTheList()
}, 50)


class DarkBramble {
    constructor(bramblesNum) {
        this.tn = bramblesNum
        this.bramblesList = new Array()
    }

    generateDarkBramble() {
        for (let i = 0; i < this.tn; i++) {
            let wid = random(Array.from({ length: 4 }, (item, index) => index + 5))
            let bramble = new Array()
            for (let j = 0; j < (wid * 2 - 2); j++) {
                let angle = random(TWO_PI)
                let len = random(100)
                let section = [angle, len, wid - 0.5 * j]
                bramble.push(section)
            }
            this.bramblesList.push(bramble)
        }
    }

    changeTheList() {
        this.bramblesList.shift()
        let wid = random(Array.from({ length: 4 }, (item, index) => index + 5))
        let bramble = new Array()
        for (let j = 0; j < (wid * 2 - 2); j++) {
            let angle = random(TWO_PI)
            let len = random(100)
            let section = [angle, len, wid - 0.5 * j]
            bramble.push(section)
        }
        this.bramblesList.push(bramble)
    }

    traverseTheList() {
        for (let bramble of this.bramblesList) {
            push();
            for (let section of bramble) {
            fill(max(((((this.bramblesList.indexOf(bramble) - 1) / this.bramblesList.length)) * 255 +
            (1 - ((bramble.indexOf(section) + bramble.length - 2) / bramble.length)) * 150), 0));
            rotate(section[0]);
            rect(0, -section[2] / 2, section[1], section[2]);
            translate(section[1], 0);
            ellipse(0, 0, section[2]);
            }
            pop();
        }
    }
}
