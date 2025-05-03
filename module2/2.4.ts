{
    //generic interface.....
    interface Developer<T, X=null> {
        names: string;
        computer: {
            brand: string;
            model: string;
            releshYear: number
        };
        smartWatch: T;
        bike?:X

    }
    type ElisonWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<ElisonWatch> = {
        names: 'Rana',
        computer: {
            brand: 'EliteBook',
            model: 'G5',
            releshYear: 2018,
        },
        smartWatch: {
            brand: 'Elison',
            model: 'Kitkat',
            display: 'OLED'
        }
    }
    interface Emilap {
        brand: string;
        model: string;
        price: number;
        weight: string;
    }
    interface Yamaha{
        model:string;
        price:number;
        engineCapacity:string;
    }

    const richDeveloper: Developer<Emilap,Yamaha> = {
        names: 'Rony',
        computer: {
            brand: 'EliteBook tr',
            model: 'G50',
            releshYear: 2020,
        },
        smartWatch: {
            brand: 'Emilap',
            model: 'Kitkat json',
            price: 10000,
            weight: '120 gm'
        },
        bike:{
            model:'yamaha',
            price:120000,
            engineCapacity:'220 cc'
        }

    }




    // 
}