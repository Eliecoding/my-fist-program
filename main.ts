input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.LeftTriangle)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
