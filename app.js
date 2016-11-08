const koa = require('koa')
const route = require('koa-route')
const request = require('koa-request')
const app = koa()


const greetings = [
    'Hello World',
    'Hola Mundo',
    'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
    'こんにちは世界',
    '你好世界',
    'Përshendetje Botë',
    'مرحبا بالعالم',
    'Բարեւ, աշխարհ',
    'হ্যালো দুনিয়া',
    'Saluton mondo',
    'გამარჯობა მსოფლიო',
]


app.use(route.get('/', index))
app.use(route.get('/woohoo', woohoo))


function *index() {
  let index = Math.floor(Math.random() * greetings.length)
  let text = greetings[index]
  this.body = `<h1>${text}</h1>
  <a href='/woohoo'>Woohoo</a>`
}


function *woohoo() {
    let response = yield request({url: 'http://ipecho.net/plain'})
    this.body = `Woohoo! Your IP address is ${response.body}.`
}

app.listen(8000)
