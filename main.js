function ValidaCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]+/g, '')

    if(cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
        return console.log('CPF inválido!'); 
    }

    const cpfArr = cpfLimpo.split('').map(Number)

    let soma = 0 
    for (let i = 0; i < 9; i++) {
        soma += cpfArr[i] * (10 - i)
    }

    const digito1 = 11 - (soma % 11)
    const primeiroDigitoVerificador = (digito1 > 9) ? 0 : digito1

    if(cpfArr[9] !== primeiroDigitoVerificador) {
        return console.log('CPF inválido');  
    }

    soma = 0 
    for (let i = 0; i < 10; i++) {
        soma += cpfArr[i] * (11 - i)
    }

    const digito2 = 11 - (soma % 11)
    const segundoDigitoVerificador = (digito2 > 9) ? 0 : digito2

    if(cpfArr[10] !== segundoDigitoVerificador) {
        return console.log('CPF inválido');
    }

    return console.log(`CPF ${cpf}, válido!`);
}

const cpf = ValidaCPF('380.293.020-70')
