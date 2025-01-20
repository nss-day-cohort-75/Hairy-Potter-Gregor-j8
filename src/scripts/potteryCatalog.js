let potteryStorage = [];
let pricedPottery = []
let crackedPottery = []

export const toSellOrNotSell = (potteryObjects) => {
    if (potteryObjects.cracked === false) {
        if (potteryObjects.weight >= 6) {
            potteryObjects.price = 40
        } else {
            potteryObjects.price = 20
        }
        pricedPottery.push(potteryObjects)
        usePottery(pricedPottery)
    } else {
        crackedPottery.push(potteryObjects)
    }
    return potteryObjects
}
    export const usePottery = (potteryObjects) => {
        potteryObjects.map(pottery => {
            return pottery
        })
     return potteryObjects[0]
}

