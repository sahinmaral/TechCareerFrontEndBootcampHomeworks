# Customer List Intro App

Projenin yapılış amacı , Northwind veritabanı üzerinde yer alan tablolardan biri olan customers tablosunun JSON formatında mock-up bir web servisine bağlanarak listeleme ve ekleme işlemleri yapılmasıdır.

- Listeleme kısmında varsayılan olarak 5 tane veri gelecek şekilde 15 - 20 - 50 - 100 tane veya tamamı gelecek şeklinde limitleme sistemi yapılmıştır.
- Müşterilerin şirket isimlerine göre alfabetik veya ters alfabetik sıralama yapılabilme seçeneği mevcut.
- Limitlenen veriye göre şirket ismiyle arama yapabileceği bir özellik de mevcut.
- Proje üzerinde tema değişimi mevcut.
- Müşteri ekleme sırasında validasyon sağlanmaktadır , böylece listenen veriler sağlıklı bir şekilde gelmektedir. Validasyon hatası yapıldığı zaman girilen değerin altında hata mesajı mevcuttur.
- Listeleme için web servisiyle haberleştiği sırada hata mesajı görüntülenmektedir.
- Müşteri ekleme başarılı bir şekilde tamamlandığında kendi yazmış olduğum toaster mesajı sağ altta 5 saniyeliğine gözükmektedir.

## Projenin Çalıştırılması

- backend klasöründeki node paketlerini `npm i` komutuyla kurunuz.
- Aynı şekilde client klasöründeki node paketleri için de aynı komut ile kurunuz.
- client klasörü içerisinde .env adlı dosya oluşturup `VITE_MOCKUP_API_URL` adlı env değişkenine eğer local üzerinde backend klasöründeki mock-up web servisini açacaksanız `http://localhost:3000` şeklinde giriniz.
- backend servisini `npm start` komutuyla başlatın.
- client klasörü üzerinde `npm run dev` komutu ile projeyi kendi bilgisayarınızda inceleyebilirsiniz.
