const response = {
    JavaScript:	15972,
    SCSS:7627,
    HTML:2312,
    CSS:832
}

// a function that returns percentage values of languages in repo
const getPercent = (respnse) => {
    let total = 0
    for (let k in response) {
        total+=response[k]
    }
    // console.log(total)
    Object.entries(response).map(([k, v], i) => {
        v = v/total*100
        console.log(k, v)
    })
}

getPercent(response)