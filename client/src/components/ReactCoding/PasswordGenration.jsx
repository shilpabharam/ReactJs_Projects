import {useState, useRef} from 'react';

export default function PasswordGenration() {
    const [password, setPassword] = useState("");
    const letterRef = useRef(null);
    const symbolRef = useRef(null);
    const numberRef = useRef(null); 

    const letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

    const genratePassword = (char, count) => {
        console.log("char" , char , count)
        let passsVal = ""
        for(let i=0; i< count; i++){
            let charInde = Math.floor(Math.random() * char.length);
            passsVal += char[charInde];
        }
        return passsVal;
    }

    const handlePassword = ()=> {
        let letterCount = genratePassword(letters ,letterRef.current.value )
        let symbolCount = genratePassword(symbols ,symbolRef.current.value )
        let numberCount = genratePassword(numbers ,numberRef.current.value )
        setPassword(letterCount +symbolCount +numberCount) ; 
    }

    return(
        <>
          Enter Number of letter :  <input type="number" ref={letterRef} />
          Enter Number of Symbol :  <input type="number" ref={symbolRef} />
          Enter Number of Number :   <input type="number" ref={numberRef} />
        <button onClick={handlePassword} > Genrate Password </button>

        Genrated Password {password}
        </>
    )


//    const genrateRandomPassword = (type, count) => {
//        let randomPasword = '';
//        for(let i=0;i< count;i++){
//            const randomIndex = Math.floor(Math.random() * type.length);
//            randomPasword += type[randomIndex];
//        }
//        return randomPasword;
//    }
//
//    const handleRandomPassword =(e) => {
//        e.preventDefault();
//        const letterPass = genrateRandomPassword(letters, letterRef.current.value);
//        const numberPass = genrateRandomPassword(numbers, numberRef.current.value)
//        const symboloPass =genrateRandomPassword(symbols ,symbolRef.current.value)
//
//        setPassword(letterPass + numberPass + symboloPass)
//    }
//
//  
//    return( 
//        <form onSubmit={handleRandomPassword}>
//            <input type="number" required ref={letterRef} placeholder="Letters" />
//            <input type="number" required ref={numberRef} placeholder="Numbers" />
//            <input type="number" required ref={symbolRef} placeholder="Symbols" />
//            <button type="submit">Generate Password</button>
//            <div>{password}</div>
//            </form>
//    )
}