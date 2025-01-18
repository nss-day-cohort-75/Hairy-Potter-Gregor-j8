// the Makepottery function returns the following properties shape weight height id
    let pottery = {}
    let potteryId = 0
export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {

    
    pottery.weight = potteryWeight
    pottery.shape = potteryShape
    pottery.height = potteryHeight
    
    if (makePottery) {
    potteryId++
    }
    pottery.id = potteryId
    return pottery
}