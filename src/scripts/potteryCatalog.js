let potteryStorage = [];

export const toSellOrNotSell = (potteryObjects) => {
    if (potteryObjects.cracked === false) {
        if (potteryObjects.weight >= 6) {
            potteryObjects.price = 40
        } else {
            potteryObjects.price = 20
        }
        potteryStorage.push(potteryObjects)
    } else {
        return
    }
    return potteryStorage
}

    export const usePottery = (sellPottery) => {
       const newPotteryArray = sellPottery.map((pottery) => pottery)
     return newPotteryArray
}

