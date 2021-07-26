input.onButtonPressed(Button.A, function () {
    if (_12 == 1) {
        punkty += 1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else if (_12 == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    } else if (_12 == 2) {
        życie += -1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else if (_12 == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    let ab = 0
    if (_12 == 1) {
        punkty += -1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else if (_12 == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    } else if (ab == 2) {
        życie += 1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
        } else if (_12 == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
})
let _12 = 0
let lista: number[] = []
let życie = 12
let punkty = 0
lista = [1, 2]
_12 = lista[randint(1, 2)]
if (_12 == 1) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
} else if (_12 == 2) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
}
