const nomorWA = "6283161951687";
let keranjang = [];

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function beli(nama, harga){
    const pesan = `Halo, saya ingin membeli ${nama} dengan harga Rp ${harga}.`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`);
}

function hubungi(){
    const pesan = "Halo, saya ingin bertanya tentang produk batik pria.";
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`);
}

function tambahKeranjang(nama, harga){
    keranjang.push({nama, harga});
    renderKeranjang();
}

function hapusProduk(index){
    keranjang.splice(index, 1);
    renderKeranjang();
}

function renderKeranjang(){
    const list = document.getElementById("daftarKeranjang");
    const totalEl = document.getElementById("totalHarga");
    list.innerHTML = "";
    let total = 0;

    keranjang.forEach((item, index) => {
        total += item.harga;
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nama} - Rp ${item.harga}
            <button class="hapus" onclick="hapusProduk(${index})">Hapus</button>
        `;
        list.appendChild(li);
    });

    totalEl.innerText = total;
}

function pesanKeranjang(){
    if(keranjang.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    let pesan = "Halo, saya ingin memesan:\n";
    let total = 0;

    keranjang.forEach((item, i) => {
        pesan += `${i+1}. ${item.nama} - Rp ${item.harga}\n`;
        total += item.harga;
    });

    pesan += `\nTotal: Rp ${total}`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`);
}
