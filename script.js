const idols = [
    // Red Velvet
    { name: "Bae Irene", group: "./Picture/RedVelvetLogo.png", role: "Leader", season: "ICONS", img: "./Picture/Irene.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 85, dance: 86, visual: 95, fan: 91, viral: 92 } },
    { name: "Kang Seulgi", group: "./Picture/RedVelvetLogo.png", role: "Main Dancer", season: "ICONS", img: "./Picture/Seulgi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 80, dance: 95, visual: 85, fan: 87, viral: 85 } },
    { name: "Son Wendy", group: "./Picture/RedVelvetLogo.png", role: "Main Vocalist", season: "ICONS", img: "./Picture/Wendy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 72, dance: 82, visual: 86, fan: 87, viral: 84 } },
    { name: "Joy", group: "./Picture/RedVelvetLogo.png", role: "Lead Vocalist", season: "ICONS", img: "./Picture/Joy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 75, dance: 80, visual: 92, fan: 88, viral: 85 } },
    { name: "Yeri", group: "./Picture/RedVelvetLogo.png", role: "Rapper", season: "ICONS", img: "./Picture/Yeri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 77, rap: 87, dance: 82, visual: 89, fan: 83, viral: 85 } },
    // SNSD (Girls' Generation)
    { name: "Taeyeon", group: "./Picture/SNSDLogo.png", role: "Leader, Main Vocalist", season: "ICONS", img: "./Picture/Taeyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 70, dance: 80, visual: 85, fan: 92, viral: 88 } },
    { name: "Sunny", group: "./Picture/SNSDLogo.png", role: "Lead Vocalist", season: "ICONS", img: "./Picture/Sunny.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 77, dance: 80, visual: 82, fan: 86, viral: 87 } },
    { name: "Tiffany", group: "./Picture/SNSDLogo.png", role: "Lead Vocalist", season: "ICONS", img: "./Picture/Tiffany.jpg", flag: "./Picture/USA.jpg", stats: { vocal: 90, rap: 72, dance: 78, visual: 88, fan: 89, viral: 87 } },
    { name: "Hyoyeon", group: "./Picture/SNSDLogo.png", role: "Main Dancer, Lead Rapper", season: "ICONS", img: "./Picture/Hyoyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 85, dance: 95, visual: 80, fan: 85, viral: 87 } },
    { name: "Yuri", group: "./Picture/SNSDLogo.png", role: "Lead Dancer, Lead Rapper", season: "ICONS", img: "./Picture/Yuri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 78, dance: 92, visual: 92, fan: 86, viral: 85 } },
    { name: "Sooyoung", group: "./Picture/SNSDLogo.png", role: "Lead Dancer, Sub Vocalist", season: "ICONS", img: "./Picture/Sooyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 83, dance: 90, visual: 90, fan: 88, viral: 86 } },
    { name: "Yoona", group: "./Picture/SNSDLogo.png", role: "Lead Dancer, Visual", season: "ICONS", img: "./Picture/Yoona.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 72, dance: 90, visual: 95, fan: 95, viral: 90 } },
    { name: "Seohyun", group: "./Picture/SNSDLogo.png", role: "Lead Vocalist, Maknae", season: "ICONS", img: "./Picture/Seohyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 70, dance: 80, visual: 89, fan: 87, viral: 84 } },
    { name: "Jessica Jung", group: "./Picture/SNSDLogo.png", role: "Main Vocalist", season: "ICONS", img: "./Picture/Jessica.jpg", flag: "./Picture/USA.jpg", stats: {vocal: 92, rap: 70, dance: 78, visual: 90, fan: 90, viral: 85 }},
    // T-ara
    { name: "Jiyeon", group: "./Picture/TaraLogo.png", role: "Lead Vocalist, Main Dancer, Visual", season: "ICONS", img: "./Picture/Jiyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 75, dance: 90, visual: 95, fan: 90, viral: 90 } },
    { name: "Qri", group: "./Picture/TaraLogo.png", role: "Leader, Sub Vocalist", season: "ICONS", img: "./Picture/Qri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 75, dance: 83, visual: 98, fan: 85, viral: 85 } },
    { name: "Eunjung", group: "./Picture/TaraLogo.png", role: "Main Vocalist, Lead Rapper", season: "ICONS", img: "./Picture/Eunjung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 85, dance: 88, visual: 88, fan: 85, viral: 80 } },
    { name: "Hyomin", group: "./Picture/TaraLogo.png", role: "Lead Vocalist, Main Rapper", season: "ICONS", img: "./Picture/Hyomin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 90, dance: 92, visual: 90, fan: 88, viral: 85 } },
    { name: "Boram", group: "./Picture/TaraLogo.png", role: "Sub Vocalist, Sub Rapper", season: "ICONS", img: "./Picture/Boram.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 83, rap: 77, dance: 85, visual: 90, fan: 83, viral: 78 } },
    { name: "Soyeon", group: "./Picture/TaraLogo.png", role: "Main Vocalist", season: "ICONS", img: "./Picture/SoyeonTara.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 72, dance: 80, visual: 87, fan: 87, viral: 80 } },
    // 2NE1
    { name: "CL", group: "./Picture/2NE1Logo.png", role: "Leader, Main Rapper", season: "ICONS", img: "./Picture/CL.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 85, visual: 85, fan: 90, viral: 93 } },
    { name: "Bom", group: "./Picture/2NE1Logo.png", role: "Main Vocalist", season: "ICONS", img: "./Picture/Bom.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 72, dance: 78, visual: 89, fan: 89, viral: 89 } },
    { name: "Dara", group: "./Picture/2NE1Logo.png", role: "Sub Vocalist, Visual", season: "ICONS", img: "./Picture/Dara.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 84, rap: 77, dance: 80, visual: 95, fan: 93, viral: 91 } },
    { name: "Minzy", group: "./Picture/2NE1Logo.png", role: "Main Dancer, Lead Vocalist", season: "ICONS", img: "./Picture/Minzy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 90, dance: 95, visual: 84, fan: 86, viral: 84 } },
    // f(x)
    { name: "Victoria", group: "./Picture/FxLogo.png", role: "Leader, Main Dancer", season: "UNSUNG IDOLS", img: "./Picture/Victoria.jpg", flag: "./Picture/China.jpg", stats: { vocal: 75, rap: 70, dance: 95, visual: 90, fan: 88, viral: 85 } },
    { name: "Amber", group: "./Picture/FxLogo.png", role: "Main Rapper", season: "UNSUNG IDOLS", img: "./Picture/Amber.jpg", flag: "./Picture/Usa.jpg", stats: { vocal: 80, rap: 92, dance: 90, visual: 85, fan: 90, viral: 88 } },
    { name: "Luna", group: "./Picture/FxLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Luna.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 72, dance: 90, visual: 80, fan: 85, viral: 82 } },
    { name: "Krystal", group: "./Picture/FxLogo.png", role: "Visual", season: "UNSUNG IDOLS", img: "./Picture/Krystal.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 75, dance: 88, visual: 95, fan: 92, viral: 90 } },
    { name: "Sulli", group: "./Picture/FxLogo.png", role: "Visual", season: "UNSUNG IDOLS", img: "./Picture/Sulli.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 70, dance: 80, visual: 95, fan: 90, viral: 90 } },
    // Wonder Girls
    { name: "Min Sunye", group: "./Picture/WGLogo.png", role: "Leader, Main Vocalist", season: "ICONS", img: "./Picture/Sunye.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 73, dance: 83, visual: 88, fan: 90, viral: 88 } },
    { name: "Park Yeeun", group: "./Picture/WGLogo.png", role: "Lead Vocalist", season: "ICONS", img: "./Picture/Yeeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 88, dance: 80, visual: 85, fan: 88, viral: 85 } },
    { name: "Ahn Sohee", group: "./Picture/WGLogo.png", role: "Vocalist, Face of the Group", season: "ICONS", img: "./Picture/Sohee.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 72, dance: 85, visual: 95, fan: 92, viral: 95 } },
    { name: "Kim Yubin", group: "./Picture/WGLogo.png", role: "Main Rapper", season: "ICONS", img: "./Picture/Yubin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 95, dance: 88, visual: 88, fan: 90, viral: 87 } },
    { name: "Lee Sunmi", group: "./Picture/WGLogo.png", role: "Lead Vocalist, Lead Dancer", season: "ICONS", img: "./Picture/Sunmi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 75, dance: 90, visual: 90, fan: 95, viral: 95 } },
    { name: "Woo Hyelim", group: "./Picture/WGLogo.png", role: "Vocalist, Rapper", season: "ICONS", img: "./Picture/Hyelim.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 86, rap: 91, dance: 86, visual: 88, fan: 86, viral: 83 } },
    // Blackpink
    { name: "Kim Jisoo", group: "./Picture/BlackpinkLogo.png", role: "Lead Vocalist, Visual", season: "ICONS", img: "./Picture/Jisoo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 77, dance: 84, visual: 95, fan: 95, viral: 92 } },
    { name: "Kim Jennie", group: "./Picture/BlackpinkLogo.png", role: "Main Rapper, Lead Vocalist", season: "ICONS", img: "./Picture/Jennie.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 90, visual: 90, fan: 97, viral: 98 } },
    { name: "Rosé", group: "./Picture/BlackpinkLogo.png", role: "Main Vocalist, Lead Dancer", season: "ICONS", img: "./Picture/Rosé.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 75, dance: 88, visual: 88, fan: 94, viral: 93 } },
    { name: "Lisa", group: "./Picture/BlackpinkLogo.png", role: "Main Dancer, Lead Rapper, Sub-Vocalist", season: "ICONS", img: "./Picture/Lisa.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 80, rap: 95, dance: 98, visual: 90, fan: 99, viral: 99 } },
    // Twice
    { name: "Im Nayeon", group: "./Picture/TwiceLogo.png", role: "Lead Vocalist, Center", season: "ICONS", img: "./Picture/Nayeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 75, dance: 85, visual: 92, fan: 97, viral: 95 } },
    { name: "Yoo Jeongyeon", group: "./Picture/TwiceLogo.png", role: "Lead Vocalist", season: "ICONS", img: "./Picture/Jeongyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 94, rap: 76, dance: 84, visual: 88, fan: 89, viral: 88 } },
    { name: "Hirai Momo", group: "./Picture/TwiceLogo.png", role: "Main Dancer, Sub-Vocalist, Sub-Rapper", season: "ICONS", img: "./Picture/Momo.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 75, rap: 85, dance: 98, visual: 90, fan: 90, viral: 90 } },
    { name: "Minatozaki Sana", group: "./Picture/TwiceLogo.png", role: "Sub-Vocalist", season: "ICONS", img: "./Picture/Sana.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 84, rap: 74, dance: 85, visual: 95, fan: 96, viral: 98 } },
    { name: "Park Jihyo", group: "./Picture/TwiceLogo.png", role: "Leader, Main Vocalist", season: "ICONS", img: "./Picture/Jihyo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 75, dance: 88, visual: 88, fan: 92, viral: 90 } },
    { name: "Myoui Mina", group: "./Picture/TwiceLogo.png", role: "Main Dancer, Sub-Vocalist", season: "ICONS", img: "./Picture/Mina.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 85, rap: 74, dance: 95, visual: 92, fan: 93, viral: 88 } },
    { name: "Kim Dahyun", group: "./Picture/TwiceLogo.png", role: "Lead Rapper, Sub-Vocalist", season: "ICONS", img: "./Picture/Dahyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 90, dance: 83, visual: 90, fan: 89, viral: 90 } },
    { name: "Son Chaeyoung", group: "./Picture/TwiceLogo.png", role: "Main Rapper, Sub-Vocalist", season: "ICONS", img: "./Picture/Chaeyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 95, dance: 85, visual: 89, fan: 88, viral: 86 } },
    { name: "Chou Tzuyu", group: "./Picture/TwiceLogo.png", role: "Lead Dancer, Sub-Vocalist, Visual, Maknae", season: "ICONS", img: "./Picture/Tzuyu.jpg", flag: "./Picture/Taiwan.jpg", stats: { vocal: 82, rap: 74, dance: 90, visual: 98, fan: 97, viral: 95 } },
    // Mamamoo
    { name: "Solar", group: "./Picture/MamamooLogo.png", role: "Leader, Main Vocalist", season: "ICONS", img: "./Picture/Solar.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 75, dance: 87, visual: 90, fan: 94, viral: 92 } },
    { name: "Moonbyul", group: "./Picture/MamamooLogo.png", role: "Main Rapper, Main Dancer", season: "ICONS", img: "./Picture/Moonbyul.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 98, dance: 90, visual: 88, fan: 95, viral: 92 } },
    { name: "Wheein", group: "./Picture/MamamooLogo.png", role: "Lead Vocalist, Lead Dancer", season: "ICONS", img: "./Picture/Wheein.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 95, visual: 89, fan: 93, viral: 90 } },
    { name: "Hwasa", group: "./Picture/MamamooLogo.png", role: "Lead Vocalist, Lead Rapper, Maknae", season: "ICONS", img: "./Picture/Hwasa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 92, dance: 88, visual: 92, fan: 94, viral: 94}},
    // Iz*one Special
    { name: "Kwon Eunbi", group: "./Picture/IzoneLogo.png", role: "Leader, Main Dancer, Lead Vocalist", season: "IZ*ONE SPECIAL", img: "./Picture/IzEunbi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 92, visual: 90, fan: 94, viral: 95 } },
    { name: "Miyawaki Sakura", group: "./Picture/IzoneLogo.png", role: "Sub Vocalist, Visual", season: "IZ*ONE SPECIAL", img: "./Picture/IzSakura.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 75, rap: 75, dance: 78, visual: 95, fan: 97, viral: 94 } },
    { name: "Kang Hyewon", group: "./Picture/IzoneLogo.png", role: "Lead Rapper, Sub Vocalist, Visual", season: "IZ*ONE SPECIAL", img: "./Picture/IzHyewon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 85, dance: 78, visual: 97, fan: 90, viral: 88 } },
    { name: "Choi Yena", group: "./Picture/IzoneLogo.png", role: "Main Rapper, Lead Vocalist, Lead Dancer", season: "IZ*ONE SPECIAL", img: "./Picture/IzYena.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 92, dance: 90, visual: 88, fan: 93, viral: 90 } },
    { name: "Lee Chaeyeon", group: "./Picture/IzoneLogo.png", role: "Main Dancer, Lead Vocalist, Lead Rapper", season: "IZ*ONE SPECIAL", img: "./Picture/IzChaeyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 80, dance: 98, visual: 90, fan: 95, viral: 92 } },
    { name: "Kim Chaewon", group: "./Picture/IzoneLogo.png", role: "Lead Vocalist, Lead Dancer", season: "IZ*ONE SPECIAL", img: "./Picture/IzChaewon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 72, dance: 88, visual: 90, fan: 94, viral: 90 } },
    { name: "Kim Minju", group: "./Picture/IzoneLogo.png", role: "Lead Rapper, Sub Vocalist, Visual", season: "IZ*ONE SPECIAL", img: "./Picture/IzMinju.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 85, dance: 82, visual: 98, fan: 92, viral: 90 } },
    { name: "Yabuki Nako", group: "./Picture/IzoneLogo.png", role: "Sub Vocalist", season: "IZ*ONE SPECIAL", img: "./Picture/IzNako.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 80, rap: 70, dance: 80, visual: 92, fan: 91, viral: 85 } },
    { name: "Honda Hitomi", group: "./Picture/IzoneLogo.png", role: "Lead Dancer, Sub Vocalist, Sub Rapper", season: "IZ*ONE SPECIAL", img: "./Picture/IzHitomi.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 78, rap: 80, dance: 85, visual: 88, fan: 90, viral: 83 } },
    { name: "Jo Yuri", group: "./Picture/IzoneLogo.png", role: "Main Vocalist", season: "IZ*ONE SPECIAL", img: "./Picture/IzYuri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 88, fan: 92, viral: 88 } },
    { name: "Ahn Yujin", group: "./Picture/IzoneLogo.png", role: "Lead Vocalist, Lead Dancer", season: "IZ*ONE SPECIAL", img: "./Picture/IzYujin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 80, dance: 92, visual: 92, fan: 95, viral: 93 } },
    { name: "Jang Wonyoung", group: "./Picture/IzoneLogo.png", role: "Lead Dancer, Sub Vocalist, Sub Rapper, Visual, Center, Maknae", season: "IZ*ONE SPECIAL", img: "./Picture/IzWonyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 75, rap: 72, dance: 82, visual: 98, fan: 98, viral: 96 } },
    // aespa - TOP STARS
    { name: "Karina", group: "./Picture/AespaLogo.png", role: "Leader, Main Dancer, Lead Rapper, Vocalist", season: "TOP STARS", img: "./Picture/Karina.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 90, dance: 95, visual: 96, fan: 95, viral: 95 } },
    { name: "Giselle", group: "./Picture/AespaLogo.png", role: "Main Rapper, Sub Vocalist", season: "TOP STARS", img: "./Picture/Giselle.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 92, dance: 87, visual: 91, fan: 91, viral: 90 } },
    { name: "Winter", group: "./Picture/AespaLogo.png", role: "Lead Vocalist, Lead Dancer, Visual", season: "TOP STARS", img: "./Picture/Winter.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 78, dance: 92, visual: 94, fan: 95, viral: 95 } },
    { name: "Ningning", group: "./Picture/AespaLogo.png", role: "Main Vocalist, Maknae", season: "TOP STARS", img: "./Picture/Ningning.jpg", flag: "./Picture/China.jpg", stats: { vocal: 98, rap: 77, dance: 88, visual: 91, fan: 92, viral: 92 } },
    // ITZY - TOP STARS
    { name: "Yeji", group: "./Picture/ItzyLogo.png", role: "Leader, Main Dancer, Lead Vocalist, Sub Rapper", season: "TOP STARS", img: "./Picture/Yeji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 90, dance: 98, visual: 92, fan: 96, viral: 97 } },
    { name: "Lia", group: "./Picture/ItzyLogo.png", role: "Main Vocalist, Sub Rapper", season: "TOP STARS", img: "./Picture/Lia.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 84, visual: 90, fan: 95, viral: 91 } },
    { name: "Ryujin", group: "./Picture/ItzyLogo.png", role: "Main Rapper, Lead Dancer, Sub Vocalist, Center", season: "TOP STARS", img: "./Picture/Ryujin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 98, dance: 95, visual: 93, fan: 95, viral: 98 } },
    { name: "Chaeryeong", group: "./Picture/ItzyLogo.png", role: "Main Dancer, Sub Vocalist, Sub Rapper", season: "TOP STARS", img: "./Picture/Chaeryoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 98, visual: 88, fan: 91, viral: 92 } },
    { name: "Yuna", group: "./Picture/ItzyLogo.png", role: "Lead Rapper, Lead Dancer, Sub Vocalist, Visual, Maknae", season: "TOP STARS", img: "./Picture/Yuna.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 90, dance: 92, visual: 98, fan: 95, viral: 96 } },
    // NewJeans - TOP STARS
    { name: "Minji", group: "./Picture/NewjeansLogo.png", role: "Leader, Lead Vocalist, Lead Dancer", season: "TOP STARS", img: "./Picture/Minji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 78, dance: 92, visual: 93, fan: 95, viral: 93 } },
    { name: "Hanni", group: "./Picture/NewjeansLogo.png", role: "Main Vocalist, Lead Dancer", season: "TOP STARS", img: "./Picture/Hanni.jpg", flag: "./Picture/Vietnam.jpg", stats: { vocal: 92, rap: 77, dance: 87, visual: 92, fan: 90, viral: 92 } },
    { name: "Danielle", group: "./Picture/NewjeansLogo.png", role: "Lead Vocalist, Lead Dancer", season: "TOP STARS", img: "./Picture/Danielle.jpg", flag: "./Picture/Australia.jpg", stats: { vocal: 90, rap: 78, dance: 92, visual: 92, fan: 90, viral: 91 } },
    { name: "Haerin", group: "./Picture/NewjeansLogo.png", role: "Lead Vocalist, Lead Dancer", season: "TOP STARS", img: "./Picture/Haerin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 86, rap: 83, dance: 83, visual: 87, fan: 86, viral: 87 } },
    { name: "Hyein", group: "./Picture/NewjeansLogo.png", role: "Lead Vocalist, Lead Dancer, Maknae", season: "TOP STARS", img: "./Picture/Hyein.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 76, dance: 91, visual: 86, fan: 87, viral: 87 } },
    // IVE
    { name: "Yujin", group: "./Picture/IveLogo.png", role: "Leader, Vocalist", season: "TOP STARS", img: "./Picture/Yujin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 85, dance: 95, visual: 95, fan: 95, viral: 95 } },
    { name: "Gaeul", group: "./Picture/IveLogo.png", role: "Rapper", season: "TOP STARS", img: "./Picture/Gaeul.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 95, dance: 93, visual: 94, fan: 91, viral: 90 } },
    { name: "Rei", group: "./Picture/IveLogo.png", role: "Rapper, Vocalist", season: "TOP STARS", img: "./Picture/Rei.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 85, rap: 95, dance: 89, visual: 93, fan: 94, viral: 93 } },
    { name: "Wonyoung", group: "./Picture/IveLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Wonyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 80, dance: 88, visual: 99, fan: 99, viral: 99 } },
    { name: "Liz", group: "./Picture/IveLogo.png", role: "Main Vocalist", season: "TOP STARS", img: "./Picture/Liz.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 77, dance: 87, visual: 96, fan: 94, viral: 94 } },
    { name: "Leeseo", group: "./Picture/IveLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Leeseo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 93, rap: 78, dance: 93, visual: 99, fan: 95, viral: 93 } },
    // LE SSERAFIM
    { name: "Miyawaki Sakura", group: "./Picture/LeSserafimLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Sakura.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 83, rap: 82, dance: 88, visual: 97, fan: 98, viral: 98 } },
    { name: "Kim Chaewon", group: "./Picture/LeSserafimLogo.png", role: "Leader, Vocalist", season: "TOP STARS", img: "./Picture/Chaewon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 82, dance: 95, visual: 94, fan: 96, viral: 97 } },
    { name: "Huh Yunjin", group: "./Picture/LeSserafimLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Yunjin.jpg", flag: "./Picture/USA.jpg", stats: { vocal: 98, rap: 95, dance: 91, visual: 95, fan: 95, viral: 95 } },
    { name: "Nakamura Kazuha", group: "./Picture/LeSserafimLogo.png", role: "Dancer, Rapper", season: "TOP STARS", img: "./Picture/Kazuha.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 82, rap: 91, dance: 99, visual: 98, fan: 96, viral: 98 } },
    { name: "Hong Eunchae", group: "./Picture/LeSserafimLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Eunchae.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 83, dance: 95, visual: 94, fan: 93, viral: 95 } },
    { name: "Kim Garam", group: "./Picture/LeSserafimLogo.png", role: "Vocalist, Dancer", season: "TOP STARS", img: "./Picture/Garam.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 77, dance: 92, visual: 98, fan: 94, viral: 96 } },
    // (G)I-DLE
    { name: "Soyeon", group: "./Picture/GidleLogo.png", role: "Leader, Rapper", season: "TOP STARS", img: "./Picture/Soyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 99, dance: 92, visual: 92, fan: 97, viral: 98 } },
    { name: "Miyeon", group: "./Picture/GidleLogo.png", role: "Main Vocalist", season: "TOP STARS", img: "./Picture/Miyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 74, dance: 87, visual: 98, fan: 95, viral: 95 } },
    { name: "Minnie", group: "./Picture/GidleLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Minnie.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 95, rap: 75, dance: 88, visual: 93, fan: 93, viral: 92 } },
    { name: "Yuqi", group: "./Picture/GidleLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Yuqi.jpg", flag: "./Picture/China.jpg", stats: { vocal: 92, rap: 85, dance: 85, visual: 94, fan: 96, viral: 97 } },
    { name: "Shuhua", group: "./Picture/GidleLogo.png", role: "Vocalist", season: "TOP STARS", img: "./Picture/Shuhua.jpg", flag: "./Picture/Taiwan.jpg", stats: { vocal: 80, rap: 72, dance: 85, visual: 98, fan: 94, viral: 96 } },
    { name: "Soojin", group: "./Picture/GidleLogo.png", role: "Main Dancer, Sub Vocalist, Sub Rapper", season: "TOP STARS", img: "./Picture/Soojin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 90, dance: 95, visual: 90, fan: 95, viral: 94 } },
    // KARA
    { name: "Gyuri", group: "./Picture/KaraLogo.png", role: "Leader, Main Vocalist", season: "NATIONALLY", img: "./Picture/Gyuri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 75, dance: 85, visual: 97, fan: 95, viral: 90 } },
    { name: "Seungyeon", group: "./Picture/KaraLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Seungyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 75, dance: 88, visual: 94, fan: 94, viral: 90 } },
    { name: "Nicole", group: "./Picture/KaraLogo.png", role: "Main Rapper, Main Dancer", season: "NATIONALLY", img: "./Picture/Nicole.jpg", flag: "./Picture/USA.jpg", stats: { vocal: 85, rap: 95, dance: 95, visual: 92, fan: 92, viral: 90 } },
    { name: "Hara", group: "./Picture/KaraLogo.png", role: "Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/Hara.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 80, dance: 92, visual: 98, fan: 97, viral: 98 } },
    { name: "Jiyoung", group: "./Picture/KaraLogo.png", role: "Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Jiyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 80, dance: 88, visual: 96, fan: 94, viral: 90 } },
    { name: "Youngji", group: "./Picture/KaraLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/Youngji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 97, dance: 88, visual: 95, fan: 95, viral: 92 } },
    // After School
    { name: "Kahi", group: "./Picture/ASLogo.png", role: "Leader, Main Rapper, Main Dancer", season: "NATIONALLY", img: "./Picture/Kahi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 95, dance: 98, visual: 90, fan: 95, viral: 95 } },
    { name: "Jungah", group: "./Picture/ASLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Jungah.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 92, visual: 94, fan: 94, viral: 90 } },
    { name: "Jooyeon", group: "./Picture/ASLogo.png", role: "Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Jooyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 75, dance: 90, visual: 97, fan: 92, viral: 88 } },
    { name: "Bekah", group: "./Picture/ASLogo.png", role: "Main Rapper", season: "NATIONALLY", img: "./Picture/Bekah.jpg", flag: "./Picture/USA.jpg", stats: { vocal: 80, rap: 98, dance: 88, visual: 92, fan: 94, viral: 90 } },
    { name: "UEE", group: "./Picture/ASLogo.png", role: "Vocalist, Rapper", season: "NATIONALLY", img: "./Picture/UEE.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 78, dance: 90, visual: 98, fan: 97, viral: 98 } },
    { name: "Raina", group: "./Picture/ASLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Raina.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 92, fan: 94, viral: 90 } },
    { name: "Nana", group: "./Picture/ASLogo.png", role: "Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/Nana.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 80, dance: 95, visual: 99, fan: 98, viral: 99 } },
    { name: "Lizzy", group: "./Picture/ASLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Lizzy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 92, dance: 85, visual: 93, fan: 94, viral: 90 } },
    { name: "E-Young", group: "./Picture/ASLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/E-Young.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 75, dance: 90, visual: 94, fan: 90, viral: 85 } },
    { name: "Kaeun", group: "./Picture/ASLogo.png", role: "Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Kaeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 85, dance: 95, visual: 96, fan: 94, viral: 95 } },
    // Secret
    { name: "Hyosung", group: "./Picture/SecretLogo.png", role: "Leader, Main Dancer, Lead Vocalist", season: "NATIONALLY", img: "./Picture/Hyosung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 95, visual: 98, fan: 95, viral: 97 } },
    { name: "Jieun", group: "./Picture/SecretLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Jieun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 95, fan: 94, viral: 90 } },
    { name: "Sunhwa", group: "./Picture/SecretLogo.png", role: "Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Sunhwa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 78, dance: 88, visual: 99, fan: 97, viral: 98 } },
    { name: "Zinger", group: "./Picture/SecretLogo.png", role: "Main Rapper, Lead Dancer", season: "NATIONALLY", img: "./Picture/Zinger.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 97, dance: 90, visual: 90, fan: 92, viral: 90 } },
    // Miss A
    { name: "Fei", group: "./Picture/MissA.png", role: "Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Fei.jpg", flag: "./Picture/China.jpg", stats: { vocal: 90, rap: 75, dance: 95, visual: 96, fan: 94, viral: 90 } },
    { name: "Jia", group: "./Picture/MissA.png", role: "Main Rapper, Lead Dancer", season: "UNSUNG IDOLS", img: "./Picture/Jia.jpg", flag: "./Picture/China.jpg", stats: { vocal: 82, rap: 95, dance: 97, visual: 92, fan: 93, viral: 90 } },
    { name: "Min", group: "./Picture/MissA.png", role: "Main Vocalist, Main Dancer", season: "UNSUNG IDOLS", img: "./Picture/Min.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 96, visual: 90, fan: 92, viral: 88 } },
    { name: "Suzy", group: "./Picture/MissA.png", role: "Lead Vocalist, Visual, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Suzy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 92, visual: 99, fan: 99, viral: 99 } },
    // 4Minute
    { name: "Jihyun", group: "./Picture/4MinuteLogo.png", role: "Leader, Lead Dancer, Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Jihyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 75, dance: 85, visual: 97, fan: 93, viral: 90 } },
    { name: "Gayoon", group: "./Picture/4MinuteLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Gayoon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 94, fan: 94, viral: 90 } },
    { name: "Jiyoon", group: "./Picture/4MinuteLogo.png", role: "Lead Vocalist, Main Rapper", season: "UNSUNG IDOLS", img: "./Picture/Jiyoon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 97, dance: 90, visual: 92, fan: 93, viral: 92 } },
    { name: "HyunA", group: "./Picture/4MinuteLogo.png", role: "Main Rapper, Main Dancer, Vocalist, Face of the Group", season: "UNSUNG IDOLS", img: "./Picture/HyunA.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 97, visual: 98, fan: 99, viral: 99 } },
    { name: "Sohyun", group: "./Picture/4MinuteLogo.png", role: "Vocalist, Rapper, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Sohyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 90, dance: 90, visual: 94, fan: 92, viral: 90 } },
    // GFriend
    { name: "Sowon", group: "./Picture/GfriendLogo.png", role: "Leader, Vocalist, Rapper, Visual", season: "UNSUNG IDOLS", img: "./Picture/Sowon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 78, rap: 85, dance: 90, visual: 98, fan: 95, viral: 90 } },
    { name: "Yerin", group: "./Picture/GfriendLogo.png", role: "Lead Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Yerin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 78, dance: 95, visual: 96, fan: 94, viral: 90 } },
    { name: "Eunha", group: "./Picture/GfriendLogo.png", role: "Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Eunha.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 75, dance: 88, visual: 94, fan: 95, viral: 92 } },
    { name: "Yuju", group: "./Picture/GfriendLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Yuju.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 90, visual: 93, fan: 97, viral: 98 } },
    { name: "SinB", group: "./Picture/GfriendLogo.png", role: "Main Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/SinB.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 80, dance: 98, visual: 97, fan: 96, viral: 95 } },
    { name: "Umji", group: "./Picture/GfriendLogo.png", role: "Vocalist, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Umji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 88, visual: 95, fan: 94, viral: 92 } },
    // WJSN (Cosmic Girls)
    { name: "EXY", group: "./Picture/WJSNLogo.png", role: "Leader, Main Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/EXY.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 98, dance: 88, visual: 92, fan: 94, viral: 90 } },
    { name: "Seola", group: "./Picture/WJSNLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Seola.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 75, dance: 88, visual: 94, fan: 95, viral: 90 } },
    { name: "Bona", group: "./Picture/WJSNLogo.png", role: "Lead Dancer, Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Bona.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 78, dance: 95, visual: 99, fan: 97, viral: 98 } },
    { name: "Soobin", group: "./Picture/WJSNLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Soobin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 78, dance: 88, visual: 95, fan: 93, viral: 88 } },
    { name: "Luda", group: "./Picture/WJSNLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/Luda.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 85, dance: 88, visual: 94, fan: 95, viral: 92 } },
    { name: "Dawon", group: "./Picture/WJSNLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Dawon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 92, fan: 94, viral: 90 } },
    { name: "Eunseo", group: "./Picture/WJSNLogo.png", role: "Lead Dancer, Vocalist, Rapper", season: "NATIONALLY", img: "./Picture/Eunseo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 90, dance: 95, visual: 95, fan: 94, viral: 90 } },
    { name: "Cheng Xiao", group: "./Picture/WJSNLogo.png", role: "Main Dancer, Vocalist, Visual", season: "NATIONALLY", img: "./Picture/ChengXiao.jpg", flag: "./Picture/China.jpg", stats: { vocal: 85, rap: 78, dance: 99, visual: 98, fan: 98, viral: 99 } },
    { name: "Mei Qi", group: "./Picture/WJSNLogo.png", role: "Main Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/MeiQi.jpg", flag: "./Picture/China.jpg", stats: { vocal: 90, rap: 78, dance: 99, visual: 96, fan: 98, viral: 98 } },
    { name: "Yeoreum", group: "./Picture/WJSNLogo.png", role: "Lead Rapper, Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/Yeoreum.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 88, dance: 96, visual: 95, fan: 94, viral: 90 } },
    { name: "Dayoung", group: "./Picture/WJSNLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Dayoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 80, dance: 88, visual: 94, fan: 92, viral: 90 } },
    { name: "Yeonjung", group: "./Picture/WJSNLogo.png", role: "Main Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Yeonjung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 75, dance: 88, visual: 94, fan: 96, viral: 98 } },
    { name: "Xuanyi", group: "./Picture/WJSNLogo.png", role: "Main Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Xuanyi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 75, dance: 88, visual: 98, fan: 98, viral: 97 } },
    // Dreamcatcher
    { name: "JiU", group: "./Picture/DCLogo.png", role: "Leader, Lead Vocalist, Lead Dancer, Visual", season: "NATIONALLY", img: "./Picture/JiU.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 78, dance: 95, visual: 97, fan: 95, viral: 94 } },
    { name: "SuA", group: "./Picture/DCLogo.png", role: "Main Dancer, Lead Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/SuA.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 90, dance: 98, visual: 95, fan: 94, viral: 96 } },
    { name: "Siyeon", group: "./Picture/DCLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Siyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 80, dance: 88, visual: 93, fan: 96, viral: 97 } },
    { name: "Handong", group: "./Picture/DCLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/Handong.jpg", flag: "./Picture/China.jpg", stats: { vocal: 88, rap: 75, dance: 85, visual: 94, fan: 93, viral: 90 } },
    { name: "Yoohyeon", group: "./Picture/DCLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Yoohyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 90, visual: 96, fan: 94, viral: 95 } },
    { name: "Dami", group: "./Picture/DCLogo.png", role: "Main Rapper, Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/Dami.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 92, visual: 92, fan: 95, viral: 98 } },
    { name: "Gahyeon", group: "./Picture/DCLogo.png", role: "Vocalist, Rapper, Maknae", season: "NATIONALLY", img: "./Picture/Gahyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 88, dance: 90, visual: 96, fan: 93, viral: 94 } },
    // CLC
    { name: "Seunghee", group: "./Picture/CLCLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Seunghee.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 88, visual: 92, fan: 94, viral: 90 } },
    { name: "Yujin", group: "./Picture/CLCLogo.png", role: "Lead Dancer, Vocalist, Visual", season: "NATIONALLY", img: "./Picture/YujinCLC.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 78, dance: 97, visual: 98, fan: 97, viral: 98 } },
    { name: "Seungyeon", group: "./Picture/CLCLogo.png", role: "Leader, Main Dancer, Lead Vocalist", season: "NATIONALLY", img: "./Picture/SeungyeonCLC.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 90, dance: 99, visual: 95, fan: 95, viral: 96 } },
    { name: "Sorn", group: "./Picture/CLCLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Sorn.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 90, rap: 80, dance: 85, visual: 94, fan: 95, viral: 95 } },
    { name: "Yeeun", group: "./Picture/CLCLogo.png", role: "Main Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/YeeunCLC.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 99, dance: 90, visual: 96, fan: 96, viral: 97 } },
    { name: "Elkie", group: "./Picture/CLCLogo.png", role: "Lead Vocalist, Lead Dancer, Visual", season: "NATIONALLY", img: "./Picture/Elkie.jpg", flag: "./Picture/HongKong.jpg", stats: { vocal: 85, rap: 80, dance: 88, visual: 98, fan: 94, viral: 95 } },
    { name: "Eunbin", group: "./Picture/CLCLogo.png", role: "Vocalist, Rapper, Maknae", season: "NATIONALLY", img: "./Picture/Eunbin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 92, dance: 90, visual: 97, fan: 94, viral: 94 } },
    // Momoland
    { name: "Hyebin", group: "./Picture/MomolandLogo.png", role: "Leader, Rapper, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Hyebin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 95, dance: 88, visual: 92, fan: 93, viral: 90 } },
    { name: "Jane", group: "./Picture/MomolandLogo.png", role: "Main Dancer, Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Jane.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 85, dance: 97, visual: 95, fan: 94, viral: 94 } },
    { name: "Nayun", group: "./Picture/MomolandLogo.png", role: "Vocalist, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Nayun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 80, dance: 88, visual: 96, fan: 93, viral: 90 } },
    { name: "JooE", group: "./Picture/MomolandLogo.png", role: "Main Rapper, Lead Vocalist, Lead Dancer, Face of the Group", season: "UNSUNG IDOLS", img: "./Picture/JooE.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 92, dance: 95, visual: 90, fan: 97, viral: 99 } },
    { name: "Ahin", group: "./Picture/MomolandLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Ahin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 78, dance: 88, visual: 94, fan: 94, viral: 90 } },
    { name: "Nancy", group: "./Picture/MomolandLogo.png", role: "Lead Vocalist, Lead Dancer, Visual, Center, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Nancy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 80, dance: 96, visual: 99, fan: 99, viral: 99 } },
    { name: "Yeonwoo", group: "./Picture/MomolandLogo.png", role: "Rapper, Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Yeonwoo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 88, dance: 90, visual: 99, fan: 98, viral: 99 } }, 
    { name: "Taeha", group: "./Picture/MomolandLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Taeha.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 75, dance: 85, visual: 93, fan: 92, viral: 90 } }, 
    { name: "Daisy", group: "./Picture/MomolandLogo.png", role: "Main Rapper, Main Dancer", season: "UNSUNG IDOLS", img: "./Picture/Daisy.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 98, dance: 95, visual: 95, fan: 95, viral: 97 } },
    // StayC
    { name: "Sumin", group: "./Picture/StayCLogo.png", role: "Leader, Vocalist, Rapper", season: "NATIONALLY", img: "./Picture/Sumin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 95, dance: 90, visual: 95, fan: 94, viral: 90 } },
    { name: "Sieun", group: "./Picture/StayCLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Sieun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 88, visual: 94, fan: 95, viral: 94 } },
    { name: "Isa", group: "./Picture/StayCLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Isa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 90, visual: 96, fan: 93, viral: 92 } },
    { name: "Seeun", group: "./Picture/StayCLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/Seeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 78, dance: 95, visual: 98, fan: 96, viral: 98 } },
    { name: "Yoon", group: "./Picture/StayCLogo.png", role: "Lead Vocalist", season: "NATIONALLY", img: "./Picture/Yoon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 90, dance: 90, visual: 97, fan: 95, viral: 96 } },
    { name: "J", group: "./Picture/StayCLogo.png", role: "Vocalist, Rapper, Maknae", season: "NATIONALLY", img: "./Picture/J.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 96, visual: 96, fan: 95, viral: 99 } },
    // Nmixx
    { name: "Lily", group: "./Picture/NmixxLogo.png", role: "Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Lily.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 80, dance: 85, visual: 93, fan: 97, viral: 98 } },
    { name: "Haewon", group: "./Picture/NmixxLogo.png", role: "Leader, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Haewon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 88, visual: 95, fan: 95, viral: 95 } },
    { name: "Sullyoon", group: "./Picture/NmixxLogo.png", role: "Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Sullyoon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 78, dance: 90, visual: 100, fan: 98, viral: 99 } },
    { name: "Bae", group: "./Picture/NmixxLogo.png", role: "Vocalist, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Bae.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 92, visual: 95, fan: 94, viral: 93 } },
    { name: "Jiwoo", group: "./Picture/NmixxLogo.png", role: "Rapper, Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Jiwoo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 99, visual: 96, fan: 96, viral: 98 } },
    { name: "Kyujin", group: "./Picture/NmixxLogo.png", role: "Rapper, Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Kyujin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 98, visual: 97, fan: 96, viral: 99 } },
    { name: "Jinni", group: "./Picture/NMIXXLogo.png", role: "Vocalist, Dancer, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Jinni.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88,rap: 96, dance: 97,  visual: 98, fan: 97, viral: 98 }},
    // Everglow
    { name: "E:U", group: "./Picture/EverglowLogo.png", role: "Leader, Main Rapper, Main Dancer", season: "UNSUNG IDOLS", img: "./Picture/EU.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 95, visual: 94, fan: 94, viral: 95 } },
    { name: "Sihyeon", group: "./Picture/EverglowLogo.png", role: "Lead Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Sihyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 80, dance: 90, visual: 98, fan: 96, viral: 95 } },
    { name: "Mia", group: "./Picture/EverglowLogo.png", role: "Main Vocalist, Main Dancer", season: "UNSUNG IDOLS", img: "./Picture/Mia.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 90, dance: 99, visual: 95, fan: 97, viral: 98 } },
    { name: "Onda", group: "./Picture/EverglowLogo.png", role: "Lead Dancer, Sub Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Onda.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 97, visual: 99, fan: 97, viral: 99 } },
    { name: "Aisha", group: "./Picture/EverglowLogo.png", role: "Lead Rapper, Sub Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Aisha.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 98, dance: 92, visual: 96, fan: 95, viral: 96 } },
    { name: "Yiren", group: "./Picture/EverglowLogo.png", role: "Sub Vocalist, Lead Dancer, Visual", season: "UNSUNG IDOLS", img: "./Picture/Yiren.jpg", flag: "./Picture/China.jpg", stats: { vocal: 85, rap: 78, dance: 98, visual: 100, fan: 99, viral: 99 } },
    // Kep1er
    { name: "Choi Yujin", group: "./Picture/Kep1erLogo.png", role: "Leader, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/YujinKep.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 80, dance: 95, visual: 96, fan: 98, viral: 97 } },
    { name: "Shen Xiaoting", group: "./Picture/Kep1erLogo.png", role: "Main Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Xiaoting.jpg", flag: "./Picture/China.jpg", stats: { vocal: 85, rap: 78, dance: 99, visual: 100, fan: 99, viral: 99 } },
    { name: "Kim Chaehyun", group: "./Picture/Kep1erLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Chaehyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 90, visual: 97, fan: 98, viral: 98 } },
    { name: "Kim Dayeon", group: "./Picture/Kep1erLogo.png", role: "Main Rapper, Lead Dancer", season: "UNSUNG IDOLS", img: "./Picture/Dayeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 99, dance: 98, visual: 95, fan: 95, viral: 96 } },
    { name: "Ezaki Hikaru", group: "./Picture/Kep1erLogo.png", role: "Lead Rapper, Lead Dancer", season: "UNSUNG IDOLS", img: "./Picture/Hikaru.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 85, rap: 98, dance: 97, visual: 94, fan: 96, viral: 97 } },
    { name: "Huening Bahiyyih", group: "./Picture/Kep1erLogo.png", role: "Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Bahiyyih.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 80, dance: 90, visual: 97, fan: 99, viral: 99 } },
    { name: "Seo Youngeun", group: "./Picture/Kep1erLogo.png", role: "Main Dancer, Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Youngeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 90, dance: 98, visual: 95, fan: 94, viral: 96 } },
    { name: "Sakamoto Mashiro", group: "./Picture/Kep1erLogo.png", role: "Co-Leader, Vocalist, Dancer", season: "UNSUNG IDOLS", img: "./Picture/Mashiro.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 93, rap: 80, dance: 96, visual: 95, fan: 96, viral: 94 } },
    { name: "Kang Yeseo", group: "./Picture/Kep1erLogo.png", role: "Vocalist, Dancer, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Yeseo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 85, dance: 95, visual: 99, fan: 98, viral: 98 } },
    // Loona
    { name: "HeeJin", group: "./Picture/LoonaLogo.png", role: "Lead Vocalist, Lead Dancer, Visual, Center", season: "NATIONALLY", img: "./Picture/HeeJin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 90, dance: 98, visual: 99, fan: 97, viral: 98 } },
    { name: "HyunJin", group: "./Picture/LoonaLogo.png", role: "Lead Dancer, Vocalist, Rapper, Visual", season: "NATIONALLY", img: "./Picture/HyunJin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 85, dance: 97, visual: 98, fan: 96, viral: 95 } },
    { name: "HaSeul", group: "./Picture/LoonaLogo.png", role: "Leader, Main Vocalist", season: "NATIONALLY", img: "./Picture/HaSeul.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 88, visual: 96, fan: 95, viral: 93 } },
    { name: "YeoJin", group: "./Picture/LoonaLogo.png", role: "Vocalist, Rapper, Maknae", season: "NATIONALLY", img: "./Picture/YeoJin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 95, dance: 90, visual: 97, fan: 96, viral: 97 } },
    { name: "ViVi", group: "./Picture/LoonaLogo.png", role: "Vocalist, Rapper", season: "NATIONALLY", img: "./Picture/ViVi.jpg", flag: "./Picture/HongKong.jpg", stats: { vocal: 85, rap: 78, dance: 88, visual: 98, fan: 95, viral: 94 } },
    { name: "Kim Lip", group: "./Picture/LoonaLogo.png", role: "Main Vocalist, Lead Dancer", season: "NATIONALLY", img: "./Picture/KimLip.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 85, dance: 95, visual: 97, fan: 98, viral: 98 } },
    { name: "JinSoul", group: "./Picture/LoonaLogo.png", role: "Main Rapper, Lead Vocalist, Visual", season: "NATIONALLY", img: "./Picture/JinSoul.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 96, rap: 99, dance: 97, visual: 99, fan: 98, viral: 99 } },
    { name: "Choerry", group: "./Picture/LoonaLogo.png", role: "Lead Rapper, Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/Choerry.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 97, dance: 96, visual: 98, fan: 97, viral: 98 } },
    { name: "Yves", group: "./Picture/LoonaLogo.png", role: "Main Dancer, Lead Vocalist", season: "NATIONALLY", img: "./Picture/Yves.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 85, dance: 99, visual: 99, fan: 98, viral: 98 } },
    { name: "Chuu", group: "./Picture/LoonaLogo.png", role: "Main Vocalist, Face of the Group", season: "NATIONALLY", img: "./Picture/Chuu.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 90, visual: 99, fan: 99, viral: 100 } },
    { name: "Go Won", group: "./Picture/LoonaLogo.png", role: "Lead Rapper, Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/GoWon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 92, dance: 96, visual: 98, fan: 96, viral: 97 } },
    { name: "Olivia Hye", group: "./Picture/LoonaLogo.png", role: "Lead Dancer, Lead Vocalist, Rapper", season: "NATIONALLY", img: "./Picture/OliviaHye.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 99, dance: 98, visual: 97, fan: 97, viral: 99 } },
    // SISTAR
    { name: "Hyorin", group: "./Picture/SistarLogo.png", role: "Leader, Main Vocalist, Lead Dancer", season: "UNSUNG IDOLS", img: "./Picture/Hyorin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 85, dance: 98, visual: 96, fan: 99, viral: 100 } },
    { name: "Bora", group: "./Picture/SistarLogo.png", role: "Main Rapper, Main Dancer, Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Bora.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 97, visual: 98, fan: 98, viral: 99 } },
    { name: "Soyou", group: "./Picture/SistarLogo.png", role: "Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Soyou.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 90, visual: 97, fan: 97, viral: 98 } },
    { name: "Dasom", group: "./Picture/SistarLogo.png", role: "Vocalist, Visual, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Dasom.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 80, dance: 88, visual: 99, fan: 96, viral: 97} },
    // Apink
    { name: "Chorong", group: "./Picture/ApinkLogo.png", role: "Leader, Main Rapper, Lead Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Chorong.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 90, visual: 96, fan: 98, viral: 92 } },
    { name: "Bomi", group: "./Picture/ApinkLogo.png", role: "Main Dancer, Lead Vocalist, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Bomi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 98, dance: 99, visual: 95, fan: 97, viral: 98 } },
    { name: "Eunji", group: "./Picture/ApinkLogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Eunji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 78, dance: 90, visual: 97, fan: 99, viral: 100 } },
    { name: "Naeun", group: "./Picture/ApinkLogo.png", role: "Lead Dancer, Vocalist, Visual, Center", season: "UNSUNG IDOLS", img: "./Picture/Naeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 78, dance: 92, visual: 100, fan: 99, viral: 99 } },
    { name: "Namjoo", group: "./Picture/ApinkLogo.png", role: "Lead Vocalist, Lead Dancer, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Namjoo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 85, dance: 95, visual: 94, fan: 96, viral: 94 } },
    { name: "Hayoung", group: "./Picture/ApinkLogo.png", role: "Vocalist, Rapper, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Hayoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 90, dance: 92, visual: 97, fan: 98, viral: 97 } },
    // EXID
    { name: "Solji", group: "./Picture/Exid.png", role: "Leader, Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Solji.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 78, dance: 90, visual: 95, fan: 98, viral: 98 } },
    { name: "LE", group: "./Picture/Exid.png", role: "Main Rapper, Lead Dancer", season: "UNSUNG IDOLS", img: "./Picture/LE.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 100, dance: 95, visual: 94, fan: 97, viral: 99 } },
    { name: "Hani", group: "./Picture/Exid.png", role: "Lead Vocalist, Lead Dancer, Visual", season: "UNSUNG IDOLS", img: "./Picture/Hani.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 97, visual: 100, fan: 99, viral: 100 } },
    { name: "Hyelin", group: "./Picture/Exid.png", role: "Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Hyelin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 78, dance: 90, visual: 95, fan: 96, viral: 95 } },
    { name: "Jeonghwa", group: "./Picture/Exid.png", role: "Main Dancer, Vocalist, Visual, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Jeonghwa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 92, dance: 99, visual: 99, fan: 97, viral: 98 } },
    // I.O.I
    { name: "Lim Nayoung", group: "./Picture/IOILogo.png", role: "Leader, Main Rapper, Lead Dancer, Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Nayoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 95, dance: 95, visual: 95, fan: 95, viral: 94 } },
    { name: "Kim Chungha", group: "./Picture/IOILogo.png", role: "Main Dancer, Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Chungha.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 85, dance: 95, visual: 95, fan: 95, viral: 95 } },
    { name: "Kim Sejeong", group: "./Picture/IOILogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Sejeong.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 82, dance: 90, visual: 97, fan: 97, viral: 97 } },
    { name: "Jung Chaeyeon", group: "./Picture/IOILogo.png", role: "Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Chaeyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 80, dance: 95, visual: 95, fan: 95, viral: 95 } },
    { name: "Zhou Jieqiong", group: "./Picture/IOILogo.png", role: "Lead Dancer, Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Kyulkyung.jpg", flag: "./Picture/China.jpg", stats: { vocal: 90, rap: 80, dance: 95, visual: 95, fan: 95, viral: 95 } },
    { name: "Kim Sohye", group: "./Picture/IOILogo.png", role: "Vocalist, Rapper", season: "UNSUNG IDOLS", img: "./Picture/Sohye.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 86, rap: 82, dance: 89, visual: 95, fan: 96, viral: 94 } },
    { name: "Yoo Yeonjung", group: "./Picture/IOILogo.png", role: "Main Vocalist", season: "UNSUNG IDOLS", img: "./Picture/YeonjungIOI.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 90, visual: 95, fan: 95, viral: 98} },
    { name: "Choi Yoojung", group: "./Picture/IOILogo.png", role: "Lead Rapper, Lead Dancer, Lead Vocalist", season: "UNSUNG IDOLS", img: "./Picture/Yoojung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 95, visual: 94, fan: 95, viral: 95 } },
    { name: "Kang Mina", group: "./Picture/IOILogo.png", role: "Lead Dancer, Vocalist, Rapper", season: "UNSUNG IDOLS", img: "./Picture/MinaIOI.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 90, dance: 92, visual: 95, fan: 95, viral: 95 } },
    { name: "Kim Doyeon", group: "./Picture/IOILogo.png", role: "Lead Dancer, Vocalist, Visual", season: "UNSUNG IDOLS", img: "./Picture/Doyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 85, dance: 95, visual: 95, fan: 95, viral: 95 } },
    { name: "Jeon Somi", group: "./Picture/IOILogo.png", role: "Lead Dancer, Lead Vocalist, Rapper, Face of the Group, Center, Maknae", season: "UNSUNG IDOLS", img: "./Picture/Somi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 93, dance: 94, visual: 97, fan: 97, viral: 97 } },
    // KISS OF LIFE
    { name: "Natty", group: "./Picture/KOLLogo.png", role: "Main Vocalist, Lead Dancer", season: "NEW GEN", img: "./Picture/Natty.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 95, rap: 85, dance: 99, visual: 97, fan: 98, viral: 98 } },
    { name: "Belle", group: "./Picture/KOLLogo.png", role: "Main Rapper, Lead Dancer", season: "NEW GEN", img: "./Picture/Belle.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 85, dance: 95, visual: 98, fan: 98, viral: 99 } },
    { name: "Julie", group: "./Picture/KOLLogo.png", role: "Lead Vocalist, Visual", season: "NEW GEN", img: "./Picture/Julie.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 98, visual: 95, fan: 97, viral: 99 } },
    { name: "Haneul", group: "./Picture/KOLLogo.png", role: "Lead Vocalist, Maknae", season: "NEW GEN", img: "./Picture/Haneul.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 80, dance: 92, visual: 100, fan: 99, viral: 99 } },
    // ILLIT
    { name: "Yunah", group: "./Picture/ILLITLogo.png", role: "Lead Vocalist, Lead Dancer", season: "NEW GEN", img: "./Picture/Yunah.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 85, dance: 99, visual: 98, fan: 98, viral: 99 } },
    { name: "Minju", group: "./Picture/ILLITLogo.png", role: "Main Vocalist", season: "NEW GEN", img: "./Picture/Minju.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 80, dance: 90, visual: 99, fan: 100, viral: 100 } },
    { name: "Moka", group: "./Picture/ILLITLogo.png", role: "Lead Dancer, Lead Rapper", season: "NEW GEN", img: "./Picture/Moka.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 90, rap: 78, dance: 98, visual: 100, fan: 98, viral: 99 } },
    { name: "Wonhee", group: "./Picture/ILLITLogo.png", role: "Sub Vocalist, Face of the Group, Center", season: "NEW GEN", img: "./Picture/Wonhee.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 92, visual: 100, fan: 100, viral: 100 } },
    { name: "Iroha", group: "./Picture/ILLITLogo.png", role: "Main Dancer", season: "NEW GEN", img: "./Picture/Iroha.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 92, rap: 85, dance: 98, visual: 98, fan: 97, viral: 99 } },
    // BABYMONSTER
    { name: "Ahyeon", group: "./Picture/BaemonLogo.png", role: "Main Vocalist, Main Rapper", season: "NEW GEN", img: "./Picture/Ahyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 98, dance: 95, visual: 100, fan: 100, viral: 100 } },
    { name: "Pharita", group: "./Picture/BaemonLogo.png", role: "Lead Vocalist", season: "NEW GEN", img: "./Picture/Pharita.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 95, rap: 80, dance: 90, visual: 100, fan: 98, viral: 99 } },
    { name: "Ruka", group: "./Picture/BaemonLogo.png", role: "Main Rapper, Lead Dancer", season: "NEW GEN", img: "./Picture/Ruka.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 85, rap: 99, dance: 98, visual: 95, fan: 97, viral: 98 } },
    { name: "Asa", group: "./Picture/BaemonLogo.png", role: "Lead Rapper, Lead Dancer", season: "NEW GEN", img: "./Picture/Asa.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 85, rap: 100, dance: 97, visual: 95, fan: 98, viral: 99 } },
    { name: "Rami", group: "./Picture/BaemonLogo.png", role: "Main Vocalist", season: "NEW GEN", img: "./Picture/Rami.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 85, dance: 92, visual: 97, fan: 96, viral: 96 } },
    { name: "Rora", group: "./Picture/BaemonLogo.png", role: "Lead Vocalist", season: "NEW GEN", img: "./Picture/Rora.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 100, rap: 78, dance: 90, visual: 97, fan: 97, viral: 98 } },
    { name: "Chiquita", group: "./Picture/BaemonLogo.png", role: "Vocalist, Maknae", season: "NEW GEN", img: "./Picture/Chiquita.jpg", flag: "./Picture/Thailand.jpg", stats: { vocal: 98, rap: 80, dance: 95, visual: 97, fan: 98, viral: 99 } },
    // MEOVV
    { name: "Ella", group: "./Picture/MeovvLogo.png", role: "Main Vocalist, Lead Dancer", season: "NEW GEN", img: "./Picture/Ella.jpg", flag: "./Picture/USA.jpg", stats: { vocal: 88, rap: 80, dance: 90, visual: 100, fan: 100, viral: 100 } },
    { name: "Gawon", group: "./Picture/MeovvLogo.png", role: "Lead Vocalist, Visual", season: "NEW GEN", img: "./Picture/Gawon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 95, dance: 98, visual: 97, fan: 95, viral: 96 } },
    { name: "Sooin", group: "./Picture/MeovvLogo.png", role: "Main Dancer, Vocalist", season: "NEW GEN", img: "./Picture/Sooin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 85, dance: 90, visual: 95, fan: 96, viral: 95 } },
    { name: "Anna", group: "./Picture/MeovvLogo.png", role: "Lead Rapper, Vocalist", season: "NEW GEN", img: "./Picture/Anna.jpg", flag: "./Picture/Japan.jpg", stats: { vocal: 95, rap: 80, dance: 92, visual: 100, fan: 98, viral: 97 } },
    { name: "Narin", group: "./Picture/MeovvLogo.png", role: "Main Rapper, Maknae", season: "NEW GEN", img: "./Picture/Narin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 85, dance: 95, visual: 96, fan: 94, viral: 95 } },
    // Girl's Day
    { name: "Sojin", group: "./Picture/GirlsDayLogo.png", role: "Leader, Lead Vocalist", season: "NATIONALLY", img: "./Picture/Sojin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 97, rap: 75, dance: 88, visual: 96, fan: 94, viral: 90 } }, 
    { name: "Yura", group: "./Picture/GirlsDayLogo.png", role: "Main Rapper, Main Dancer, Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Yura.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 98, dance: 97, visual: 100, fan: 97, viral: 99 } }, 
    { name: "Minah", group: "./Picture/GirlsDayLogo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/Minah.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 80, dance: 90, visual: 98, fan: 98, viral: 98 } }, 
    { name: "Hyeri", group: "./Picture/GirlsDayLogo.png", role: "Lead Dancer, Vocalist, Face of the Group, Maknae", season: "NATIONALLY", img: "./Picture/Hyeri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 95, dance: 90, visual: 99, fan: 99, viral: 99 } },
    // AOA
    { name: "Jimin", group: "./Picture/AOALogo.png", role: "Leader, Main Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/Jimin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 99, dance: 90, visual: 94, fan: 95, viral: 98 } },
    { name: "Choa", group: "./Picture/AOALogo.png", role: "Main Vocalist, Guitarist", season: "NATIONALLY", img: "./Picture/Choa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 75, dance: 85, visual: 96, fan: 97, viral: 98 } },
    { name: "Yuna", group: "./Picture/AOALogo.png", role: "Lead Vocalist, Keyboardist", season: "NATIONALLY", img: "./Picture/YunaAOA.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 78, dance: 88, visual: 96, fan: 94, viral: 92 } },
    { name: "Hyejeong", group: "./Picture/AOALogo.png", role: "Lead Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Hyejeong.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 80, dance: 95, visual: 98, fan: 96, viral: 95 } },
    { name: "Mina", group: "./Picture/AOALogo.png", role: "Bassist, Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/MinaAOA.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 78, dance: 85, visual: 97, fan: 93, viral: 90 } },
    { name: "Seolhyun", group: "./Picture/AOALogo.png", role: "Lead Dancer, Vocalist, Center", season: "NATIONALLY", img: "./Picture/Seolhyun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 78, dance: 90, visual: 100, fan: 99, viral: 99 } },
    { name: "Chanmi", group: "./Picture/AOALogo.png", role: "Main Dancer, Lead Rapper, Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Chanmi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 95, dance: 98, visual: 95, fan: 96, viral: 96 } },
    // Oh My Girl
    { name: "Hyojung", group: "./Picture/OhMyGirlLogo.png", role: "Leader, Main Vocalist", season: "NATIONALLY", img: "./Picture/Hyojung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 78, dance: 90, visual: 94, fan: 95, viral: 92 } },
    { name: "Mimi", group: "./Picture/OhMyGirlLogo.png", role: "Main Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/Mimi.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 99, dance: 92, visual: 94, fan: 96, viral: 98 } },
    { name: "YooA", group: "./Picture/OhMyGirlLogo.png", role: "Main Dancer, Lead Vocalist, Visual", season: "NATIONALLY", img: "./Picture/YooA.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 80, dance: 99, visual: 99, fan: 98, viral: 98 } },
    { name: "Seunghee", group: "./Picture/OhMyGirlLogo.png", role: "Main Vocalist, Face of the Group", season: "NATIONALLY", img: "./Picture/SeungheeOMG.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 98, rap: 78, dance: 90, visual: 95, fan: 96, viral: 95 } },
    { name: "Jiho", group: "./Picture/OhMyGirlLogo.png", role: "Lead Vocalist, Visual", season: "NATIONALLY", img: "./Picture/Jiho.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 94, rap: 80, dance: 95, visual: 98, fan: 96, viral: 97 } },
    { name: "Yubin", group: "./Picture/OhMyGirlLogo.png", role: "Vocalist", season: "NATIONALLY", img: "./Picture/YubinOMG.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 90, visual: 96, fan: 95, viral: 94 } },
    { name: "Arin", group: "./Picture/OhMyGirlLogo.png", role: "Lead Dancer, Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/Arin.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 80, dance: 96, visual: 100, fan: 99, viral: 99 } },
    // Weeekly
    { name: "Soojin", group: "./Picture/WeeeklyLogo.png", role: "Leader, Main Dancer, Lead Vocalist", season: "NATIONALLY", img: "./Picture/SoojinW.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 80, dance: 98, visual: 96, fan: 94, viral: 90 } },
    { name: "Jiyoon", group: "./Picture/WeeeklyLogo.png", role: "Main Rapper, Lead Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/JiyoonW.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 94, rap: 95, dance: 92, visual: 96, fan: 95, viral: 94 } },
    { name: "Monday", group: "./Picture/WeeeklyLogo.png", role: "Main Vocalist, Lead Dancer, Lead Rapper", season: "NATIONALLY", img: "./Picture/Monday.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 99, rap: 85, dance: 95, visual: 94, fan: 96, viral: 98 } },
    { name: "Soeun", group: "./Picture/WeeeklyLogo.png", role: "Main Dancer, Lead Vocalist", season: "NATIONALLY", img: "./Picture/Soeun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 93, rap: 80, dance: 99, visual: 95, fan: 94, viral: 96 } },
    { name: "Jaehee", group: "./Picture/WeeeklyLogo.png", role: "Lead Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/Jaehee.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 95, dance: 96, visual: 96, fan: 95, viral: 95 } },
    { name: "Jihan", group: "./Picture/WeeeklyLogo.png", role: "Lead Vocalist, Visual, Face of the Group", season: "NATIONALLY", img: "./Picture/Jihan.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 78, dance: 90, visual: 99, fan: 97, viral: 98 } },
    { name: "Zoa", group: "./Picture/WeeeklyLogo.png", role: "Vocalist, Rapper, Maknae", season: "NATIONALLY", img: "./Picture/Zoa.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 96, dance: 92, visual: 97, fan: 96, viral: 97 } },
    // Hearts2Hearts
    { name: "Jiwoo", group: "./Picture/H2HLogo.png", role: "Leader, Dancer, Visual", season: "NEW GEN", img: "./Picture/JiwooH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 82, dance: 88, visual: 85, fan: 84, viral: 86 } },
    { name: "Carmen", group: "./Picture/H2HLogo.png", role: "Vocalist", season: "NEW GEN", img: "./Picture/CarmenH2H.jpg", flag: "./Picture/Indonesia.jpg", stats: { vocal: 85, rap: 80, dance: 92, visual: 87, fan: 83, viral: 85 } },
    { name: "Yuha", group: "./Picture/H2HLogo.png", role: "Vocalist, Dancer", season: "NEW GEN", img: "./Picture/YuhaH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 81, dance: 86, visual: 86, fan: 82, viral: 84 } },
    { name: "Stella", group: "./Picture/H2HLogo.png", role: "Vocalist", season: "NEW GEN", img: "./Picture/StellaH2H.jpg", flag: "./Picture/Canada.jpg", stats: { vocal: 92, rap: 78, dance: 85, visual: 84, fan: 81, viral: 83 } },
    { name: "Juun", group: "./Picture/H2HLogo.png", role: "Main Dancer, Rapper", season: "NEW GEN", img: "./Picture/JuunH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 83, rap: 90, dance: 87, visual: 83, fan: 85, viral: 82 } },
    { name: "Ana", group: "./Picture/H2HLogo.png", role: "Lead Vocalist, Visual", season: "NEW GEN", img: "./Picture/AnaH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 80, rap: 88, dance: 84, visual: 82, fan: 84, viral: 81 } },
    { name: "Ian", group: "./Picture/H2HLogo.png", role: "Visual, Center", season: "NEW GEN", img: "./Picture/IanH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 86, rap: 82, dance: 89, visual: 90, fan: 86, viral: 87 } },
    { name: "Yeon", group: "./Picture/H2HLogo.png", role: "Vocalist, Maknae", season: "NEW GEN", img: "./Picture/YeonH2H.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 84, rap: 80, dance: 88, visual: 89, fan: 85, viral: 86 } },
    // Brown Eyed Girls
    { name: "JeA", group: "./Picture/BEGLogo.png", role: "Leader, Main Vocal", season: "NATIONALLY", img: "./Picture/Jea.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 95, rap: 70, dance: 78, visual: 80, fan: 78, viral: 80 } },
    { name: "Miryo", group: "./Picture/BEGLogo.png", role: "Main Rapper", season: "NATIONALLY", img: "./Picture/Miryo.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 70, rap: 92, dance: 75, visual: 78, fan: 75, viral: 82 } },
    { name: "Narsha", group: "./Picture/BEGLogo.png", role: "Lead Vocal", season: "NATIONALLY", img: "./Picture/Narsha.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 92, rap: 72, dance: 80, visual: 83, fan: 80, viral: 85 } },
    { name: "Gain", group: "./Picture/BEGLogo.png", role: "Maknae, Face of the Group", season: "NATIONALLY", img: "./Picture/Gain.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 75, dance: 85, visual: 90, fan: 85, viral: 90 } },
    // Fromis 9
    { name: "Saerom", group: "./Picture/Fromis9Logo.png", role: "Leader, Lead Dancer, Vocalist, Rapper, Visual", season: "NATIONALLY", img: "./Picture/F9Saerom.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 70, dance: 88, visual: 92, fan: 90, viral: 80 } },
    { name: "Hayoung", group: "./Picture/Fromis9Logo.png", role: "Co-Leader, Main Vocalist, Main Dancer", season: "NATIONALLY", img: "./Picture/F9Hayoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 88, rap: 75, dance: 90, visual: 89, fan: 88, viral: 85 } },
    { name: "Jiwon", group: "./Picture/Fromis9Logo.png", role: "Main Vocalist", season: "NATIONALLY", img: "./Picture/F9Jiwon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 90, rap: 80, dance: 87, visual: 88, fan: 89, viral: 88 } },
    { name: "Jisun", group: "./Picture/Fromis9Logo.png", role: "Lead Dancer, Vocalist, Center", season: "NATIONALLY", img: "./Picture/F9Jisun.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 87, rap: 72, dance: 85, visual: 90, fan: 87, viral: 82 } },
    { name: "Seoyeon", group: "./Picture/Fromis9Logo.png", role: "Main Rapper, Main Dancer, Vocalist", season: "NATIONALLY", img: "./Picture/F9Seoyeon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 84, rap: 78, dance: 89, visual: 87, fan: 86, viral: 81 } },
    { name: "Chaeyoung", group: "./Picture/Fromis9Logo.png", role: "Main Dancer, Lead Rapper, Vocalist", season: "NATIONALLY", img: "./Picture/F9Chaeyoung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 82, rap: 85, dance: 86, visual: 86, fan: 85, viral: 83 } },
    { name: "Nagyung", group: "./Picture/Fromis9Logo.png", role: "Lead Dancer, Vocalist, Rapper, Visual", season: "NATIONALLY", img: "./Picture/F9Nagyung.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 83, rap: 74, dance: 88, visual: 91, fan: 88, viral: 84 } },
    { name: "Jiheon", group: "./Picture/Fromis9Logo.png", role: "Vocalist, Maknae", season: "NATIONALLY", img: "./Picture/F9Jiheon.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 86, rap: 70, dance: 84, visual: 89, fan: 87, viral: 80 } },
    { name: "Gyuri", group: "./Picture/Fromis9Logo.png", role: "Lead Vocalist, Face of The Group", season: "NATIONALLY", img: "./Picture/F9Gyuri.jpg", flag: "./Picture/Korea.jpg", stats: { vocal: 85, rap: 72, dance: 83, visual: 90, fan: 89, viral: 85 } },
];
const card = document.getElementById("idol-card");
const name = card.querySelector(".name");
const group = card.querySelector(".group");
const role = card.querySelector(".role");
const season = card.querySelector(".season");
const avatar = card.querySelector(".avatar");
const country = card.querySelector(".country");
const vocal = card.querySelector(".vocal");
const rap = card.querySelector(".rap");
const dance = card.querySelector(".dance");
const visual = card.querySelector(".visual");
const fan = card.querySelector(".fan");
const viral = card.querySelector(".viral");
const btn = document.getElementById("open-btn");
const siu = document.getElementById("siu-btn");
const overall = card.querySelector(".overall");
idols.forEach(idol => {
    let stats = idol.stats;
    // Điều chỉnh chỉ số theo nhóm cụ thể
    if ( idol.group.includes("SNSD")) {
        stats.vocal += 13;
        stats.rap += 13;
        stats.visual += 13;
        stats.dance += 13;
        stats.fan += 13;
        stats.viral += 13;
    } 
    else if(idol.group.includes("Izone")) {
        stats.vocal += 15;
        stats.rap += 15;
        stats.visual += 15;
        stats.dance += 15;
        stats.fan += 20;
        stats.viral += 20; 
    }
    else if(idol.group.includes("Blackpink")) {
        stats.vocal += 7;
        stats.rap += 7;
        stats.visual += 7;
        stats.dance += 7;
        stats.fan += 9;
        stats.viral += 9; 
    }
    else if(idol.group.includes("RedVelvet")) {
        stats.vocal += 9;
        stats.rap += 9;
        stats.visual += 9;
        stats.dance += 9;
        stats.fan += 11;
        stats.viral += 11; 
    }
    else if(idol.group.includes("Twice")) {
        stats.vocal += 8;
        stats.rap += 8;
        stats.visual += 8;
        stats.dance += 8;
        stats.fan += 10;
        stats.viral += 10;
    } 
    else if(
        idol.group.includes("4Minute") ||
        idol.group.includes("Gidle") || 
        idol.group.includes("Ive") ||
        idol.group.includes("H2H") ||
        idol.group.includes("Fromis9")) {
            stats.vocal += 2;
            stats.rap += 2;
            stats.visual += 2;
            stats.dance += 2;
            stats.fan += 2;
            stats.viral += 2;
    }
    else if (
        idol.group.includes("BEG") 
        ) {
            stats.vocal += 4;
            stats.rap += 4;
            stats.visual += 4;
            stats.dance += 4;
            stats.fan += 2;
            stats.viral += 2;
        } 
    else if(
        idol.group.includes("Newjeans") || 
        idol.group.includes("Aespa") ||
        idol.group.includes("WG") ||
        idol.group.includes("Fx")
        ) {
            stats.vocal += 5;
            stats.rap += 5;
            stats.visual += 5;
            stats.dance += 5;
            stats.fan += 7;
            stats.viral += 7;
    } else if ( 
        idol.group.includes("Tara") ||
        idol.group.includes("2NE1")) {
            stats.vocal += 8;
            stats.rap += 8;
            stats.visual += 8;
            stats.dance += 8;
            stats.fan += 10;
            stats.viral += 10;
    }
    else if (
        idol.group.includes("LeSserafim") || 
        idol.group.includes("Gfriend")|| 
        idol.group.includes("Itzy") || 
        idol.group.includes("Sistar") ||
        idol.group.includes("Kara")) {
            stats.vocal += + 2;
            stats.rap += + 2;
            stats.visual += + 2;
            stats.dance += + 2;
            stats.fan += -1;
            stats.viral += -1;
    } 
    else if(
        idol.group.includes("Momoland") || 
        idol.group.includes("IOI") || 
        idol.group.includes("MissA")) {
            stats.vocal += -1;
            stats.rap += -1;
            stats.visual += -1;
            stats.dance += -1;
            stats.fan += -3;
            stats.viral += -3; 
    }
    else if (
        idol.group.includes("StayC") ||
        idol.group.includes("Baemon")|| 
        idol.group.includes("Nmixx") || 
        idol.group.includes("Kep1er") || 
        idol.group.includes("Apink") ) {
            stats.vocal += -2;
            stats.rap += -2;
            stats.visual += -2;
            stats.dance += -2;
            stats.fan += -6;
            stats.viral += -6;
    } else if ( 
        idol.group.includes("ILLIT")|| 
        idol.group.includes("Everglow")) {
            stats.vocal += -4;
            stats.rap += -4;
            stats.visual += -4;
            stats.dance += -4;
            stats.fan += -7;
            stats.viral += -7;
    } else if ( 
        idol.group.includes("Meovv") || 
        idol.group.includes("KOL") || 
        idol.group.includes("Loona") ||
        idol.group.includes("GirlsDay") ||
        idol.group.includes("AOA") ||
        idol.group.includes("OhMyGirl") || 
        idol.group.includes("Exid")) {
            stats.vocal += -4;
            stats.rap += -4;
            stats.visual += -4;
            stats.dance += -4;
            stats.fan += -8;
            stats.viral += -8;
    } else if (
        idol.group.includes("Mamamoo")) {
            stats.vocal += + 2;
            stats.rap += + 2;
            stats.visual += + 2;
            stats.dance += + 2;
            stats.fan += + 3;
            stats.viral += + 3;
    } else {
            stats.vocal += -4;
            stats.rap += -4;
            stats.visual += -4;
            stats.dance += -4;
            stats.fan += -7;
            stats.viral += -7;
    }
    // Đảm bảo không có chỉ số nào vượt quá 100 (giới hạn tối đa)
    stats.vocal = Math.min(stats.vocal, 100);
    stats.rap = Math.min(stats.rap, 100);
    stats.dance = Math.min(stats.dance, 100);
    stats.visual = Math.min(stats.visual, 100);
    stats.fan = Math.min(stats.fan, 100);
    stats.viral = Math.min(stats.viral, 100);
    // Cập nhật overall sau khi chỉnh sửa chỉ số
    stats.overall = Math.round(
        (stats.vocal + stats.rap + stats.dance + stats.visual + (stats.fan * 2) + (stats.viral * 2)) / 8
    );
});
function applyEffect(card) {
    setTimeout(() => {
        card.classList.add("show-image");
    }, 50);
}
function openCard() {
    applyEffect(card);
    playMusic();
    resetCard();
    btn.disabled = true;
    siu.disabled = true;
    const randomIdol = idols[Math.floor(Math.random() * idols.length)];
    card.classList.remove("glow-gold", "glow-pink", "glow-white", "glow-blue", "glow-purple", "glow-black");
    if (randomIdol.season.includes("ICONS")) {
        card.classList.add("glow-gold"); // Sáng vàng
    } else if (randomIdol.season.includes("IZ*ONE SPECIAL")) {
        card.classList.add("glow-pink"); // Sáng hồng
    } else if (randomIdol.season.includes("NEW GEN")) {
        card.classList.add("glow-white"); // Sáng trắng
    } else if (randomIdol.season.includes("UNSUNG IDOLS")) {
        card.classList.add("glow-blue"); // Sáng xanh
    } else if (randomIdol.season.includes("NATIONALLY")) {
        card.classList.add("glow-purple"); // Sáng tím
    } else if (randomIdol.season.includes("TOP STARS")) {
        card.classList.add("glow-black"); // Sáng đen
    }
    setTimeout(() => {
        country.src = randomIdol.flag;
        country.classList.add("show-image");}, 2000);
    setTimeout(() => {
        role.innerText = randomIdol.role;
        role.classList.add("show");
    }
    , 6000);
    setTimeout(() => {
        season.innerText = randomIdol.season;
        season.classList.add("show");
    }, 4000);
    setTimeout(() => {
        vocal.innerText = `🎤 Vocal: ${randomIdol.stats.vocal}`;
        vocal.classList.add("show");
        rap.innerText = `🎧 Rap: ${randomIdol.stats.rap}`;
        rap.classList.add("show");
        dance.innerText = `💃 Dance: ${randomIdol.stats.dance}`;
        dance.classList.add("show");
        visual.innerText = `🌟 Visual: ${randomIdol.stats.visual}`;
        visual.classList.add("show");
        fan.innerText = `👥 Fan: ${randomIdol.stats.fan}`;
        fan.classList.add("show");
        viral.innerText = `🔥 Viral: ${randomIdol.stats.viral}`;
        viral.classList.add("show");
        overall.innerText =  randomIdol.stats.overall;
        overall.classList.add("show");
    }, 6000);
    setTimeout(() => {
        group.src = randomIdol.group;
        group.classList.add("show-image");
    }, 8000);
    setTimeout(() => {
        name.innerText = randomIdol.name;
        name.classList.add("show");
        avatar.src = randomIdol.img;
        avatar.classList.add("show-image");
        btn.disabled = false;
        siu.disabled = false;
    }, 10000);
}
function resetCard() {
    name.innerText = "Idol Kpop";
    group.src = "./Picture/WhiteBG.jpg";
    role.innerText = "Role";
    season.innerText = "Season";
    avatar.src = "./Picture/AvatarNoFace.jpg";
    country.src = "./Picture/WhiteBG.jpg";
    vocal.innerText = "🎤 Vocal: N/A";
    rap.innerText = "🎧 Rap: N/A";
    dance.innerText = "💃 Dance: N/A";
    visual.innerText = "🌟 Visual: N/A";
    fan.innerText = "👥 Fan: N/A";
    viral.innerText = "🔥 Viral: N/A";
    document.querySelectorAll(".show, .show-image").forEach(el => el.classList.remove("show", "show-image"));
}
// Nhạc nền khi mở thẻ
const audio = new Audio("./Music/AiLaTrieuPhu.mp3");
function playMusic() {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Reset nhạc về đầu
    }
    if (!vitas.paused) {
        vitas.pause();
        vitas.currentTime = 0; // Reset nhạc về đầu
    }
    audio.play();
}
let vitas = new Audio("./Music/vitas_7th_element.mp3");
function openCongratulation() {
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
    vitas.play();
}
const seasonRates = {
    "IZ*ONE SPECIAL": 0.000001, // 0.000001%
    "ICONS": 0.1, // 0.1%
    "TOP STARS": 0.1, // 0.1%
    "NEW GEN": 21.03, // 21.03%
    "UNSUNG IDOLS": 38.90, // 38.90%
    "NATIONALLY": 39.87 // 39.87%
};
const groupRatesBySeason = {
    "IZ*ONE SPECIAL": { 
        "IZ*ONE": 1.0 
    },  // Chỉ có IZ*ONE thôi nên 100%
    "ICONS": {
        "Blackpink": 0.1, 
        "Twice": 0.1, 
        "Red Velvet": 0.1, 
        "SNSD": 0.1, 
        "T-ara": 0.1,
        "2NE1": 0.1,
        "Wonder Girls": 0.2,
        "Mamamoo": 0.2,
    },
    "TOP STARS": {
        "ITZY": 0.2, 
        "Aespa": 0.1, 
        "NewJeans": 0.2, 
        "IVE": 0.2, 
        "LE SSERAFIM": 0.1,
        "(G)I-DLE": 0.2
    },
    "NEW GEN": {
        "Kiss Of Life": 0.2,
        "ILLIT": 0.2,
        "Baemon": 0.2,
        "Meovv": 0.2,
        "Hearts2Hearts": 0.2
    },
    "UNSUNG IDOLS": {
        "Miss A": 0.05,
        "Sistar": 0.1,
        "EXID": 0.05,
        "Everglow": 0.1,
        "Momoland": 0.1,
        "Apink": 0.05,
        "Kep1er": 0.1,
        "F(x)": 0.05,
        "Nmixx": 0.1,
        "4Minute": 0.1,
        "Gfriend": 0.1,
        "I.O.I": 0.1
    },
    "NATIONALLY": {
        "KARA": 0.075,
        "After School": 0.1,
        "Secret": 0.1,
        "CLC": 0.5,
        "Oh My Girl": 0.075,
        "AOA": 0.075,
        "Weeekly": 0.075,
        "Girl's Day": 0.075,
        "Dreamcatcher": 0.5,
        "WJSN": 0.075,
        "Loona": 0.075,
        "StayC": 0.075,
        "Brown Eyed Girls": 0.5,
        "Fromis 9": 0.5
    }
};
function mapImageToGroup(imagePath) {
    const mapping = {
        "./Picture/IzoneLogo.png": "IZ*ONE",
        "./Picture/BlackpinkLogo.png": "Blackpink",
        "./Picture/TwiceLogo.png": "Twice",
        "./Picture/RedVelvetLogo.png": "Red Velvet",
        "./Picture/SNSDLogo.png": "SNSD",
        "./Picture/TaraLogo.png": "T-ara",
        "./Picture/AespaLogo.png": "Aespa",
        "./Picture/ItzyLogo.png": "ITZY",
        "./Picture/NewjeansLogo.png": "NewJeans",
        "./Picture/IveLogo.png": "IVE",
        "./Picture/LeSserafimLogo.png": "LE SSERAFIM",
        "./Picture/GidleLogo.png": "(G)I-DLE",
        "./Picture/KaraLogo.png": "KARA",
        "./Picture/AfterSchoolLogo.png": "After School",
        "./Picture/SecretLogo.png": "Secret",
        "./Picture/CLCLogo.png": "CLC",
        "./Picture/OhMyGirlLogo.png": "Oh My Girl",
        "./Picture/AOALogo.png": "AOA",
        "./Picture/WeeeklyLogo.png": "Weeekly",
        "./Picture/GirlsDayLogo.png": "Girl's Day",
        "./Picture/WGLogo.png": "Wonder Girls",
        "./Picture/ExidLogo.png": "EXID",
        "./Picture/DCLogo.png": "Dreamcatcher",
        "./Picture/WJSNLogo.png": "WJSN",
        "./Picture/LoonaLogo.png": "Loona",
        "./Picture/KOLLogo.png": "Kiss Of Life",
        "./Picture/MeovvLogo.png": "Meovv",
        "./Picture/StayCLogo.png": "StayC",
        "./Picture/EverglowLogo.png": "Everglow",
        "./Picture/MomolandLogo.png": "Momoland",
        "./Picture/ApinkLogo.png": "Apink",
        "./Picture/ILLITLogo.png": "ILLIT",
        "./Picture/Kep1erLogo.png": "Kep1er",
        "./Picture/SistarLogo.png": "Sistar",
        "./Picture/FxLogo.png": "F(x)",
        "./Picture/NmixxLogo.png": "Nmixx",
        "./Picture/MissALogo.png": "Miss A",
        "./Picture/4MinuteLogo.png": "4Minute",
        "./Picture/MamamooLogo.png": "Mamamoo",
        "./Picture/GfriendLogo.png": "Gfriend",
        "./Picture/IOILogo.png": "I.O.I",
        "./Picture/BaemonLogo.png": "Baemon",
        "./Picture/2NE1Logo.png": "2NE1",
        "./Picture/H2HLogo.png": "Hearts2Hearts",
        "./Picture/BEGLogo.png": "Brown Eyed Girls",
        "./Picture/Fromis9Logo.png": "Fromis 9",
    };
    return mapping[imagePath] || null;
}
function getRandomSeason() {
    let rand = Math.random();
    let cumulative = 0;

    for (const [season, rate] of Object.entries(seasonRates)) {
        cumulative += rate;
        if (rand < cumulative) return season;
    }
    return null; // Tránh lỗi
}
function getRandomGroup(season) {
    const groupRates = groupRatesBySeason[season];
    if (!groupRates) return null; // Nếu mùa không có nhóm thì bỏ qua
    
    let rand = Math.random(); // Random từ 0 đến 1
    let cumulative = 0;

    for (const [group, rate] of Object.entries(groupRates)) {
        cumulative += rate;
        if (rand < cumulative) {
            return group;
        }
    }
    return null; // Nếu có lỗi
}
const seasonChoice = getRandomSeason(); // Lấy mùa thẻ
const groupChoice = getRandomGroup(seasonChoice); // Lấy nhóm theo mùa
const idolsInGroup = idols.filter(idol => mapImageToGroup(idol.group) === groupChoice && idol.season === seasonChoice);
const selectedIdol = idolsInGroup[Math.floor(Math.random() * idolsInGroup.length)]; // Random idol từ nhóm
function calculateIdolRates(idols) {
    const idolRates = [];
    const seasonCount = {};
    // Đếm số idol trong mỗi season
    idols.forEach(idol => {
        const season = idol.season;
        if (!seasonCount[season]) {
            seasonCount[season] = 0;
        }
        seasonCount[season]++;
    });
    idols.forEach(idol => {
        const season = idol.season;
        const seasonRate = seasonRates[season] || 0; // Nếu không có trong danh sách, mặc định 0%
        const idolsInSeason = seasonCount[season] || 1; // Tránh chia cho 0
        const idolRate = seasonRate / idolsInSeason; // Chia đều tỉ lệ cho từng idol trong season
        idolRates.push({ idol, rate: idolRate });
    });
    return idolRates;
}
function getRandomIdol(idols) {
    const idolRates = calculateIdolRates(idols);
    let cumulativeRates = [];
    let sum = 0;
    idolRates.forEach(entry => {
        sum += entry.rate;
        cumulativeRates.push({ idol: entry.idol, cumulativeRate: sum });
    });
    let random = Math.random() * sum;
    for (let entry of cumulativeRates) {
        if (random < entry.cumulativeRate) {
            return entry.idol;
        }
    }
    return null;
}