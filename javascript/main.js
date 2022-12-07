const pegaTecla = (evt) => {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key);
}

document.onkeypress = (evt) => {
    let str = pegaTecla(evt);
    let teclaUpperCase = str.toLowerCase();
    if(str == 'S' || str == 'Y' || str == 'M' || str == 'P' || str == '1' || str == '2' || str == '0' || str == '3') {
        console.log(str);
    } else if (teclaUpperCase == 's' || teclaUpperCase == 'y' || teclaUpperCase == 'm' || teclaUpperCase == 'p') {
        console.log(teclaUpperCase);
    }
}

setTimeout(() => {
    const inputDate = document.querySelector('#data');
    const dateMask = (element) => {
        element.addEventListener('keypress', (e) => {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }
            var len = element.value.length;
            if(len !== 1 || len !== 3) {
                if(e.keyCode == 47) {
                    e.preventDefault();
                }
            }
            if(len === 2 || len === 5) {
                element.value += '/';
            }
        });
    };
    dateMask(inputDate);

    const inputSalary = document.querySelector('#salary');
    const maskSalary = (element) => {
        element.addEventListener('keypress', (e) => {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }
            var len = element.value.length;
            if(len !== 1 || len !== 3) {
                if(e.keyCode == 47) {
                    e.preventDefault();
                }
            }
            floatToMoney(element);
        });
    }
    maskSalary(inputSalary);

    //convert float to money
    const floatToMoney = (float) => {
        return float.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}, 500)

