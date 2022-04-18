const main = document.querySelector('main')
const select = document.querySelector('select')

const humanExpressions = [
    {img: "./img/drink.jpg", text: "Estou com sede"},
    {img: "./img/food.jpg", text: "Estou com fome"},
    {img: "./img/tired.jpg", text: "Estou cansado"},
    {img: "./img/hurt.jpg", text: "Estou machucado"},
    {img: "./img/happy.jpg", text: "Estou feliz"},
    {img: "./img/angry.jpg", text: "Estou com raiva"},
    {img: "./img/sad.jpg", text: "Estou triste"},
    {img: "./img/scared.jpg", text: "Estou assustado"},
    {img: "./img/outside.jpg", text: "Quero ir lá para fora"},
    {img: "./img/home.jpg", text: "Quero ir lá para casa"},
    {img: "./img/school.jpg", text: "Quero ir lá para escola"},
    {img: "./img/grandma.jpg", text: "Quero ver a vovó"}
]

const utterance = new SpeechSynthesisUtterance()

const setTextMessage = (text) => {
    utterance.text = text
}

const speakText = () => {
    speechSynthesis.speak(utterance)
}

const setVoice = event => {
    const voiceValue = event.target.value
    console.log(voiceValue)
    utterance.voice = voices.find(voice => voice.name === voiceValue)
    console.log(utterance.voice)
}

const createExpressionBox = ({img , text}) => {
    const div = document.createElement('div')

    div.classList.add('expression-box')

    div.innerHTML = `
        <img src=${img} alt=${text}>
        <p class="info"> ${text}<p/>
    `

    div.addEventListener('click', () => {
        setTextMessage(text)
        speakText()

        div.classList.add('ative')

        setTimeout(() => {
            div.classList.remove('active')
        }, 1000);
    })

    main.appendChild(div)
}

humanExpressions.forEach(createExpressionBox)


// const oi = document.createElement("option")
// oi.innerText = "oi"

// const tudo = document.createElement("option")
// tudo.innerText = "tudo"

// select.append(oi, tudo)

// select.addEventListener("change", (e) => {
//     console.log(e.target.value)
// })

let voices = []

speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices()
    
    voices.forEach(({name, lang}) => {
        const option = document.createElement("option")

        option.value = name
        option.textContent = `${name} | ${lang}`

        select.appendChild(option)
    })

})


select.addEventListener("change", setVoice)