// Superclass SensorLaut
class SensorLaut {
  constructor(nama, lokasi) {
    this.nama = nama;
    this.lokasi = lokasi;
    this.status = "Mati"; // Mengubah dari #status karena properti privat tidak sesuai dengan kebutuhan
  }

  // Method untuk mengaktifkan sensor
  aktifkan() {
    this.status = "Aktif";
    return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan.`;
  }

  // Method untuk menonaktifkan sensor
  nonaktifkan() {
    this.status = "Mati";
    return `Sensor ${this.nama} di ${this.lokasi} telah dimatikan.`;
  }

  // Getter untuk status sensor
  getStatus() {
    return `Status Sensor ${this.nama}: ${this.status}`;
  }
}

// Subclass UsiaSensor
class UsiaSensor extends SensorLaut {
  constructor(nama, lokasi, usia) {
    super(nama, lokasi);
    this.usia = usia;
  }

  // Method baru untuk menampilkan usia sensor
  tampilkanUsia() {
    return `Usia sensor ${this.nama} adalah ${this.usia} tahun.`;
  }
}

// Mengaitkan sensor dengan kapal dari program kedua
class Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, sensor) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitas = kapasitas;
    this.panjang = panjang;
    this.lebar = lebar;
    this.sensor = sensor; // Menambahkan sensor ke kapal
  }

  infoKapal() {
    return `Kapal ini bernama ${this.nama}, berjenis ${this.jenis}, dengan kapasitas ${this.kapasitas}, memiliki dimensi ${this.panjang} x ${this.lebar}.`;
  }

  infoSensor() {
    return this.sensor.getStatus();
  }
}

// Membuat objek sensor laut
let sensorPasutMerak = new SensorLaut("Pasut Sunda", "Merak");

// Mengaktifkan sensor
console.log(sensorPasutMerak.aktifkan());
console.log(sensorPasutMerak.getStatus());

// Membuat objek kapal yang memiliki sensor
let kapalPenumpang = new Kapal("Ell", "Ferry", 500, 200, 100, sensorPasutMerak);

// Menampilkan informasi kapal dan sensor yang terhubung
console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.infoSensor());

// Membuat objek UsiaSensor
let sensorUsia = new UsiaSensor("Pasut Laut", "Selat Sunda", 5);
console.log(sensorUsia.tampilkanUsia());
console.log(sensorUsia.aktifkan());
console.log(sensorUsia.getStatus());
