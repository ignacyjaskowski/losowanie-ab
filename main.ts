input.onButtonPressed(Button.A, function () {
    if (ab == 1) {
        punkty += 1
        _12 = ab[randint(1, 2)]
        if (ab == 1) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (ab == 2) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
    } else if (ab == 2) {
        życie += -1
        _12 = ab[randint(1, 2)]
        if (ab == 1) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (ab == 2) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (ab == 1) {
        punkty += -1
        _12 = ab[randint(1, 2)]
        if (ab == 1) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (ab == 2) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
    } else if (ab == 2) {
        życie += 1
        _12 = ab[randint(1, 2)]
        if (ab == 1) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (ab == 2) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
    }
})
let _12 = 0
let ab = 0
let życie = 12
let punkty = 0
ab = ["1", "2"]
_12 = ab[randint(1, 2)]
if (ab == 1) {
    music.playMelody("C5 B A G F E D C ", 120)
} else if (ab == 2) {
    music.playMelody("C D E F G A B C5 ", 120)
}
