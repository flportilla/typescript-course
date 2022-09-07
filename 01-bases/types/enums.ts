(() => {

    enum AudioLevel {
        min = 1,
        medium, //2
        medium2, //3
        max = 10
    }

    let currentAudio = AudioLevel.max

    console.log(currentAudio)
    console.log(AudioLevel)

})()