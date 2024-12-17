function task(x) {
    const baseObject = Object.create({}, {
        key1: {
            value: 2022,
            enumerable: false
        },
        key2: {
            value: 2023,
            enumerable: true
        }
    });

    const obj = Object.create(baseObject);

    Object.defineProperty(obj, 'login', {
        value: '471810',
        enumerable: true
    });

    Object.defineProperty(obj, 'key3', {
        value: 2024,
        enumerable: false
    });

    return obj;
}
