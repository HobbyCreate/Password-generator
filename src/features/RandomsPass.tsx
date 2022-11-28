
export const randomsPass = (func: Array<number | boolean>) => {
    // Array Destructuring.
    const [length, lower, upper, num, special] = func;  

    // Character set.
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numb = '0123456789';
    const specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~\\'

    // Wrap the character set with the status (on / off) from users.
    const lw = { status: lower, char: lowerCase };
    const up = { status: upper, char: upperCase };
    const numbb = { status: num, char: numb };
    const spe = { status: special, char: specialChar };
    const newArray = [lw, up, numbb, spe];

    // Temporary string.
    let allChar = '';
    let password = '';

    // Create new string if status was true.
    for(let i=0; i< newArray.length; i++){
        if(newArray[i].status){
            allChar += newArray[i].char;
        } else {
            allChar += '';
        }
    }

    // If all status was "false" return the empty password.
    if(allChar === '') return password = '';

    // Random the index of character in the string variable.
    const randomChar = (allChar: string) => {
        
        return allChar[Math.floor(Math.random() * allChar.length)];
    }

    // Looping by Length.
    for(let i=0; i<length; i++){
        password += randomChar(allChar);
    }
    
    return password;
}

