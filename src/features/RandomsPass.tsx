
export const randomsPass = (func: Array<number | boolean>) => {
    const [length, lower, upper, num, special] = func;
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numb = '0123456789';
    const specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\'

    const lw = { status: lower, char: lowerCase };
    const up = { status: upper, char: upperCase };
    const numbb = { status: num, char: numb };
    const spe = { status: special, char: specialChar };

    const newArray = [lw, up, numbb, spe];
    let allChar = '';
    let password = '';

    for(let i=0; i< newArray.length; i++){
        if(newArray[i].status){
            allChar += newArray[i].char;
        }
    }

    const randomChar = (allChar: string) => {
        return allChar[Math.floor(Math.random() * allChar.length)];
    }

    for(let i=0; i<length; i++){
        password += randomChar(allChar);
    }
    
    return password;
}

