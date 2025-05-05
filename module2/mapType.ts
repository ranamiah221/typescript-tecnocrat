{
    // 
    const arrOfNumber: number[] = [1, 2, 3, 4];
    console.log(arrOfNumber);
    const arrOfString: string[] = arrOfNumber.map(number => number.toString())
    console.log(arrOfString);

    type AreaNumber = {
        height: number;
        wheight: number;
    }

    type Height = AreaNumber['height']

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }



    const area420: AreaString<{
        name: string;
        roll: number;
        age: number;
        isAdmin: boolean;
    }> = {
        name: 'rana',
        roll: 12,
        age: 22,
        isAdmin: true
    }






    // 
}