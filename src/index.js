class SmartCalculator {
    constructor(initialValue) {
        this.equation = '('+initialValue +')';
    }
    transform(n){

        n = new Number(eval(this.equation));
        n.add =  (y) =>{
            this.equation = this.equation + '+('+y+')';
            return eval(this.transform(this.equation));
        };

        n.subtract =  (y) =>{
            this.equation = this.equation + '-('+y+')';
            return eval(this.transform(this.equation));
        };
        n.multiply = (y) =>{
            this.equation = this.equation + '*('+y+')';
            return eval(this.transform(this.equation));
        };
        n.devide = (y) =>{
            this.equation = this.equation + '/('+y+')';
            return eval(this.transform(this.equation));
        };
        n.pow = (y) =>{
            this.aPow(y);
            return eval(this.transform(this.equation));
        };
        return n;
    }
    add(number) {
        this.equation = this.equation + '+('+number+')';
        let n = this.transform(eval(this.equation));
        return n;
    }

    subtract(number) {

        this.equation = this.equation + '-('+number+')';
        return this.transform(eval(this.equation));
    }
    multiply(number) {

        this.equation = this.equation + '*('+number+')';
        return this.transform(eval(this.equation));
    }

    devide(number) {

        this.equation = this.equation + '/('+number+')';
        return this.transform(eval(this.equation));
    }
    aPow(number){
        let numberForPow =[];
        let arrExpression  = this.equation.split('');
        let arrEquation = this.equation.split('');
        for (let i = arrExpression.length-1; i > 0; i--){

            if (arrExpression[i] !== '('){
                numberForPow.unshift(arrExpression[i]);
                arrEquation.pop();

            } else break;
        }
        numberForPow.pop();
        arrEquation.pop();
        numberForPow = numberForPow.join('');
        arrEquation = arrEquation.join('');
        let powRes = Math.pow(+numberForPow, number);
        this.equation = arrEquation + '('+powRes+')';
    }
    pow(number) {
        this.aPow(number);
        return this.transform(eval(this.equation));

    }
}

module.exports = SmartCalculator;
