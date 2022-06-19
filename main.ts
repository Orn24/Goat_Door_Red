let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    if (distance >= 0 && distance <= 5) {
        rekabit.setServoPosition(ServoChannel.S1, 90)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    } else {
        rekabit.setServoPosition(ServoChannel.S1, 0)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.No)
        basic.pause(500)
    }
})
