const form = document.querySelector("form");
const result = document.querySelector(".result");

const handleConvert = e => {
    e.preventDefault();

    const decimalNum = e.target.decimal_num.value;

    if(decimalNum === "") {
        alert("Please, provide a number");
    }
    else if (decimalNum < 0) {
        alert("Please, provide positive number");
    }
    else {
        const binaryNum = Number(decimalNum).toString(2);
        result.innerText = binaryNum;
    }
    
    form.reset();
};

form.addEventListener("submit", handleConvert);