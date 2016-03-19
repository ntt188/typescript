import {NameLength} from '../main/NameLength';

describe('NameLength', function () {
    let nameLength:NameLength = new NameLength();
    it('returnNameAndLength should return name and its length', function () {
        let nameAndLength:[string, number][] = nameLength.returnNameAndLength(['Mikes', 'Mick']);
        expect(nameAndLength.length).toBe(2);
        expect(nameAndLength[0][0]).toBe('Mikes');
        expect(nameAndLength[0][1]).toBe(5);
        expect(nameAndLength[1][0]).toBe('Mick');
        expect(nameAndLength[1][1]).toBe(4);
    });
    
    it('returnNameAndLength method should return tuple with size of each element', () => {
        let nameAndLength:[string, number][] = nameLength.returnNameAndLength(['Emmanuel']);
        expect(nameAndLength.length).toBe(1);
        expect(nameAndLength[0][0]).toBe('Emmanuel');
        expect(nameAndLength[0][1]).toBe(8);
    });
    
    it('displayNameAndLength method should call console.log once when using an array with 1 person', () => {
        spyOn(console, 'log');
        nameLength.displayNameAndLength(['Emmanuel']);
        expect(console.log).toHaveBeenCalledWith('Emmanuel contient 8 caractères');
    });

    it('displayNameAndLength method should call console.log once when using an array with 1 person with the size in a literal format', () => {
        spyOn(console, 'log');
        nameLength.displayNameAndLength(['Zenika', 'ZenikaZenika'], true);
        expect(console.log).toHaveBeenCalledWith('Zenika contient six caractères');
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    it('displayNameAndLength method should call console.log twice when using default people array', () => {
        spyOn(console, 'log');
        nameLength.displayNameAndLength(['Miles', 'Mick']);
        expect(console.log).toHaveBeenCalledWith('Miles contient 5 caractères');
        expect(console.log).toHaveBeenCalledWith('Mick contient 4 caractères');
    });
});