const selector = (obj, path) => {
    // Ваше решение должно быть здесь
    // function selector(obj, path) {
    let currentObj = obj;
    path.forEach((key => {
        if (currentObj[key]) {
            currentObj = currentObj[key];
        } else {
            return '';
        };
    }));
    return currentObj;
}

const obj = {
    field: {
        test: 'sometext'
    }
};

console.log(selector(obj, ['field', 'key']));
//};

module.exports = selector;