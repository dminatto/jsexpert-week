class Media{
    async getCamara(audio = false, video = true){
        return navigator.mediaDevices.getUserMedia({
            video,
            audio
        })
    }
}