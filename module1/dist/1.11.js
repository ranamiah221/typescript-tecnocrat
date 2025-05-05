"use strict";
var _a, _b;
{
    // ternary operator | optional chaining | nulish coalescing
    let age = 18;
    const user = {
        name: 'Rana',
        address: {
            city: 'Tangail',
            read: 'Awesome road',
            presentAddress: 'shawrapara'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "Address Nai vai";
    console.log({ permanentAddress });
    // 
}
