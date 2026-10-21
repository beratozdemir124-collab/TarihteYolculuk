const historicalEvents = [
    // ================= SELÇUKLU & BEYLİKLER DÖNEMİ =================
    {
        id: 1,
        year: "1071",
        title: "Malazgirt Zaferi",
        location: "Muş, Malazgirt",
        lat: 39.1444,
        lng: 41.5361,
        era: "selcuklu",
        category: "Büyük Selçuklu",
        leader: "Sultan Alparslan",
        icon: "fa-shield-halved",
        description: "Büyük Selçuklu Hükümdarı Alparslan, Bizans İmparatoru IV. Romen Diyojen'i mağlup ederek Anadolu'nun kapılarını Türkler için açtı.",
        impact: "Anadolu'da Türkiye Tarihi başladı, ilk Türk beylikleri kurulmaya başlandı.",
        question: "Malazgirt Savaşı sonrası Anadolu'da başlayan dönemin en temel özelliği hangisidir?",
        options: [
            "Anadolu'nun kapılarının Türklere açılması ve Türkleşmenin başlaması",
            "Osmanlı Devleti'nin resmen kurulması",
            "Bizans İmparatorluğu'nun tamamen yıkılması",
            "Akdeniz'de Türk deniz hâkimiyetinin kurulması"
        ],
        correct: 0
    },
    {
        id: 2,
        year: "1176",
        title: "Miryokefalon Zaferi",
        location: "Isparta, Yalvaç",
        lat: 38.2964,
        lng: 31.1764,
        era: "selcuklu",
        category: "Anadolu Selçuklu",
        leader: "II. Kılıç Arslan",
        icon: "fa-crosshairs",
        description: "Anadolu Selçuklu Sultanı II. Kılıç Arslan, Bizans ordusunu pusuya düşürerek imha etti.",
        impact: "Anadolu'nun kesin olarak Türk yurdu olduğu kanıtlandı.",
        question: "Miryokefalon Zaferi'nin Türk tarihi açısından en önemli sonucu nedir?",
        options: [
            "Anadolu'nun kesin olarak Türk yurdu haline gelmesi",
            "İstanbul'un fethedilmesi",
            "Haçlı Seferleri'nin sona ermesi",
            "Marmara kıyılarının ele geçirilmesi"
        ],
        correct: 0
    },
    {
        id: 3,
        year: "1243",
        title: "Kösedağ Savaşı",
        location: "Sivas, Suşehri",
        lat: 39.8117,
        lng: 38.0833,
        era: "selcuklu",
        category: "Anadolu Selçuklu",
        leader: "II. Gıyaseddin Keyhüsrev",
        icon: "fa-skull",
        description: "Moğol (İlhanlı) ordusu ile Anadolu Selçuklu Devleti arasında gerçekleşen savaşı Moğollar kazandı.",
        impact: "Anadolu Selçuklu Devleti zayıfladı ve İkinci Beylikler Dönemi başladı.",
        question: "Kösedağ Savaşı'nın Anadolu'daki siyasi yapı üzerindeki doğrudan etkisi nedir?",
        options: [
            "Anadolu Selçuklu'nun zayıflaması ve İkinci Beylikler Dönemi'nin başlaması",
            "Bizans'ın tekrar güçlü hale gelmesi",
            "Türkiye Cumhuriyeti'nin temellerinin atılması",
            "Mısır Memlük Devleti'nin yıkılması"
        ],
        correct: 0
    },

    // ================= OSMANLI DEVLETİ (KURULUŞ & YÜKSELİŞ & GERİLEME) =================
    {
        id: 4,
        year: "1299",
        title: "Osmanlı Beyliği'nin Kuruluşu",
        location: "Bilecik, Söğüt",
        lat: 40.0183,
        lng: 30.0125,
        era: "osmanli",
        category: "Osmanlı Devleti",
        leader: "Osman Gazi",
        icon: "fa-crown",
        description: "Osman Bey önderliğinde Söğüt ve Domaniç çevresinde bağımsızlık adımları atılarak Osmanlı Beyliği kuruldu.",
        impact: "600 yıl boyunca 3 kıtaya hükmedecek Cihan Devleti'nin ilk temelleri atıldı.",
        question: "Osmanlı Beyliği'nin kısa sürede büyüyüp gelişmesinde aşağıdakilerden hangisi etkili olmamıştır?",
        options: [
            "Gaza ve cihad anlayışı ile Bizans sınırında kurulması",
            "Adil ve hoşgörülü istimâlet politikası",
            "Coğrafi konumunun korunaklı ve uçta yer alması",
            "Çok erken dönemde matbaayı kullanmaya başlaması"
        ],
        correct: 3
    },
    {
        id: 36,
        year: "1302",
        title: "Koyunhisar (Bafeus) Savaşı",
        location: "Yalova / Bursa",
        lat: 40.6542,
        lng: 29.2842,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "Osman Gazi",
        icon: "fa-swords",
        description: "Osmanlı Beyliği ile Bizans İmparatorluğu arasındaki İLK resmi meydan savaşıdır.",
        impact: "Osmanlı Devleti'nin rüştünü ispatladığı ve tarihçilerce fiili kuruluş kabul edilen zaferdir.",
        question: "Osmanlı Devleti ile Bizans Ordusu arasında yapılan İLK resmi savaş hangisidir?",
        options: [
            "Koyunhisar (Bafeus) Savaşı",
            "Maltepe Savaşı",
            "Sırpsındığı Savaşı",
            "Çirmen Savaşı"
        ],
        correct: 0
    },
    {
        id: 25,
        year: "1326",
        title: "Bursa'nın Fethi",
        location: "Bursa",
        lat: 40.1885,
        lng: 29.0610,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "Orhan Gazi",
        icon: "fa-chess-rook",
        description: "Uzun süren kuşatmanın ardından Bursa fethedildi ve Osmanlı Beyliği'nin ilk büyük başkenti oldu.",
        impact: "Osmanlı devlete dönüşme sürecini hızlandırdı ve Marmara bölgesindeki hakimiyetini pekiştirdi.",
        question: "Orhan Gazi döneminde fethedilerek Osmanlı'nın ilk büyük başkenti yapılan şehir hangisidir?",
        options: [
            "Bursa",
            "Edirne",
            "İznik",
            "İstanbul"
        ],
        correct: 0
    },
    {
        id: 26,
        year: "1329",
        title: "Maltepe (Pelekanon) Savaşı",
        location: "Kocaeli / Gebze",
        lat: 40.8028,
        lng: 29.4308,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "Orhan Gazi",
        icon: "fa-hand-fist",
        description: "Orhan Gazi komutasındaki Osmanlı ordusu, Bizans İmparatoru III. Andronikos'un ordusunu mağlup etti.",
        impact: "Bizans'ın Anadolu topraklarını kurtarma ümitleri tamamen sona erdi.",
        question: "Bizans İmparatoru ile Osmanlı Padişahı'nın bizzat karşı karşıya geldiği ilk meydan savaşı hangisidir?",
        options: [
            "Pelekanon (Maltepe) Savaşı",
            "Koyunhisar Savaşı",
            "Sırpsındığı Savaşı",
            "Niğbolu Savaşı"
        ],
        correct: 0
    },
    {
        id: 27,
        year: "1353",
        title: "Çimpe Kalesi'nin Alınması",
        location: "Çanakkale, Gelibolu",
        lat: 40.4133,
        lng: 26.6852,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "Süleyman Paşa",
        icon: "fa-dungeon",
        description: "Bizans'a yapılan yardım karşılığında Çimpe Kalesi Osmanlı'ya üs olarak verildi.",
        impact: "Osmanlı Devleti Rumeli (Balkanlar) coğrafyasına ilk kez adım atmış oldu.",
        question: "Osmanlı Devleti'nin Rumeli'de elde ettiği ilk toprak parçası ve üs hangisidir?",
        options: [
            "Çimpe Kalesi",
            "Belgrat Kalesi",
            "Selanik",
            "Vidin"
        ],
        correct: 0
    },
    {
        id: 37,
        year: "1361",
        title: "Edirne'nin Fethi",
        location: "Edirne",
        lat: 41.6772,
        lng: 26.5558,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "I. Murad (Hüdavendigar)",
        icon: "fa-archway",
        description: "Sazlıdere Savaşı sonrası Edirne fethedilerek Osmanlı'nın Rumeli'deki yeni başkenti yapıldı.",
        impact: "Bizans'ın Balkanlar ile karayolu bağlantısı tamamen kesildi.",
        question: "Osmanlı Devleti'nin Balkan fihristinde kilit rol oynayan ve başkent yapılan Rumeli şehri hangisidir?",
        options: [
            "Edirne",
            "Manastır",
            "Üsküp",
            "Sofya"
        ],
        correct: 0
    },
    {
        id: 38,
        year: "1389",
        title: "I. Kosova Zaferi",
        location: "Kosova, Priştine",
        lat: 42.6629,
        lng: 21.1655,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "I. Murad / Yıldırım Bayezid",
        icon: "fa-crosshairs",
        description: "Büyük Haçlı ittifakı Kosova Ovası'nda mağlup edildi; I. Murad zafer sonrası şehit düştü.",
        impact: "Balkanlar'da Türk hâkimiyeti kesinleşmeye başladı.",
        question: "Savaş meydanını gezerken bir Sırp yaralı tarafından şehit edilen tek Osmanlı Padişahı kimdir?",
        options: [
            "I. Murad (Hüdavendigar)",
            "Osman Gazi",
            "Yıldırım Bayezid",
            "Fatih Sultan Mehmet"
        ],
        correct: 0
    },
    {
        id: 28,
        year: "1396",
        title: "Niğbolu Zaferi",
        location: "Bulgaristan, Niğbolu",
        lat: 43.7028,
        lng: 24.8967,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Yıldırım Bayezid",
        icon: "fa-shield-cat",
        description: "Yıldırım Bayezid, Avrupa'nın en büyük Haçlı ordusunu Niğbolu Kalesi önlerinde ağır bir yenilgiye uğrattı.",
        impact: "Bulgaristan tamamen Osmanlı topraklarına katıldı ve Abbasi Halifesi Yıldırım Bayezid'e 'Sultan-ı İklim-i Rûm' unvanını verdi.",
        question: "Niğbolu Zaferi sonrası Abbasi Halifesi I. Mütevekkil tarafından Yıldırım Bayezid'e verilen unvan nedir?",
        options: [
            "Sultan-ı İklim-i Rûm",
            "Fatih",
            "Hüdavendigar",
            "Halife-i Müslimin"
        ],
        correct: 0
    },
    {
        id: 39,
        year: "1402",
        title: "Ankara Savaşı",
        location: "Ankara, Çubuk Ovası",
        lat: 40.2389,
        lng: 33.0311,
        era: "osmanli",
        category: "Osmanlı Fetret Dönemi",
        leader: "Yıldırım Bayezid / Timur",
        icon: "fa-skull-crossbones",
        description: "Osmanlı Hükümdarı Yıldırım Bayezid ile Timur İmparatorluğu arasındaki savaşı Timur kazandı.",
        impact: "Osmanlı Devleti 11 yıl sürecek olan Fetret Dönemi'ne girdi ve Anadolu Türk birliği bozuldu.",
        question: "Ankara Savaşı sonrası Osmanlı Devleti'nin taht kavgalarıyla sarsıldığı 11 yıllık döneme ne ad verilir?",
        options: [
            "Fetret Dönemi",
            "Lale Devri",
            "Tanzimat Dönemi",
            "Meşrutiyet Dönemi"
        ],
        correct: 0
    },
    {
        id: 40,
        year: "1448",
        title: "II. Kosova Zaferi",
        location: "Kosova, Priştine",
        lat: 42.6629,
        lng: 21.1655,
        era: "osmanli",
        category: "Osmanlı Kuruluş",
        leader: "II. Murad",
        icon: "fa-shield",
        description: "Sultan II. Murad, Jan Hünyadi komutasındaki Haçlı ordusunu ikinci kez imha etti.",
        impact: "Avrupalıların Türkleri Balkanlar'dan atma ümitleri tamamen bitti ve Balkanlar kesin Türk yurdu oldu.",
        question: "Hangi zafer ile Avrupalıların Türkleri Balkanlar'dan çıkarma ümidi tamamen sona ermiştir?",
        options: [
            "II. Kosova Zaferi",
            "Varna Savaşı",
            "Niğbolu Zaferi",
            "Mohaç Savaşı"
        ],
        correct: 0
    },
    {
        id: 5,
        year: "1453",
        title: "İstanbul'un Fethi",
        location: "İstanbul",
        lat: 41.0082,
        lng: 28.9784,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Fatih Sultan Mehmet",
        icon: "fa-monument",
        description: "53 gün süren kuşatmanın ardından Doğu Roma (Bizans) İmparatorluğu yıkıldı ve İstanbul Osmanlı İmparatorluğu'nun başkenti oldu.",
        impact: "Orta Çağ kapandı, Yeni Çağ başladı. İpek Yolu kontrolü Osmanlı'ya geçti.",
        question: "İstanbul'un Fethi'nin dünya tarihi açısından en büyük küresel sonucu hangisidir?",
        options: [
            "Bizans'ın yıkılmasıyla Orta Çağ'ın kapanıp Yeni Çağ'ın başlaması",
            "I. Dünya Savaşı'nın çıkması",
            "Fransız İhtilali'nin tetiklenmesi",
            "Haçlı Seferleri'nin tamamen durması"
        ],
        correct: 0
    },
    {
        id: 41,
        year: "1473",
        title: "Otlukbeli Savaşı",
        location: "Erzincan, Otlukbeli",
        lat: 39.9833,
        lng: 40.0833,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Fatih Sultan Mehmet / Uzun Hasan",
        icon: "fa-fire-flame-curved",
        description: "Fatih Sultan Mehmet, Akkoyunlu Hükümdarı Uzun Hasan'ı ateşli silah üstünlüğü ile mağlup etti.",
        impact: "Akkoyunlu Devleti yıkılış sürecine girdi, Doğu Anadolu sınırı güvenceye alındı.",
        question: "Fatih Sultan Mehmet'in Doğu Anadolu hâkimiyetini kesinleştirdiği Otlukbeli Savaşı hangi devlete karşı yapılmıştır?",
        options: [
            "Akkoyunlu Devleti",
            "Timur İmparatorluğu",
            "Karakoyunlu Devleti",
            "Memlük Devleti"
        ],
        correct: 0
    },
    {
        id: 29,
        year: "1475",
        title: "Kırım'ın Fethi",
        location: "Kırım, Kefe",
        lat: 45.0354,
        lng: 35.3789,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Gedik Ahmet Paşa / Fatih Sultan Mehmet",
        icon: "fa-compass",
        description: "Gedik Ahmet Paşa komutasındaki Osmanlı donanması Kırım Hanlığı'nı Osmanlı tabiiyetine aldı.",
        impact: "Karadeniz bir 'Türk Gölü' haline geldi ve İpek Yolu'nun kuzey kanadı denetime alındı.",
        question: "Hangi bölgenin fethiyle Karadeniz kesin olarak bir 'Türk Gölü' durumuna gelmiştir?",
        options: [
            "Kırım'ın Fethi",
            "Trabzon'un Fethi",
            "Mora'nın Fethi",
            "Rodos'un Fethi"
        ],
        correct: 0
    },
    {
        id: 42,
        year: "1480",
        title: "Otranto Seferi",
        location: "İtalya, Otranto",
        lat: 40.1456,
        lng: 18.4872,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Gedik Ahmet Paşa",
        icon: "fa-ship",
        description: "Gedik Ahmet Paşa, İtalya çizmesinin güneyindeki Otranto Kalesi'ni fethederek Adriyatik'i geçti.",
        impact: "Osmanlı İmparatorluğu Roma'ya kadar uzanacak Batı Avrupa fethinin ilk köprübaşını kurdu.",
        question: "Fatih Sultan Mehmet döneminde İtalya Yarımadası'na yapılan ve kale fethedilen deniz seferi hangisidir?",
        options: [
            "Otranto Seferi",
            "Rodos Seferi",
            "Girit Seferi",
            "Malta Kuşatması"
        ],
        correct: 0
    },
    {
        id: 6,
        year: "1514",
        title: "Çaldıran Zaferi",
        location: "Van - Doğu Sınırı",
        lat: 39.2941,
        lng: 44.5122,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Yavuz Sultan Selim",
        icon: "fa-fire",
        description: "Yavuz Sultan Selim, Safavi Hükümdarı Şah İsmail'i mağlup ederek Doğu Anadolu güvenliğini sağladı.",
        impact: "Doğu ve Güneydoğu Anadolu Osmanlı topraklarına katıldı.",
        question: "Çaldıran Savaşı ile Osmanlı Devleti hangi bölgedeki egemenliğini pekiştirmiştir?",
        options: [
            "Doğu ve Güneydoğu Anadolu",
            "Balkanlar ve Kırım",
            "Kuzey Afrika",
            "Mora Yarımadası"
        ],
        correct: 0
    },
    {
        id: 43,
        year: "1516",
        title: "Mercidabık Zaferi",
        location: "Suriye, Halep",
        lat: 36.4833,
        lng: 37.2167,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Yavuz Sultan Selim",
        icon: "fa-monument",
        description: "Yavuz Sultan Selim komutasındaki Osmanlı ordusu, Memlük Sultanı Kansu Gavri'yi mağlup etti.",
        impact: "Suriye, Lübnan ve Filistin toprakları Osmanlı hâkimiyetine girdi.",
        question: "Suriye ve Filistin'in Osmanlı topraklarına katılmasını sağlayan zafer hangisidir?",
        options: [
            "Mercidabık Zaferi",
            "Ridaniye Zaferi",
            "Çaldıran Zaferi",
            "Otlukbeli Zaferi"
        ],
        correct: 0
    },
    {
        id: 44,
        year: "1517",
        title: "Ridaniye Zaferi",
        location: "Mısır, Kahire",
        lat: 30.0444,
        lng: 31.2357,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Yavuz Sultan Selim",
        icon: "fa-crown",
        description: "Mukattam Dağı çevrilerek Memlük ordusu tamamen imha edildi ve Memlük Devleti yıkıldı.",
        impact: "Halifelik Osmanlı'ya geçti, Kutsal Emanetler İstanbul'a getirildi, Baharat Yolu kontrol altına alındı.",
        question: "İslam dünyasının dini liderliği olan Halifelik makamı hangi padişah döneminde Osmanlı'ya geçmiştir?",
        options: [
            "Yavuz Sultan Selim",
            "Kanuni Sultan Süleyman",
            "Fatih Sultan Mehmet",
            "II. Abdülhamid"
        ],
        correct: 0
    },
    {
        id: 45,
        year: "1521",
        title: "Belgrad'ın Fethi",
        location: "Sırbistan, Belgrad",
        lat: 44.7866,
        lng: 20.4489,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Kanuni Sultan Süleyman",
        icon: "fa-chess-king",
        description: "Avrupa'nın kilit savunma noktası olan Belgrad Kalesi Osmanlı topraklarına katıldı.",
        impact: "Orta Avrupa fetihleri için stratejik ana kara üssü elde edildi.",
        question: "Kanuni Sultan Süleyman'ın 'Darü'l-Cihad' olarak adlandırdığı ve Orta Avrupa kapısı kabul edilen fetih neresidir?",
        options: [
            "Belgrad",
            "Viyana",
            "Buda",
            "Mohaç"
        ],
        correct: 0
    },
    {
        id: 7,
        year: "1526",
        title: "Mohaç Meydan Muharebesi",
        location: "Macaristan, Mohaç",
        lat: 45.9928,
        lng: 18.6833,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Kanuni Sultan Süleyman",
        icon: "fa-chess-king",
        description: "2 saat gibi kısa bir sürede Macar Krallığı ordusu imha edildi. Macaristan Osmanlı hâkimiyetine girdi.",
        impact: "Osmanlı Devleti Orta Avrupa'da kesin üstünlük sağladı.",
        question: "Mohaç Savaşı'nın askeri tarih açısından dikkat çeken en belirgin özelliği nedir?",
        options: [
            "Sadece 2 saat gibi çok kısa bir sürede büyük zafer kazanılması",
            "Tarihteki ilk deniz savaşı olması",
            "İlk kez nükleer gücün kullanılması",
            "Osmanlı'nın savunma savaşı yapması"
        ],
        correct: 0
    },
    {
        id: 8,
        year: "1538",
        title: "Preveze Deniz Zaferi",
        location: "Yunanistan, Preveze",
        lat: 38.9572,
        lng: 20.7547,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Barbaros Hayreddin Paşa",
        icon: "fa-anchor",
        description: "Barbaros Hayreddin Paşa komutasındaki donanma, Müttefik Haçlı Donanması'nı bozguna uğrattı.",
        impact: "Akdeniz bir 'Türk Gölü' haline geldi.",
        question: "Preveze Deniz Zaferi'nin sonuçlarından biri aşağıdakilerden hangisidir?",
        options: [
            "Akdeniz'de Türk deniz hâkimiyetinin kesinleşmesi",
            "Karadeniz'in ticarete kapatılması",
            "Atlas Okyanusu'nun tamamen ele geçirilmesi",
            "Süveyş Kanalı'nın açılması"
        ],
        correct: 0
    },
    {
        id: 30,
        year: "1555",
        title: "Amasya Antlaşması",
        location: "Amasya",
        lat: 40.6533,
        lng: 35.8333,
        era: "osmanli",
        category: "Osmanlı Diplomasisi",
        leader: "Kanuni Sultan Süleyman",
        icon: "fa-file-signature",
        description: "Osmanlı İmparatorluğu ile Safevi Devleti arasında tarihteki ilk resmi barış antlaşması imzalandı.",
        impact: "Doğu Anadolu, Bağdat ve Tebriz sınırları uzun süre güvenceye alındı.",
        question: "Osmanlı Devleti ile Safevi (İran) Devleti arasında imzalanan İLK resmi dostluk ve barış antlaşması hangisidir?",
        options: [
            "Amasya Antlaşması",
            "Kasr-ı Şirin Antlaşması",
            "Ferhat Paşa Antlaşması",
            "Nasuh Paşa Antlaşması"
        ],
        correct: 0
    },
    {
        id: 46,
        year: "1571",
        title: "Kıbrıs'ın Fethi & İnebahtı",
        location: "Kıbrıs / Yunanistan, İnebahtı",
        lat: 35.1856,
        lng: 33.3823,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "Lala Mustafa Paşa / II. Selim",
        icon: "fa-water",
        description: "Doğu Akdeniz güvenliği için Kıbrıs fethedildi. Ardından Haçlı donanması İnebahtı'da Osmanlı donanmasını yaktı.",
        impact: "Sokullu Mehmed Paşa tarihi cevabını verdi: 'Biz Kıbrıs'ı almakla sizin kolunuzu kestik, siz donanmamızı yakmakla sakalımızı tıraş ettiniz.'",
        question: "İnebahtı'da donanması yakılan Osmanlı'nın Sadrazamı Sokullu Mehmed Paşa'nın meşhur benzetmesi hangisidir?",
        options: [
            "Kesilen sakal daha gür çıkar, ama kesilen kol yerine gelmez",
            "Geldikleri gibi giderler",
            "Cihan devleti yıkılmaz",
            "Akdeniz bizim gölümüzdür"
        ],
        correct: 0
    },
    {
        id: 47,
        year: "1590",
        title: "Ferhat Paşa Antlaşması",
        location: "İstanbul",
        lat: 41.0082,
        lng: 28.9784,
        era: "osmanli",
        category: "Osmanlı Yükseliş",
        leader: "III. Murad",
        icon: "fa-map-location-dot",
        description: "İran ile yapılan savaşlar sonunda Tebriz, Karabağ, Dağıstan ve Gürcistan Osmanlı'ya geçti.",
        impact: "Osmanlı Devleti DOĞU'DA EN GENİŞ SINIRLARINA ulaştı (Hazar Denizi'ne çıkıldı).",
        question: "Osmanlı Devleti Doğu'da EN GENİŞ SINIRLARINA hangi antlaşma ile ulaşmıştır?",
        options: [
            "Ferhat Paşa Antlaşması",
            "Kasr-ı Şirin Antlaşması",
            "Amasya Antlaşması",
            "Bucaş Antlaşması"
        ],
        correct: 0
    },
    {
        id: 48,
        year: "1639",
        title: "Kasr-ı Şirin Antlaşması",
        location: "İran / Irak Sınırı",
        lat: 34.5167,
        lng: 45.5167,
        era: "osmanli",
        category: "Osmanlı Duraklama",
        leader: "IV. Murad (Bağdat Fatihi)",
        icon: "fa-scroll",
        description: "IV. Murad'ın Bağdat Seferi sonrasında Osmanlı-İran arasında barış sağlandı.",
        impact: "Bugünkü Türkiye-İran sınırı büyük ölçüde çizildi.",
        question: "Bugünkü Türkiye-İran sınırının temellerini atan tarihi antlaşma hangisidir?",
        options: [
            "Kasr-ı Şirin Antlaşması",
            "Ferhat Paşa Antlaşması",
            "Zitvatorok Antlaşması",
            "Karlofça Antlaşması"
        ],
        correct: 0
    },
    {
        id: 31,
        year: "1683",
        title: "II. Viyana Kuşatması",
        location: "Avusturya, Viyana",
        lat: 48.2082,
        lng: 16.3738,
        era: "osmanli",
        category: "Osmanlı Duraklama",
        leader: "Merzifonlu Kara Mustafa Paşa",
        icon: "fa-shield-halved",
        description: "Osmanlı ordusu Viyana'yı kuşattı ancak Lehistan ordusunun yardıma gelmesiyle geri çekilmek zorunda kaldı.",
        impact: "Türklerin Avrupa'daki ilerleyişi durdu ve Osmanlı gerileme dönemine girdi.",
        question: "Türklerin Avrupa'daki ilerleyişinin durmasına ve Sakarya Meydan Muharebesi'ne kadar sürecek olan savunma dönemine girmesine yol açan olay hangisidir?",
        options: [
            "II. Viyana Kuşatması",
            "I. Viyana Kuşatması",
            "Zenta Savaşı",
            "Plaşova Savaşı"
        ],
        correct: 0
    },
    {
        id: 49,
        year: "1699",
        title: "Karlofça Antlaşması",
        location: "Sırbistan, Sremski Karlovci",
        lat: 45.2028,
        lng: 19.9344,
        era: "osmanli",
        category: "Osmanlı Gerileme",
        leader: "II. Mustafa",
        icon: "fa-file-contract",
        description: "Kutsal İttifak devletleriyle yapılan uzun savaşlar sonrasında imzalandı.",
        impact: "Osmanlı Batı'da ilk kez büyük çapta toprak kaybetti ve Gerileme Dönemi resmen başladı.",
        question: "Osmanlı Devleti'nin Batı'da ilk kez devasa miktarda toprak kaybettiği ve Gerileme Dönemi'ne girdiği antlaşma hangisidir?",
        options: [
            "Karlofça Antlaşması",
            "Pasarofça Antlaşması",
            "Küçük Kaynarca Antlaşması",
            "Yaş Antlaşması"
        ],
        correct: 0
    },
    {
        id: 50,
        year: "1718",
        title: "Lale Devri & İlk Matbaa",
        location: "İstanbul",
        lat: 41.0082,
        lng: 28.9784,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "III. Ahmed / İbrahim Müteferrika",
        icon: "fa-book-open",
        description: "Pasarofça Antlaşması sonrası başlayan barış döneminde Batı tarzı yenilikler yapıldı.",
        impact: "İbrahim Müteferrika ve Said Efendi tarafından İLK TÜRK MATBAASI kuruldu.",
        question: "Lale Devri'nde Osmanlı ülkesine getirilen ve İbrahim Müteferrika tarafından kurulan en önemli teknik yenilik nedir?",
        options: [
            "İlk Türk Matbaası",
            "Telgraf hattı",
            "Demiryolu ağı",
            "Buharlı gemi"
        ],
        correct: 0
    },
    {
        id: 51,
        year: "1774",
        title: "Küçük Kaynarca Antlaşması",
        location: "Bulgaristan, Kaynarca",
        lat: 43.9933,
        lng: 27.5022,
        era: "osmanli",
        category: "Osmanlı Gerileme",
        leader: "I. Abdülhamid",
        icon: "fa-land-mine-on",
        description: "Rusya ile yapılan ağır savaş sonrasında imzalandı.",
        impact: "Halkı Müslüman ve Türk olan Kırım İLK KEZ Osmanlı'dan koptu ve bağımsız oldu.",
        question: "Halkı Türk ve Müslüman olan Kırım'ın Osmanlı hâkimiyetinden çıkmasına yol açan antlaşma hangisidir?",
        options: [
            "Küçük Kaynarca Antlaşması",
            "Karlofça Antlaşması",
            "Aynalıkavak Tenkihnamesi",
            "Yaş Antlaşması"
        ],
        correct: 0
    },
    {
        id: 52,
        year: "1808",
        title: "Sened-i İttifak",
        location: "İstanbul",
        lat: 41.0082,
        lng: 28.9784,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "II. Mahmud / Alemdar Mustafa Paşa",
        icon: "fa-handshake-angle",
        description: "Padişah II. Mahmud ile taşradaki güçlü ayanlar arasında imzalanan sözleşmedir.",
        impact: "Padişahın yetkileri Türk tarihinde İLK KEZ kendi rızasıyla sınırlandırılmıştır.",
        question: "Türk tarihinde Padişahın yetkilerini kısıtlayan İLK belge aşağıdakilerden hangisidir?",
        options: [
            "Sened-i İttifak",
            "Tanzimat Fermanı",
            "Islahat Fermanı",
            "Kanun-ı Esasî"
        ],
        correct: 0
    },
    {
        id: 53,
        year: "1826",
        title: "Vaka-i Hayriye (Yeniçeri Ocağı'nın Kaldırılması)",
        location: "İstanbul, Etmeydanı",
        lat: 41.0125,
        lng: 28.9500,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "II. Mahmud",
        icon: "fa-burst",
        description: "Bozulan ve yeniliklere direnen Yeniçeri Ocağı II. Mahmud tarafından topa tutularak ilga edildi.",
        impact: "Yerine modern 'Asakir-i Mansure-i Muhammediye' ordusu kuruldu ve ıslahatların önü açıldı.",
        question: "II. Mahmud döneminde Yeniçeri Ocağı'nın kaldırılması olayına tarihte ne ad verilir?",
        options: [
            "Vaka-i Hayriye (Hayırlı Olay)",
            "Vaka-i Vakvakiye",
            "31 Mart Vakası",
            "Çınar Vakası"
        ],
        correct: 0
    },
    {
        id: 9,
        year: "1839",
        title: "Tanzimat Fermanı",
        location: "İstanbul, Gülhane Parkı",
        lat: 41.0131,
        lng: 28.9814,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "Sultan Abdülmecid / Mustafa Reşit Paşa",
        icon: "fa-scroll",
        description: "Gülhane Hatt-ı Hümayunu ile can, mal güvenliği ve kanun üstünlüğü ilan edildi.",
        impact: "Osmanlı'da anayasal düzene giden ilk resmi adım atıldı.",
        question: "Tanzimat Fermanı'nın getirdiği en temel yenilik nedir?",
        options: [
            "Padişahın yetkilerini kanun gücü karşısında sınırlandırması",
            "Cumhuriyet rejimi ilan edilmesi",
            "Halifeliğin kaldırılması",
            "Yeniçeri Ocağı'nın kurulması"
        ],
        correct: 0
    },
    {
        id: 54,
        year: "1856",
        title: "Kırım Savaşı & Islahat Fermanı",
        location: "Kırım / İstanbul",
        lat: 44.9521,
        lng: 34.1024,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "Sultan Abdülmecid",
        icon: "fa-building-ngo",
        description: "Rusya'ya karşı İngiltere ve Fransa ile müttefik olunarak Kırım Savaşı kazanıldı.",
        impact: "Osmanlı ilk kez Dış Borç aldı (1854) ve Paris Antlaşması ile bir 'Avrupa Devleti' sayıldı.",
        question: "Osmanlı Devleti tarihindeki İLK dış borcu hangi savaş sırasında almıştır?",
        options: [
            "Kırım Savaşı",
            "93 Harbi",
            "Trablusgarp Savaşı",
            "I. Dünya Savaşı"
        ],
        correct: 0
    },
    {
        id: 32,
        year: "1876",
        title: "I. Meşrutiyet & Kanun-ı Esasî",
        location: "İstanbul",
        lat: 41.0082,
        lng: 28.9784,
        era: "osmanli",
        category: "Osmanlı Yenileşme",
        leader: "II. Abdülhamid / Mithat Paşa",
        icon: "fa-scale-balanced",
        description: "Türk tarihinin İLK yazılı anayasası ilan edildi ve Meclis-i Mebusan açıldı.",
        impact: "Halk ilk kez seçme-seçilme hakkı elde ederek yönetime ortak oldu.",
        question: "Türk tarihinin İLK yazılı anayasası aşağıdakilerden hangisidir?",
        options: [
            "Kanun-ı Esasî",
            "Teşkilat-ı Esasiye",
            "1924 Anayasası",
            "Sened-i İttifak"
        ],
        correct: 0
    },
    {
        id: 55,
        year: "1878",
        title: "93 Harbi & Berlin Antlaşması",
        location: "Erzurum, Aziziye / Tabyalar",
        lat: 39.9056,
        lng: 41.2728,
        era: "osmanli",
        category: "Osmanlı Yıkılış",
        leader: "Gazi Osman Paşa / Nene Hatun",
        icon: "fa-person-falling-burst",
        description: "Osmanlı-Rus Savaşı'nda Plevne ve Erzurum'da efsanevi direnişler gösterildi.",
        impact: "Sırbistan, Karadağ ve Romanya tamamen bağımsız oldu; Kars, Ardahan, Batum Rusya'ya geçti.",
        question: "93 Harbi esnasında Plevne Savunması ile destan yazan efsanevi Osmanlı komutanı kimdir?",
        options: [
            "Gazi Osman Paşa",
            "Ahmet Muhtar Paşa",
            "Fevzi Çakmak",
            "Cevat Paşa"
        ],
        correct: 0
    },
    {
        id: 33,
        year: "1911",
        title: "Trablusgarp Savaşı",
        location: "Libya, Derne / Tobruk",
        lat: 32.7670,
        lng: 22.6367,
        era: "milli",
        category: "Yakın Çağ",
        leader: "Mustafa Kemal Atatürk / Enver Paşa",
        icon: "fa-gun",
        description: "Gönüllü Subay olarak Libya'ya geçen Mustafa Kemal ve arkadaşları yerli halkı İtalyanlara karşı örgütledi.",
        impact: "Mustafa Kemal Paşa'nın ilk askeri başarısını kazandığı savaş oldu.",
        question: "Mustafa Kemal Paşa'nın emperyalizme karşı bizzat örgütlediği ve ilk askeri başarısını elde ettiği savaş hangisidir?",
        options: [
            "Trablusgarp Savaşı",
            "Balkan Savaşları",
            "Çanakkale Savaşı",
            "I. Dünya Savaşı"
        ],
        correct: 0
    },
    {
        id: 56,
        year: "1912",
        title: "Balkan Savaşları",
        location: "Edirne / Çatalca",
        lat: 41.6772,
        lng: 26.5558,
        era: "osmanli",
        category: "Osmanlı Yıkılış",
        leader: "Enver Paşa / Şükrü Paşa",
        icon: "fa-person-military-pointing",
        description: "Balkan devletlerinin ittifakıyla başlayan savaşta Rumeli toprakları büyük oranda kaybedildi.",
        impact: "Balkanlar'dan Anadolu'ya devasa Türk göç dalgası yaşandı, Edirne II. Balkan Savaşı'nda geri alındı.",
        question: "II. Balkan Savaşı esnasında Edirne'yi düşman işgalinden kurtararak geri alan komutan kimdir?",
        options: [
            "Enver Paşa",
            "Mustafa Kemal Paşa",
            "Rauf Orbay",
            "Kâzım Karabekir"
        ],
        correct: 0
    },
    {
        id: 10,
        year: "1915",
        title: "Çanakkale Zaferi",
        location: "Çanakkale, Gelibolu",
        lat: 40.1467,
        lng: 26.4086,
        era: "milli",
        category: "I. Dünya Savaşı",
        leader: "Mustafa Kemal Atatürk / Cevat Paşa",
        icon: "fa-person-military-rifle",
        description: "İtilaf Devletleri donanması Çanakkale Boğazı'nda tarihi bir direnişle durduruldu.",
        impact: "I. Dünya Savaşı uzadı, Çarlık Rusya'sı çöktü.",
        question: "Çanakkale Savaşları'nın dünya siyasetine en büyük etkisi nedir?",
        options: [
            "İtilaf devletlerinin Rusya'ya yardım götürememesi ve Çarlık Rusya'sının çökmesi",
            "İkinci Dünya Savaşı'nın başlaması",
            "Osmanlı'nın savaşı tek başına kazanması",
            "Süveyş Kanalı'nın kapatılması"
        ],
        correct: 0
    },
    {
        id: 57,
        year: "1916",
        title: "Kut'ül Amâre Zaferi",
        location: "Irak, Kut",
        lat: 32.5126,
        lng: 45.8183,
        era: "osmanli",
        category: "I. Dünya Savaşı",
        leader: "Halil (Kut) Paşa",
        icon: "fa-trophy",
        description: "Osmanlı ordusu Irak Cephesi'nde General Townshend komutasındaki İngiliz ordusunu esir aldı.",
        impact: "I. Dünya Savaşı'nda Çanakkale'den sonra kazanılan en büyük ikinci kara zaferidir.",
        question: "I. Dünya Savaşı Irak Cephesi'nde koskoca İngiliz tümenini komutanlarıyla birlikte esir aldığımız zafer hangisidir?",
        options: [
            "Kut'ül Amâre Zaferi",
            "Seddülbahir Zaferi",
            "Kafkas Zaferi",
            "Gazne Zaferi"
        ],
        correct: 0
    },
    {
        id: 58,
        year: "1918",
        title: "Mondros Mütarekesi",
        location: "Yunanistan, Limni / Mondros",
        lat: 39.8753,
        lng: 25.2319,
        era: "osmanli",
        category: "Osmanlı Yıkılış",
        leader: "Rauf Orbay",
        icon: "fa-file-excel",
        description: "Osmanlı Devleti I. Dünya Savaşı'ndan ağır şartlar içeren ateşkes antlaşmasıyla çekildi.",
        impact: "7. ve 24. maddeler gerekçe gösterilerek Anadolu yer yer işgal edilmeye başlandı.",
        question: "İtilaf Devletleri'ne Anadolu'yu işgal etme hakkı tanıyan Mondros Ateşkesi'nin en tehlikeli maddesi hangisidir?",
        options: [
            "7. Maddesi (Güvenliği tehdit eden stratejik noktaların işgali)",
            "1. Maddesi",
            "10. Maddesi",
            "50. Maddesi"
        ],
        correct: 0
    },

    // ================= MİLLİ MÜCADELE VE TÜRKİYE CUMHURİYETİ =================
    {
        id: 11,
        year: "1919",
        title: "19 Mayıs - Samsun'a Çıkış",
        location: "Samsun",
        lat: 41.2867,
        lng: 36.3300,
        era: "milli",
        category: "Milli Mücadele",
        leader: "Mustafa Kemal Atatürk",
        icon: "fa-flag",
        description: "Mustafa Kemal Paşa, Samsun'a çıkarak Milli Mücadele'nin meşalesini yaktı.",
        impact: "Türk Kurtuluş Savaşı fiilen başladı.",
        question: "Mustafa Kemal Paşa'nın Samsun'a çıkışının temel amacı nedir?",
        options: [
            "Milli bilinci uyandırmak ve bağımsızlık mücadelesini örgütlemek",
            "İngiliz birlikleriyle barış imzalamak",
            "Osmanlı Meclisi'ni kapatmak",
            "Saltanatı derhal kaldırmak"
        ],
        correct: 0
    },
    {
        id: 12,
        year: "1920",
        title: "TBMM'nin Açılışı",
        location: "Ankara",
        lat: 39.9412,
        lng: 32.8543,
        era: "milli",
        category: "Milli Mücadele",
        leader: "Mustafa Kemal Atatürk",
        icon: "fa-building-columns",
        description: "'Egemenlik kayıtsız şartsız milletindir' ilkesiyle Ankara'da TBMM açıldı.",
        impact: "Milli irade hakim kılındı ve Yeni Türk Devleti kuruldu.",
        question: "23 Nisan 1920'de TBMM'nin açılması neyin açık göstergesidir?",
        options: [
            "Millet iradesine dayalı yeni bir devletin kurulduğunun",
            "Lozan Antlaşması'nın kabul edildiğinin",
            "Osmanlı Hükümeti ile birleşildiğinin",
            "Monarşi sisteminin güçlendiğinin"
        ],
        correct: 0
    },
    {
        id: 13,
        year: "1922",
        title: "Büyük Taarruz ve Zafer",
        location: "Afyonkarahisar / Kütahya",
        lat: 38.7569,
        lng: 30.5387,
        era: "milli",
        category: "Milli Mücadele",
        leader: "Başkomutan Mustafa Kemal Atatürk",
        icon: "fa-horse",
        description: "Başkomutanlık Meydan Muharebesi ile işgalci ordular tamamen mağlup edilerek Anadolu temizlendi.",
        impact: "Kurtuluş Savaşı'nın askeri safhası zaferle tamamlandı.",
        question: "Büyük Taarruz'un zaferle sonuçlanmasının ardından Mustafa Kemal Paşa'nın tarihi emri nedir?",
        options: [
            "'Ordular, ilk hedefiniz Akdeniz'dir. İleri!'",
            "'Hattı müdafaa yoktur, sathı müdafaa vardır.'",
            "'Geldikleri gibi giderler.'",
            "'Yurtta sulh, cihanda sulh!'"
        ],
        correct: 0
    },
    {
        id: 14,
        year: "1923",
        title: "Cumhuriyetin İlanı",
        location: "Ankara, TBMM",
        lat: 39.9380,
        lng: 32.8510,
        era: "cumhuriyet",
        category: "Türkiye Cumhuriyeti",
        leader: "Mustafa Kemal Atatürk",
        icon: "fa-landmark",
        description: "TBMM'de yapılan anayasa değişikliği ile Türkiye Devleti'nin yönetim şekli Cumhuriyet olarak ilan edildi.",
        impact: "Modern Türkiye Cumhuriyeti kuruldu.",
        question: "29 Ekim 1923'te Cumhuriyetin ilanı ile devlet rejiminin adı ne olmuştur?",
        options: [
            "Türkiye Cumhuriyeti",
            "Osmanlı Konfederasyonu",
            "Anadolu Birleşik Devletleri",
            "Türk Federasyonu"
        ],
        correct: 0
    },
    {
        id: 15,
        year: "1928",
        title: "Harf Devrimi",
        location: "Ankara / İstanbul",
        lat: 39.9208,
        lng: 32.8541,
        era: "cumhuriyet",
        category: "Cumhuriyet Devrimleri",
        leader: "Mustafa Kemal Atatürk",
        icon: "fa-font",
        description: "Arap harfleri yerine Yeni Türk Harfleri kabul edildi. Okuma-yazma seferberliği başlatıldı.",
        impact: "Okur-yazar oranı hızla arttı, eğitimde modernleşme sağlandı.",
        question: "Harf Devrimi'nin temel toplumsal amacı nedir?",
        options: [
            "Okuma-yazmayı kolaylaştırmak ve okur-yazar oranını hızla artırmak",
            "Yabancı dillerin öğrenilmesini yasaklamak",
            "Eski kütüphaneleri kapatmak",
            "Sadece batı ülkeleriyle ticaret yapmak"
        ],
        correct: 0
    },
    {
        id: 16,
        year: "1939",
        title: "Hatay'ın Anavatana Katılması",
        location: "Hatay, Antakya",
        lat: 36.2023,
        lng: 36.1603,
        era: "cumhuriyet",
        category: "Türkiye Cumhuriyeti",
        leader: "Tayfur Sökmen / İsmet İnönü",
        icon: "fa-handshake",
        description: "Hatay Millet Meclisi'nin oy birliğiyle aldığı karar sonucu Hatay Türkiye Cumhuriyeti'ne katıldı.",
        impact: "Misak-ı Milli sınırları doğrultusunda büyük bir diplomatik zafer kazanıldı.",
        question: "Hatay'ın 1939'da Türkiye'ye katılma kararı hangi meclis tarafından alınmıştır?",
        options: [
            "Hatay Bağımsız Devlet Meclisi",
            "Fransız Senatosu",
            "Milletler Cemiyeti Meclisi",
            "Suriye Parlamentosu"
        ],
        correct: 0
    },
    {
        id: 17,
        year: "1952",
        title: "Türkiye'nin NATO'ya Katılımı",
        location: "Ankara",
        lat: 39.9042,
        lng: 32.8663,
        era: "cumhuriyet",
        category: "Soğuk Savaş Dönemi",
        leader: "Adnan Menderes / Celal Bayar",
        icon: "fa-globe",
        description: "Türkiye resmen Kuzey Atlantik Antlaşması Örgütü'ne (NATO) üye oldu.",
        impact: "Türkiye Batı savunma bloğunun ana aktörlerinden biri oldu.",
        question: "Türkiye hangi yıl NATO'ya tam üye olmuştur?",
        options: [
            "1952",
            "1923",
            "1974",
            "1990"
        ],
        correct: 0
    },
    {
        id: 18,
        year: "1974",
        title: "Kıbrıs Barış Harekâtı",
        location: "Kıbrıs, Lefkoşa / Girne",
        lat: 35.1856,
        lng: 33.3823,
        era: "cumhuriyet",
        category: "Türkiye Cumhuriyeti",
        leader: "Bülent Ecevit / Necmettin Erbakan",
        icon: "fa-plane-departure",
        description: "Türk Silahlı Kuvvetleri, Kıbrıs'taki Türklerin can güvenliğini sağlamak için askeri harekât başlattı.",
        impact: "Kıbrıs Türklerinin güvenliği sağlandı, ardından KKTC kuruldu.",
        question: "1974 Kıbrıs Barış Harekâtı'nın parolası aşağıdakilerden hangisidir?",
        options: [
            "'Ayşe Tatile Çıksın'",
            "'Akdeniz Bizimdir'",
            "'Hedef Akdeniz'",
            "'Şafak Vakti'"
        ],
        correct: 0
    },
    {
        id: 19,
        year: "1992",
        title: "Güneydoğu Anadolu Projesi (GAP)",
        location: "Şanlıurfa, Atatürk Barajı",
        lat: 37.4750,
        lng: 38.3128,
        era: "cumhuriyet",
        category: "Modern Türkiye",
        leader: "Süleyman Demirel",
        icon: "fa-water",
        description: "Devasa bölgesel kalkınma projesi olan GAP kapsamında Atatürk Barajı devreye girdi.",
        impact: "Güneydoğu Anadolu'da tarım ve enerji üretiminde dev hamle yapıldı.",
        question: "GAP kapsamındaki en büyük hidroelektrik santralı ve baraj hangisidir?",
        options: [
            "Atatürk Barajı",
            "Keban Barajı",
            "Ilısu Barajı",
            "Hirfanlı Barajı"
        ],
        correct: 0
    },
    {
        id: 20,
        year: "2013",
        title: "Marmaray'ın Açılışı",
        location: "İstanbul, Boğaz Tüp Geçişi",
        lat: 41.0115,
        lng: 28.9833,
        era: "cumhuriyet",
        category: "Modern Türkiye",
        leader: "Recep Tayyip Erdoğan",
        icon: "fa-train",
        description: "Asya ile Avrupa kıtalarını deniz altından demiryoluyla bağlayan Marmaray hizmete açıldı.",
        impact: "Kıtalararası kesintisiz demiryolu ulaşımı sağlandı.",
        question: "Marmaray projesinin coğrafi önemi nedir?",
        options: [
            "Asya ve Avrupa kıtalarını deniz altından tüp geçit ile birleştirmesi",
            "Dünyanın en uzun karayolu köprüsü olması",
            "Sadece yük trenleri için tasarlanmış olması",
            "Karadeniz ile Ege'yi bağlaması"
        ],
        correct: 0
    },
    {
        id: 34,
        year: "2012",
        title: "GÖKTÜRK-2 Uydusu Fırlatıldı",
        location: "Ankara, TÜBİTAK UZAY",
        lat: 39.8917,
        lng: 32.7833,
        era: "cumhuriyet",
        category: "Uzay Çağı",
        leader: "TÜBİTAK UZAY / TUSAŞ",
        icon: "fa-satellite",
        description: "Türkiye'nin yüksek çözünürlüklü ilk yerli keşif uydusu GÖKTÜRK-2 uzaya fırlatıldı.",
        impact: "Türkiye savunma ve coğrafi bilgi teknolojilerinde kendi gözlem uydusuna sahip oldu.",
        question: "Türkiye'nin özgün olarak geliştirdiği ilk yüksek çözünürlüklü milli keşif uydusu hangisidir?",
        options: [
            "GÖKTÜRK-2",
            "TÜRKSAT 1A",
            "RASAT",
            "BİLSAT"
        ],
        correct: 0
    },
    {
        id: 21,
        year: "2020",
        title: "Karadeniz'de Doğal Gaz Keşfi",
        location: "Zonguldak, Sakarya Gaz Sahası",
        lat: 41.8000,
        lng: 31.2000,
        era: "cumhuriyet",
        category: "Enerji Bağımsızlığı",
        leader: "Fatih Sondaj Gemisi",
        icon: "fa-bolt",
        description: "Fatih Sondaj Gemisi Karadeniz Sakarya Gaz Sahasında devasa doğal gaz rezervi keşfetti.",
        impact: "Türkiye enerji bağımsızlığında yerli üretime geçiş sağladı.",
        question: "Karadeniz'deki gaz keşfini gerçekleştiren arama gemisi hangisidir?",
        options: [
            "Fatih Sondaj Gemisi",
            "Oruç Reis",
            "TCG Anadolu",
            "Barbaros Hayreddin"
        ],
        correct: 0
    },
    {
        id: 22,
        year: "2022",
        title: "TOGG Seri Üretimi",
        location: "Bursa, Gemlik Kampüsü",
        lat: 40.4302,
        lng: 29.1553,
        era: "cumhuriyet",
        category: "Milli Teknoloji Hamlesi",
        leader: "Türkiye'nin Otomobili Girişim Grubu",
        icon: "fa-car",
        description: "Türkiye'nin ilk yerli elektrikli otomobili TOGG'un Gemlik Kampüsü açılarak seri üretime başlandı.",
        impact: "Türkiye küresel otomotiv piyasasında yerli elektrikli aracıyla yerini aldı.",
        question: "TOGG Seri Üretim Kampüsü hangi ilimizde yer almaktadır?",
        options: [
            "Bursa (Gemlik)",
            "Kocaeli (Gebze)",
            "İzmir (Torbalı)",
            "Eskişehir"
        ],
        correct: 0
    },
    {
        id: 23,
        year: "2023",
        title: "TCG Anadolu Hizmete Girdi",
        location: "Tuzla / İstanbul",
        lat: 40.8350,
        lng: 29.2800,
        era: "cumhuriyet",
        category: "Savunma Sanayii",
        leader: "Deniz Kuvvetleri Komutanlığı",
        icon: "fa-ship",
        description: "Dünyanın ilk SİHA gemisi ve Türkiye'nin en büyük askeri gemisi TCG Anadolu teslim edildi.",
        impact: "Mavi Vatan savunmasında stratejik üstünlük sağlandı.",
        question: "TCG Anadolu gemisinin askeri denizcilik tarihindeki önemi nedir?",
        options: [
            "Dünyanın ilk SİHA konuşlandırılabilen amfibi hücum gemisi olması",
            "Sadece denizaltı tespiti yapması",
            "Yolcu taşıma amacıyla inşa edilmiş olması",
            "Sadece tatbikatlarda kullanılması"
        ],
        correct: 0
    },
    {
        id: 24,
        year: "2024",
        title: "KAAN Milli Muharip Uçak İlk Uçuşu",
        location: "Ankara, TUSAŞ Mürted",
        lat: 40.1389,
        lng: 32.5603,
        era: "cumhuriyet",
        category: "Milli Teknoloji Hamlesi",
        leader: "TUSAŞ / Türk Havacılık Sanayii",
        icon: "fa-jet-fighter",
        description: "Türkiye'nin 5. nesil milli muharip uçağı KAAN, ilk gökyüzü test uçuşunu başarıyla tamamladı.",
        impact: "Türkiye dünyada 5. nesil savaş uçağı üretebilen sayılı ülkeler arasına girdi.",
        question: "İlk uçuşunu gerçekleştiren Türkiye'nin 5. nesil milli muharip uçağının adı nedir?",
        options: [
            "KAAN",
            "HÜRJET",
            "ANKA-3",
            "KIZILELMA"
        ],
        correct: 0
    },
    {
        id: 35,
        year: "2024",
        title: "Yusuf Dikeç Olimpos Başarısı",
        location: "Fransa, Paris",
        lat: 48.8566,
        lng: 2.3522,
        era: "cumhuriyet",
        category: "Spor & Kültür",
        leader: "Yusuf Dikeç & Şevval İlayda Tarhan",
        icon: "fa-bullseye",
        description: "Paris 2024 Olimpiyatları'nda 10m Havalı Tabanca karma takımında gümüş madalya kazanıldı.",
        impact: "Türkiye atıcılık branşında olimpiyat tarihinin ilk madalyasını kazandı.",
        question: "Paris 2024 Olimpiyatları'nda ekipmansız duruşuyla dünyada gündem olan Türk milli atıcı kimdir?",
        options: [
            "Yusuf Dikeç",
            "Mete Gazoz",
            "Rıza Kayaalp",
            "Taha Akgül"
        ],
        correct: 0
    }
];

let map;
let markers = [];
let currentIndex = 0;
let filteredEvents = [...historicalEvents];
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

window.addEventListener('load', function () {
    try {
        initMap();
        renderMarkers();
        selectEvent(0);

        requestAnimationFrame(() => map.invalidateSize(true));
        setTimeout(() => map.invalidateSize(true), 300);
        window.addEventListener('resize', () => map.invalidateSize());
    } catch (error) {
        console.error('Tarihte Yolculuk başlatılamadı:', error);
    }
});

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        throw new Error('HTML içinde id="map" olan harita alanı bulunamadı.');
    }
    if (typeof L === 'undefined') {
        throw new Error('Leaflet yüklenmedi. İnternet bağlantısını ve Leaflet bağlantılarını kontrol et.');
    }
    if (mapElement._leaflet_id) {
        mapElement._leaflet_id = null;
    }

    map = L.map(mapElement, {
        center: [39.0, 35.2],
        zoom: 6,
        zoomControl: false
    });

    // ESRI WORLD STREET MAP (Renkli, canlı, sokak ve fiziki detaylı harita katmanı)
    const tileLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, TomTom, and GIS User Community',
            maxZoom: 19
        }
    ).addTo(map);

    tileLayer.on('tileerror', function (event) {
        console.error('Harita döşemesi yüklenemedi:', event.coords);
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);
}

function renderMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    filteredEvents.forEach((ev, idx) => {
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="custom-marker ${idx === currentIndex ? 'custom-marker-active' : ''}" id="marker-${ev.id}">
                    <i class="fa-solid ${ev.icon} text-xs"></i>
                   </div>`,
            iconSize: [38, 38],
            iconAnchor: [19, 19]
        });

        const marker = L.marker([ev.lat, ev.lng], { icon: customIcon }).addTo(map);

        marker.on('click', () => {
            const realIndex = filteredEvents.findIndex(item => item.id === ev.id);
            selectEvent(realIndex);
        });

        markers.push(marker);
    });
}

function selectEvent(index) {
    if (index < 0 || index >= filteredEvents.length) return;
    
    currentIndex = index;
    const ev = filteredEvents[currentIndex];

    map.flyTo([ev.lat, ev.lng], 7, {
        duration: 1.2,
        easeLinearity: 0.25
    });

    document.querySelectorAll('.custom-marker').forEach(el => el.classList.remove('custom-marker-active'));
    const activeMarker = document.getElementById(`marker-${ev.id}`);
    if (activeMarker) activeMarker.classList.add('custom-marker-active');

    document.getElementById('panel-badge').innerText = ev.year;
    document.getElementById('panel-category').innerText = ev.category;
    document.getElementById('event-title').innerText = ev.title;
    document.getElementById('event-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${ev.location}`;
    document.getElementById('event-icon').className = `fa-solid ${ev.icon}`;
    document.getElementById('event-leader').innerText = ev.leader;
    document.getElementById('event-description').innerText = ev.description;
    document.getElementById('event-impact').innerText = ev.impact;

    document.getElementById('event-counter').innerText = `${currentIndex + 1} / ${filteredEvents.length}`;

    setupQuiz(ev);
    switchTab('info');

    const panel = document.getElementById('event-panel');
    panel.classList.remove('translate-y-full', 'opacity-0');
}

function switchTab(tabName) {
    const infoBtn = document.getElementById('tab-info-btn');
    const quizBtn = document.getElementById('tab-quiz-btn');
    const infoContent = document.getElementById('tab-info-content');
    const quizContent = document.getElementById('tab-quiz-content');

    if (tabName === 'info') {
        infoBtn.className = "flex-1 py-2.5 text-xs font-semibold text-gold-400 border-b-2 border-gold-400 transition flex items-center justify-center gap-2";
        quizBtn.className = "flex-1 py-2.5 text-xs font-semibold text-gray-400 hover:text-gray-200 border-b-2 border-transparent transition flex items-center justify-center gap-2";
        infoContent.classList.remove('hidden');
        quizContent.classList.add('hidden');
    } else {
        quizBtn.className = "flex-1 py-2.5 text-xs font-semibold text-gold-400 border-b-2 border-gold-400 transition flex items-center justify-center gap-2";
        infoBtn.className = "flex-1 py-2.5 text-xs font-semibold text-gray-400 hover:text-gray-200 border-b-2 border-transparent transition flex items-center justify-center gap-2";
        quizContent.classList.remove('hidden');
        infoContent.classList.add('hidden');
    }
}

function setupQuiz(ev) {
    document.getElementById('quiz-question').innerText = ev.question;
    const optionsContainer = document.getElementById('quiz-options');
    const feedback = document.getElementById('quiz-feedback');
    
    feedback.className = "hidden p-3 rounded-xl text-xs font-semibold flex items-center gap-2";
    optionsContainer.innerHTML = "";

    ev.options.forEach((opt, optIdx) => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-3 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition flex items-center gap-2 group";
        btn.innerHTML = `
            <span class="w-5 h-5 rounded-full bg-white/10 group-hover:bg-gold-500/20 text-gray-400 group-hover:text-gold-300 flex items-center justify-center text-[10px] font-bold">
                ${String.fromCharCode(65 + optIdx)}
            </span>
            <span>${opt}</span>
        `;
        btn.onclick = () => handleAnswer(optIdx, ev.correct, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, selectedBtn) {
    const optionsButtons = document.getElementById('quiz-options').children;
    const feedback = document.getElementById('quiz-feedback');

    for (let btn of optionsButtons) {
        btn.disabled = true;
        btn.classList.add('opacity-60', 'cursor-not-allowed');
    }

    if (selectedIndex === correctIndex) {
        selectedBtn.className = "w-full text-left p-3 rounded-xl text-xs font-medium bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 transition flex items-center gap-2";
        feedback.className = "p-3 rounded-xl text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2";
        feedback.innerHTML = `<i class="fa-solid fa-circle-check text-sm"></i> Tebrikler! Doğru cevap vererek +10 Puan kazandınız.`;
        score += 10;
        correctAnswers++;
    } else {
        selectedBtn.className = "w-full text-left p-3 rounded-xl text-xs font-medium bg-rose-500/20 border border-rose-500/50 text-rose-200 transition flex items-center gap-2";
        optionsButtons[correctIndex].className = "w-full text-left p-3 rounded-xl text-xs font-medium bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 transition flex items-center gap-2";

        feedback.className = "p-3 rounded-xl text-xs font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2";
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark text-sm"></i> Yanlış cevap. Doğru seçenek yeşil renk ile gösterilmiştir.`;
        wrongAnswers++;
    }

    updateStats();
}

function updateStats() {
    document.getElementById('score-display').innerText = score;
    document.getElementById('correct-count').innerText = correctAnswers;
    document.getElementById('wrong-count').innerText = wrongAnswers;

    const progress = Math.round(((correctAnswers + wrongAnswers) / historicalEvents.length) * 100);
    document.getElementById('progress-text').innerText = `${progress}%`;
}

function navigateEvent(direction) {
    let nextIndex = currentIndex + direction;
    if (nextIndex >= filteredEvents.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filteredEvents.length - 1;
    selectEvent(nextIndex);
}

function closePanel() {
    const panel = document.getElementById('event-panel');
    panel.classList.add('translate-y-full', 'opacity-0');
}

function filterEra(era) {
    document.querySelectorAll('#era-filters button').forEach(btn => {
        if (btn.getAttribute('data-era') === era) {
            btn.className = "w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-gold-500/20 text-gray-200 transition text-[11px] flex items-center gap-2 bg-gold-500/20 border border-gold-500/30";
        } else {
            btn.className = "w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-gold-500/20 text-gray-300 transition text-[11px] flex items-center gap-2";
        }
    });

    if (era === 'all') {
        filteredEvents = [...historicalEvents];
    } else {
        filteredEvents = historicalEvents.filter(e => e.era === era);
    }

    renderMarkers();
    if (filteredEvents.length > 0) {
        selectEvent(0);
    }
}