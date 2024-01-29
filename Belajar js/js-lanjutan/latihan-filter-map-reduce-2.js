let video = Array.from(document.querySelectorAll('[data-duration]'))
let videoFilter = video.filter(e => e.innerHTML.includes('JAVASCRIPT LANJUTAN'))

.map(waktu => waktu.dataset.duration)
    .map(waktu => {
        const part = waktu.split(':').map(part => parseInt(part))
        return part[0] * 60 + part[1]
    }).reduce((acc, part) => acc + part)

const jam = Math.floor(videoFilter / 3600)
videoFilter = videoFilter - jam * 3600
const menit = Math.floor(videoFilter / 60)
const detik = Math.floor(videoFilter - menit * 60)

const jmlVideo = document.querySelector('.jumlah-video')
const totalDurasi = document.querySelector('.total-durasi')

jmlVideo.innerHTML = video.filter(e => e.innerHTML.includes('JAVASCRIPT LANJUTAN')).length
totalDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`