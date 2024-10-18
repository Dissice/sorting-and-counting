let sayiGir = prompt('En az 10 olmak üzere kaç sayı gireceğinizi girin.');
let tekSayilar = [];
let ciftSayilar = [];


if (sayiGir < 10) {
  console.log('Lütfen en az 10 adet sayı giriniz.'); // EN AZ denildiği için böyle bir özellik ekledim. (ARAŞTIRDIM)
} else {
  for (let i = 0; i < sayiGir; i++) {
    let sayi = prompt('Bir sayı giriniz:');
    if (sayi % 2 === 0) { //İşlem açısından internette araştırma yaptım. Mantığını kavradım
      // antrenmanlar ve konu anlatımlarıyla pekiştiriyorum.
      ciftSayilar.push(sayi); 
    } else {
      tekSayilar.push(sayi); 
    }
  }

  console.log('Tek sayılar -> ', tekSayilar);
  console.log('Çift sayılar -> ', ciftSayilar);
}
