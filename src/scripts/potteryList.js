let potteryHTML = ''

export const potteryList = (ItemsToSell) => {
    for (const pottery of ItemsToSell) {
    potteryHTML += `
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pottery.price}</div>
    </section>`

    } return potteryHTML
}