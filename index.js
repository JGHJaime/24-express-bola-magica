const express = require("express")
const bolaMagica = express()
const port =process.env.PORT || 5000

const frases = [
    "¡Es cierto!",
    "Indudablemente",
    "Sin duda",
    "Más o menos",
    "Sí-definitivamente",
    "Puedes confiar en ello",
    "Rotundamente no",
    "Sí",
    "No",
    "Los círculos eráclitos dan afirmativo",
    "No tiene respuesta por ahora",
    "No se puede predecir",
    "Lo más probable",
    "Sin lugar a dudas",
    "Vuelve a preguntar-me sa quemao el circuito",
    "No cuentes con ello",
    "Improbable es quedarse corto",
    "No te entiende ni la RAE-intenta otra vez",
    "Pregunta de nuevo más tarde",
    "En mi opinión - sí",
    "En mi opinión - no",
    "Y lo que te responda - porque patata",
    "Nunca negatifa - siempre positifa",
]

var frasesServidas = [0]

bolaMagica.get("/magico", (req, res) => {
    frase = frases[Math.floor(Math.random() * frases.lenght)]
    console.log(`${frasesServidas++} -- ${frase}`)
    res.send(frase)
})

bolaMagica.listen(port, () => {
    console.log("BolaMagica en http://localhost: " + port)
})