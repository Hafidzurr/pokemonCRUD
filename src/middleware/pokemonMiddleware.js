/** middleware sebuah fungsi yang dapat mengakses res, req, dan next. karena hal itu dia bisa menjalankan fungsi yang kita inginkan, bisa juga sebagai jembatan atau penghubung, sehingga
 * respon atau req atau next pasti melewati middleware, dengan hal itu kita  bisa menggunakannya sebagai tempat untuk melakukan pengecekan2 seperti jwt, autentifikasi, dan lainnya
    middleware dibuat menggunakan app.use, sehingga dia bisa mengakses req, res, dan next. Artinya semua req akan masuk ke middleware sebelum dilanjutkan ke app.use atau app.method lainnya \

*/
const logRequest = (req, res, next) =>{
    console.log(`Terjadi request ke PATH `, req.path)
    next()
}

module.exports = logRequest