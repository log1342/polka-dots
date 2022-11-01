input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(index - 3, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index - 1, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index + 1, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index + 3, index)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
