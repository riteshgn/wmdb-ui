export function compareResults(result1, result2) {
    if (result1.name > result2.name) {
        return 1;
    }

    if (result1.name < result2.name) {
        return -1;
    }

    return (result1.id > result2.id ? 1 : -1)
}

export function identifyResult(result) {
    return result.id;
}