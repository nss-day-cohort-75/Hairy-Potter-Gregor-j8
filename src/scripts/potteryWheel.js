let potteryId = 0   
export const makePottery = (potteryWeight, potteryShape, potteryHeight) => {
    let pottery = {}
    pottery.weight = potteryWeight
    pottery.shape = potteryShape
    pottery.height = potteryHeight
    
    if (makePottery) {
        potteryId++
    }
    pottery.id = potteryId
    return pottery
}