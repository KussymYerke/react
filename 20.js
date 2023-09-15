class Calculator {

    constructor(value) {
        this.ans = value;
    }

    add(value){
        this.ans += value;
        return this;
    }

    subtract(value){
        this.ans -= value;
        return this;
    }

    multiply(value) {
        this.ans *= value;
        return this;
    }

    divide(value) {
        if(value === 0) throw "Division by zero is not allowed";
        this.ans /= value;
        return this;
    }

    power(value) {
        this.ans **= value;
        return this;
    }

    getResult() {
        return this.ans;
    }

}
