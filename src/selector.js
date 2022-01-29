//const selector = (obj, keys) => {
    // Ваше решение должно быть здесь
    function selector(obj, path) {
        let currentObj = obj;
        path.forEach((key => {
            if (currentObj[key]) {
                currentObj = currentObj[key];
            } else {
                currentObj = '';
            };
        }));
        return currentObj;
    }

    const obj ={
        field: {
            test: 'sometext'
        }
    };

    console.log(selector(obj, ['field', 'key']));
//};

module.exports = selector;