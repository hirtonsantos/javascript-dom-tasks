const videosInfObj = {
    "video1": "this is the video1",
    "video2": "this is the video2",
    "video3": "this is the video3",
    "video4": "this is the video4"
}

const error = false;

const loginUser = (email, password) => {
//   setTimeout(() => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(new Error("Usuário não cadastrado no sistema"));
      }
      console.log("user logged!");
      console.log({ email, password });
      resolve({ email, password });
    });
//   }, 1000);
};

const acessVideosDetails = (video) => {
    const data = videosInfObj[video]
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(data)
            resolve({ data })
        }, 3000)
    })
}


const acessVideos = () => {
    const videos = ["video1", "video2", "video3", "video4"]
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                console.log(videos)
                resolve(videos)
            }, 1000);
        }, 1500);
    })
}

// loginUser("hirtonsantos", 33232323)
// .then((res) => console.log(res))
// .then(() => acessVideos())
// .then((videos) => acessVideosDetails(videos[0]))
// .catch((err) => console.log(err))

const displayUser = async () => {
    const user = await loginUser("hirtonsantos", 33232323)
    const videos = await acessVideos()
    const videosDetails = await acessVideosDetails(videos[0])
}

displayUser()
