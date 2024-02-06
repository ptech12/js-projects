const bubbleSort = require('../bubleSort');


describe('sort using bubbleSort', () => { 
    /* test func */
    test('should sort the simple array  ', () => { 
        expect(bubbleSort([1,4,5,2,6,3])).toStrictEqual([1,2,3,4,5,6])
     })
    
 })
