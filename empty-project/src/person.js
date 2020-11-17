export class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getDetails() {
        return this.id + ", " + this.name;
    }
}