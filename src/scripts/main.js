// Imports go first
import { makePottery } from './potteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotSell, usePottery } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery(6, "mug", 5)
let bowl = makePottery(3, "bowl", 2)
let knife = makePottery(1, "knife", 8)
let pan = makePottery(4, "pan", 9)
let fork = makePottery(7, "fork", 2)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2500)
let firedBowl = firePottery(bowl, 2100)
let firedKnife = firePottery(knife, 2201)
let firedPan = firePottery(pan, 2199)
let firedFork = firePottery(fork, 2200)


// Determine which ones should be sold, and their price
toSellOrNotSell(firedMug)
toSellOrNotSell(firedBowl) 
toSellOrNotSell(firedKnife) 
toSellOrNotSell(firedPan) 
 let sellFork  = toSellOrNotSell(firedFork)
 let pottery = usePottery(sellFork)
 console.table(pottery)

// Invoke the component function that renders the HTML list
const potteryListHTML = document.getElementById("potteryList")
const sellPotteryList = potteryList(pottery)
console.table(sellPotteryList)
if (potteryListHTML) {
potteryListHTML.innerHTML = sellPotteryList
}