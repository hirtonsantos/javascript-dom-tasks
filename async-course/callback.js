const videosInfObj = {
    "video1": "this is the video1",
    "video2": "this is the video2",
    "video3": "this is the video3",
    "video4": "this is the video4"
}

const error = false;

const loginUser = (email, password, onSucess, onError) => {
  setTimeout(() => {
    if (error){
        onError(new Error("Usuário não cadastrado no sistema"))
    }
    console.log("user logged!");
    onSucess({ email, password });
  }, 1000)
  return "Carregando!"
};

const acessVideosDetails = (video, callback) => {
    const data = videosInfObj[video]
    setTimeout(() => {
        callback({ data })
    }, 3000)
}


const acessVideos = (email, callback) => {
    const videos = ["video1", "video2", "video3", "video4"]
    setTimeout(() => {
        setTimeout(() => {
            callback(videos)
        }, 1000);
        callback(email)
    }, 1500);
}


const user = loginUser("hirtonsantos", 1244332, (user) => {
    acessVideos(user, (videos) => {
        console.log(videos)
    })
    acessVideosDetails('video2', (videosDetails) => {
        console.log(videosDetails)
    })
}, (error) => {
    console.log({ error })
});

// const user = loginUser("hirtonsantos", 1244332, (email) => {
//     console.log(email)
// })

// com o console.log, estamos forçando um resultado de imediato.
// sem o console.log, apenas criando a variavel, estamos esperando o resultado!
console.log(user)

