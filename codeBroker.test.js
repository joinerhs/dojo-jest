const codeBroker = require('./codeBroker')

test('Todos Coinciden', ()=>{
    var result = codeBroker.broke(1325);
    expect(result).toBe('XXXX');
})

test('Ninguno Coincide', ()=>{
    var result = codeBroker.broke(9648);
    expect(result).toBe('');
})

describe('Coincidencia en posición',()=>{
    test('Uno coincide en posicion', ()=>{
        var result = codeBroker.broke(1700);
        expect(result).toBe('X');
    })

    test('Al menos dos coincide en posicion', ()=>{
        var result = codeBroker.broke(1705);
        expect(result).toBe('XX');
    }) 

    test('Al menos tres coincide en posicion', ()=>{
        var result = codeBroker.broke(1725);
        expect(result).toBe('XXX');
    }) 
})

describe('Coincidencia de valor',()=>{
    test('Uno coincide en posicion', ()=>{
        var result = codeBroker.broke(8710);
        expect(result).toBe('-');
    })

    test('Al menos dos coincide en valor', ()=>{
        var result = codeBroker.broke(3957);
        expect(result).toBe('--');
    })

     test('Al menos tres coincide en valor', ()=>{
        var result = codeBroker.broke(3257);
        expect(result).toBe('---');
    })

})
















/* const calculator = require('./calculator')

describe('Sum operator',()=>{
    test('Sum 1 + 2 to equals 3',()=>{
        var result = calculator.sum(1,2);
        expect(result).toBe(3);
    })

    test('Sum 4 + 5 to equals 9',()=>{
        var result = calculator.sum(4,5);
        expect(result).toBe(9);
    })
 
})

describe('Substract operator',()=>{
    test('Substract 4 - 1  to equals 3',()=>{
        var result = calculator.substract(4,1);
        expect(result).toBe(3);
    })
}) */
