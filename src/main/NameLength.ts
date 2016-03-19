/**
 * NameLength * 
 */
export class NameLength {
    
    returnNameAndLength(names:string[]):[string, number][] {
        return names.map((name):[string, number] => [name, name.length]);
    }
    
    displayNameAndLength(names:string[], literal:boolean = false) {
        enum NumberToString {'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'};
        
        this.returnNameAndLength(names)
        .filter(([name, length]: [string, number]):boolean => length <= 9)
        .forEach((nameAndLength:[string, number]) => {
                var [name, length] = nameAndLength;
                                           
                if (literal) {
                    console.log(`${name} contient ${NumberToString[length - 1]} caractères`);
                } else {
                    console.log(`${name} contient ${length} caractères`);
                }
        });    
    }
}