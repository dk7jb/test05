oledssd1306.initDisplay()
oledssd1306.clearDisplay()
oledssd1306.writeNumber(100)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . . # # .
        . . # . #
        `)
    basic.pause(1000)
})
