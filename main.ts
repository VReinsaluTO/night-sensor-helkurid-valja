let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
})
basic.forever(function () {
    if (light2 < 100) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        basic.showString("helkurid valja!")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
