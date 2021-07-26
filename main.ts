input.onButtonPressed(Button.A, function () {
    if (_12 == 1) {
        punkty += 1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            music.ringTone(147)
        } else if (_12 == 2) {
            music.ringTone(147)
            music.ringTone(147)
        }
    } else if (_12 == 2) {
        życie += -1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            music.ringTone(147)
        } else if (_12 == 2) {
            music.ringTone(147)
            music.ringTone(147)
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
            music.ringTone(147)
        } else if (_12 == 2) {
            music.ringTone(147)
            music.ringTone(147)
        }
    } else if (ab == 2) {
        życie += 1
        _12 = lista[randint(1, 2)]
        if (_12 == 1) {
            music.ringTone(147)
        } else if (_12 == 2) {
            music.ringTone(147)
            music.ringTone(147)
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
    music.ringTone(147)
} else if (_12 == 2) {
    music.ringTone(147)
    music.ringTone(147)
}
