// Imports go first
import { makePottery } from './potteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotSell } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = {}
mug = makePottery(6, "mug", 5)
let bowl = {}
bowl = makePottery(3, "bowl", 2)
let knife = {}
knife = makePottery(1, "knife", 8)
let pan = {}
 pan = makePottery(4, "pan", 9)
let fork = {}
fork = makePottery(7, "fork", 2)


// Fire each piece of pottery in the kiln
let firedMug = {}
firedMug = firePottery(mug, 2500)
// console.table(firedMug)
let firedBowl = {}
firedBowl = firePottery(bowl, 2100)
// console.table(firedBowl)
let firedKnife = {}
firedKnife = firePottery(knife, 2201)
// console.table(firedKnife)
let firedPan = {}
firedPan = firePottery(pan, 2199)
// console.table(firedPan)
let firedFork = {}
firedFork = firePottery(fork, 2200)
// console.table(firedFork)


// Determine which ones should be sold, and their price
console.table(toSellOrNotSell(firedMug))
console.table(toSellOrNotSell(firedBowl))
console.table(toSellOrNotSell(firedKnife))
console.table(toSellOrNotSell(firedPan))
console.table(toSellOrNotSell(firedFork))

// Invoke the component function that renders the HTML list

