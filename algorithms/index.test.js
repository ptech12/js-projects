import expect from 'jest'

import { bubbleSort } from './bubleSort';

test('should sort the array using BubbleSort Algorithm', () => { 
    expect(bubbleSort([1,4,5,2,6,3])).toBe([1,2,3,4,5,6])
 })