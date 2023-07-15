# Kütüphaneler

- react-icons
- react-router-dom
- tailwind (kurulumu kendi sayfasında)
- axios
- millify

# Yapılacaklar

- `SideNav.jsx` bileşeninde kategorileri listele
- - Seçilen kategori bilgisini bütün bileşenlerin erişebilmesi için Context yapısında tut

- Seçilen Kategori state'i her değiştiğinde ilgili kategoriye ait youtube video verisini çek
- Bu veriyi `Feed.jsx` ' kullan ve herbir video objesi için ekrana `VideoCard.jsx` bas

- Videolardan birine tıklandığında kullanıyı o videonun id'sini parametre olrak içeren bir linke yöndlendir
- - `VideoDetail.jsx` sayfasında urlden parametreyi al
- - parametreyle braber apiye video detayları için istek at
- - api'den gelen veriyi ekrana bas

- Eski Yönlendirğimiz Link
- - parametre yöntemiyle ekledik:
    /results/react.js
- - Bu şekilde yönlendirince özel karakterlerde sorun oluyor

- Bu Yüzden Url parametresi yöntemiyle yönlendirme yapıcaz :
- - arama terimi yöntemiyle:
    /results/?search_query=react.js
