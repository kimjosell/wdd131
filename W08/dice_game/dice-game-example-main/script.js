let dieImages = document.querySelectorAll("#gameboard img");

document.querySelector('#rollButton').addEventListener("click", e => {
    dieImages.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    setTimeout(() => {
        dieImages.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = `assets/white_dice_${Math.ceil(Math.random() * 6)}.gif`;
            }
        })
    }, 1000);
});

function isDieUnlocked(dieImage) {
    return Array.from(document.querySelectorAll('#gameboard input')).filter(checkbox => !checkbox.checked).find(unchecked => unchecked.className == dieImage.className);
}