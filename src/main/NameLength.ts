/**
 * NameLength * 
 */
export class NameLength {
        
    
    returnNameAndLength(names:string[]):[string, number][] {
        return names.map((name):[string, number] => [name, name.length]);
    }
    
    displayNameAndLength(names:string[], literal:boolean = false) {
        enum NumberToString {un, deux, trois, quatre, cinq, six, sept, huit, neuf};    
        
        this.returnNameAndLength(names)
            .filter(([name, length]: [string, number]):boolean => length <= 9)
            .forEach(([name, length]:[string, number]) => {
                console.log(`${name} contient ${literal ? NumberToString[length - 1] : length} caractères`);
            });    
    }
}