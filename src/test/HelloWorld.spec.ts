import {HelloWorld} from '../main/HelloWorld';

describe('HelloWorld', function () {
    it('should say Hello world', function () {
        var helloWorld:HelloWorld = new HelloWorld();
        expect(helloWorld.sayHello()).toBe('Hello world!');
    });
    
    it('should say Hello Tung', function () {
        var helloWorld:HelloWorld = new HelloWorld();
        expect(helloWorld.sayHello('Tung')).toBe('Hello Tung!');
    });
});