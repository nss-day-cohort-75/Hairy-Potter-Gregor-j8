export const firePottery = (pieceOfPottery, fireTemp) => {
    pieceOfPottery.fired = true 
    if (fireTemp > 2200) {
        pieceOfPottery.cracked = true 
    } else {
        pieceOfPottery.cracked = false
    }
    return pieceOfPottery
}
