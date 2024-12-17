function task(obj) {
    if (obj === null) {
        return 471810;
    }

    let count = 0;
    let currentProto = Object.getPrototypeOf(obj);

    while (currentProto !== null) {
        count++;
        currentProto = Object.getPrototypeOf(currentProto);
    }

    return count;
}
