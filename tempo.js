function conversaoTempo(tempo) {
    let ms = tempo % 1000 << 0
    let seg = tempo / 1000 % 60 << 0
    let min = tempo / 1000 / 60 % 60 << 0
    let hr = tempo / 1000 / 60 / 60 % 60 << 0

    console.log(hr,'hrs', min,'min', seg, 'seg', ms, 'ms')
}

conversaoTempo(79.026)
conversaoTempo(100.568)
conversaoTempo(202.756)
conversaoTempo(478.140)