
export class Calculator {

    //static method which you dont need object
    static add(...nums) { //pass as many numbers as parameters
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Number(nums[i]);
        }
        return sum;
    }

    // static which we can call upon without creating an class object
    static substract(num1, num2) {
        return Number(num1) - Number(num2);
    }

    static multiply(num1, num2) {
        return Number(num1)*Number(num2);
    }

    static divide(num1 , num2){
        return num1/num2;
    }

}
