let Münze = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    Münze = randint(0, 1)
    if (Münze == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(1)
    }
})
