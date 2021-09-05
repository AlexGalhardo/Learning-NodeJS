let bytesAmount = 0
const API_URL = "http://localhost:3000"
const ON_UPLOAD_EVENT = "file-uploaded"

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    )
}

const updateStatus = (size) => {
    const text = `Pending Bytes to Upload: <strong>${formatBytes(size)}</strong>`
    document.getElementById("size").innerHTML = text
}

const showSize = () => {
    const { files: fileElements } = document.getElementById('file')
    if (!fileElements.length) return;

    const files = Array.from(fileElements)
    const { size } = files
        .reduce((prev, next) => ({ size: prev.size + next.size }), { size: 0 })

    bytesAmount = size
    updateStatus(size)

    // const interval = setInterval(() => {
    //     console.count()
    //     const result = bytesAmount - 5e6
    //     bytesAmount = result < 0 ? 0 : result 
    //     updateStatus(bytesAmount)
    //     if(bytesAmount === 0 ) clearInterval(interval)
    // }, 50)
}

const updateMessage = (message) => {
    const msg = document.getElementById('msg')
    msg.innerText = message

    msg.classList.add('alert', 'alert-success')
    setTimeout(() => (msg.hidden = true), 3000);

}

const showMessage = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const serverMessage = urlParams.get('msg')
    if (!serverMessage) return;

    updateMessage(serverMessage)
}

const configureForm = (targetUrl) => {
    const form = document.getElementById("form")
    form.action = targetUrl
}

const onload = () => {
    showMessage()

    const ioClient = io.connect(API_URL, { withCredentials: false })
    ioClient.on("connect", (msg) => {
        console.log('connected!', ioClient.id)
        const targetUrl = API_URL + `?socketId=${ioClient.id}`
        configureForm(targetUrl)
    })

    ioClient.on(ON_UPLOAD_EVENT, (bytesReceived) => {
        console.log('received', bytesReceived)
        bytesAmount = bytesAmount - bytesReceived
        updateStatus(bytesAmount)
    })

    updateStatus(0)

}

window.onload = onload
window.showSize = showSize