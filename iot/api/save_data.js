export default function handler(req, res) {
  if (req.method === 'GET') {
    // Ambil data dari query params
    const suhu = req.query.suhu || 0;
    const kelembapan = req.query.kelembapan || 0;

    console.log("Suhu:", suhu, "Kelembapan:", kelembapan);

    // Bisa simpan ke array atau database (misal Firebase)
    // Untuk percobaan kita cuma respon OK
    res.status(200).send("OK");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
