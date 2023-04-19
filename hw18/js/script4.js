const wishList = ["love", "peace", "health", "money", "friends","pets", "travel"];


function getRandomWish(wishList) {
	let randomIndex = Math.floor(Math.random() * wishList.length)
	return wishList[randomIndex]
}




function getRandomWishList(val, wishList) {
  for (let i = 0; i < val; i++) {
    let div = document.createElement("div")
    let wish = getRandomWish(wishList)
    div.innerText = wish
    document.getElementById("title").append(div)
  }
}
getRandomWishList(3, wishList)
