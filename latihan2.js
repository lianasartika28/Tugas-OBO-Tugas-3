class Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitas = kapasitas;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infoKapal() {
    return `kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}`;
  }
}

class KapalPenumpang extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, penumpang) {
    super(nama, jenis, kapasitas, panjang, lebar);
    this.penumpang = penumpang;
  }

  infoKapal() {
    return `kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar} dengan jumlah penumpang ${this.penumpang}`;
  }
}

class KapalBarang extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, muatan) {
    super(nama, jenis, kapasitas, panjang, lebar);
    this.muatan = muatan;
  }

  infoKapal() {
    return `kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar} dengan muatan ${this.muatan}`;
  }
}

class KapalPesiar extends Kapal {
  constructor(nama, jenis, kapasitas, panjang, lebar, fasilitas) {
    super(nama, jenis, kapasitas, panjang, lebar);
    this.fasilitas = fasilitas;
  }

  infoKapal() {
    return `kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar} dengan fasilitas ${this.fasilitas}`;
  }
}

let kapalPenumpang = new KapalPenumpang("ell", "Ferry", 500, 200, 100, 500);
console.log(kapalPenumpang.infoKapal());
document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();

let kapalBarang = new KapalBarang("kontainer", "Cargo", 1000, 300, 150, "barang elektronik");
console.log(kapalBarang.infoKapal());
document.getElementById("objek").innerHTML += `<br>${kapalBarang.infoKapal()}`;

let kapalPesiar = new KapalPesiar("luxury", "Cruise", 2000, 400, 200, "kolam renang, restoran, gym");
console.log(kapalPesiar.infoKapal());
document.getElementById("objek").innerHTML += `<br>${kapalPesiar.infoKapal()}`;
