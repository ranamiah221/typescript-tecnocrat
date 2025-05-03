"use strict";
{
    // spread oparator using array
    // const bros1: string[]=['Emtiaz', 'Azad', 'Misal'];
    // const bros2: string[]=['Rafi', 'Riyad','Biplop'];
    // bros1.push(...bros2)
    // spread oparator using objects.
    // const montors1={
    //     typeScript:'Mezba',
    //     dbms:'Hridoy',
    //     next:'Tonmoy'
    // }
    // const montors2={
    //     prisma:'Mezba hasan',
    //     cloud:'Hridoy khan',
    //     go:'Tonmoy sheikh'
    // }
    // const montorList ={
    //     ...montors1,
    //     ...montors2
    // }
    // console.log(montorList);
    // learn rest oparators...
    const greetingFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetingFriends('abul', 'kabul', 'babul', 'ubul', 'khubul');
}
