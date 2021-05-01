

const GM_API = "https://www.google.co.in/maps/search/"

const btn = document.getElementById('btn');
const Alert = document.getElementById('alert')
const message = document.getElementById('message')
const geoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((p) => {
            console.log(p)
            btn.addEventListener('click', () => {
                location.assign(`
                   ${GM_API + p.coords.latitude + '+' + p.coords.longitude + '/' + '@' + p.coords.latitude + ',' + p.coords.longitude + ''} 
                `)
            })
            // x.innerHTML = "lattitude:" + p.coords.latitude + "</br>" + "Logitude:" + p.coords.longitude
        })
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser'
    }
    customeAlert()
}


const customeAlert = () => {
    message.innerText = 'Would you like to subscribe our site.'
    Alert.classList.add('show')
}

const hide = () => {
    Alert.classList.remove('show')
}