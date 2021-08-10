// Write your solution in this file!

const driver = {
    name: "Sam"
}
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, { [key]: value })
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver = Object.assign(driver, { [key]: value })
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newObj = {...driver}
    delete newObj[`${key}`]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[`${key}`]
    return driver
}


