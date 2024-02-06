function bubbleSort(arr){
    /* for i..n => for j..n-1-i */
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            /* swap */
            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[i] = temp;
            }
            
        }
    }
}

export default bubbleSort;