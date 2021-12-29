let Münze = 0
input.onGesture(Gesture.Shake, function () {
    Münze = randint(0, 1)
    if (Münze == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
