
function initDropdownList(id, min, list) {
    var select, i, option;

    select = document.getElementById(id);
    for (i = min; i <= list.length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[i];
        select.add(option);
    }
}
function initDropdownList1(id, min, list) {
    var select, i, option;
    var s = document.forms[0].region.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
function initDropdownList2(id, min, list) {
    var select, i, option;
    var s = document.forms[0].lga.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
function initDropdownList3(id, min, list) {
    var select, i, option;
    var s = document.forms[0].extraction_type.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
function initDropdownList5(id, min, list) {
    var select, i, option;
    var s = document.forms[0].management_group.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
function initDropdownList6(id, min, list) {
    var select, i, option;
    var s = document.forms[0].payment.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
var basin = ['Lake Nyasa', 'Lake Victoria', 'Pangani', 'Ruvuma / Southern Coast',
    'Internal', 'Lake Tanganyika', 'Wami / Ruvu', 'Rufiji', 'Lake Rukwa'];
var region = ['Iringa', 'Mara', 'Manyara', 'Mtwara', 'Kagera', 'Tanga',
    'Shinyanga', 'Tabora', 'Pwani', 'Ruvuma', 'Kilimanjaro',
    'Rukwa', 'Mwanza', 'Kigoma', 'Lindi', 'Dodoma', 'Arusha', 'Mbeya',
    'Singida', 'Morogoro', 'Dar es Salaam'];
var region_code = {
    'Arusha': [2, 24], 'Dar es Salaam': [7], 'Dodoma': [1],
    'Iringa': [11], 'Kagera': [18], 'Kigoma': [16],
    'Kilimanjaro': [3], 'Lindi': [8, 18, 80], 'Manyara': [21],
    'Mara': [20], 'Mbeya': [12], 'Morogoro': [5], 'Mtwara': [9, 90, 99],
    'Mwanza': [17, 19], 'Pwani': [6, 40, 60], 'Rukwa': [15],
    'Ruvuma': [10], 'Shinyanga': [11, 14, 17], 'Singida': [13],
    'Tabora': [14], 'Tanga': [4, 5]
};
var district_code = {
    'Arusha': [1, 2, 3, 5, 6, 7, 30],
    'Dar es Salaam': [1, 2, 3],
    'Dodoma': [0, 1, 3, 4, 5, 6],
    'Iringa': [1, 2, 3, 4, 5, 7],
    'Kagera': [1, 2, 3, 4, 6, 7, 8, 30],
    'Kigoma': [1, 2, 3, 4],
    'Kilimanjaro': [1, 2, 3, 4, 5, 6, 7],
    'Lindi': [1, 2, 3, 13, 23, 43, 53, 62],
    'Manyara': [1, 2, 3, 4, 5],
    'Mara': [1, 2, 3, 4, 6],
    'Mbeya': [1, 2, 3, 4, 5, 6, 7],
    'Morogoro': [1, 2, 3, 4, 5, 6],
    'Mtwara': [1, 4, 5, 33, 63],
    'Mwanza': [1, 2, 3, 4, 5, 6, 7, 8],
    'Pwani': [1, 2, 3, 4, 6, 33, 43, 53, 60, 63, 67],
    'Rukwa': [1, 2, 3, 4],
    'Ruvuma': [1, 2, 3, 4, 5],
    'Shinyanga': [1, 2, 3, 4, 5, 6, 7, 8, 80],
    'Singida': [1, 2, 3, 4],
    'Tabora': [1, 2, 3, 4, 5, 6],
    'Tanga': [1, 2, 3, 4, 5, 6, 7, 8]
};
var lga = {
    'Arusha': ['Arusha Rural', 'Arusha Urban', 'Karatu', 'Longido', 'Meru', 'Monduli', 'Ngorongoro'],
    'Dar es Salaam': ['Ilala', 'Kinondoni', 'Temeke'],
    'Dodoma': ['Bahi', 'Chamwino', 'Dodoma Urban', 'Kondoa', 'Kongwa', 'Mpwapwa'],
    'Iringa': ['Iringa Rural', 'Kilolo', 'Ludewa', 'Makete', 'Mufindi', 'Njombe'],
    'Kagera': ['Biharamulo', 'Bukoba Rural', 'Bukoba Urban', 'Chato', 'Karagwe', 'Misenyi', 'Muleba', 'Ngara'],
    'Kigoma': ['Kasulu', 'Kibondo', 'Kigoma Rural', 'Kigoma Urban'],
    'Kilimanjaro': ['Hai', 'Moshi Rural', 'Moshi Urban', 'Mwanga', 'Rombo', 'Same', 'Siha'],
    'Lindi': ['Kilwa', 'Lindi Rural', 'Lindi Urban', 'Liwale', 'Nachingwea', 'Ruangwa'],
    'Manyara': ['Babati', 'Hanang', 'Kiteto', 'Mbulu', 'Simanjiro'],
    'Mara': ['Bunda', 'Musoma Rural', 'Rorya', 'Serengeti', 'Tarime'],
    'Mbeya': ['Chunya', 'Ileje', 'Kyela', 'Mbarali', 'Mbeya Rural', 'Mbozi', 'Rungwe'],
    'Morogoro': ['Kilombero', 'Kilosa', 'Morogoro Rural', 'Morogoro Urban', 'Mvomero', 'Ulanga'],
    'Mtwara': ['Masasi', 'Mtwara Rural', 'Mtwara Urban', 'Nanyumbu', 'Newala', 'Tandahimba'],
    'Mwanza': ['Geita', 'Ilemela', 'Kwimba', 'Magu', 'Missungwi', 'Nyamagana', 'Sengerema', 'Ukerewe'],
    'Pwani': ['Bagamoyo', 'Kibaha', 'Kisarawe', 'Mafia', 'Mkuranga', 'Rufiji'],
    'Rukwa': ['Mpanda', 'Nkasi', 'Sumbawanga Rural', 'Sumbawanga Urban'],
    'Ruvuma': ['Mbinga', 'Namtumbo', 'Songea Rural', 'Songea Urban', 'Tunduru'],
    'Shinyanga': ['Bariadi', 'Bukombe', 'Kahama', 'Kishapu', 'Maswa', 'Meatu', 'Shinyanga Rural', 'Shinyanga Urban'],
    'Singida': ['Iramba', 'Manyoni', 'Singida Rural', 'Singida Urban'],
    'Tabora': ['Igunga', 'Nzega', 'Sikonge', 'Tabora Urban', 'Urambo', 'Uyui'],
    'Tanga': ['Handeni', 'Kilindi', 'Korogwe', 'Lushoto', 'Mkinga', 'Muheza', 'Pangani', 'Tanga']
}
var ward = {
    "Arusha Rural": ["Bangata", "Bwawani", "Ilkiding'a", "Kimnyaki", "Kiranyi", "Kisongo", "Mateves", "Mlangarini", "Moivo", "Moshono", "Murieti", "Musa", "Mwandeti", "Nduruma", "Oldonyosambu", "Oljoro", "Olkokola", "Oltroto", "Oltrumet", "Sokoni II"],
    "Arusha Urban": ["Baraa", "Daraja Mbili", "Elerai", "Engutoto", "Kaloleni", "Kimandolu", "Lemara", "Levolosi", "Ngarenaro", "Olorien", "Sekei", "Sokon I", "Sombetini", "Terrat", "Themi", "Unga Ltd"],
    "Babati": ["Arri", "Bashinet", "Bonga", "Dabil", "Dareda", "Duru", "Gidas", "Madunga", "Magara", "Magugu", "Mamire", "Mwada", "Nkaiti", "Qash", "Riroda", "Sigino", "Ufana"],
    "Bagamoyo": ["Chalinze", "Dunda", "Kibindu", "Kiromo", "Kiwangwa", "Lugoba", "Magomeni", "Mbwewe", "Miono", "Mkange", "Msata", "Talawanda", "Ubenazamozi", "Vigwaza", "Yombo", "Zinga/Ikerege"],
    "Bahi": ["Babayu", "Bahi", "Chali", "Chibelela", "Chikola", "Chipanga", "Ibihwa", "Ibugule", "Ilindi", "Kigwe", "Lamaiti", "Makanda", "Mpalanga", "Mpamantwa", "Msisi", "Mtitaa", "Mundemu", "Mwitikira", "Nondwa", "Zanka"],
    "Bariadi": ["Bariadi", "Bumera", "Bunamhala", "Chinamili", "Dutwa", "Gamboshi", "Ikungulyabashashi", "Kasoli", "Kinang'weli", "Lagangabilili", "Lugulu", "Mbita", "Mhango", "Mhunze", "Mwadobana", "Mwamapalala", "Mwaswale", "Mwaubingi", "Nkololo", "Nkoma", "Nyakabindi", "Sagata", "Sakwe", "Sapiwi", "Somanda", "Zagayu"],
    "Biharamulo": ["Biharamulo Urban", "Kalenge", "Lusahunga", "Nyabusozi", "Nyakahura", "Nyamigogo", "Nyarubungo", "Runazi"],
    "Bukoba Rural": ["Buhendangabo", "Bujugo", "Buterankuzi", "Ibwera", "Izimbya", "Kaagya", "Kabaragaine", "Kaibanja", "Kanyangereko", "Kasharu", "Katerero", "Katoma", "Katoro", "Kibirizi", "Kikomero", "Kishanje", "Kyamuraile", "Maruku", "Mikoni", "Nyakato", "Nyakibimbili", "Rubafu", "Rubale", "Ruhunga"],
    "Bukoba Urban": ["Bukembe", "Ijunganyondo", "Kagondo", "Kahororo", "Kibeta", "Kitendaguru", "Nishambya", "Nyanga"],
    "Bukombe": ["Budakwa", "Bukombe", "Ikunguigazi", "Ilolangulu", "Iponya", "Iyogela", "Lugunga", "Masumbwe", "Mbogwe", "Nyasato", "Runzewe", "Ushirika", "Ushirombo", "Uyovu"],
    "Bunda": ["Bunda", "Butimba", "Hunyari", "Igundu", "Iramba", "Kabasa", "Kibara", "Kisorya", "Mcharo", "Nansimo", "Neruma", "Nyamhula", "Nyamuswa", "Salama", "Sazira", "Wariku"],
    "Chamwino": ["Chilionwa", "Chinugulu", "Dabalo", "Fufu", "Handali", "Haneti", "Huzi", "Idifu", "Igandu", "Ikowa", "Iringa Mvumi", "Itiso", "Majeleko", "Makang'wa", "Manchali", "Manda", "Manzase", "Membe", "Mlowa Bwawani", "Mphwayungu", "Msamalo", "Muungano", "Mvumi Makulu", "Mvumi Mission", "Nghambaku", "Segala"],
    "Chato": ["Bukome", "Buseresere", "Buziku", "Bwanga", "Bwera", "Chato", "Ichwankima", "Ilemela", "Kachwamba", "Katende", "Kigongo", "Makurugusi", "Muganza", "Nyamirembe"],
    "Chunya": ["Chalangwa", "Chokaa", "Galula", "Gua", "Ifumbo", "Itewe", "Kambikatoto", "Kanga", "Kapalala", "Lupa tingatinga", "Luwalaje", "Mafyeko", "Makongorosi", "Mamba", "Matwiga", "Mbangala", "Mbugani", "Mbuyuni", "Mkwajuni", "Mtanila", "Ngwala"],
    "Dodoma Urban": ["Chihanga", "Hombolo", "Ipala", "Kikombo", "Makutopora", "Mbabala", "Mbalawala", "Mkonze", "Mpunguzi", "Msalato", "Mtumba", "Nala", "Ngh'ong'ona", "Nzuguni", "Tambuka Reli", "Zuzu"],
    "Geita": ["Bukoli", "Bukondo", "Bukwimba", "Busanda", "Busolwa", "Chigunga", "Ihanamilo", "Kafita", "Kagu", "Kakora", "Kalangalala", "Kamena", "Kamhanga", "Kasamwa", "Kaseme", "Katoro", "Kharumwa", "Lubanga", "Lwamgasa", "Mtakuja", "Mwingiro", "Nkome", "Nyachiluluma", "Nyakagomba", "Nyakamwaga", "Nyamalimbe", "Nyang'hwale", "Nyugwa", "Nzera", "Senga", "Shabaka"],
    "Hai": ["Hai Urban", "Machame Kaskazini", "Machame Kusini", "Machame Magharibi", "Machame Mashariki", "Machame Uroki", "Masama Kusini", "Masama Magharibi", "Masama Mashariki", "Masama Rundugai"],
    "Hanang": ["Balangidalalu", "Bassodesh", "Bassotu", "Endasak", "Gehandu", "Gendabi", "Gidahababieg", "Gisambalang", "Gitting", "Hidet", "Hirbadaw", "Laghanga", "Masakta", "Masqaroda", "Measkron", "Mogitu", "Nangwa", "Simbay", "Sirop"],
    "Handeni": ["Chanika", "Kabuku", "Kiva", "Komkonga", "Kwaluguru", "Kwamatuku", "Kwamkonje", "Kwamsisi", "Kwasunga", "Kwedizinga", "Mazingara", "Mgambo", "Misima", "Mkata", "Ndolwa", "Segera", "Sindeni", "Vibaoni"],
    "Igunga": ["Bukoko", "Chabutwa", "Choma", "Igoweko", "Igunga", "Igurubi", "Isakamaliwa", "Itumba", "Itunduru", "Kining'inila", "Kinungu", "Mbutu", "Mwamashiga", "Mwashiku", "Mwisi", "Nanga", "Ndembezi", "Ngulu", "Nguvu Moja", "Nkinga", "Ntobo", "Nyandekwa", "Simbo", "Sungwisi", "Ziba"],
    "Ilala": ["Chanika", "Kinyerezi", "Kitunda", "Msongola", "Pugu"],
    "Ileje": ["Bupigu", "Chitete", "Ikinga", "Isongole", "Itumba", "Kafule", "Luswisi", "Malangali", "Mbebe", "Ndola"],
    "Ilemela": ["Bugogwe", "Buhongwa", "Buswelu", "Butimba", "Ilemela", "Mkolani", "Nyakato", "Pasiansi", "Sangabuye"],
    "Iramba": ["Gumanga", "Ibaga", "Iguguno", "Ilunda", "Kaselya", "Kasiriri", "Kidaru", "Kinampanda", "Kinyagiri", "Kiomboi", "Kyengege", "Mbelekese", "Mdago", "Mpambala", "Msingi", "Mtekente", "Mtoa", "Mwanga", "Mwangaza", "Nduguti", "Nkinto", "Ntwike", "Shelui", "Tulya", "Ulemo", "Urughu"],
    "Iringa Rural": ["Idodi", "Ifunda", "Ilolo Mpya", "Itunundu", "Izazi", "Kalenga", "Kihorogota", "Kiwere", "Lumuli", "Maboga", "Magulilwa", "Mahuninga", "Malenga Makali", "Mgama", "Mlowa", "Mseke", "Nduli", "Nzihi", "Ulanda", "Wasa"],
    "Kahama": ["Bugarama", "Bulige", "Bulungwa", "Busangi", "Chambo", "Chela", "Chona", "Idahina", "Igwamanoni", "Isagehe", "Isaka", "Jana", "Kahama Urban", "Kilago", "Kinaga", "Kinamapula", "Kisuke", "Lunguya", "Malunga", "Mhongolo", "Mpunze", "Mwendakulima", "Ngaya", "Ngongwa", "Ntobo", "Nyandekwa", "Segese", "Ukune", "Ulowa", "Ushetu", "Uyogo", "Zongomera"],
    "Karagwe": ["Bugene", "Bugomora", "Bweranyange", "Igurwa", "Ihanda", "Ihembe", "Isingiro", "Kaisho", "Kamuli", "Kayanga", "Kibingo", "Kibondo", "Kihanga", "Kimuli", "Kiruruma", "Kituntu", "Kyerwa", "Mabira", "Murongo", "Ndama", "Nkwenda", "Nyabiyonza", "Nyaishozi", "Nyakahanga", "Nyakakika", "Nyakasimbi", "Rugu", "Rwabere"],
    "Karatu": ["Barray", "Daa", "Endabash", "Kansay", "Karatu", "Mang'ola", "Mbulumbulu", "Oldeani", "Qurus", "Rhotia"],
    "Kasulu": ["Buhigwe", "Buhoro", "Heru- Ushingo", "Janda", "Kagera Nkanda", "Kigondo", "Kilelema", "Kitagata", "Kitanga", "Msambara", "Muhinda", "Muhunga", "Munyegera", "Munzenze", "Murufiti", "Muyama", "Muzye", "Nyakitonto", "Nyamidaho", "Nyamnyusi", "Ruhita", "Rungwe Mpya", "Rusaba", "Rusesa", "Titye"],
    "Kibaha": ["Kibaha", "Kwala", "Magindu", "Mailimoja", "Mlandizi", "Ruvu", "Soga", "Tumbi", "Visiga"],
    "Kibondo": ["Bunyambo", "Busagara", "Gwanumpu", "Itaba", "Kakonko", "Kasanda", "Kasuga", "Kazazi", "Kibondo Urban", "Kitahana", "Kumsenga", "Mabamba", "Misezero", "Mugunzu", "Muhange", "Murungu", "Nyabibuye", "Nyamtukuza", "Rugenge", "Rugongowe"],
    "Kigoma Rural": ["Bitale", "Ilagala", "Kagongo", "Kalinzi", "Kandaga", "Mahembe", "Matendo", "Mganza", "Mkigo", "Mngonya", "Mtego wa Noti", "Mwamgongo", "Mwandiga", "Nguruka", "Simbo", "Sunuka", "Uvinza"],
    "Kigoma Urban": ["Bangwe", "Buhanda businde", "Gungu", "Kasimbu", "Kasingirima", "Kitongoni", "Machinjioni", "Majengo", "Mwanga Kaskazini", "Rubuga", "Rusimbi"],
    "Kilindi": ["Jaila", "Kikunde", "Kimbe", "Kisangasa", "Kwediboma", "Masagalu", "Mkindi", "Msanja", "Mvungwe", "Negero", "Pangwi", "Saunyi"],
    "Kilolo": ["Boma la ng'ombe", "Dabaga", "Idete", "Ilula", "Image", "Irole", "Mahenge", "Mtitu", "Udekwa", "Uhambingeto", "Ukumbi", "Ukwega"],
    "Kilombero": ["Chisano", "Chita", "Idete", "Ifakara", "Kibaoni", "Kiberege", "Kidatu", "Kisawasawa", "Lumemo", "Mang'ula", "Masagati", "Mbingu", "Mchombe", "Mkula", "Mlimba", "Mofu", "Sanje", "Uchindile", "Utengule"],
    "Kilosa": ["Berega", "Chakwale", "Chanzuru", "Dumila", "Gairo", "Iyogwe", "Kibedya", "Kidete", "Kidodi", "Kilangali", "Kimamba A", "Kimamba B", "Kisanga", "Lumbiji", "Lumuma", "Mabwerebwere", "Magole", "Magubike", "Malolo", "Mamboya", "Masanze", "Mikumi", "Msowero", "Rubeho", "Rudewa", "Ruhembe", "Ulaya", "Zombo"],
    "Kilwa": ["Chumo", "Kandawale", "Kikole", "Kinjumbi", "Kipatimu", "Kiranjeranje", "Kivinje Singino", "Lihimalyo", "Likawage", "Mandawa", "Masoko", "Miguruwe", "Mingumbi", "Miteja", "Mitole", "Nanjirinji", "Njinjo", "Pande", "Songosongo", "Tingi"],
    "Kinondoni": ["Bunju", "Goba", "Kibamba", "Kunduchi", "Mbezi", "Mbweni"],
    "Kisarawe": ["Cholesamvula", "Kibuta", "Kiluvya", "Kisarawe", "Kurui", "Mafinzi", "Maneromango", "Marui", "Marumbo", "Masaki", "Msanga", "Msimbu", "Mzenga", "Vihingo", "Vikumbulu"],
    "Kishapu": ["Bubiki", "Bugoro", "Bunambiu", "Itilima", "Kiloleli", "Kishapu", "Lagana", "Masanga", "Mondo", "Mwadui Lohumbo", "Mwakipoya", "Mwamalasa", "Mwamashele", "Ngofila", "Shagihilu", "Songwa", "Talaga", "Uchunga", "Ukenyenge"],
    "Kiteto": ["Bwagamoyo", "Dongo", "Dosidosi", "Engusero", "Kibaya", "Kijungu", "Lengatei", "Makame", "Matui", "Ndedo", "Njoro", "Olbolot", "Partimbo", "Songambele", "Sunya"],
    "Kondoa": ["Bereko", "Bumbuta", "Busi", "Chandama", "Changaa", "Chemba", "Dalai", "Farkwa", "Goima", "Gwandi", "Haubi", "Jangalo", "Kalamba", "Kikore", "Kingale", "Kisese", "Kolo", "Kwadelo", "Kwamtoro", "Lalta", "Makorongo", "Masange", "Mnenia", "Mondo", "Mpendo", "Mrijo", "Ovada", "Pahi", "Paranga", "Sanzawa", "Soera", "Suruke", "Thawi"],
    "Kongwa": ["Chamkoroma", "Hogoro", "Iduo", "Kibaigwa", "Kongwa Urban", "Mkoka", "Mlali", "Mtanana", "Njoge", "Pandambili", "Sagara", "Sejeli", "Ugogoni", "Zoissa"],
    "Korogwe": ["Bungu", "Chekelei", "Dindira", "Kerenge", "Kizara", "Korogwe", "Kwagunda", "Kwamndolwa", "Lutindi", "Magoma", "Makuyuni", "Mashewa", "Mazinde", "Mkalamo", "Mkomazi", "Mnyuzi", "Mombo", "Msambiazi", "Ngombezi", "Vugiri"],
    "Kwimba": ["Bungulwa", "Bupamwa", "Fukalo", "Hungumalwa", "Igongwa", "Iseni", "Kikubiji", "Lyoma", "Maligisu", "Malya", "Mantare", "Mhande", "Mwabomba", "Mwagi", "Mwakilyambiti", "Mwamala", "Mwandu", "Mwang'halanga", "Ng'hundi", "Ngudu", "Ngulla", "Nyambiti", "Nyamilama", "Sumve", "Wala"],
    "Kyela": ["Bujonde", "Busole", "Ikama", "Ikolo", "Ipande", "Ipinda", "Kajunjumele", "Katumbasongwe", "Kyela Urban", "Lusungo", "Makwale", "Matema", "Mwaya", "Ngana", "Ngonga"],
    "Lindi Rural": ["Chikonji", "Chiponda", "Kilolambwani", "Kitomanga", "Kiwalala", "Manwanga", "Matimba", "Mbanja", "Mchinga", "Milola", "Mipingo", "Mnara", "Mngoyo", "Mnolela", "Mtama", "Mtua", "Nachunyu", "Nahukahuka", "Nangaru", "Ng'apa", "Ngangamara", "Nyangao", "Nyengedi", "Rutamba", "Sudi", "Tandangongoro"],
    "Lindi Urban": ["Jamhuri", "Mtanda", "Rasbura"],
    "Liwale": ["Barikiwa", "Kiangara", "Kibutuka", "Kimambi", "Liwale A", "Liwale B", "Makata", "Mangirikiti", "Mbaya", "Mihumo", "Mirui", "Mkutano", "Mlembwe", "Mpigamiti", "Nangano", "Ngongowele"],
    "Longido": ["Engarenaibor", "Gelai Lumbwa", "Gelai Meirugoi", "Ketumbeine", "Longido", "Matare", "Namanga", "Olmolog", "Tingatinga"],
    "Ludewa": ["Ibumi", "Luana", "Ludende", "Ludewa", "Lugarawa", "Luilo", "Lupanga", "Madilu", "Madope", "Manda", "Masasi", "Mavanga", "Mawengi", "Mlangali", "Mundindi", "Nkomang'ombe"],
    "Lushoto": ["Bumbuli", "Funta", "Gare", "Hemtoye", "Kwai", "Lunguza", "Lushoto", "Malibwi", "Malindi", "Mamba", "Mbaramo", "Mbuzii", "Mgwashi", "Mlalo", "Mlola", "Mnazi", "Mtae", "Mwangoi", "Ngwelo", "Rangwi", "Shume", "Soni", "Sunga", "Tamota", "Ubiri", "Vuga"],
    "Mafia": ["Baleni", "Jibondo", "Kanga", "Kiegeani", "Kilindoni", "Kirongwe", "Mibulani"],
    "Magu": ["Badugu", "Bujashi", "Igalukilo", "Kabita", "Kahangara", "Kalemela", "Kiloleli", "Kisesa", "Kitongo Sima", "Kongolo", "Lubugo", "Lutale", "Magu Urban", "Malili", "Mkula", "Mwamabanza", "Mwamanga", "Mwananyili", "Ng'haya", "Ngasamo", "Nkungulu", "Nyaluhande", "Nyanguge", "Nyigogo", "Shigala", "Shishani", "Sukuma"],
    "Makete": ["Bulongwa", "Ikuwo", "Iniho", "Ipelele", "Ipepo", "Iwawa", "Kipagalo", "Kitulo", "Lupalilo", "Lupila", "Mang'oto", "Matamba", "Mfumbi", "Mlondwe", "Ukwama"],
    "Manyoni": ["Aghondi", "Chikola", "Chikuyu", "Heka Azimio", "Idodyandole", "Ipande", "Isseke", "Itigi", "Kilimatinde", "Kintinku", "Majiri", "Makanda", "Makuru", "Manyoni", "Maweni", "Mgandu", "Nkoko", "Rungwa", "Sanjaranda", "Sanza", "Sasajila"],
    "Masasi": ["Chigungu", "Chiugutwa", "Lipumburu", "Lukulendi", "Lulindi", "Mbuyuni", "Mchauru", "Mkululu", "Mkundi", "Mnavira", "Mpindimbi", "Mwena", "Namajani", "Namalenga", "Namatutwe", "Nanganga", "Nanjota", "Sindano"],
    "Maswa": ["Badi", "Buchambi", "Budekwa", "Busilili", "Dakama", "Ipililo", "Isanga", "Kadoto", "Kulimi", "Lalago", "Malampaka", "Masela", "Mpindo", "Ngulinguli", "Nyabubinza", "Nyalikungu", "Shishiyu", "Sukuma"],
    "Mbarali": ["Chimala", "Igurusi", "Madibira", "Mahongole", "Mapogoro", "Mawindi", "Ruiwa", "Rujewa", "Ubaruku", "Utengule Usangu"],
    "Mbeya Rural": ["Bonde la Songwe", "Igale", "Ihango", "Ijombe", "Ilembo", "Ilungu", "Inyala", "Isuto", "Iwiji", "Iwindi", "Iyunga mapinduzi", "Mshewe", "Santilya", "Tembela", "Ulenje", "Utengule Usongwe"],
    "Mbinga": ["Chiwanda", "Kigonsera", "Kihagara", "Kihangimahuka", "Kilimani", "Kilosa", "Kingerikiti", "Kitura", "Langiro", "Linda", "Lipingo", "Litembo", "Lituhi", "Litumbandyosi", "Liuli", "Maguu", "Matiri", "Mbaha", "Mbamba bay", "Mbangamao", "Mbinga Urban", "Mbuji", "Mikalanga", "Mkumbi", "Mpapa", "Mpepai", "Mtipwili", "Myangayanga", "Ndogosi", "Ngima", "Nyoni", "Ruanda", "Tingi", "Ukata", "Utiri"],
    "Mbozi": ["Chilulumo", "Chiwezi", "Halungu", "Igamba", "Ihanda", "Isandula", "Isansa", "Itaka", "Ivuna", "Iyula", "Kamsamba", "Kapele", "Mlangali", "Mlowo", "Msangano", "Msia", "Myovizi", "Myunga", "Nambinzo", "Ndalambo", "Nkangamo", "Nyimbili", "Ruanda", "Tunduma"],
    "Mbulu": ["Bargish", "Bashay", "Daudi", "Dongobesh", "Gehandu", "Haidom", "Kainam", "Maghang", "Maretadu", "Masieda", "Mbulu Urban", "Murray", "Sanu", "Tlawi", "Tumati", "Yaeda Chini"],
    "Meatu": ["Bukundi", "Imalaseko", "Itinje", "Kisesa", "Lingeka", "Lubiga", "Mwabuma", "Mwabusalu", "Mwabuzo", "Mwamalole", "Mwamanongu", "Mwamishali", "Mwandoya", "Mwanhunzi", "Mwanjoro", "Ng'hoboko", "Nkoma", "Sakasaka"],
    "Meru": ["Akheri", "Kikatiti", "Kikwe", "King'ori", "Leguruki", "Maji ya Chai", "Makiba", "Maroroni", "Mbuguni", "Ngarenanyuki", "Nkoanrua", "Nkoaranga", "Nkoarisambu", "Poli", "Singisi", "Songoro", "USA River"],
    "Misenyi": ["Bugandika", "Bugorora", "Buyango", "Bwanjai", "Gera", "Ishozi", "Ishunju", "Kakunyu", "Kanyigo", "Kashenye", "Kassambya", "Kilimilire", "Kitobo", "Kyaka", "Minziro", "Nsunga", "Ruzinga"],
    "Missungwi": ["Buhingo", "Busongo", "Idetemya", "Ilujamate", "Kanyelele", "Kasololo", "Kijima", "Koromije", "Lubiri", "Mbarika", "Misasi", "Missungwi", "Mwaniko", "Nhundulu", "Shilalo", "Sumbugu", "Ukiriguru", "Usagara"],
    "Mkinga": ["Daluni", "Duga", "Gombero", "Kwale", "Manza", "Maramba", "Mhinduro", "Mkinga", "Moa", "Mtimbwani"],
    "Mkuranga": ["Bupu", "Kimanzichana", "Kisiju", "Kitomondo", "Lukanga", "Magawa", "Mbezi", "Mkamba", "Mkuranga", "Mwalusembe", "Nyamato", "Panzuo", "Shungubweni", "Tambani", "Vikindu"],
    "Monduli": ["Engaruka", "Engutoto", "Esilalei", "Lolkisale", "Makuyuni", "Moita", "Monduli Juu", "Selela", "Sepeko"],
    "Morogoro Rural": ["Bwakila Chini", "Bwakila Juu", "Kidugalo", "Kinole", "Kiroka", "Kisaki", "Kisemu", "Kolero", "Lundi", "Mkambalani", "Mkulazi", "Mkuyuni", "Mngazi", "Mtombozi", "Mvuha", "Ngerengere", "Selambala", "Tawa", "Tununguo"],
    "Morogoro Urban": ["Bigwa", "Boma", "Kihonda", "Kilakala", "Kingolwira", "Mazimbu", "Mbuyuni", "Mlimani", "Mwembesongo", "Mzinga", "Uwanja wa Ndege"],
    "Moshi Rural": ["Arusha Chini", "Kahe", "Kahe Mashariki", "Kibosho Kati", "Kibosho Magharibi", "Kibosho Mashariki", "Kilema  Kati", "Kilema Kusini", "Kilema kaskazini", "Kimochi", "Kindi", "Kirima", "Kirua Vunjo Kusini", "Kirua Vunjo Magharibi", "Kurua Vunjo Mashariki", "Mabogini", "Makuyuni", "Mamba Kaskazini", "Mamba Kusini", "Marangu Magharibi", "Marangu Mashariki", "Mbokomu", "Mwika Kaskazini", "Mwika Kusini", "Okoani Kibosho", "Old Moshi Magharibi", "Old Moshi Mashariki", "Uru Kaskazini", "Uru Kusini Mawela", "Uru Mashariki", "Uru Shimbwe"],
    "Moshi Urban": ["Bondeni", "Karanga", "Kiboriloni", "Kiusa", "Korongoni", "Longuo", "Majengo", "Mawenzi", "Mji Mpya", "Msaranga", "Njoro", "Pasua", "Rau"],
    "Mpanda": ["Ikola", "Ilela", "Ilembo", "Ilunde", "Inyonga", "Kabungu", "Karema", "Kashaulili", "Kasokola", "Katuma", "Katumba", "Kawajense", "Kibaoni", "Machimboni", "Magamba", "Mamba", "Mbede", "Mishamo", "Misunkumilo", "Mpanda Ndogo", "Mtapenda", "Mwese", "Nsemulwa", "Nsimbo", "Shanwe", "Sitalike", "Ugala", "Urwira", "Usevya", "Utende"],
    "Mpwapwa": ["Berege", "Chunyu", "Gode Gode", "Ipera", "Kibakwe", "Kimagai", "Luhundwa", "Lumuma", "Massa", "Matomondo", "Mazae", "Mbuga", "Mima", "Mlunduzi", "Rudi", "Vinghawe", "Wotta"],
    "Mtwara Rural": ["Chawi", "Dihimba", "Kiromba", "Kitaya", "Kitere", "Madimba", "Mahurunga", "Mayanga", "Mnima", "Mtiniko", "Namtuhuka", "Nanguruwe", "Nanyamba", "Naumbu", "Ndumbwe", "Nitekela", "Njengwa", "Ziwani"],
    "Mtwara Urban": ["Chikongola", "Chuno", "Jangwani", "Likombe", "Magengeni", "Majengo", "Mitengo", "Mtonya", "Railway", "Shangani", "Ufukoni", "Vigaeni"],
    "Mufindi": ["Bumilayinga", "Idunda", "Igombavanu", "Igowole", "Ihalimba", "Ihowanza", "Ikweha", "Isalavanu", "Itandula", "Kasanga", "Kibengu", "Kiyowela", "Luhunga", "Mafinga", "Malangali", "Mbalamaziwa", "Mninga", "Mtambula", "Mtwango", "Nyololo", "Rungemba", "Sadani"],
    "Muheza": ["Bwembera", "Kicheba", "Kigombe", "Kilulu", "Kisiwani", "Kwafungo", "Lusanga", "Magila", "Magoroto", "Majengo", "Masuguru", "Mbaramo", "Misalai", "Misozwe", "Mkuzi", "Mtindiro", "Ngomeni", "Nkumba", "Pande", "Potwe", "Songa", "Tingeni", "Zirai"],
    "Muleba": ["Biirabo", "Buganguzi", "Bulyakashaju", "Bureza", "Burungura", "Ijumbi", "Ikondo", "Izigo", "Kagoma", "Kamachumu", "Karambi", "Kasharunga", "Kashasha", "Kibanga", "Kibirizi", "Kimwani", "Kishanda", "Kyebitembe", "Magata/Karutanga", "Manyondwe", "Mubunda", "Muhutwe", "Muleba", "Ngenge", "Nshamba", "Ruhanga", "Rushwa"],
    "Musoma Rural": ["Bugwema", "Buhemba", "Bukabwa", "Bukima", "Bukumi", "Buruma", "Buswahili", "Butiama", "Butuguri", "Bwasi", "Bwiregi", "Etaro", "Kukirango", "Kyanyari", "Makojo", "Masaba", "Mugango", "Murangi", "Muriaza", "Nyakatende", "Nyambono", "Nyamimange", "Nyamrandirira", "Nyankanga", "Suguti", "Tegeruka"],
    "Mvomero": ["Bunduki", "Diongoya", "Doma", "Hembeti", "Kanga", "Kibati", "Langali", "Maskati", "Melela", "Mhonda", "Mlali", "Mtibwa", "Mvomero", "Mzumbe", "Sungaji", "Tchenzema"],
    "Mwanga": ["Chomvu", "Jipe", "Kifula", "Kighare", "Kileo", "Kilomeni", "Kirongwe", "Kirya", "Kwakoa", "Lake Jipe", "Lembeni", "Msangeni", "Mwanga Urban", "Mwaniko", "Ngujini", "Shinghatini"],
    "Nachingwea": ["Chiola", "Kiegei", "Kilima Rondo", "Kipara Mnero", "Lionja", "Marambo", "Matekwe", "Mbondo", "Mkoka", "Mkotokuyana", "Mnero Miembeni", "Mnero Ngongo", "Mpiruka", "Mtua", "Naipanga", "Naipingo", "Namapwia", "Namatula", "Nambambo", "Namikango", "Nangowe", "Nditi", "Ndomoni", "Ruponda", "Stesheni"],
    "Namtumbo": ["Kitanda", "Ligera", "Luchili", "Luegu", "Lusewa", "Magazini", "Mgombasi", "Mkongo", "Msindo", "Namabengo", "Rwinga"],
    "Nanyumbu": ["Chipuputa", "Lemasule", "Likokona", "Makonona", "Maratani", "Masuguru", "Mikangaula", "Nandete", "Nangomba", "Nanyumbu", "Napacho", "Sengenya"],
    "Newala": ["Chilangala", "Chitekete", "Chiwonga", "Kitangari", "Luchingu", "Makote", "Makukwe", "Malatu", "Maputi", "Mchemo", "Mcholi II", "Mkunya", "Mkwedu", "Mnekachi", "Mnyambe", "Mpotwa", "Namiyonga", "Nanguruwe"],
    "Ngara": ["Bugarama", "Bukiriro", "Kabanga", "Kanazi", "Keza", "Kibimba", "Kirushya", "Mabawe", "Muganza", "Mugoma", "Murusagamba", "Ngara Urban", "Ntobeye", "Nyakisasa", "Nyamiyaga", "Rulenge", "Rusumo"],
    "Ngorongoro": ["Arash", "Digodigo", "Endulen", "Kakesio", "Malambo", "Nainokanoka", "Naiyobi", "Ngorongoro", "Olbalbal", "Oldonyo Sambu", "Olgosorok", "Pinyinyi", "Sale", "Soit Sambu"],
    "Njombe": ["Idamba", "Igongolo", "Igosi", "Ikondo", "Ikuka", "Ilembula", "Imalinyi", "Iwungilo", "Kidegembye", "Kifanya", "Luduga", "Lupembe", "Luponde", "Mahongole", "Makambako", "Matola", "Mdandu", "Mtwango", "Njombe Urban", "Saja", "Usuka", "Uwemba", "Wangama", "Wanging'ombe", "Yakobi"],
    "Nkasi": ["Chala", "Isale", "Kabwe", "Kala", "Kate", "Kipande", "Kirando", "Mkwamba", "Mtenga", "Namanyere", "Sintali", "Wampelembe"],
    "Nyamagana": ["Igogo"],
    "Nzega": ["Budushi", "Bukene", "Igusule", "Ijanija", "Ikindwa", "Isagenhe", "Isanzu", "Itilo", "Itobo", "Kahamanhalaga", "Karitu", "Kasela", "Lusu", "Magengati", "Mambali", "Mbogwe", "Miguwa", "Mihugi", "Mizibaziba", "Mlambo-Itobo", "Mogwa", "Mwakanshashala", "Mwamala", "Mwangoye", "Nata", "Ndala", "Nkiniziwa", "Nzega Urban", "Nzega ndogo", "Puge", "Semembela", "Shigamba", "Sigili", "Tongi", "Uduka", "Utwigu", "Wela"],
    "Pangani": ["Bushiri", "Bweni", "Kimang'a", "Kipumbwi", "Madanga", "Mikunguni", "Mkalamo", "Mkwaja", "Mwera", "Pangani Magharibi", "Pangani Mashariki", "Tungamaa", "Ubangaa"],
    "Rombo": ["Katangara Mrere", "Kelamfua Mokala", "Keni  Alleni", "Keni Mengeni", "Kirongo Samanga", "Kirwa Keni", "Kisale Msangara", "Kitirima Kingachi", "Mahida Holili", "Makiidi", "Mamsera", "Mengwe Manda", "Motamburu Kitendani", "Nanjara Reha", "Olele", "Shimbi", "Tarekea Motamburu", "Ubetu Kahe", "Ushiri Ikuini"],
    "Rorya": ["Bukwe", "Kigunga", "Kirongo", "Kisumwa", "Kitembe", "Komuge", "Koryo", "Kyang'ombe", "Mirare", "Mkoma", "Nyahongo", "Nyamagaro", "Nyamtinga", "Nyamunga", "Nyathorogo", "Rabuor"],
    "Ruangwa": ["Chienjere", "Chunyu", "Likunja", "Luchelegwa", "Makanjiro", "Malolo", "Mandarawe", "Mandawa", "Mbekenyera", "Mnacho", "Nambilanje", "Namichinga", "Narungombe", "Nkowe", "Ruangwa"],
    "Rufiji": ["Bungu", "Chumbi", "Ikwiriri", "Kibiti", "Mahege", "Mbwara", "Mchukwi", "Mkongo", "Mwaseni", "Ngorongo", "Ruaruke", "Salale", "Umwe", "Utete"],
    "Rungwe": ["Ikuti", "Ilima", "Isange", "Isongole", "Itete", "Kabula", "Kambasegese", "Kandete", "Katumba", "Kinyala", "Kisegese", "Kisondela", "Kiwira", "Kyimo", "Lufilyo", "Lufingo", "Lupata", "Lutebe", "Lwangwa", "Masukulu", "Mpondo", "Mpuguso", "Suma"],
    "Same": ["Bendera", "Bombo", "Bwambo", "Chome", "Hedaru", "Kihurio", "Kirangare", "Kisiwani", "Makanya", "Maore", "Mhezi", "Mnyamba", "Mpinji", "Mshewa", "Msindo", "Mtii", "Mwembe", "Ndungu", "Njoro", "Ruvu", "Same Urban", "Suji", "Vudee", "Vuje", "Vunta"],
    "Sengerema": ["Bupandwamhela", "Busisi", "Buyagu", "Buzilasoga", "Chifunfu", "Igalula", "Kafunzo", "Kagunga", "Kalebezo", "Kasungamile", "Katunguru", "Katwe", "Kazunzu", "Lugata", "Nyakalilo", "Nyakasasa", "Nyakasungwa", "Nyamatongo", "Nyanzenda", "Nyehunge", "Sima", "Tabaruka"],
    "Serengeti": ["Busawe", "Ikoma", "Issenye", "Kebanchabancha", "Kenyamonta", "Kisaka", "Kisangura", "Kyambahi", "Machochwe", "Manchira", "Mugumu Urban", "Natta", "Nyamatare", "Nyambureti", "Nyamoko", "Rigicha", "Ring'wani", "Rung'bure"],
    "Shinyanga Rural": ["Didia", "Ilola", "Imesela", "Iselamagazi", "Itwangi", "Lyabukande", "Mwakitolyo", "Mwamala", "Mwantini", "Pandagichiza", "Salawe", "Samuye", "Solwa", "Tinde", "Usanda", "Usule"],
    "Shinyanga Urban": ["Chibe", "Ibadakuli", "Kitangili", "Kizumbi", "Kolandoto", "Mwamalili", "Mwawaza", "Ngokolo"],
    "Siha": ["Siha Kaskazini", "Siha Kati", "Siha Magharibi", "Siha Mashariki"],
    "Sikonge": ["Chabutwa", "Igigwa", "Ipole", "Kiloleli", "Kiloli", "Kipanga", "Kipili", "Kitunda", "Pangale", "Sikonge", "Tutuo"],
    "Simanjiro": ["Loibor Siret", "Loibor Soit", "Mererani", "Msitu wa Tembo", "Naberera", "Ngorika", "Oljoro", "Orkesumet", "Ruvu Remit", "Shambarai", "Terrat"],
    "Singida Rural": ["Dung'unyi", "Ihanja", "Ikhawoda", "Ikungu", "Ilongero", "Irisya", "Issuwa", "Kinyeto", "Maghojea", "Makuro", "Mang'onyi", "Merya", "Mgori", "Mgungira", "Minyughe", "Misughaa", "Msisi", "Mtinko", "Mudida", "Munga'a", "Mwaru", "Naintiri", "Ngimu", "Ntuntu", "Puma", "Sepuko", "Siuyu", "Ughandi"],
    "Singida Urban": ["Mandewa", "Mtamaa", "Mtipa", "Mungumaji", "Mwankoko", "Unyambwa", "Unyamikumbi"],
    "Songea Rural": ["Gumbiro", "Ifinga", "Kilagano", "Lilambo", "Litisha", "Magagura", "Mahanje", "Maposeni", "Matimira", "Mpitimbi", "Muhukuru", "Ndogosi", "Tanga", "Wino"],
    "Songea Urban": ["Bombambili", "Lizaboni", "Matarawe", "Matogoro", "Mfaranyaki", "Mletele", "Mshangano", "Ruhuwiko", "Ruvuma", "Subira"],
    "Sumbawanga Rural": ["Kalambazite", "Kasanga", "Katazi", "Kipeta", "Laela", "Legezamwendo", "Mambwekenya", "Mambwenkoswe", "Matai", "Miangalua", "Milepa", "Mkowe", "Mpui", "Msanzi", "Mtowisa", "Muze", "Mwazye", "Mwimbi", "Sandulula", "Sopa"],
    "Sumbawanga Urban": ["Izia", "Kasense", "Katandala", "Malangali", "Matanga", "Mazwi", "Milanzi", "Mollo", "Ntendo", "Old Sumbawanga", "Pito", "Senga"],
    "Tabora Urban": ["Chemchem", "Gongoni", "Ipuli", "Isevya", "Itetemia", "Itonjanda", "Kakola", "Kalunde", "Kanyenye", "Kiloleni", "Kitete", "Malolo", "Mbugani", "Misha", "Ndevelwa", "Ng'ambo", "Tambukareli", "Tumbi", "Uyui"],
    "Tandahimba": ["Chaume", "Chingungwe", "Kitama", "Luagala", "Lukokoda", "Lyenje", "Mahuta", "Maundo", "Mdimba Mnyoma", "Michenjele", "Mihambwe", "Milogodi", "Mkonjowano", "Mkoreha", "Mkundi", "Mkwiti", "Mnyawa", "Namikupa", "Nanhyanga", "Naputa", "Tandahimba"],
    "Tanga": ["Chongoleani", "Kiomoni", "Mabokweni", "Marungu", "Maweni", "Mzizima", "Pongwe", "Tongoni"],
    "Tarime": ["Binagi", "Bukura", "Bumera", "Goribe", "Ikoma", "Kemambo", "Kibasuka", "Manga", "Matongo", "Muriba", "Nyakonga", "Nyamwaga", "Nyandoto", "Nyanungu", "Nyarero", "Nyarokoba", "Pemba", "Roche", "Serengeti National Park", "Sirari", "Tai", "Turwa"],
    "Temeke": ["Chamazi", "Kibada", "Kimbiji", "Kisarawe II", "Mji Mwema", "Pemba Mnazi", "Somangira", "Vijibweni"],
    "Tunduru": ["Kalulu", "Kidodoma", "Ligoma", "Ligunga", "Lukumbule", "Marumba", "Matemanga", "Mbesa", "Mchesi", "Mchoteka", "Milingoti Magharibi", "Milingoti Mashariki", "Mindu", "Misechela", "Mtina", "Muhuwesi", "Nakapanya", "Nalasi", "Namasakata", "Nampungu", "Namwinyu", "Nandembo", "Tuwemacho"],
    "Ukerewe": ["Bukanda", "Bukiko", "Bukindo", "Bukongo", "Bwiro", "Bwisya", "Igalla", "Ilangala", "Karenge", "Mukituntu", "Muriti", "Murutunguru", "Nakatuguru", "Namagondo", "Namilembe", "Nduruma", "Ngoma", "Nkilizya"],
    "Ulanga": ["Biro", "Chirombola", "Euga", "Ilonga", "Iragua", "Isongo", "Itete", "Kichangani", "Kilosa Mpepo", "Lukande", "Lupiro", "Malinyi", "Mbuga", "Minepa", "Msogezi", "Mtimbira", "Mwaya", "Ngoheranga", "Ruaha", "Sali", "Sofi", "Usangule", "Vigoi"],
    "Urambo": ["Ichemba", "Igalala", "Igombe Mkulu", "Imalamakoye", "Itundu", "Kaliua", "Kanindo", "Kapilula", "Kashishi", "Kazaroho", "Kiloleni", "Milambo", "Muungano", "Mwongozo", "Songambele", "Ugunga", "Ukondamoyo", "Ukumbisiganga", "Urambo", "Ushokola", "Usinge", "Usisya", "Ussoke", "Uyowa", "Uyumbu", "Vumilia"],
    "Uyui": ["Bukumbi", "Goweko", "Ibiri", "Igalula", "Ikongolo", "Ilolangulu", "Isikizya", "Kizengi", "Loya", "Lutende", "Mabama", "Magiri", "Ndono", "Shitage", "Ufuluma", "Upuge", "Usagali"]
}
var extraction_type_group = {
    'afridev': ['afridev'],
    'cemo': ['other motorpump'],
    'climax': ['other motorpump'],
    'gravity': ['gravity'],
    'india mark ii': ['india mark ii'],
    'india mark iii': ['india mark iii'],
    'ksb': ['submersible'],
    'mono': ['mono'],
    'nira/tanira': ['nira/tanira'],
    'other': ['other'],
    'other - mkulima/shinyanga': ['other handpump'],
    'other - play pump': ['other handpump'],
    'other - rope pump': ['rope pump'],
    'other - swn 81': ['other handpump'],
    'submersible': ['submersible'],
    'swn 80': ['swn 80'],
    'walimi': ['other handpump'],
    'windmill': ['wind-powered']
}
var extraction_type = ['gravity', 'submersible', 'swn 80', 'nira/tanira', 'india mark ii',
    'other', 'ksb', 'mono', 'windmill', 'afridev', 'other - rope pump',
    'india mark iii', 'other - swn 81', 'other - play pump', 'cemo',
    'climax', 'walimi', 'other - mkulima/shinyanga']
var scheme_management = ['VWC', 'Other', 'nan', 'Private operator', 'WUG', 'Water Board', 'WUA', 'Water authority', 'Company', 'Parastatal', 'Trust', 'SWC', 'None']
var management = {
    'commercial': ['company', 'private operator', 'trust', 'water authority'],
    'other': ['other', 'other - school'],
    'parastatal': ['parastatal'],
    'unknown': ['unknown'],
    'user-group': ['vwc', 'water board', 'wua', 'wug']
}
var payment = ['pay annually', 'never pay', 'pay per bucket', 'unknown', 'pay when scheme fails', 'other', 'pay monthly']
var payment_type = {
    'never pay': ['never pay'],
    'other': ['other'],
    'pay annually': ['annually'],
    'pay monthly': ['monthly'],
    'pay per bucket': ['per bucket'],
    'pay when scheme fails': ['on failure'],
    'unknown': ['unknown']
}
var ext_type_class = {
    'afridev': ['handpump'],
    'cemo': ['motorpump'],
    'climax': ['motorpump'],
    'gravity': ['gravity'],
    'india mark ii': ['handpump'],
    'india mark iii': ['handpump'],
    'ksb': ['submersible'],
    'mono': ['motorpump'],
    'nira/tanira': ['handpump'],
    'other': ['other'],
    'other - mkulima/shinyanga': ['handpump'],
    'other - play pump': ['handpump'],
    'other - rope pump': ['rope pump'],
    'other - swn 81': ['handpump'],
    'submersible': ['submersible'],
    'swn 80': ['handpump'],
    'walimi': ['handpump'],
    'windmill': ['wind-powered']
}
initDropdownList('basin', 0, basin);
initDropdownList('region', 0, region);
initDropdownList('scheme_management', 0, scheme_management);
initDropdownList('public_meeting', 0, [true, false]);
initDropdownList('permit', 0, [true, false]);
initDropdownList('extraction_type', 0, extraction_type);
initDropdownList1('district_code', 0, district_code);
initDropdownList1('lga', 0, lga);
initDropdownList1('region_code', 0, region_code);
initDropdownList3('extraction_type_group', 0, extraction_type_group);
initDropdownList3('extraction_type_class', 0, ext_type_class);
initDropdownList2('ward', 0, ward);
initDropdownList('management_group', 0, ['user-group', 'other', 'commercial', 'parastatal', 'unknown']);
initDropdownList5('management', 0, management);
initDropdownList('payment', 0, payment);
initDropdownList6('payment_type', 0, payment_type);

function region_code_fun() {
    initDropdownList1('region_code', 0, region_code);
    initDropdownList1('district_code', 0, district_code);
    initDropdownList1('lga', 0, lga);
}
function lga_fun() {
    initDropdownList2('ward', 0, ward);
}
function ext_type_fun() {
    initDropdownList3('extraction_type_group', 0, extraction_type_group);
    initDropdownList3('extraction_type_class', 0, ext_type_class);
}
function management_fun() {
    initDropdownList5('management', 0, management);
}
function payment_fun() {
    initDropdownList6('payment_type', 0, payment_type);
}
var quality_group = ['good', 'salty', 'milky', 'unknown', 'fluoride', 'colored']
var water_quality = {
    'colored': ['coloured'],
    'fluoride': ['fluoride', 'fluoride abandoned'],
    'good': ['soft'],
    'milky': ['milky'],
    'salty': ['salty', 'salty abandoned'],
    'unknown': ['unknown']
}
function initDropdownList7(id, min, list) {
    var select, i, option;
    var s = document.forms[0].quality_group.value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
initDropdownList('quality_group', 0, quality_group);
initDropdownList7('water_quality', 0, water_quality);
function quality_group_fun() {
    initDropdownList7('water_quality', 0, water_quality);
}
initDropdownList('quantity_group', 0, ['enough', 'insufficient', 'dry', 'seasonal', 'unknown']);

var source_class = ['groundwater', 'surface', 'unknown']
initDropdownList('source_class', 0, source_class);
function initDropdownList8(id, min, list, feature) {
    var select, i, option;
    var s = document.getElementById(feature).value;
    select = document.getElementById(id);
    select.innerHTML = ""
    for (i = min; i <= list[s].length - 1; i += 1) {
        option = document.createElement('option');
        option.value = option.text = list[s][i];
        select.add(option);
    }
}
var source = ['spring', 'rainwater harvesting', 'dam', 'machine dbh', 'other', 'shallow well', 'river', 'hand dtw', 'lake', 'unknown']
var source_class = {
    'dam': ['surface'],
    'hand dtw': ['groundwater'],
    'lake': ['surface'],
    'machine dbh': ['groundwater'],
    'other': ['unknown'],
    'rainwater harvesting': ['surface'],
    'river': ['surface'],
    'shallow well': ['groundwater'],
    'spring': ['groundwater'],
    'unknown': ['unknown']
}
var source_type = {
    'dam': ['dam'],
    'hand dtw': ['borehole'],
    'lake': ['river/lake'],
    'machine dbh': ['borehole'],
    'other': ['other'],
    'rainwater harvesting': ['rainwater harvesting'],
    'river': ['river/lake'],
    'shallow well': ['shallow well'],
    'spring': ['spring'],
    'unknown': ['other']
}
initDropdownList('source', 0, source);
initDropdownList8('source_type', 0, source_type, 'source')
initDropdownList8('source_class', 0, source_class, 'source');
function source_fun() {
    initDropdownList8('source_type', 0, source_type, 'source')
    initDropdownList8('source_class', 0, source_class, 'source');
}

initDropdownList('waterpoint_type_group', 0, ['communal standpipe', 'hand pump', 'other', 'improved spring', 'cattle trough', 'dam']);
var waterpoint_type = { 'cattle trough': ['cattle trough'], 'communal standpipe': ['communal standpipe', 'communal standpipe multiple'], 'dam': ['dam'], 'hand pump': ['hand pump'], 'improved spring': ['improved spring'], 'other': ['other'] };
initDropdownList8('waterpoint_type', 0, waterpoint_type, 'waterpoint_type_group');

function waterpoint_type_fun() {
    initDropdownList8('waterpoint_type', 0, waterpoint_type, 'waterpoint_type_group');
}
function myFunction(){
    
}
if (window.innerWidth >= 850){
  var scriptSrc = "../static/script/script2.js";
var script = document.createElement('script');
script.src = scriptSrc;
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);}