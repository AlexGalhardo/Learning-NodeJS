// https://blog.lsantos.dev/timers-abort-controllers/
// https://dev.to/khaosdoctor/node-js-por-baixo-dos-panos-3-um-mergulho-no-event-loop-38l9
// https://dev.to/khaosdoctor/entendendo-async-iterators-1opo

import { setInterval, setTimeout, setImmediate } from 'timers/promises'

// setTimeout(() => {
//   console.log('esse callback vai ser executado em 3 segundos')
// }, 3000)

// setImmediate(() => {
//   console.log('esse callback vai ser executado logo depois do início da execução')
// })

// console.log('e esse vai ser executado primeiro')

// function foo() {
//   console.log('operação inacabada')
//   setTimeout(() => {
//     console.log('espera 2 segundos para continuar')
//     // console.log('continua a operação inacabada')
//   }, 2000)
// }

// foo()

// const sleep = (timer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve, timer)
//   })
// }

// async function start() {
//   console.log('operação')
//   await sleep(3000)
//   console.log('continua a operação')
// }

// start()

// import { setTimeout, setImmediate } from 'timers/promises'

// // console.log('antes')
// // await setTimeout(3000)
// // console.log('depois')

// // console.log('antes')
// // const resultado = await setTimeout(3000, 'timeout')
// // console.log('depois')
// // console.log(resultado) // timeout

// // console.log('antes')
// // console.log(await setTimeout(3000, 'timeout')) // timeout
// // console.log('depois')

// console.log('antes')
// console.log(await setImmediate('immediate')) // immediate
// console.log('depois')

// import { setTimeout } from 'timers/promises'

// async function* intervalGenerator(res, timer) {
//   while (true) {
//     setTimeout(timer)
//     await setTimeout(timer)
//     yield Promise.resolve({
//       done: false,
//       value: res
//     })
//   }
// }

// for await (const res of intervalGenerator('result', 1000)) {
//   console.log(res.value)
// }

// for await (const result of setInterval(1000, 'result')) {
//   console.log(result)
// }

// let valorExterno = false
// setInterval(async () => {
//   const response = await fetch('url').then((r) => r.json())
//   if (response.valor < 500) valorExterno = true
// }, 5000)

// let valorExterno = false
// let interval = setInterval(async () => {
//   const response = await fetch('url').then((r) => r.json())
//   if (response.valor < 500) {
//     valorExterno = true
//     clearInterval(interval)
//   }
// }, 5000)

// function promise() {
//   return Promise.resolve(Math.random())
// }

// let valorExterno = false
// for await (const result of setInterval(2000, promise())) {
//   console.log(result)
//   if (result > 0.7) {
//     console.log('Resultado desejado obtido abortando execuções')
//     break
//   }
// }

// function operacaoLonga(signal) {
//   return new Promise((resolve, reject) => {
//     if (!signal.aborted) signal.onabort = () => reject('Cancelado')
//     setTimeout(resolve, 60000)
//   })
// }

// const ac = new AbortController()
// setTimeout(() => ac.abort(), 3500)
// await operacaoLonga(ac.signal).catch((r) => {
//   console.error(r)
//   process.exit(1)
// })


const ac = new AbortController()

// await setTimeout(3500, ac.abort('Timeout'))
// await setTimeout(60000, 'operação longa', { signal: ac.signal })

await setTimeout(60000, 'operação longa', { signal: timeout(3500) })