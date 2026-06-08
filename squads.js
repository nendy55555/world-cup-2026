// ── SQUADS DATA ───────────────────────────────────────────────────
// Last updated: June 3, 2026 — FINAL 26-man World Cup squads (FIFA deadline June 1).
// Sources per team in inline status comment. status:'official'=final 26 confirmed,
// 'provisional'=partially verified, 'tba'=not qualified / no data.
const SQUADS = {
  // ── Group A ──
  'Mexico': {
    status:'official', // Final 26 (Aguirre), host. Source: SI, 2026-06-01.
    gk:[{name:'Raul Rangel',club:'Chivas'}, {name:'Guillermo Ochoa',club:'AEL Limassol'}, {name:'Carlos Acevedo',club:'Santos Laguna'}],
    def:[{name:'Jorge Sanchez',club:'PAOK'}, {name:'Israel Reyes',club:'Club America'}, {name:'Cesar Montes',club:'Lokomotiv Moscow'}, {name:'Johan Vasquez',club:'Genoa'}, {name:'Jesus Gallardo',club:'Toluca'}, {name:'Mateo Chavez',club:'AZ Alkmaar'}],
    mid:[{name:'Edson Alvarez',club:'Fenerbahce'}, {name:'Luis Romo',club:'Chivas'}, {name:'Erik Lira',club:'Cruz Azul'}, {name:'Obed Vargas',club:'Atletico Madrid'}, {name:'Alvaro Fidalgo',club:'Real Betis'}, {name:'Luis Chavez',club:'Dynamo Moscow'}, {name:'Brian Gutierrez',club:'Chivas'}, {name:'Gilberto Mora',club:'Tijuana'}, {name:'Orbelin Pineda',club:'AEK Athens'}, {name:'Cesar Huerta',club:'Anderlecht'}],
    att:[{name:'Roberto Alvarado',club:'Chivas'}, {name:'Alexis Vega',club:'Toluca'}, {name:'Julian Quinones',club:'Al Qadsiah'}, {name:'Raul Jimenez',club:'Fulham'}, {name:'Santiago Gimenez',club:'AC Milan'}, {name:'Armando Gonzalez',club:'Chivas'}, {name:'Guillermo Martinez',club:'Pumas UNAM'}]
  },
  'Czechia': {
    status:'official', // Final 26 (Koubek). Source: USA Today / FIFA, 2026-05-31. Qualified via March 2026 playoff.
    gk:[{name:'Lukas Hornicek',club:'Braga'}, {name:'Matej Kovar',club:'PSV'}, {name:'Jindrich Stanek',club:'Slavia Praha'}],
    def:[{name:'Vladimir Coufal',club:'Hoffenheim'}, {name:'David Doudera',club:'Slavia Praha'}, {name:'Tomas Holes',club:'Slavia Praha'}, {name:'Robin Hranac',club:'Hoffenheim'}, {name:'Stepan Chaloupek',club:'Slavia Praha'}, {name:'David Jurasek',club:'Slavia Praha'}, {name:'Ladislav Krejci',club:'Wolves'}, {name:'Jaroslav Zeleny',club:'Slavia Praha'}, {name:'David Zima',club:'Slavia Praha'}],
    mid:[{name:'Lukas Cerv',club:'Viktoria Plzen'}, {name:'Vladimir Darida',club:'Hradec Kralove'}, {name:'Lukas Provod',club:'Slavia Praha'}, {name:'Michal Sadilek',club:'Slavia Praha'}, {name:'Hugo Sochurek',club:'Sparta Praha'}, {name:'Alexandr Sojka',club:'Viktoria Plzen'}, {name:'Tomas Soucek',club:'West Ham'}, {name:'Pavel Sulc',club:'Lyon'}, {name:'Denis Visinsky',club:'Viktoria Plzen'}],
    att:[{name:'Adam Hlozek',club:'Hoffenheim'}, {name:'Tomas Chory',club:'Slavia Praha'}, {name:'Mojmir Chytil',club:'Slavia Praha'}, {name:'Jan Kuchta',club:'Sparta Praha'}, {name:'Patrik Schick',club:'Bayer Leverkusen'}]
  },
  'South Korea': {
    status:'official', // Final 26 (Hong Myung-bo). Source: USA Today / The Athletic, 2026-05-16.
    gk:[{name:'Jo Hyeon-woo',club:'Ulsan'}, {name:'Kim Seung-gyu',club:'FC Tokyo'}, {name:'Song Bum-keun',club:'Jeonbuk'}],
    def:[{name:'Kim Moon-hwan',club:'Daejeon'}, {name:'Kim Min-jae',club:'Bayern Munich'}, {name:'Kim Tae-hyon',club:'Kashima Antlers'}, {name:'Park Jin-seob',club:'Zhejiang'}, {name:'Seol Young-woo',club:'Red Star Belgrade'}, {name:'Jens Castrop',club:'Borussia Monchengladbach'}, {name:'Lee Ki-hyuk',club:'Gangwon'}, {name:'Lee Tae-seok',club:'Austria Wien'}, {name:'Lee Han-beom',club:'Midtjylland'}, {name:'Cho Yu-min',club:'Sharjah'}],
    mid:[{name:'Kim Jin-gyu',club:'Jeonbuk'}, {name:'Bae Jun-ho',club:'Stoke City'}, {name:'Paik Seung-ho',club:'Birmingham'}, {name:'Yang Hyun-jun',club:'Celtic'}, {name:'Eom Ji-sung',club:'Swansea'}, {name:'Lee Kang-in',club:'Paris Saint-Germain'}, {name:'Lee Dong-gyeong',club:'Ulsan'}, {name:'Lee Jae-sung',club:'Mainz'}, {name:'Hwang In-beom',club:'Feyenoord'}, {name:'Hwang Hee-chan',club:'Wolves'}],
    att:[{name:'Son Heung-min',club:'LAFC'}, {name:'Oh Hyeon-gyu',club:'Besiktas'}, {name:'Cho Gue-sung',club:'Midtjylland'}]
  },
  'South Africa': {
    status:'official', // Final 26 (Broos). Source: Olympics.com / Al Jazeera, 2026-05-27.
    gk:[{name:'Ronwen Williams',club:'Mamelodi Sundowns'}, {name:'Ricardo Goss',club:'Siwelele FC'}, {name:'Sipho Chaine',club:'Orlando Pirates'}],
    def:[{name:'Khuliso Mudau',club:'Mamelodi Sundowns'}, {name:'Olwethu Makhanya',club:'Philadelphia Union'}, {name:'Bradley Cross',club:'Kaizer Chiefs'}, {name:'Thabang Matuludi',club:'Polokwane City'}, {name:'Nkosinathi Sibisi',club:'Orlando Pirates'}, {name:'Aubrey Modiba',club:'Mamelodi Sundowns'}, {name:'Khulumani Ndamane',club:'Mamelodi Sundowns'}, {name:'Ime Okon',club:'Hannover 96'}, {name:'Samukele Kabini',club:'Molde FK'}, {name:'Mbekezeli Mbokazi',club:'Chicago Fire'}],
    mid:[{name:'Teboho Mokoena',club:'Mamelodi Sundowns'}, {name:'Jayden Adams',club:'Mamelodi Sundowns'}, {name:'Thalente Mbatha',club:'Orlando Pirates'}, {name:'Kamogelo Sebelebele',club:'Orlando Pirates'}, {name:'Sphephelo Sithole',club:'CD Tondela'}],
    att:[{name:'Oswin Appollis',club:'Orlando Pirates'}, {name:'Tshepang Moremi',club:'Orlando Pirates'}, {name:'Evidence Makgopa',club:'Orlando Pirates'}, {name:'Lyle Foster',club:'Burnley'}, {name:'Iqraam Rayners',club:'Mamelodi Sundowns'}, {name:'Relebohile Mofokeng',club:'Orlando Pirates'}, {name:'Themba Zwane',club:'Mamelodi Sundowns'}, {name:'Thapelo Maseko',club:'AEL Limassol'}]
  },
  // ── Group B ──
  'Canada': {
    status:'official', // Final 26 (Marsch), host. Source: USA Today / ESPN / The Athletic, 2026-05-29.
    gk:[{name:'Dayne St. Clair',club:'Inter Miami'}, {name:'Maxime Crepeau',club:'Orlando City'}, {name:'Owen Goodman',club:'Crystal Palace'}],
    def:[{name:'Alistair Johnston',club:'Celtic'}, {name:'Derek Cornelius',club:'Marseille'}, {name:'Richie Laryea',club:'Toronto FC'}, {name:'Niko Sigur',club:'Hajduk Split'}, {name:'Joel Waterman',club:'Chicago Fire'}, {name:'Luc de Fougerolles',club:'Fulham'}, {name:'Moise Bombito',club:'Nice'}, {name:'Alphonso Davies',club:'Bayern Munich'}, {name:'Alfie Jones',club:'Middlesbrough'}],
    mid:[{name:'Stephen Eustaquio',club:'LAFC'}, {name:'Ismael Kone',club:'Sassuolo'}, {name:'Tajon Buchanan',club:'Villarreal'}, {name:'Mathieu Choiniere',club:'LAFC'}, {name:'Ali Ahmed',club:'Norwich City'}, {name:'Nathan Saliba',club:'Anderlecht'}, {name:'Jacob Shaffelburg',club:'LAFC'}, {name:'Liam Millar',club:'Hull City'}, {name:'Marcelo Flores',club:'Tigres'}, {name:'Jonathan Osorio',club:'Toronto FC'}],
    att:[{name:'Jonathan David',club:'Juventus'}, {name:'Cyle Larin',club:'Southampton'}, {name:'Tani Oluwaseyi',club:'Villarreal'}, {name:'Promise David',club:'Union Saint-Gilloise'}]
  },
  'Bosnia-Herzegovina': {
    status:'official', // Final 26 (Barbarez). Source: Olympics.com / FIFA, 2026-05-11. Qualified via March 2026 playoff (beat Italy).
    gk:[{name:'Nikola Vasilj',club:'St. Pauli'}, {name:'Martin Zlomislic',club:'Rijeka'}, {name:'Osman Hadzikic',club:'Slaven Belupo'}],
    def:[{name:'Sead Kolasinac',club:'Atalanta'}, {name:'Amar Dedic',club:'Benfica'}, {name:'Nihad Mujakic',club:'Gaziantep FK'}, {name:'Nikola Katic',club:'Schalke 04'}, {name:'Tarik Muharemovic',club:'Sassuolo'}, {name:'Stjepan Radeljic',club:'Rijeka'}, {name:'Dennis Hadzikadunic',club:'Sampdoria'}, {name:'Nidal Celik',club:'Lens'}],
    mid:[{name:'Amir Hadziahmetovic',club:'Hull City'}, {name:'Ivan Sunjic',club:'Pafos'}, {name:'Ivan Basic',club:'FC Astana'}, {name:'Dzenis Burnic',club:'Karlsruher SC'}, {name:'Ermin Mahmic',club:'Slovan Liberec'}, {name:'Benjamin Tahirovic',club:'Brondby'}, {name:'Amar Memic',club:'Viktoria Plzen'}, {name:'Armin Gigovic',club:'Young Boys'}],
    att:[{name:'Kerim Alajbegovic',club:'RB Salzburg'}, {name:'Esmir Bajraktarevic',club:'PSV'}, {name:'Ermedin Demirovic',club:'Stuttgart'}, {name:'Jovo Lukic',club:'Universitatea Cluj'}, {name:'Samed Bazdar',club:'Jagiellonia Bialystok'}, {name:'Haris Tabakovic',club:'Borussia Monchengladbach'}, {name:'Edin Dzeko',club:'Schalke 04'}]
  },
  'Switzerland': {
    status:'official', // Final 26 (Yakin). Source: USA Today / ESPN / BBC, 2026-05-20. Xhaka captain.
    gk:[{name:'Marvin Keller',club:'Young Boys'}, {name:'Gregor Kobel',club:'Borussia Dortmund'}, {name:'Yvon Mvogo',club:'Lorient'}],
    def:[{name:'Manuel Akanji',club:'Inter'}, {name:'Aurele Amenda',club:'Eintracht Frankfurt'}, {name:'Eray Comert',club:'Valencia'}, {name:'Nico Elvedi',club:'Borussia Monchengladbach'}, {name:'Luca Jaquez',club:'Stuttgart'}, {name:'Miro Muheim',club:'Hamburg'}, {name:'Ricardo Rodriguez',club:'Real Betis'}, {name:'Silvan Widmer',club:'Mainz'}],
    mid:[{name:'Michel Aebischer',club:'Pisa'}, {name:'Christian Fassnacht',club:'Young Boys'}, {name:'Remo Freuler',club:'Bologna'}, {name:'Ardon Jashari',club:'AC Milan'}, {name:'Johan Manzambi',club:'Freiburg'}, {name:'Fabian Rieder',club:'Augsburg'}, {name:'Djibril Sow',club:'Sevilla'}, {name:'Ruben Vargas',club:'Sevilla'}, {name:'Granit Xhaka',club:'Sunderland'}, {name:'Denis Zakaria',club:'Monaco'}],
    att:[{name:'Zeki Amdouni',club:'Burnley'}, {name:'Breel Embolo',club:'Rennes'}, {name:'Cedric Itten',club:'Fortuna Dusseldorf'}, {name:'Dan Ndoye',club:'Nottingham Forest'}, {name:'Noah Okafor',club:'Leeds United'}]
  },
  'Qatar': {
    status:'official', // FLAG: medium confidence (Lopetegui). Source: ESPN tracker, 2026-06-01. Depth names single-source.
    gk:[{name:'Meshaal Barsham',club:'Al Sadd'}, {name:'Salah Zakaria',club:'Al Duhail'}, {name:'Mahmoud Abunada',club:'Al Rayyan'}],
    def:[{name:'Boualem Khoukhi',club:'Al Sadd'}, {name:'Pedro Miguel',club:'Al Sadd'}, {name:'Sultan Al Brake',club:'Al Duhail'}, {name:'Al-Hashmi Al-Hussain',club:'Al Arabi'}, {name:'Ayoub Al-Alawi',club:'Al Gharafa'}, {name:'Issa Laye',club:'Al Arabi'}, {name:'Lucas Mendes',club:'Al Wakrah'}, {name:'Homam Al-Amin',club:'Cultural Leonesa'}],
    mid:[{name:'Ahmed Fathi',club:'Al Arabi'}, {name:'Jassim Gaber',club:'Al Rayyan'}, {name:'Assim Madibo',club:'Al Wakrah'}, {name:'Abdulaziz Hatem',club:'Al Rayyan'}, {name:'Karim Boudiaf',club:'Al Duhail'}, {name:'Mohammed Mannai',club:'Al Shamal'}],
    att:[{name:'Almoez Ali',club:'Al Duhail'}, {name:'Akram Afif',club:'Al Sadd'}, {name:'Tahsin Mohammed',club:'Al Duhail'}, {name:'Edmilson Junior',club:'Al Duhail'}, {name:'Ahmed Al-Ganehi',club:'Al Gharafa'}, {name:'Ahmed Alaa',club:'Al Rayyan'}, {name:'Hassan Al-Haydos',club:'Al Sadd'}, {name:'Mohammed Muntari',club:'Al Gharafa'}, {name:'Yusuf Abdurisag',club:'Al Wakrah'}]
  },
  // ── Group C ──
  'Brazil': {
    status:'official', // Final 26 (Ancelotti). Source: BBC Sport / FIFA.com, 2026-05-18. Two players named Danilo (Flamengo DEF, Botafogo MID).
    gk:[{name:'Alisson',club:'Liverpool'}, {name:'Ederson',club:'Fenerbahce'}, {name:'Weverton',club:'Gremio'}],
    def:[{name:'Alex Sandro',club:'Flamengo'}, {name:'Danilo',club:'Flamengo'}, {name:'Leo Pereira',club:'Flamengo'}, {name:'Bremer',club:'Juventus'}, {name:'Ibanez',club:'Al-Ahli'}, {name:'Wesley',club:'Roma'}, {name:'Marquinhos',club:'Paris Saint-Germain'}, {name:'Gabriel',club:'Arsenal'}, {name:'Douglas Santos',club:'Zenit'}],
    mid:[{name:'Bruno Guimaraes',club:'Newcastle'}, {name:'Casemiro',club:'Manchester United'}, {name:'Danilo (Botafogo)',club:'Botafogo'}, {name:'Fabinho',club:'Al-Ittihad'}, {name:'Lucas Paqueta',club:'Flamengo'}],
    att:[{name:'Endrick',club:'Lyon'}, {name:'Gabriel Martinelli',club:'Arsenal'}, {name:'Igor Thiago',club:'Brentford'}, {name:'Matheus Cunha',club:'Manchester United'}, {name:'Raphinha',club:'Barcelona'}, {name:'Vinicius Junior',club:'Real Madrid'}, {name:'Luiz Henrique',club:'Zenit'}, {name:'Neymar',club:'Santos'}, {name:'Rayan',club:'Bournemouth'}]
  },
  'Scotland': {
    status:'official', // Final 26 (Clarke). Source: ESPN / FIFA, 2026-06-02. Tyler Fletcher replaced injured Gilmour.
    gk:[{name:'Craig Gordon',club:'Hearts'}, {name:'Angus Gunn',club:'Nottingham Forest'}, {name:'Liam Kelly',club:'Rangers'}],
    def:[{name:'Grant Hanley',club:'Hibernian'}, {name:'Jack Hendry',club:'Al Ettifaq'}, {name:'Aaron Hickey',club:'Brentford'}, {name:'Dom Hyam',club:'Wrexham'}, {name:'Scott McKenna',club:'Dinamo Zagreb'}, {name:'Nathan Patterson',club:'Everton'}, {name:'Anthony Ralston',club:'Celtic'}, {name:'Andy Robertson',club:'Liverpool'}, {name:'John Souttar',club:'Rangers'}, {name:'Kieran Tierney',club:'Celtic'}],
    mid:[{name:'Ryan Christie',club:'Bournemouth'}, {name:'Findlay Curtis',club:'Rangers'}, {name:'Lewis Ferguson',club:'Bologna'}, {name:'Ben Gannon-Doak',club:'Bournemouth'}, {name:'Tyler Fletcher',club:'Manchester United'}, {name:'John McGinn',club:'Aston Villa'}, {name:'Kenny McLean',club:'Norwich City'}, {name:'Scott McTominay',club:'Napoli'}],
    att:[{name:'Che Adams',club:'Torino'}, {name:'Lyndon Dykes',club:'Charlton Athletic'}, {name:'George Hirst',club:'Ipswich Town'}, {name:'Lawrence Shankland',club:'Hearts'}, {name:'Ross Stewart',club:'Southampton'}]
  },
  'Haiti': {
    status:'official', // Final 26 (Migne). Source: AS USA / Olympics.com, 2026-06-01.
    gk:[{name:'Johny Placide',club:'SC Bastia'}, {name:'Alexandre Pierre',club:'FC Sochaux'}, {name:'Josue Duverger',club:'FC Cosmos Koblenz'}],
    def:[{name:'Carlens Arcus',club:'Angers'}, {name:'Wilguens Paugain',club:'Zulte Waregem'}, {name:'Duke Lacroix',club:'Colorado Springs Switchbacks'}, {name:'Martin Experience',club:'Nancy'}, {name:'Jean-Kevin Duverne',club:'Gent'}, {name:'Ricardo Ade',club:'LDU Quito'}, {name:'Hannes Delcroix',club:'Lugano'}, {name:'Keeto Thermoncy',club:'Young Boys'}],
    mid:[{name:'Leverton Pierre',club:'Vizela'}, {name:'Carl-Fred Sainte',club:'El Paso Locomotive'}, {name:'Jean-Jacques Danley',club:'Philadelphia Union'}, {name:'Jeanricner Bellegarde',club:'Wolves'}, {name:'Woodensky Pierre',club:'Violette AC'}, {name:'Dominique Simon',club:'Tatran Presov'}],
    att:[{name:'Louicius Deedson',club:'FC Dallas'}, {name:'Ruben Providence',club:'Almere City'}, {name:'Josue Casimir',club:'Auxerre'}, {name:'Derrick Etienne Jr.',club:'Toronto FC'}, {name:'Wilson Isidor',club:'Sunderland'}, {name:'Duckens Nazon',club:'Esteghlal'}, {name:'Frantzdy Pierrot',club:'Caykur Rizespor'}, {name:'Yassin Fortune',club:'Vizela'}, {name:'Lenny Joseph',club:'Ferencvaros'}]
  },
  'Morocco': {
    status:'official', // Final 26 (Ouahbi). Source: ESPN / Al Jazeera, 2026-05-26. En-Nesyri and Ziyech omitted.
    gk:[{name:'Yassine Bounou',club:'Al-Hilal'}, {name:'Munir El Kajoui',club:'RS Berkane'}, {name:'Reda Tagnaouti',club:'AS FAR'}],
    def:[{name:'Nayef Aguerd',club:'Marseille'}, {name:'Youssef Belammari',club:'Al Ahly'}, {name:'Issa Diop',club:'Fulham'}, {name:'Zakaria El Ouahdi',club:'Genk'}, {name:'Achraf Hakimi',club:'Paris Saint-Germain'}, {name:'Redouane Halhal',club:'KV Mechelen'}, {name:'Noussair Mazraoui',club:'Manchester United'}, {name:'Chadi Riad',club:'Crystal Palace'}, {name:'Anass Salah-Eddine',club:'PSV'}],
    mid:[{name:'Sofyan Amrabat',club:'Real Betis'}, {name:'Ayyoub Bouaddi',club:'Lille'}, {name:'Neil El Aynaoui',club:'Roma'}, {name:'Bilal El Khannouss',club:'Stuttgart'}, {name:'Samir El Mourabet',club:'Strasbourg'}, {name:'Azzedine Ounahi',club:'Girona'}, {name:'Ismael Saibari',club:'PSV'}],
    att:[{name:'Ayoube Amaimouni',club:'Eintracht Frankfurt'}, {name:'Brahim Diaz',club:'Real Madrid'}, {name:'Ayoub El Kaabi',club:'Olympiacos'}, {name:'Abde Ezzalzouli',club:'Real Betis'}, {name:'Yassine Gessime',club:'Strasbourg'}, {name:'Soufiane Rahimi',club:'Al-Ain'}, {name:'Chemsdine Talbi',club:'Sunderland'}]
  },
  // ── Group D ──
  'Paraguay': {
    status:'official', // Final 26 (Alfaro). Source: Olympics.com/FIFA, 2026-06-01.
    gk:[{name:'Gatito Fernandez',club:'Cerro Porteno'}, {name:'Orlando Gill',club:'San Lorenzo'}, {name:'Gaston Olveira',club:'Olimpia'}],
    def:[{name:'Gustavo Gomez',club:'Palmeiras'}, {name:'Junior Alonso',club:'Atletico Mineiro'}, {name:'Fabian Balbuena',club:'Gremio'}, {name:'Omar Alderete',club:'Sunderland'}, {name:'Juan Jose Caceres',club:'Dynamo Moscow'}, {name:'Gustavo Velazquez',club:'Cerro Porteno'}, {name:'Jose Canale',club:'Lanus'}, {name:'Alexandro Maidana',club:'Talleres'}],
    mid:[{name:'Miguel Almiron',club:'Atlanta United'}, {name:'Kaku',club:'Al-Ain'}, {name:'Andres Cubas',club:'Vancouver Whitecaps'}, {name:'Ramon Sosa',club:'Palmeiras'}, {name:'Diego Gomez',club:'Brighton'}, {name:'Damian Bobadilla',club:'Sao Paulo'}, {name:'Braian Ojeda',club:'Orlando City'}, {name:'Matias Galarza',club:'Atlanta United'}, {name:'Mauricio',club:'Palmeiras'}],
    att:[{name:'Antonio Sanabria',club:'Cremonese'}, {name:'Julio Enciso',club:'Strasbourg'}, {name:'Gabriel Avalos',club:'Independiente'}, {name:'Alex Arce',club:'Independiente Rivadavia'}, {name:'Isidro Pitta',club:'Red Bull Bragantino'}, {name:'Gustavo Caballero',club:'Portsmouth'}]
  },
  'Türkiye': {
    status:'official', // Final 26 (Montella). Source: USA Today / FIFA, 2026-06-02. Qualified via March 2026 playoff.
    gk:[{name:'Altay Bayindir',club:'Manchester United'}, {name:'Mert Gunok',club:'Fenerbahce'}, {name:'Ugurcan Cakir',club:'Galatasaray'}],
    def:[{name:'Abdulkerim Bardakci',club:'Galatasaray'}, {name:'Caglar Soyuncu',club:'Fenerbahce'}, {name:'Eren Elmali',club:'Galatasaray'}, {name:'Ferdi Kadioglu',club:'Brighton'}, {name:'Merih Demiral',club:'Al Ahli'}, {name:'Mert Muldur',club:'Fenerbahce'}, {name:'Ozan Kabak',club:'Hoffenheim'}, {name:'Samet Akaydin',club:'Caykur Rizespor'}, {name:'Zeki Celik',club:'Roma'}],
    mid:[{name:'Hakan Calhanoglu',club:'Inter'}, {name:'Ismail Yuksek',club:'Fenerbahce'}, {name:'Kaan Ayhan',club:'Galatasaray'}, {name:'Orkun Kokcu',club:'Besiktas'}, {name:'Salih Ozcan',club:'Borussia Dortmund'}],
    att:[{name:'Arda Guler',club:'Real Madrid'}, {name:'Baris Alper Yilmaz',club:'Galatasaray'}, {name:'Can Uzun',club:'Eintracht Frankfurt'}, {name:'Deniz Gul',club:'FC Porto'}, {name:'Irfan Can Kahveci',club:'Kasimpasa'}, {name:'Kenan Yildiz',club:'Juventus'}, {name:'Kerem Akturkoglu',club:'Fenerbahce'}, {name:'Oguz Aydin',club:'Fenerbahce'}, {name:'Yunus Akgun',club:'Galatasaray'}]
  },
  'Australia': {
    status:'official', // Final 26 (Popovic). Source: Football Australia (official), 2026-05-31.
    gk:[{name:'Mathew Ryan',club:'Levante'}, {name:'Paul Izzo',club:'Randers FC'}, {name:'Patrick Beach',club:'Melbourne City'}],
    def:[{name:'Aziz Behich',club:'Melbourne City'}, {name:'Jordan Bos',club:'Feyenoord'}, {name:'Cameron Burgess',club:'Swansea City'}, {name:'Alessandro Circati',club:'Parma'}, {name:'Milos Degenek',club:'APOEL'}, {name:'Jason Geria',club:'Albirex Niigata'}, {name:'Lucas Herrington',club:'Colorado Rapids'}, {name:'Jacob Italiano',club:'Grazer AK'}, {name:'Harry Souttar',club:'Leicester City'}, {name:'Kai Trewin',club:'New York City FC'}],
    mid:[{name:'Cameron Devlin',club:'Hearts'}, {name:'Ajdin Hrustic',club:'Heracles Almelo'}, {name:'Jackson Irvine',club:'St Pauli'}, {name:'Connor Metcalfe',club:'St Pauli'}, {name:'Aiden ONeill',club:'New York City FC'}, {name:'Paul Okon-Engstler',club:'Sydney FC'}],
    att:[{name:'Nestory Irankunda',club:'Watford'}, {name:'Mathew Leckie',club:'Melbourne City'}, {name:'Awer Mabil',club:'Castellon'}, {name:'Mohamed Toure',club:'Norwich City'}, {name:'Nishan Velupillay',club:'Melbourne Victory'}, {name:'Cristian Volpato',club:'Sassuolo'}, {name:'Tete Yengi',club:'Machida Zelvia'}]
  },
  'USA': {
    status:'official', // Final 26 (Pochettino), host. Source: U.S. Soccer / The Athletic / ESPN, 2026-05-27.
    gk:[{name:'Matt Turner',club:'New England Revolution'}, {name:'Matt Freese',club:'New York City FC'}, {name:'Chris Brady',club:'Chicago Fire'}],
    def:[{name:'Sergino Dest',club:'PSV'}, {name:'Chris Richards',club:'Crystal Palace'}, {name:'Antonee Robinson',club:'Fulham'}, {name:'Auston Trusty',club:'Celtic'}, {name:'Miles Robinson',club:'FC Cincinnati'}, {name:'Tim Ream',club:'Charlotte FC'}, {name:'Alex Freeman',club:'Villarreal'}, {name:'Max Arfsten',club:'Columbus Crew'}, {name:'Mark McKenzie',club:'Toulouse'}, {name:'Joe Scally',club:'Borussia Monchengladbach'}],
    mid:[{name:'Tyler Adams',club:'Bournemouth'}, {name:'Gio Reyna',club:'Borussia Monchengladbach'}, {name:'Weston McKennie',club:'Juventus'}, {name:'Sebastian Berhalter',club:'Vancouver Whitecaps'}, {name:'Cristian Roldan',club:'Seattle Sounders'}, {name:'Malik Tillman',club:'Bayer Leverkusen'}],
    att:[{name:'Ricardo Pepi',club:'PSV'}, {name:'Christian Pulisic',club:'AC Milan'}, {name:'Brenden Aaronson',club:'Leeds United'}, {name:'Haji Wright',club:'Coventry City'}, {name:'Folarin Balogun',club:'Monaco'}, {name:'Timothy Weah',club:'Marseille'}, {name:'Alejandro Zendejas',club:'Club America'}]
  },
  // ── Group E ──
  'Ecuador': {
    status:'official', // Final 26 (Beccacece). Source: Olympics.com/FIFA, late May 2026.
    gk:[{name:'Hernan Galindez',club:'Huracan'}, {name:'Moises Ramirez',club:'AE Kifisia'}, {name:'Gonzalo Valle',club:'LDU Quito'}],
    def:[{name:'Willian Pacho',club:'Paris Saint-Germain'}, {name:'Piero Hincapie',club:'Arsenal'}, {name:'Joel Ordonez',club:'Club Brugge'}, {name:'Felix Torres',club:'Internacional'}, {name:'Pervis Estupinan',club:'AC Milan'}, {name:'Angelo Preciado',club:'Atletico Mineiro'}, {name:'Jackson Porozo',club:'Tijuana'}],
    mid:[{name:'Moises Caicedo',club:'Chelsea'}, {name:'Jordy Alcivar',club:'Independiente'}, {name:'Denil Castillo',club:'Midtjylland'}, {name:'Alan Franco',club:'Atletico Mineiro'}, {name:'Pedro Vite',club:'Pumas UNAM'}, {name:'Kendry Paez',club:'River Plate'}, {name:'Yaimar Medina',club:'Genk'}],
    att:[{name:'Kevin Rodriguez',club:'Union Saint-Gilloise'}, {name:'Anthony Valencia',club:'Royal Antwerp'}, {name:'Enner Valencia',club:'Pachuca'}, {name:'Jordy Caicedo',club:'Huracan'}, {name:'Jeremy Arevalo',club:'Stuttgart'}, {name:'Gonzalo Plata',club:'Flamengo'}, {name:'Alan Minda',club:'Atletico Mineiro'}, {name:'John Yeboah',club:'Venezia'}, {name:'Nilson Angulo',club:'Sunderland'}]
  },
  'Germany': {
    status:'official', // Final 26 (Nagelsmann). Source: SI / Bundesliga.com, 2026-05-21. Neuer recalled as No.1.
    gk:[{name:'Oliver Baumann',club:'Hoffenheim'}, {name:'Manuel Neuer',club:'Bayern Munich'}, {name:'Alexander Nubel',club:'Stuttgart'}],
    def:[{name:'Waldemar Anton',club:'Borussia Dortmund'}, {name:'Nathaniel Brown',club:'Eintracht Frankfurt'}, {name:'David Raum',club:'RB Leipzig'}, {name:'Antonio Rudiger',club:'Real Madrid'}, {name:'Nico Schlotterbeck',club:'Borussia Dortmund'}, {name:'Jonathan Tah',club:'Bayern Munich'}, {name:'Malick Thiaw',club:'Newcastle'}],
    mid:[{name:'Joshua Kimmich',club:'Bayern Munich'}, {name:'Aleksandar Pavlovic',club:'Bayern Munich'}, {name:'Angelo Stiller',club:'Stuttgart'}, {name:'Pascal Gross',club:'Brighton'}, {name:'Felix Nmecha',club:'Borussia Dortmund'}, {name:'Leon Goretzka',club:'Bayern Munich'}, {name:'Nadiem Amiri',club:'Mainz'}],
    att:[{name:'Maximilian Beier',club:'Borussia Dortmund'}, {name:'Kai Havertz',club:'Arsenal'}, {name:'Lennart Karl',club:'Bayern Munich'}, {name:'Jamie Leweling',club:'Stuttgart'}, {name:'Jamal Musiala',club:'Bayern Munich'}, {name:'Leroy Sane',club:'Galatasaray'}, {name:'Deniz Undav',club:'Stuttgart'}, {name:'Florian Wirtz',club:'Liverpool'}, {name:'Nick Woltemade',club:'Newcastle'}]
  },
  'Ivory Coast': {
    status:'official', // Final 26 (Fae). Source: FIFA / Goal, 2026-05-19. Clement Akpa in final 26.
    gk:[{name:'Yahia Fofana',club:'Caykur Rizespor'}, {name:'Mohamed Kone',club:'Royal Charleroi'}, {name:'Alban Lafont',club:'Panathinaikos'}],
    def:[{name:'Emmanuel Agbadou',club:'Besiktas'}, {name:'Clement Akpa',club:'Auxerre'}, {name:'Ousmane Diomande',club:'Sporting CP'}, {name:'Guela Doue',club:'Strasbourg'}, {name:'Ghislain Konan',club:'Gil Vicente'}, {name:'Odilon Kossounou',club:'Atalanta'}, {name:'Wilfried Singo',club:'Galatasaray'}, {name:'Evan Ndicka',club:'Roma'}],
    mid:[{name:'Seko Fofana',club:'FC Porto'}, {name:'Parfait Guiagon',club:'Sporting Charleroi'}, {name:'Christ Inao Oulai',club:'Trabzonspor'}, {name:'Franck Kessie',club:'Al-Ahli'}, {name:'Ibrahim Sangare',club:'Nottingham Forest'}, {name:'Jean-Michael Seri',club:'Maribor'}],
    att:[{name:'Simon Adingra',club:'Monaco'}, {name:'Ange-Yoan Bonny',club:'Inter'}, {name:'Amad Diallo',club:'Manchester United'}, {name:'Oumar Diakite',club:'Cercle Brugge'}, {name:'Yan Diomande',club:'RB Leipzig'}, {name:'Evann Guessand',club:'Crystal Palace'}, {name:'Nicolas Pepe',club:'Villarreal'}, {name:'Bazoumana Toure',club:'Hoffenheim'}, {name:'Elye Wahi',club:'Nice'}]
  },
  'Curacao': {
    status:'official', // Final 26 (Advocaat). Source: FIFA.com / Olympics.com, 2026-05-18.
    gk:[{name:'Tyrick Bodak',club:'SC Telstar'}, {name:'Trevor Doornbusch',club:'VVV-Venlo'}, {name:'Eloy Room',club:'Miami FC'}],
    def:[{name:'Riechedly Bazoer',club:'Konyaspor'}, {name:'Joshua Brenet',club:'Kayserispor'}, {name:'Roshon van Eijma',club:'RKC Waalwijk'}, {name:'Sherel Floranus',club:'PEC Zwolle'}, {name:'Deveron Fonville',club:'NEC Nijmegen'}, {name:'Jurien Gaari',club:'Abha Club'}, {name:'Armando Obispo',club:'PSV'}, {name:'Shurandy Sambo',club:'Sparta Rotterdam'}],
    mid:[{name:'Juninho Bacuna',club:'FC Volendam'}, {name:'Leandro Bacuna',club:'Igdir FK'}, {name:'Livano Comenencia',club:'FC Zurich'}, {name:'Kevin Felida',club:'FC Den Bosch'}, {name:'ArJany Martha',club:'Rotherham United'}, {name:'Tyrese Noslin',club:'SC Telstar'}, {name:'Godfried Roemeratoe',club:'RKC Waalwijk'}],
    att:[{name:'Jeremy Antonisse',club:'AE Kifisia'}, {name:'Tahith Chong',club:'Sheffield United'}, {name:'Kenji Gorre',club:'Maccabi Haifa'}, {name:'Sontje Hansen',club:'Middlesbrough'}, {name:'Gervane Kastaneer',club:'Terengganu FC'}, {name:'Brandley Kuwas',club:'FC Volendam'}, {name:'Jurgen Locadia',club:'Miami FC'}, {name:'Jearl Margaritha',club:'SK Beveren'}]
  },
  // ── Group F ──
  'Netherlands': {
    status:'official', // Final 26 (Koeman). Source: SI / AS / Reuters, 2026-05-27. Frimpong omitted.
    gk:[{name:'Mark Flekken',club:'Bayer Leverkusen'}, {name:'Robin Roefs',club:'Sunderland'}, {name:'Bart Verbruggen',club:'Brighton'}],
    def:[{name:'Nathan Ake',club:'Manchester City'}, {name:'Denzel Dumfries',club:'Inter'}, {name:'Jorrel Hato',club:'Chelsea'}, {name:'Jurrien Timber',club:'Arsenal'}, {name:'Jan Paul van Hecke',club:'Brighton'}, {name:'Micky van de Ven',club:'Tottenham'}, {name:'Virgil van Dijk',club:'Liverpool'}],
    mid:[{name:'Frenkie de Jong',club:'Barcelona'}, {name:'Marten de Roon',club:'Atalanta'}, {name:'Ryan Gravenberch',club:'Liverpool'}, {name:'Teun Koopmeiners',club:'Juventus'}, {name:'Tijjani Reijnders',club:'Manchester City'}, {name:'Guus Til',club:'PSV'}, {name:'Quinten Timber',club:'Marseille'}, {name:'Mats Wieffer',club:'Brighton'}],
    att:[{name:'Brian Brobbey',club:'Sunderland'}, {name:'Memphis Depay',club:'Corinthians'}, {name:'Cody Gakpo',club:'Liverpool'}, {name:'Justin Kluivert',club:'Bournemouth'}, {name:'Noa Lang',club:'Galatasaray'}, {name:'Donyell Malen',club:'Roma'}, {name:'Crysencio Summerville',club:'West Ham'}, {name:'Wout Weghorst',club:'Ajax'}]
  },
  'Sweden': {
    status:'official', // Final 26 (Potter). Source: BBC / FIFA, 2026-05-12. Qualified via UEFA play-offs.
    gk:[{name:'Viktor Johansson',club:'Stoke City'}, {name:'Kristoffer Nordfeldt',club:'AIK'}, {name:'Jacob Widell Zetterstrom',club:'Derby County'}],
    def:[{name:'Hjalmar Ekdal',club:'Burnley'}, {name:'Gabriel Gudmundsson',club:'Leeds United'}, {name:'Isak Hien',club:'Atalanta'}, {name:'Herman Johansson',club:'FC Dallas'}, {name:'Gustaf Lagerbielke',club:'Braga'}, {name:'Victor Lindelof',club:'Aston Villa'}, {name:'Erik Smith',club:'St. Pauli'}, {name:'Carl Starfelt',club:'Celta Vigo'}, {name:'Elliot Stroud',club:'Mjallby'}, {name:'Daniel Svensson',club:'Borussia Dortmund'}],
    mid:[{name:'Taha Ali',club:'Malmo'}, {name:'Yasin Ayari',club:'Brighton'}, {name:'Lucas Bergvall',club:'Tottenham'}, {name:'Jesper Karlstrom',club:'Udinese'}, {name:'Ken Sema',club:'Pafos'}, {name:'Mattias Svanberg',club:'Wolfsburg'}, {name:'Besfort Zeneli',club:'Union Saint-Gilloise'}],
    att:[{name:'Alexander Bernhardsson',club:'Holstein Kiel'}, {name:'Anthony Elanga',club:'Newcastle'}, {name:'Viktor Gyokeres',club:'Arsenal'}, {name:'Alexander Isak',club:'Liverpool'}, {name:'Gustaf Nilsson',club:'Club Brugge'}, {name:'Benjamin Nygren',club:'Celtic'}]
  },
  'Japan': {
    status:'official', // Final 26 (Moriyasu). Source: ESPN / Reuters, 2026-05-15.
    gk:[{name:'Zion Suzuki',club:'Parma'}, {name:'Tomoki Hayakawa',club:'Kashima Antlers'}, {name:'Keisuke Osako',club:'Sanfrecce Hiroshima'}],
    def:[{name:'Yuto Nagatomo',club:'FC Tokyo'}, {name:'Shogo Taniguchi',club:'Sint-Truiden'}, {name:'Ko Itakura',club:'Ajax'}, {name:'Tsuyoshi Watanabe',club:'Feyenoord'}, {name:'Takehiro Tomiyasu',club:'Ajax'}, {name:'Hiroki Ito',club:'Bayern Munich'}, {name:'Ayumu Seko',club:'Le Havre'}, {name:'Yukinari Sugawara',club:'Werder Bremen'}, {name:'Junnoske Suzuki',club:'FC Copenhagen'}],
    mid:[{name:'Wataru Endo',club:'Liverpool'}, {name:'Daichi Kamada',club:'Crystal Palace'}, {name:'Ao Tanaka',club:'Leeds United'}, {name:'Kaishu Sano',club:'Mainz 05'}, {name:'Yuito Suzuki',club:'Freiburg'}, {name:'Kento Shoigai',club:'Wolfsburg'}],
    att:[{name:'Junya Ito',club:'Genk'}, {name:'Koki Ogawa',club:'NEC Nijmegen'}, {name:'Daizen Maeda',club:'Celtic'}, {name:'Ritsu Doan',club:'Eintracht Frankfurt'}, {name:'Ayase Ueda',club:'Feyenoord'}, {name:'Keito Nakamura',club:'Stade de Reims'}, {name:'Takefusa Kubo',club:'Real Sociedad'}, {name:'Keisuke Goto',club:'Sint-Truiden'}]
  },
  'Tunisia': {
    status:'official', // Final 26 (Lamouchi). Source: USA Today / Yahoo, 2026-05-15. Captain Skhiri.
    gk:[{name:'Aymen Dahmen',club:'CS Sfaxien'}, {name:'Sabri Ben Hassan',club:'Etoile du Sahel'}, {name:'Abdelmouhib Chamakh',club:'Club Africain'}],
    def:[{name:'Montassar Talbi',club:'Lorient'}, {name:'Dylan Bronn',club:'Servette'}, {name:'Omar Rekik',club:'Maribor'}, {name:'Adem Arous',club:'Kasimpasa'}, {name:'Yan Valery',club:'Young Boys'}, {name:'Moutaz Neffati',club:'IFK Norrkoping'}, {name:'Raed Chikhaoui',club:'US Monastir'}, {name:'Ali Abdi',club:'Nice'}, {name:'Mohamed Amine Ben Hamida',club:'Esperance de Tunis'}],
    mid:[{name:'Ellyes Skhiri',club:'Eintracht Frankfurt'}, {name:'Mohamed Hadj-Mahmoud',club:'Lugano'}, {name:'Rani Khedira',club:'Union Berlin'}, {name:'Hannibal Mejbri',club:'Burnley'}, {name:'Anis Ben Slimane',club:'Norwich City'}, {name:'Mortadha Ben Ouanes',club:'Kasimpasa'}, {name:'Ismael Gharbi',club:'Augsburg'}],
    att:[{name:'Khalil Ayari',club:'Paris Saint-Germain'}, {name:'Sebastian Tounekti',club:'Celtic'}, {name:'Elias Achouri',club:'Copenhagen'}, {name:'Firas Chaouat',club:'Club Africain'}, {name:'Hazem Mastouri',club:'Dynamo Makhachkala'}, {name:'Elias Saad',club:'Hannover 96'}, {name:'Rayan Elloumi',club:'Vancouver Whitecaps'}]
  },
  // ── Group G ──
  'Belgium': {
    status:'official', // Final 26 (Garcia). Source: Belga / Royal Belgian FA, 2026-05-15. Openda omitted.
    gk:[{name:'Thibaut Courtois',club:'Real Madrid'}, {name:'Senne Lammens',club:'Manchester United'}, {name:'Mike Penders',club:'Strasbourg'}],
    def:[{name:'Zeno Debast',club:'Sporting CP'}, {name:'Thomas Meunier',club:'Lille'}, {name:'Timothy Castagne',club:'Fulham'}, {name:'Brandon Mechele',club:'Club Brugge'}, {name:'Arthur Theate',club:'Eintracht Frankfurt'}, {name:'Maxim De Cuyper',club:'Brighton'}, {name:'Joaquin Seys',club:'Club Brugge'}, {name:'Nathan Ngoy',club:'Lille'}, {name:'Koni De Winter',club:'AC Milan'}],
    mid:[{name:'Kevin De Bruyne',club:'Napoli'}, {name:'Amadou Onana',club:'Aston Villa'}, {name:'Nicolas Raskin',club:'Rangers'}, {name:'Youri Tielemans',club:'Aston Villa'}, {name:'Hans Vanaken',club:'Club Brugge'}, {name:'Axel Witsel',club:'Girona'}],
    att:[{name:'Romelu Lukaku',club:'Napoli'}, {name:'Charles De Ketelaere',club:'Atalanta'}, {name:'Jeremy Doku',club:'Manchester City'}, {name:'Leandro Trossard',club:'Arsenal'}, {name:'Dodi Lukebakio',club:'Benfica'}, {name:'Alexis Saelemaekers',club:'AC Milan'}, {name:'Diego Moreira',club:'Strasbourg'}, {name:'Matias Fernandez-Pardo',club:'Lille'}]
  },
  'Iran': {
    status:'official', // Final 26 (Ghalenoei). Source: ESPN / Reuters / Goal, 2026-06-01. Azmoun dropped.
    gk:[{name:'Alireza Beiranvand',club:'Tractor'}, {name:'Hossein Hosseini',club:'Sepahan'}, {name:'Payam Niazmand',club:'Persepolis'}],
    def:[{name:'Danial Eiri',club:'Malavan'}, {name:'Ehsan Hajsafi',club:'Sepahan'}, {name:'Saleh Hardani',club:'Esteghlal'}, {name:'Hossein Kanaani',club:'Persepolis'}, {name:'Shoja Khalilzadeh',club:'Tractor'}, {name:'Milad Mohammadi',club:'Persepolis'}, {name:'Ali Nemati',club:'Foolad'}, {name:'Ramin Rezaeian',club:'Foolad'}],
    mid:[{name:'Rouzbeh Cheshmi',club:'Esteghlal'}, {name:'Saeid Ezatolahi',club:'Shabab Al-Ahli'}, {name:'Mehdi Ghaedi',club:'Al-Nasr'}, {name:'Saman Ghoddos',club:'Kalba'}, {name:'Mohammad Ghorbani',club:'Al Wahda'}, {name:'Alireza Jahanbakhsh',club:'Dender'}, {name:'Mohammad Mohebi',club:'Rostov'}, {name:'Amir Mohammad Razzaghinia',club:'Esteghlal'}, {name:'Mehdi Torabi',club:'Tractor'}, {name:'Aria Yousefi',club:'Sepahan'}],
    att:[{name:'Ali Alipour',club:'Persepolis'}, {name:'Dennis Dargahi',club:'Standard Liege'}, {name:'Amirhossein Hosseinzadeh',club:'Tractor'}, {name:'Mehdi Taremi',club:'Olympiacos'}, {name:'Shahriar Moghanlou',club:'Kalba'}]
  },
  'Egypt': {
    status:'official', // FLAG: medium confidence (Hossam Hassan). Source: Olympics.com/EFA, 2026-06-02; conflicts with KingFut on marginal cuts. Verify Aqtay Abdallah, Karim Hafez, Hamza Abdelkarim.
    gk:[{name:'Mohamed El Shenawy',club:'Al Ahly'}, {name:'Mostafa Shobeir',club:'Al Ahly'}, {name:'Mohamed Alaa',club:'El Gouna'}],
    def:[{name:'Mohamed Hani',club:'Al Ahly'}, {name:'Tarek Alaa',club:'Zed'}, {name:'Hamdy Fathy',club:'Al Wakrah'}, {name:'Rami Rabia',club:'Al Ain'}, {name:'Yasser Ibrahim',club:'Al Ahly'}, {name:'Hossam Abdelmaguid',club:'Zamalek'}, {name:'Mohamed Abdelmonem',club:'Nice'}, {name:'Ahmed Fotouh',club:'Zamalek'}, {name:'Karim Hafez',club:'Pyramids'}],
    mid:[{name:'Marwan Attia',club:'Al Ahly'}, {name:'Mohanad Lasheen',club:'Pyramids'}, {name:'Nabil Emad',club:'Al Najma'}, {name:'Mahmoud Saber',club:'Zed'}, {name:'Ahmed Zizo',club:'Al Ahly'}, {name:'Emam Ashour',club:'Al Ahly'}, {name:'Mostafa Ziko',club:'Pyramids'}, {name:'Mahmoud Trezeguet',club:'Al Ahly'}, {name:'Ibrahim Adel',club:'Nordsjaelland'}, {name:'Haissem Hassan',club:'Real Oviedo'}],
    att:[{name:'Mohamed Salah',club:'Liverpool'}, {name:'Omar Marmoush',club:'Manchester City'}, {name:'Aqtay Abdallah',club:'Enppi'}, {name:'Hamza Abdelkarim',club:'Barcelona'}]
  },
  'New Zealand': {
    status:'official', // Final 26 (Bazeley). Source: Olympics.com / FIFA, 2026-06-01.
    gk:[{name:'Max Crocombe',club:'Millwall'}, {name:'Alex Paulsen',club:'Lechia Gdansk'}, {name:'Michael Woud',club:'Auckland FC'}],
    def:[{name:'Tim Payne',club:'Wellington Phoenix'}, {name:'Francis de Vries',club:'Auckland FC'}, {name:'Tyler Bindon',club:'Nottingham Forest'}, {name:'Michael Boxall',club:'Minnesota United'}, {name:'Liberato Cacace',club:'Wrexham'}, {name:'Nando Pijnaker',club:'Auckland FC'}, {name:'Finn Surman',club:'Portland Timbers'}, {name:'Callan Elliot',club:'Auckland FC'}, {name:'Tommy Smith',club:'Braintree Town'}],
    mid:[{name:'Joe Bell',club:'Viking FK'}, {name:'Marko Stamenic',club:'Swansea City'}, {name:'Alex Rufer',club:'Wellington Phoenix'}, {name:'Ryan Thomas',club:'PEC Zwolle'}, {name:'Lachlan Bayliss',club:'Newcastle Jets'}],
    att:[{name:'Matt Garbett',club:'Peterborough United'}, {name:'Chris Wood',club:'Nottingham Forest'}, {name:'Sarpreet Singh',club:'Wellington Phoenix'}, {name:'Eli Just',club:'Motherwell'}, {name:'Kosta Barbarouses',club:'Western Sydney Wanderers'}, {name:'Ben Waine',club:'Port Vale'}, {name:'Ben Old',club:'Saint-Etienne'}, {name:'Callum McCowatt',club:'Silkeborg'}, {name:'Jesse Randall',club:'Auckland FC'}]
  },
  // ── Group H ──
  'Spain': {
    status:'official', // Final 26 (De la Fuente). Source: AS / SI, 2026-05-25. First Spain squad with no Real Madrid players.
    gk:[{name:'Unai Simon',club:'Athletic Club'}, {name:'David Raya',club:'Arsenal'}, {name:'Joan Garcia',club:'Barcelona'}],
    def:[{name:'Pedro Porro',club:'Tottenham'}, {name:'Marcos Llorente',club:'Atletico Madrid'}, {name:'Pau Cubarsi',club:'Barcelona'}, {name:'Marc Pubill',club:'Atletico Madrid'}, {name:'Aymeric Laporte',club:'Athletic Club'}, {name:'Eric Garcia',club:'Barcelona'}, {name:'Alejandro Grimaldo',club:'Bayer Leverkusen'}, {name:'Marc Cucurella',club:'Chelsea'}],
    mid:[{name:'Rodri',club:'Manchester City'}, {name:'Martin Zubimendi',club:'Arsenal'}, {name:'Gavi',club:'Barcelona'}, {name:'Dani Olmo',club:'Barcelona'}, {name:'Pedri',club:'Barcelona'}, {name:'Fabian Ruiz',club:'Paris Saint-Germain'}, {name:'Mikel Merino',club:'Arsenal'}, {name:'Alex Baena',club:'Atletico Madrid'}],
    att:[{name:'Lamine Yamal',club:'Barcelona'}, {name:'Ferran Torres',club:'Barcelona'}, {name:'Yeremy Pino',club:'Crystal Palace'}, {name:'Nico Williams',club:'Athletic Club'}, {name:'Victor Munoz',club:'Osasuna'}, {name:'Mikel Oyarzabal',club:'Real Sociedad'}, {name:'Borja Iglesias',club:'Celta Vigo'}]
  },
  'Uruguay': {
    status:'official', // Final 26 (Bielsa). Source: Olympics.com / SI, 2026-05-31.
    gk:[{name:'Sergio Rochet',club:'Internacional'}, {name:'Fernando Muslera',club:'Estudiantes'}, {name:'Santiago Mele',club:'Monterrey'}],
    def:[{name:'Guillermo Varela',club:'Flamengo'}, {name:'Ronald Araujo',club:'Barcelona'}, {name:'Jose Maria Gimenez',club:'Atletico Madrid'}, {name:'Santiago Bueno',club:'Wolves'}, {name:'Sebastian Caceres',club:'Club America'}, {name:'Mathias Olivera',club:'Napoli'}, {name:'Joaquin Piquerez',club:'Palmeiras'}, {name:'Matias Vina',club:'River Plate'}],
    mid:[{name:'Manuel Ugarte',club:'Manchester United'}, {name:'Emiliano Martinez',club:'Palmeiras'}, {name:'Rodrigo Bentancur',club:'Tottenham'}, {name:'Federico Valverde',club:'Real Madrid'}, {name:'Agustin Canobbio',club:'Fluminense'}, {name:'Juan Manuel Sanabria',club:'Real Salt Lake'}, {name:'Giorgian de Arrascaeta',club:'Flamengo'}, {name:'Nicolas de la Cruz',club:'Flamengo'}, {name:'Rodrigo Zalazar',club:'Braga'}, {name:'Facundo Pellistri',club:'Panathinaikos'}, {name:'Maximiliano Araujo',club:'Sporting CP'}, {name:'Brian Rodriguez',club:'Club America'}],
    att:[{name:'Rodrigo Aguirre',club:'Tigres'}, {name:'Federico Vinas',club:'Real Oviedo'}, {name:'Darwin Nunez',club:'Al-Hilal'}]
  },
  'Saudi Arabia': {
    status:'official', // Final 26 (Donis). Source: Olympics.com / ESPN, 2026-06-01.
    gk:[{name:'Nawaf Al Aqidi',club:'Al-Nassr'}, {name:'Mohamed Al Owais',club:'Al-Ula'}, {name:'Ahmed Alkassar',club:'Al-Qadsiah'}],
    def:[{name:'Saud Abdulhamid',club:'Lens'}, {name:'Jehad Thakri',club:'Al-Qadsiah'}, {name:'Abdulelah Al Amri',club:'Al-Nassr'}, {name:'Hassan Tambakti',club:'Al-Hilal'}, {name:'Ali Lajami',club:'Al-Hilal'}, {name:'Hassan Kadesh',club:'Al-Ittihad'}, {name:'Moteb Al Harbi',club:'Al-Hilal'}, {name:'Nawaf Boushal',club:'Al-Nassr'}, {name:'Ali Majrashi',club:'Al-Ahli'}, {name:'Mohammed Abu Alshamat',club:'Al-Qadsiah'}],
    mid:[{name:'Ziyad Al Johani',club:'Al-Ahli'}, {name:'Nasser Al Dawsari',club:'Al-Hilal'}, {name:'Mohamed Kanno',club:'Al-Hilal'}, {name:'Abdullah Al Khaibari',club:'Al-Nassr'}, {name:'Alaa Al Hejji',club:'Neom'}, {name:'Musab Al Juwayr',club:'Al-Qadsiah'}, {name:'Sultan Mandash',club:'Al-Hilal'}, {name:'Ayman Yahya',club:'Al-Nassr'}, {name:'Khalid Al Ghannam',club:'Al-Ettifaq'}],
    att:[{name:'Salem Al Dawsari',club:'Al-Hilal'}, {name:'Abdullah Al Hamdan',club:'Al-Nassr'}, {name:'Feras Al Brikan',club:'Al-Ahli'}, {name:'Saleh Al Shehri',club:'Al-Ittihad'}]
  },
  'Cape Verde': {
    status:'official', // Final 26 (Bubista). Source: Olympics.com, 2026-05-18. WC debut.
    gk:[{name:'Vozinha',club:'GD Chaves'}, {name:'Marcio da Rosa',club:'Montana'}, {name:'Carlos Santos',club:'San Diego FC'}],
    def:[{name:'Steven Moreira',club:'Columbus Crew'}, {name:'Wagner Pina',club:'Trabzonspor'}, {name:'Joao Paulo Fernandes',club:'FCSB'}, {name:'Sidny Lopes Cabral',club:'Benfica'}, {name:'Logan Costa',club:'Villarreal'}, {name:'Roberto Lopes',club:'Shamrock Rovers'}, {name:'Kelvin Pires',club:'SJK'}, {name:'Stopira',club:'Torreense'}, {name:'Edilson Borges',club:'Al Bataeh'}],
    mid:[{name:'Jamiro Monteiro',club:'PEC Zwolle'}, {name:'Telmo Arcanjo',club:'Vitoria de Guimaraes'}, {name:'Yannick Semedo',club:'Farense'}, {name:'Laros Duarte',club:'Puskas Akademia'}, {name:'Deroy Duarte',club:'Ludogorets Razgrad'}, {name:'Kevin Pina',club:'Krasnodar'}],
    att:[{name:'Ryan Mendes',club:'Igdir FK'}, {name:'Willy Semedo',club:'Omonia'}, {name:'Garry Rodrigues',club:'Apollon Limassol'}, {name:'Jovane Cabral',club:'Estrela Amadora'}, {name:'Nuno Da Costa',club:'Istanbul Basaksehir'}, {name:'Dailon Livramento',club:'Casa Pia'}, {name:'Gilson Benchimol',club:'Akron Tolyatti'}, {name:'Helio Varela',club:'Maccabi Tel Aviv'}]
  },
  // ── Group I ──
  'Norway': {
    status:'official', // Final 26 (Solbakken). Source: Olympics.com / ESPN, 2026-05-21. First WC since 1998.
    gk:[{name:'Orjan Nyland',club:'Sevilla'}, {name:'Egil Selvik',club:'Watford'}, {name:'Sander Tangvik',club:'Hamburg'}],
    def:[{name:'Julian Ryerson',club:'Borussia Dortmund'}, {name:'Kristoffer Ajer',club:'Brentford'}, {name:'Leo Skiri Ostigard',club:'Genoa'}, {name:'David Moller Wolfe',club:'Wolves'}, {name:'Marcus Holmgren Pedersen',club:'Torino'}, {name:'Torbjorn Heggem',club:'Bologna'}, {name:'Fredrik Bjorkan',club:'Bodo/Glimt'}, {name:'Henrik Falchener',club:'Viking'}, {name:'Sondre Langas',club:'Derby County'}],
    mid:[{name:'Martin Odegaard',club:'Arsenal'}, {name:'Sander Berge',club:'Fulham'}, {name:'Patrick Berg',club:'Bodo/Glimt'}, {name:'Kristian Thorstvedt',club:'Sassuolo'}, {name:'Morten Thorsby',club:'Cremonese'}, {name:'Thelo Aasgaard',club:'Rangers'}, {name:'Andreas Schjelderup',club:'Benfica'}, {name:'Jens Petter Hauge',club:'Bodo/Glimt'}, {name:'Fredrik Aursnes',club:'Benfica'}],
    att:[{name:'Erling Haaland',club:'Manchester City'}, {name:'Alexander Sorloth',club:'Atletico Madrid'}, {name:'Jorgen Strand Larsen',club:'Crystal Palace'}, {name:'Oscar Bobb',club:'Fulham'}, {name:'Antonio Nusa',club:'RB Leipzig'}]
  },
  'France': {
    status:'official', // Final 26 (Deschamps). Source: SI / BBC / ESPN, 2026-05-14.
    gk:[{name:'Mike Maignan',club:'AC Milan'}, {name:'Robin Risser',club:'Lens'}, {name:'Brice Samba',club:'Rennes'}],
    def:[{name:'Lucas Digne',club:'Aston Villa'}, {name:'Malo Gusto',club:'Chelsea'}, {name:'Lucas Hernandez',club:'Paris Saint-Germain'}, {name:'Theo Hernandez',club:'Al-Hilal'}, {name:'Ibrahima Konate',club:'Liverpool'}, {name:'Jules Kounde',club:'Barcelona'}, {name:'Maxence Lacroix',club:'Crystal Palace'}, {name:'William Saliba',club:'Arsenal'}, {name:'Dayot Upamecano',club:'Bayern Munich'}],
    mid:[{name:'NGolo Kante',club:'Fenerbahce'}, {name:'Manu Kone',club:'Roma'}, {name:'Adrien Rabiot',club:'AC Milan'}, {name:'Aurelien Tchouameni',club:'Real Madrid'}, {name:'Warren Zaire-Emery',club:'Paris Saint-Germain'}],
    att:[{name:'Maghnes Akliouche',club:'Monaco'}, {name:'Bradley Barcola',club:'Paris Saint-Germain'}, {name:'Rayan Cherki',club:'Manchester City'}, {name:'Ousmane Dembele',club:'Paris Saint-Germain'}, {name:'Desire Doue',club:'Paris Saint-Germain'}, {name:'Jean-Philippe Mateta',club:'Crystal Palace'}, {name:'Kylian Mbappe',club:'Real Madrid'}, {name:'Michael Olise',club:'Bayern Munich'}, {name:'Marcus Thuram',club:'Inter'}]
  },
  'Senegal': {
    status:'official', // Final 26 (Pape Thiaw). Source: USA Today / Al Jazeera, 2026-05-21 (upd 06-02).
    gk:[{name:'Edouard Mendy',club:'Al-Ahli'}, {name:'Mory Diaw',club:'Le Havre'}, {name:'Yehvann Diouf',club:'Nice'}],
    def:[{name:'Krepin Diatta',club:'Monaco'}, {name:'Antoine Mendy',club:'Nice'}, {name:'Kalidou Koulibaly',club:'Al-Hilal'}, {name:'El Hadji Malick Diouf',club:'West Ham'}, {name:'Mamadou Sarr',club:'Chelsea'}, {name:'Moussa Niakhate',club:'Lyon'}, {name:'Abdoulaye Seck',club:'Maccabi Haifa'}, {name:'Ismail Jakobs',club:'Galatasaray'}],
    mid:[{name:'Idrissa Gana Gueye',club:'Everton'}, {name:'Pape Gueye',club:'Villarreal'}, {name:'Lamine Camara',club:'Monaco'}, {name:'Habib Diarra',club:'Sunderland'}, {name:'Pathe Ciss',club:'Rayo Vallecano'}, {name:'Pape Matar Sarr',club:'Tottenham'}, {name:'Bara Sapoko Ndiaye',club:'Bayern Munich'}],
    att:[{name:'Sadio Mane',club:'Al-Nassr'}, {name:'Ismaila Sarr',club:'Crystal Palace'}, {name:'Iliman Ndiaye',club:'Everton'}, {name:'Assane Diao',club:'Como'}, {name:'Ibrahim Mbaye',club:'Paris Saint-Germain'}, {name:'Nicolas Jackson',club:'Chelsea'}, {name:'Bamba Dieng',club:'Lorient'}, {name:'Cherif Ndiaye',club:'Samsunspor'}]
  },
  'Iraq': {
    status:'official', // Final 26 (Arnold). Source: Olympics.com / ESPN, 2026-06-01.
    gk:[{name:'Fahad Talib',club:'Al Talaba'}, {name:'Jalal Hassan',club:'Al-Zawraa'}, {name:'Ahmed Basil',club:'Al-Shorta'}],
    def:[{name:'Hussein Ali',club:'Pogon Szczecin'}, {name:'Manaf Younis',club:'Al-Shorta'}, {name:'Zaid Tahseen',club:'Pakhtakor'}, {name:'Rebin Sulaka',club:'Port FC'}, {name:'Akam Hashem',club:'Al-Zawraa'}, {name:'Merchas Doski',club:'Viktoria Plzen'}, {name:'Ahmed Yahya',club:'Al-Shorta'}, {name:'Zaid Ismail',club:'Al-Talaba'}, {name:'Frans Putros',club:'Persib Bandung'}, {name:'Mustafa Saadoon',club:'Al-Shorta'}],
    mid:[{name:'Amir Al-Ammari',club:'Cracovia'}, {name:'Kevin Yakob',club:'AGF'}, {name:'Zidane Iqbal',club:'Utrecht'}, {name:'Aimar Sher',club:'Sarpsborg'}, {name:'Ibrahim Bayesh',club:'Al-Dhafra'}, {name:'Ahmed Qasem',club:'Nashville SC'}, {name:'Youssef Amyn',club:'AEK Larnaca'}, {name:'Marko Farji',club:'Venezia'}],
    att:[{name:'Ali Jassim',club:'Como'}, {name:'Ali Al-Hamadi',club:'Ipswich Town'}, {name:'Ali Yousef',club:'Apollon Limassol'}, {name:'Aymen Hussein',club:'Al-Karma'}, {name:'Mohanad Ali',club:'Dibba'}]
  },
  // ── Group J ──
  'Argentina': {
    status:'official', // Final 26 (Scaloni). Source: FIFA.com / Olympics.com, 2026-05-28.
    gk:[{name:'Emiliano Martinez',club:'Aston Villa'}, {name:'Geronimo Rulli',club:'Marseille'}, {name:'Juan Musso',club:'Atletico Madrid'}],
    def:[{name:'Gonzalo Montiel',club:'River Plate'}, {name:'Nahuel Molina',club:'Atletico Madrid'}, {name:'Lisandro Martinez',club:'Manchester United'}, {name:'Nicolas Otamendi',club:'Benfica'}, {name:'Leonardo Balerdi',club:'Marseille'}, {name:'Cristian Romero',club:'Tottenham'}, {name:'Facundo Medina',club:'Marseille'}, {name:'Nicolas Tagliafico',club:'Lyon'}],
    mid:[{name:'Leandro Paredes',club:'Boca Juniors'}, {name:'Rodrigo De Paul',club:'Inter Miami'}, {name:'Exequiel Palacios',club:'Bayer Leverkusen'}, {name:'Enzo Fernandez',club:'Chelsea'}, {name:'Alexis Mac Allister',club:'Liverpool'}, {name:'Giovani Lo Celso',club:'Real Betis'}, {name:'Valentin Barco',club:'Strasbourg'}],
    att:[{name:'Lionel Messi',club:'Inter Miami'}, {name:'Nicolas Paz',club:'Como'}, {name:'Thiago Almada',club:'Atletico Madrid'}, {name:'Nicolas Gonzalez',club:'Atletico Madrid'}, {name:'Giuliano Simeone',club:'Atletico Madrid'}, {name:'Lautaro Martinez',club:'Inter'}, {name:'Jose Manuel Lopez',club:'Palmeiras'}, {name:'Julian Alvarez',club:'Atletico Madrid'}]
  },
  'Austria': {
    status:'official', // Final 26 (Rangnick). Source: ESPN / FIFA, 2026-06-01. First WC since 1998.
    gk:[{name:'Alexander Schlager',club:'Red Bull Salzburg'}, {name:'Florian Wiegele',club:'Viktoria Plzen'}, {name:'Patrick Pentz',club:'Brondby'}],
    def:[{name:'David Affengruber',club:'Elche'}, {name:'Kevin Danso',club:'Tottenham'}, {name:'Stefan Posch',club:'Mainz 05'}, {name:'David Alaba',club:'Real Madrid'}, {name:'Philipp Lienhart',club:'Freiburg'}, {name:'Phillipp Mwene',club:'Mainz 05'}, {name:'Alexander Prass',club:'Hoffenheim'}, {name:'Marco Friedl',club:'Werder Bremen'}, {name:'Michael Svoboda',club:'Venezia'}],
    mid:[{name:'Xaver Schlager',club:'RB Leipzig'}, {name:'Nicolas Seiwald',club:'RB Leipzig'}, {name:'Marcel Sabitzer',club:'Borussia Dortmund'}, {name:'Florian Grillitsch',club:'Braga'}, {name:'Carney Chukwuemeka',club:'Borussia Dortmund'}, {name:'Romano Schmid',club:'Werder Bremen'}, {name:'Christoph Baumgartner',club:'RB Leipzig'}, {name:'Konrad Laimer',club:'Bayern Munich'}, {name:'Patrick Wimmer',club:'Wolfsburg'}, {name:'Paul Wanner',club:'PSV'}, {name:'Alessandro Schopf',club:'Wolfsberger AC'}],
    att:[{name:'Marko Arnautovic',club:'Red Star Belgrade'}, {name:'Michael Gregoritsch',club:'FC Augsburg'}, {name:'Sasa Kalajdzic',club:'LASK Linz'}]
  },
  'Algeria': {
    status:'official', // Final 26 (Petkovic). Source: USA Today / ESPN, 2026-05-31.
    gk:[{name:'Luca Zidane',club:'Granada'}, {name:'Oussama Benbot',club:'USM Alger'}, {name:'Melvin Mastil',club:'Stade Nyonnais'}],
    def:[{name:'Rafik Belghali',club:'Hellas Verona'}, {name:'Samir Chergui',club:'Red Star FC'}, {name:'Rayan Ait-Nouri',club:'Manchester City'}, {name:'Jaouen Hadjam',club:'Young Boys'}, {name:'Aissa Mandi',club:'Lille'}, {name:'Ramy Bensebaini',club:'Borussia Dortmund'}, {name:'Zineddine Belaid',club:'JS Kabylie'}, {name:'Achref Abada',club:'USM Alger'}, {name:'Mohamed Amine Tougai',club:'Esperance de Tunis'}],
    mid:[{name:'Nabil Bentaleb',club:'Lille'}, {name:'Hicham Boudaoui',club:'Nice'}, {name:'Houssem Aouar',club:'Al-Ittihad'}, {name:'Fares Chaibi',club:'Eintracht Frankfurt'}, {name:'Ibrahim Maza',club:'Bayer Leverkusen'}, {name:'Yacine Titraoui',club:'Charleroi'}, {name:'Ramiz Zerrouki',club:'FC Twente'}],
    att:[{name:'Mohamed Amine Amoura',club:'Wolfsburg'}, {name:'Nadhir Benbouali',club:'Gyor'}, {name:'Adil Boulbina',club:'Al-Duhail'}, {name:'Fares Ghedjemis',club:'Frosinone'}, {name:'Amine Gouiri',club:'Marseille'}, {name:'Anis Hadj Moussa',club:'Feyenoord'}, {name:'Riyad Mahrez',club:'Al-Ahli'}]
  },
  'Jordan': {
    status:'official', // Final 26 (Sellami). Source: Olympics.com / ESPN, 2026-06-02.
    gk:[{name:'Yazid Abulaila',club:'Al-Hussein'}, {name:'Abdallah Al Fakhouri',club:'Al-Wehdat'}, {name:'Nour Bani Attiah',club:'Al-Faisaly'}],
    def:[{name:'Mohammad Abualnadi',club:'Selangor'}, {name:'Husam Abu Dahab',club:'Al-Samiya'}, {name:'Mohammad Abu Hashish',club:'Al-Karma'}, {name:'Yazan Al Arab',club:'FC Seoul'}, {name:'Abdallah Nasib',club:'Al-Zawraa'}, {name:'Saleem Obaid',club:'Al-Hussein'}, {name:'Ehsan Haddad',club:'Al-Hussein'}, {name:'Saed Al-Rosan',club:'Al-Faisaly'}, {name:'Anas Banawi',club:'Al-Faisaly'}, {name:'Mohannad Abu Taha',club:'Al-Quwa Al-Jawiya'}],
    mid:[{name:'Mohammad Al Dawoud',club:'Al-Wehdat'}, {name:'Nizar Al Rashdan',club:'Qatar SC'}, {name:'Noor Al Rawabdeh',club:'Selangor'}, {name:'Rajaei Ayed',club:'Al-Hussein'}, {name:'Amer Jamous',club:'Al-Zawraa'}, {name:'Ibrahim Sadeh',club:'Al-Karma'}, {name:'Mahmoud Al-Mardi',club:'Al-Hussein'}],
    att:[{name:'Mousa Al Tamari',club:'Rennes'}, {name:'Odeh Al-Fakhouri',club:'Pyramids'}, {name:'Mohammad Abu Zrayq',club:'Raja Casablanca'}, {name:'Ali Azaizeh',club:'Al-Shabab'}, {name:'Ali Olwan',club:'Al-Sailiya'}, {name:'Ibrahim Sabra',club:'Lokomotiva Zagreb'}]
  },
  // ── Group K ──
  'Colombia': {
    status:'official', // Final 26 (Lorenzo). Source: ESPN / FIFA, 2026-05-29.
    gk:[{name:'Camilo Vargas',club:'Atlas'}, {name:'David Ospina',club:'Atletico Nacional'}, {name:'Alvaro Montero',club:'Velez Sarsfield'}],
    def:[{name:'Daniel Munoz',club:'Crystal Palace'}, {name:'Jhon Lucumi',club:'Bologna'}, {name:'Santiago Arias',club:'Independiente'}, {name:'Davinson Sanchez',club:'Galatasaray'}, {name:'Johan Mojica',club:'Mallorca'}, {name:'Yerry Mina',club:'Cagliari'}, {name:'Willer Ditta',club:'Cruz Azul'}, {name:'Deiver Machado',club:'Nantes'}],
    mid:[{name:'Jorge Carrascal',club:'Flamengo'}, {name:'Kevin Castano',club:'River Plate'}, {name:'Gustavo Puerta',club:'Racing Santander'}, {name:'Juan Fernando Quintero',club:'River Plate'}, {name:'Juan Portilla',club:'Athletico Paranaense'}, {name:'Jefferson Lerma',club:'Crystal Palace'}, {name:'Richard Rios',club:'Benfica'}, {name:'Jhon Arias',club:'Palmeiras'}, {name:'James Rodriguez',club:'Minnesota United'}, {name:'Jaminton Campaz',club:'Rosario Central'}],
    att:[{name:'Luis Diaz',club:'Bayern Munich'}, {name:'Jhon Cordoba',club:'Krasnodar'}, {name:'Luis Suarez',club:'Sporting CP'}, {name:'Andres Gomez',club:'Vasco da Gama'}, {name:'Cucho Hernandez',club:'Real Betis'}]
  },
  'Portugal': {
    status:'official', // Final 26 (Martinez). Source: USA Today / Olympics.com, 2026-05-19 (upd 06-02). Ronaldo named for 6th WC.
    gk:[{name:'Diogo Costa',club:'FC Porto'}, {name:'Jose Sa',club:'Wolves'}, {name:'Rui Silva',club:'Sporting CP'}],
    def:[{name:'Diogo Dalot',club:'Manchester United'}, {name:'Matheus Nunes',club:'Manchester City'}, {name:'Nelson Semedo',club:'Fenerbahce'}, {name:'Joao Cancelo',club:'Barcelona'}, {name:'Nuno Mendes',club:'Paris Saint-Germain'}, {name:'Goncalo Inacio',club:'Sporting CP'}, {name:'Renato Veiga',club:'Villarreal'}, {name:'Ruben Dias',club:'Manchester City'}, {name:'Tomas Araujo',club:'Benfica'}],
    mid:[{name:'Ruben Neves',club:'Al-Hilal'}, {name:'Samuel Costa',club:'Mallorca'}, {name:'Joao Neves',club:'Paris Saint-Germain'}, {name:'Vitinha',club:'Paris Saint-Germain'}, {name:'Bruno Fernandes',club:'Manchester United'}, {name:'Bernardo Silva',club:'Manchester City'}],
    att:[{name:'Joao Felix',club:'Al-Nassr'}, {name:'Francisco Trincao',club:'Sporting CP'}, {name:'Francisco Conceicao',club:'Juventus'}, {name:'Pedro Neto',club:'Chelsea'}, {name:'Rafael Leao',club:'AC Milan'}, {name:'Goncalo Guedes',club:'Real Sociedad'}, {name:'Goncalo Ramos',club:'Paris Saint-Germain'}, {name:'Cristiano Ronaldo',club:'Al-Nassr'}]
  },
  'Uzbekistan': {
    status:'official', // Final 26 (Kapadze). Source: USA Today / BBC, 2026-06-02. WC debut.
    gk:[{name:'Utkir Yusupov',club:'Navbahor'}, {name:'Abduvohid Nematov',club:'Nasaf'}, {name:'Botirali Ergashev',club:'Neftchi'}],
    def:[{name:'Rustam Ashurmatov',club:'Esteghlal'}, {name:'Farrukh Sayfiev',club:'Neftchi'}, {name:'Khojiakbar Alijonov',club:'Pakhtakor'}, {name:'Sherzod Nasrullaev',club:'Nasaf'}, {name:'Umar Eshmurodov',club:'Nasaf'}, {name:'Abdukodir Khusanov',club:'Manchester City'}, {name:'Abdulla Abdullaev',club:'Dibba'}, {name:'Bekhruz Karimov',club:'Surkhon'}, {name:'Jakhongir Urozov',club:'Dinamo Samarqand'}, {name:'Avazbek Ulmasaliev',club:'AGMK'}],
    mid:[{name:'Otabek Shukurov',club:'Baniyas'}, {name:'Jaloliddin Masharipov',club:'Esteghlal'}, {name:'Odiljon Hamrobekov',club:'Tractor'}, {name:'Oston Urunov',club:'Persepolis'}, {name:'Jamshid Iskanderov',club:'Neftchi'}, {name:'Dostonbek Khamdamov',club:'Pakhtakor'}, {name:'Abbosbek Fayzullaev',club:'Istanbul Basaksehir'}, {name:'Akmal Mozgovoy',club:'Pakhtakor'}, {name:'Azizjon Ganiev',club:'Al Bataeh'}, {name:'Sherzod Esanov',club:'Bukhara'}],
    att:[{name:'Eldor Shomurodov',club:'Istanbul Basaksehir'}, {name:'Igor Sergeev',club:'Persepolis'}, {name:'Azizbek Amonov',club:'Bukhara'}]
  },
  'DR Congo': {
    status:'official', // Final 26 (Desabre). Source: Olympics.com / FIFA, 2026-05-18. Qualified via March 2026 intercontinental playoff.
    gk:[{name:'Timothy Fayulu',club:'FC Noah'}, {name:'Lionel Mpasi',club:'Le Havre'}, {name:'Mike Epolo',club:'Standard Liege'}],
    def:[{name:'Aaron Wan-Bissaka',club:'West Ham'}, {name:'Gedeon Kalulu',club:'AEL Limassol'}, {name:'Joris Kayembe',club:'Genk'}, {name:'Arthur Masuaku',club:'Lens'}, {name:'Steve Kapuadi',club:'Widzew Lodz'}, {name:'Rocky Bushiri',club:'Hibernian'}, {name:'Axel Tuanzebe',club:'Burnley'}, {name:'Chancel Mbemba',club:'Lille'}, {name:'Dylan Batubinsika',club:'Larissa'}],
    mid:[{name:'Noah Sadiki',club:'Sunderland'}, {name:'Samuel Moutoussamy',club:'Atromitos'}, {name:'Edo Kayembe',club:'Watford'}, {name:'Nathan Mukau',club:'Lille'}, {name:'Charles Pickel',club:'Espanyol'}, {name:'Ngalayel Mukau',club:'Montpellier'}, {name:'Brian Cipenga',club:'Castellon'}, {name:'Theo Bongonda',club:'Spartak Moscow'}, {name:'Gael Kakuta',club:'Larissa'}],
    att:[{name:'Meschack Elia',club:'Alanyaspor'}, {name:'Fiston Mayele',club:'Pyramids'}, {name:'Cedric Bakambu',club:'Real Betis'}, {name:'Simon Banza',club:'Al Jazira'}, {name:'Yoane Wissa',club:'Newcastle'}]
  },
  // ── Group L ──
  'England': {
    status:'official', // Final 26 (Tuchel). Source: The FA (englandfootball.com), announced 2026-05-22.
    gk:[{name:'Dean Henderson',club:'Crystal Palace'}, {name:'Jordan Pickford',club:'Everton'}, {name:'James Trafford',club:'Manchester City'}],
    def:[{name:'Dan Burn',club:'Newcastle'}, {name:'Marc Guehi',club:'Manchester City'}, {name:'Reece James',club:'Chelsea'}, {name:'Ezri Konsa',club:'Aston Villa'}, {name:'Tino Livramento',club:'Newcastle'}, {name:'Nico OReilly',club:'Manchester City'}, {name:'Jarell Quansah',club:'Bayer Leverkusen'}, {name:'Djed Spence',club:'Tottenham'}, {name:'John Stones',club:'Manchester City'}],
    mid:[{name:'Elliot Anderson',club:'Nottingham Forest'}, {name:'Jude Bellingham',club:'Real Madrid'}, {name:'Eberechi Eze',club:'Arsenal'}, {name:'Jordan Henderson',club:'Brentford'}, {name:'Kobbie Mainoo',club:'Manchester United'}, {name:'Declan Rice',club:'Arsenal'}, {name:'Morgan Rogers',club:'Aston Villa'}],
    att:[{name:'Anthony Gordon',club:'Barcelona'}, {name:'Harry Kane',club:'Bayern Munich'}, {name:'Noni Madueke',club:'Arsenal'}, {name:'Marcus Rashford',club:'Barcelona'}, {name:'Bukayo Saka',club:'Arsenal'}, {name:'Ivan Toney',club:'Al-Ahli'}, {name:'Ollie Watkins',club:'Aston Villa'}]
  },
  'Croatia': {
    status:'official', // Final 26 (Dalic). Source: Sportstar / BBC, 2026-06-02. Modric included. Some clubs lower-confidence.
    gk:[{name:'Dominik Livakovic',club:'Girona'}, {name:'Dominik Kotarski',club:'PAOK'}, {name:'Ivor Pandur',club:'Hellas Verona'}],
    def:[{name:'Josko Gvardiol',club:'Manchester City'}, {name:'Duje Caleta-Car',club:'Lyon'}, {name:'Josip Sutalo',club:'Ajax'}, {name:'Josip Stanisic',club:'Bayern Munich'}, {name:'Marin Pongracic',club:'Fiorentina'}, {name:'Kristijan Jakic',club:'Hamburg'}, {name:'Martin Erlic',club:'Sassuolo'}, {name:'Luka Vuskovic',club:'Hamburg'}],
    mid:[{name:'Luka Modric',club:'AC Milan'}, {name:'Mateo Kovacic',club:'Manchester City'}, {name:'Mario Pasalic',club:'Atalanta'}, {name:'Nikola Vlasic',club:'Torino'}, {name:'Luka Sucic',club:'Real Sociedad'}, {name:'Martin Baturina',club:'Como'}, {name:'Petar Sucic',club:'Inter'}, {name:'Nikola Moro',club:'Bologna'}, {name:'Toni Fruk',club:'Rijeka'}],
    att:[{name:'Ivan Perisic',club:'PSV'}, {name:'Andrej Kramaric',club:'Hoffenheim'}, {name:'Ante Budimir',club:'Osasuna'}, {name:'Marco Pasalic',club:'Rijeka'}, {name:'Petar Musa',club:'Benfica'}, {name:'Igor Matanovic',club:'Eintracht Frankfurt'}]
  },
  'Panama': {
    status:'official', // Final 26 (Christiansen). Source: beIN Sports / USA Today / FIFA, 2026-05-26.
    gk:[{name:'Orlando Mosquera',club:'Al-Fayha'}, {name:'Luis Mejia',club:'Club Nacional'}, {name:'Cesar Samudio',club:'Marathon'}],
    def:[{name:'Cesar Blackman',club:'Slovan Bratislava'}, {name:'Jorge Gutierrez',club:'Deportivo La Guaira'}, {name:'Amir Murillo',club:'Besiktas'}, {name:'Fidel Escobar',club:'Deportivo Saprissa'}, {name:'Andres Andrade',club:'LASK Linz'}, {name:'Jose Cordoba',club:'Norwich City'}, {name:'Eric Davis',club:'Plaza Amador'}, {name:'Jiovany Ramos',club:'Academia Puerto Cabello'}, {name:'Roderick Miller',club:'Turan Tovuz'}, {name:'Edgardo Farina',club:'Pari Nizhny Novgorod'}],
    mid:[{name:'Anibal Godoy',club:'San Diego FC'}, {name:'Carlos Harvey',club:'Minnesota United'}, {name:'Cristian Martinez',club:'Hapoel Ironi Kiryat Shmona'}, {name:'Jose Luis Rodriguez',club:'Juarez FC'}, {name:'Cesar Yanis',club:'Cobresal'}, {name:'Yoel Barcenas',club:'Mazatlan FC'}, {name:'Azarias Londono',club:'Universidad Catolica de Chile'}, {name:'Adalberto Carrasquilla',club:'Pumas UNAM'}, {name:'Alberto Quintero',club:'Plaza Amador'}],
    att:[{name:'Ismael Diaz',club:'Club Leon'}, {name:'Cecilio Waterman',club:'Universidad de Concepcion'}, {name:'Jose Fajardo',club:'Universidad Catolica'}, {name:'Tomas Rodriguez',club:'Deportivo Saprissa'}]
  },
  'Ghana': {
    status:'official', // FLAG: names federation-confirmed (Queiroz, GFA 2026-06-01) but GFA list gave no clubs; some clubs (Baba Rahman, Partey, Adu) unconfirmed. Djiku out (injury), Luckassen in.
    gk:[{name:'Lawrence Ati-Zigi',club:'St. Gallen'}, {name:'Benjamin Asare',club:'Accra Hearts of Oak'}, {name:'Joseph Anang',club:'St. Patricks Athletic'}, {name:'Solomon Agbesi',club:'Accra Lions'}],
    def:[{name:'Baba Abdul Rahman',club:''}, {name:'Gideon Mensah',club:'Auxerre'}, {name:'Marvin Senaya',club:'Lorient'}, {name:'Alidu Seidu',club:'Rennes'}, {name:'Abdul Mumin',club:'Rayo Vallecano'}, {name:'Jerome Opoku',club:'Istanbul Basaksehir'}, {name:'Jonas Adjetey',club:'FC Basel'}, {name:'Derrick Luckassen',club:'Pafos FC'}],
    mid:[{name:'Elisha Owusu',club:'Auxerre'}, {name:'Thomas Partey',club:''}, {name:'Kwasi Sibo',club:'Elche'}, {name:'Augustine Boakye',club:'WSG Tirol'}, {name:'Caleb Yirenkyi',club:'Nordsjaelland'}, {name:'Abdul Fatawu Issahaku',club:'Leicester City'}, {name:'Kamaldeen Sulemana',club:'Atalanta'}],
    att:[{name:'Christopher Bonsu Baah',club:'RB Salzburg'}, {name:'Ernest Nuamah',club:'Lyon'}, {name:'Antoine Semenyo',club:'Bournemouth'}, {name:'Brandon Thomas-Asante',club:'Coventry City'}, {name:'Prince Kwabena Adu',club:''}, {name:'Inaki Williams',club:'Athletic Club'}, {name:'Jordan Ayew',club:'Leicester City'}]
  },

  // ── Not qualified for 2026 (legacy draft-pool stubs, kept for flag/data safety) ──
  'Italy': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Denmark': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Poland': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Venezuela': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Costa Rica': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Honduras': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Nigeria': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Cameroon': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Mali': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Indonesia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Serbia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Romania': { status:'tba', gk:[], def:[], mid:[], att:[] }
};

function getSquad(name){ return SQUADS[name] || { status:'tba', gk:[], def:[], mid:[], att:[] }; }
function squadTotal(s){ return (s.gk?.length||0)+(s.def?.length||0)+(s.mid?.length||0)+(s.att?.length||0); }

// ── PROJECTED STARTING XI ────────────────────────────────────────
// Source: parallel research across BBC, The Athletic, ESPN, Goal, Reuters,
// federation press, recent friendlies (Mar/Jun 2026 windows), AFCON 2025.
// Compiled 2026-05-22. xi[] is positional: GK → back line → mids → forwards.
// Regenerated 2026-06-03 to match final squads. xi[] positional: GK -> back line -> mids -> forwards.
const PROJECTED_LINEUPS = {
  'Mexico':              { formation:'4-3-3',    xi:['Raul Rangel', 'Jorge Sanchez', 'Israel Reyes', 'Cesar Montes', 'Jesus Gallardo', 'Edson Alvarez', 'Erik Lira', 'Gilberto Mora', 'Roberto Alvarado', 'Raul Jimenez', 'Santiago Gimenez'] },
  'Czechia':             { formation:'3-4-2-1',  xi:['Jindrich Stanek', 'Robin Hranac', 'Ladislav Krejci', 'David Zima', 'Vladimir Coufal', 'Tomas Soucek', 'Lukas Provod', 'David Jurasek', 'Pavel Sulc', 'Patrik Schick', 'Adam Hlozek'] },
  'South Korea':         { formation:'4-2-3-1',  xi:['Jo Hyeon-woo', 'Seol Young-woo', 'Kim Min-jae', 'Cho Yu-min', 'Lee Han-beom', 'Hwang In-beom', 'Lee Jae-sung', 'Lee Kang-in', 'Hwang Hee-chan', 'Son Heung-min', 'Oh Hyeon-gyu'] },
  'South Africa':        { formation:'3-4-3',    xi:['Ronwen Williams', 'Nkosinathi Sibisi', 'Khulumani Ndamane', 'Ime Okon', 'Aubrey Modiba', 'Teboho Mokoena', 'Jayden Adams', 'Oswin Appollis', 'Relebohile Mofokeng', 'Lyle Foster', 'Iqraam Rayners'] },
  'Canada':              { formation:'4-3-3',    xi:['Dayne St. Clair', 'Alistair Johnston', 'Derek Cornelius', 'Moise Bombito', 'Alphonso Davies', 'Stephen Eustaquio', 'Ismael Kone', 'Jonathan Osorio', 'Tajon Buchanan', 'Jonathan David', 'Cyle Larin'] },
  'Bosnia-Herzegovina':  { formation:'4-2-3-1',  xi:['Nikola Vasilj', 'Amar Dedic', 'Nikola Katic', 'Sead Kolasinac', 'Nidal Celik', 'Amir Hadziahmetovic', 'Benjamin Tahirovic', 'Esmir Bajraktarevic', 'Ermedin Demirovic', 'Haris Tabakovic', 'Edin Dzeko'] },
  'Switzerland':         { formation:'4-2-3-1',  xi:['Gregor Kobel', 'Silvan Widmer', 'Manuel Akanji', 'Nico Elvedi', 'Ricardo Rodriguez', 'Granit Xhaka', 'Remo Freuler', 'Ruben Vargas', 'Ardon Jashari', 'Dan Ndoye', 'Breel Embolo'] },
  'Qatar':               { formation:'3-5-2',    xi:['Meshaal Barsham', 'Boualem Khoukhi', 'Lucas Mendes', 'Pedro Miguel', 'Ahmed Fathi', 'Karim Boudiaf', 'Assim Madibo', 'Abdulaziz Hatem', 'Akram Afif', 'Almoez Ali', 'Hassan Al-Haydos'] },
  'Brazil':              { formation:'4-3-3',    xi:['Alisson', 'Danilo', 'Marquinhos', 'Gabriel', 'Douglas Santos', 'Bruno Guimaraes', 'Casemiro', 'Lucas Paqueta', 'Raphinha', 'Vinicius Junior', 'Matheus Cunha'] },
  'Scotland':            { formation:'3-4-2-1',  xi:['Craig Gordon', 'Jack Hendry', 'Grant Hanley', 'Kieran Tierney', 'Aaron Hickey', 'Scott McTominay', 'John McGinn', 'Andy Robertson', 'Ryan Christie', 'Che Adams', 'Lawrence Shankland'] },
  'Haiti':               { formation:'4-3-3',    xi:['Johny Placide', 'Carlens Arcus', 'Jean-Kevin Duverne', 'Hannes Delcroix', 'Wilguens Paugain', 'Jeanricner Bellegarde', 'Dominique Simon', 'Leverton Pierre', 'Derrick Etienne Jr.', 'Frantzdy Pierrot', 'Wilson Isidor'] },
  'Morocco':             { formation:'4-3-3',    xi:['Yassine Bounou', 'Achraf Hakimi', 'Nayef Aguerd', 'Chadi Riad', 'Noussair Mazraoui', 'Sofyan Amrabat', 'Bilal El Khannouss', 'Azzedine Ounahi', 'Brahim Diaz', 'Ayoub El Kaabi', 'Soufiane Rahimi'] },
  'Paraguay':            { formation:'4-4-2',    xi:['Gatito Fernandez', 'Juan Jose Caceres', 'Gustavo Gomez', 'Omar Alderete', 'Junior Alonso', 'Miguel Almiron', 'Andres Cubas', 'Diego Gomez', 'Ramon Sosa', 'Antonio Sanabria', 'Julio Enciso'] },
  'Türkiye':             { formation:'4-2-3-1',  xi:['Ugurcan Cakir', 'Zeki Celik', 'Merih Demiral', 'Abdulkerim Bardakci', 'Ferdi Kadioglu', 'Hakan Calhanoglu', 'Salih Ozcan', 'Arda Guler', 'Kenan Yildiz', 'Kerem Akturkoglu', 'Baris Alper Yilmaz'] },
  'Australia':           { formation:'4-3-3',    xi:['Mathew Ryan', 'Jason Geria', 'Harry Souttar', 'Alessandro Circati', 'Jordan Bos', 'Aiden ONeill', 'Jackson Irvine', 'Connor Metcalfe', 'Mathew Leckie', 'Mohamed Toure', 'Awer Mabil'] },
  'USA':                 { formation:'4-3-3',    xi:['Matt Turner', 'Sergino Dest', 'Chris Richards', 'Tim Ream', 'Antonee Robinson', 'Tyler Adams', 'Weston McKennie', 'Malik Tillman', 'Timothy Weah', 'Folarin Balogun', 'Christian Pulisic'] },
  'Ecuador':             { formation:'4-3-3',    xi:['Hernan Galindez', 'Angelo Preciado', 'Willian Pacho', 'Felix Torres', 'Pervis Estupinan', 'Moises Caicedo', 'Alan Franco', 'Kendry Paez', 'Gonzalo Plata', 'Enner Valencia', 'Nilson Angulo'] },
  'Germany':             { formation:'4-2-3-1',  xi:['Manuel Neuer', 'Joshua Kimmich', 'Jonathan Tah', 'Antonio Rudiger', 'David Raum', 'Aleksandar Pavlovic', 'Angelo Stiller', 'Florian Wirtz', 'Jamal Musiala', 'Kai Havertz', 'Nick Woltemade'] },
  'Ivory Coast':         { formation:'4-3-3',    xi:['Yahia Fofana', 'Wilfried Singo', 'Ousmane Diomande', 'Evan Ndicka', 'Ghislain Konan', 'Franck Kessie', 'Ibrahim Sangare', 'Seko Fofana', 'Amad Diallo', 'Evann Guessand', 'Simon Adingra'] },
  'Curacao':             { formation:'3-4-3',    xi:['Eloy Room', 'Armando Obispo', 'Riechedly Bazoer', 'Jurien Gaari', 'Leandro Bacuna', 'Livano Comenencia', 'Juninho Bacuna', 'Shurandy Sambo', 'Tahith Chong', 'Jurgen Locadia', 'Sontje Hansen'] },
  'Netherlands':         { formation:'4-3-3',    xi:['Bart Verbruggen', 'Denzel Dumfries', 'Virgil van Dijk', 'Micky van de Ven', 'Nathan Ake', 'Frenkie de Jong', 'Tijjani Reijnders', 'Ryan Gravenberch', 'Cody Gakpo', 'Memphis Depay', 'Donyell Malen'] },
  'Sweden':              { formation:'4-3-3',    xi:['Viktor Johansson', 'Daniel Svensson', 'Isak Hien', 'Victor Lindelof', 'Gabriel Gudmundsson', 'Yasin Ayari', 'Mattias Svanberg', 'Lucas Bergvall', 'Anthony Elanga', 'Viktor Gyokeres', 'Alexander Isak'] },
  'Japan':               { formation:'4-2-3-1',  xi:['Zion Suzuki', 'Yukinari Sugawara', 'Ko Itakura', 'Hiroki Ito', 'Tsuyoshi Watanabe', 'Wataru Endo', 'Kaishu Sano', 'Takefusa Kubo', 'Ritsu Doan', 'Ayase Ueda', 'Daizen Maeda'] },
  'Tunisia':             { formation:'4-3-3',    xi:['Aymen Dahmen', 'Yan Valery', 'Montassar Talbi', 'Dylan Bronn', 'Ali Abdi', 'Ellyes Skhiri', 'Rani Khedira', 'Hannibal Mejbri', 'Sebastian Tounekti', 'Elias Saad', 'Elias Achouri'] },
  'Belgium':             { formation:'4-2-3-1',  xi:['Thibaut Courtois', 'Timothy Castagne', 'Koni De Winter', 'Zeno Debast', 'Maxim De Cuyper', 'Youri Tielemans', 'Amadou Onana', 'Kevin De Bruyne', 'Jeremy Doku', 'Romelu Lukaku', 'Leandro Trossard'] },
  'Iran':                { formation:'4-2-3-1',  xi:['Alireza Beiranvand', 'Saleh Hardani', 'Shoja Khalilzadeh', 'Hossein Kanaani', 'Milad Mohammadi', 'Saeid Ezatolahi', 'Saman Ghoddos', 'Alireza Jahanbakhsh', 'Mehdi Ghaedi', 'Mehdi Taremi', 'Mohammad Mohebi'] },
  'Egypt':               { formation:'4-2-3-1',  xi:['Mohamed El Shenawy', 'Mohamed Hani', 'Yasser Ibrahim', 'Mohamed Abdelmonem', 'Ahmed Fotouh', 'Marwan Attia', 'Emam Ashour', 'Ahmed Zizo', 'Mohamed Salah', 'Omar Marmoush', 'Mahmoud Trezeguet'] },
  'New Zealand':         { formation:'4-3-3',    xi:['Max Crocombe', 'Tyler Bindon', 'Michael Boxall', 'Nando Pijnaker', 'Liberato Cacace', 'Joe Bell', 'Marko Stamenic', 'Sarpreet Singh', 'Ben Old', 'Chris Wood', 'Kosta Barbarouses'] },
  'Spain':               { formation:'4-3-3',    xi:['Unai Simon', 'Pedro Porro', 'Pau Cubarsi', 'Aymeric Laporte', 'Marc Cucurella', 'Rodri', 'Pedri', 'Mikel Merino', 'Lamine Yamal', 'Mikel Oyarzabal', 'Nico Williams'] },
  'Uruguay':             { formation:'4-3-3',    xi:['Sergio Rochet', 'Guillermo Varela', 'Ronald Araujo', 'Jose Maria Gimenez', 'Mathias Olivera', 'Manuel Ugarte', 'Federico Valverde', 'Rodrigo Bentancur', 'Facundo Pellistri', 'Darwin Nunez', 'Giorgian de Arrascaeta'] },
  'Saudi Arabia':        { formation:'4-2-3-1',  xi:['Nawaf Al Aqidi', 'Saud Abdulhamid', 'Hassan Tambakti', 'Ali Lajami', 'Moteb Al Harbi', 'Mohamed Kanno', 'Nasser Al Dawsari', 'Musab Al Juwayr', 'Salem Al Dawsari', 'Feras Al Brikan', 'Abdullah Al Hamdan'] },
  'Cape Verde':          { formation:'4-3-3',    xi:['Vozinha', 'Wagner Pina', 'Logan Costa', 'Roberto Lopes', 'Steven Moreira', 'Jamiro Monteiro', 'Deroy Duarte', 'Telmo Arcanjo', 'Garry Rodrigues', 'Dailon Livramento', 'Ryan Mendes'] },
  'Norway':              { formation:'4-3-3',    xi:['Orjan Nyland', 'Julian Ryerson', 'Kristoffer Ajer', 'Leo Skiri Ostigard', 'David Moller Wolfe', 'Sander Berge', 'Martin Odegaard', 'Fredrik Aursnes', 'Antonio Nusa', 'Erling Haaland', 'Alexander Sorloth'] },
  'France':              { formation:'4-3-3',    xi:['Mike Maignan', 'Jules Kounde', 'Ibrahima Konate', 'William Saliba', 'Theo Hernandez', 'Aurelien Tchouameni', 'Adrien Rabiot', 'Warren Zaire-Emery', 'Ousmane Dembele', 'Kylian Mbappe', 'Michael Olise'] },
  'Senegal':             { formation:'4-3-3',    xi:['Edouard Mendy', 'Krepin Diatta', 'Kalidou Koulibaly', 'Moussa Niakhate', 'Ismail Jakobs', 'Idrissa Gana Gueye', 'Pape Matar Sarr', 'Lamine Camara', 'Ismaila Sarr', 'Nicolas Jackson', 'Iliman Ndiaye'] },
  'Iraq':                { formation:'4-2-3-1',  xi:['Jalal Hassan', 'Hussein Ali', 'Rebin Sulaka', 'Merchas Doski', 'Mustafa Saadoon', 'Amir Al-Ammari', 'Zidane Iqbal', 'Ahmed Qasem', 'Ali Jassim', 'Aymen Hussein', 'Ali Al-Hamadi'] },
  'Argentina':           { formation:'4-3-3',    xi:['Emiliano Martinez', 'Nahuel Molina', 'Cristian Romero', 'Lisandro Martinez', 'Nicolas Tagliafico', 'Rodrigo De Paul', 'Enzo Fernandez', 'Alexis Mac Allister', 'Lionel Messi', 'Julian Alvarez', 'Lautaro Martinez'] },
  'Austria':             { formation:'4-2-3-1',  xi:['Alexander Schlager', 'Phillipp Mwene', 'Kevin Danso', 'David Alaba', 'Marco Friedl', 'Nicolas Seiwald', 'Konrad Laimer', 'Marcel Sabitzer', 'Christoph Baumgartner', 'Patrick Wimmer', 'Marko Arnautovic'] },
  'Algeria':             { formation:'4-3-3',    xi:['Luca Zidane', 'Rayan Ait-Nouri', 'Aissa Mandi', 'Ramy Bensebaini', 'Rafik Belghali', 'Nabil Bentaleb', 'Houssem Aouar', 'Fares Chaibi', 'Riyad Mahrez', 'Mohamed Amine Amoura', 'Amine Gouiri'] },
  'Jordan':              { formation:'4-2-3-1',  xi:['Yazid Abulaila', 'Yazan Al Arab', 'Ehsan Haddad', 'Abdallah Nasib', 'Mohammad Abualnadi', 'Nizar Al Rashdan', 'Mohammad Al Dawoud', 'Noor Al Rawabdeh', 'Mousa Al Tamari', 'Ali Olwan', 'Ali Azaizeh'] },
  'Colombia':            { formation:'4-3-3',    xi:['Camilo Vargas', 'Daniel Munoz', 'Davinson Sanchez', 'Jhon Lucumi', 'Johan Mojica', 'Jefferson Lerma', 'Richard Rios', 'James Rodriguez', 'Luis Diaz', 'Jhon Cordoba', 'Jhon Arias'] },
  'Portugal':            { formation:'4-3-3',    xi:['Diogo Costa', 'Diogo Dalot', 'Ruben Dias', 'Goncalo Inacio', 'Nuno Mendes', 'Vitinha', 'Joao Neves', 'Bruno Fernandes', 'Bernardo Silva', 'Cristiano Ronaldo', 'Rafael Leao'] },
  'Uzbekistan':          { formation:'4-2-3-1',  xi:['Utkir Yusupov', 'Khojiakbar Alijonov', 'Abdukodir Khusanov', 'Rustam Ashurmatov', 'Farrukh Sayfiev', 'Otabek Shukurov', 'Odiljon Hamrobekov', 'Abbosbek Fayzullaev', 'Jaloliddin Masharipov', 'Eldor Shomurodov', 'Dostonbek Khamdamov'] },
  'DR Congo':            { formation:'4-3-3',    xi:['Lionel Mpasi', 'Aaron Wan-Bissaka', 'Chancel Mbemba', 'Axel Tuanzebe', 'Arthur Masuaku', 'Noah Sadiki', 'Edo Kayembe', 'Charles Pickel', 'Yoane Wissa', 'Fiston Mayele', 'Theo Bongonda'] },
  'England':             { formation:'4-3-3',    xi:['Jordan Pickford', 'Reece James', 'Marc Guehi', 'John Stones', 'Tino Livramento', 'Declan Rice', 'Jude Bellingham', 'Eberechi Eze', 'Bukayo Saka', 'Harry Kane', 'Anthony Gordon'] },
  'Croatia':             { formation:'4-3-3',    xi:['Dominik Livakovic', 'Josip Stanisic', 'Josko Gvardiol', 'Josip Sutalo', 'Marin Pongracic', 'Luka Modric', 'Mateo Kovacic', 'Luka Sucic', 'Marco Pasalic', 'Petar Musa', 'Ivan Perisic'] },
  'Panama':              { formation:'4-3-3',    xi:['Orlando Mosquera', 'Cesar Blackman', 'Jose Cordoba', 'Fidel Escobar', 'Eric Davis', 'Anibal Godoy', 'Adalberto Carrasquilla', 'Cristian Martinez', 'Jose Luis Rodriguez', 'Ismael Diaz', 'Cecilio Waterman'] },
  'Ghana':               { formation:'4-3-3',    xi:['Lawrence Ati-Zigi', 'Alidu Seidu', 'Abdul Mumin', 'Jerome Opoku', 'Gideon Mensah', 'Thomas Partey', 'Elisha Owusu', 'Abdul Fatawu Issahaku', 'Antoine Semenyo', 'Jordan Ayew', 'Inaki Williams'] },
};

// Helper: get projected XI for a nation, attempting to enrich with club info
// from SQUADS where possible. Returns { formation, players:[{name,club,line}] } or null.
// line ∈ {GK, DEF, MID, FWD} derived from formation buckets.
function projectedXI(nation){
  const proj = PROJECTED_LINEUPS[nation];
  if(!proj || !proj.xi || proj.xi.length !== 11) return null;
  const sq = getSquad(nation);
  const allSquad = [
    ...(sq.gk||[]).map(p=>({...p,line:'GK'})),
    ...(sq.def||[]).map(p=>({...p,line:'DEF'})),
    ...(sq.mid||[]).map(p=>({...p,line:'MID'})),
    ...(sq.att||[]).map(p=>({...p,line:'FWD'}))
  ];
  // Derive line counts from formation string. For 3- or 4-part formations
  // (3-4-3, 4-3-3, 4-4-2, 3-5-2), parts map directly to DEF/MID/FWD.
  // For 4-part formations (4-2-3-1, 3-4-2-1, 4-3-2-1), group the LAST TWO
  // parts as the front line so "3-1" or "2-1" reads as 4 forwards in the tip
  // (matches how fans visualize the front: 3 attacking mids/wingers + a 9).
  const parts = proj.formation.split('-').map(n=>parseInt(n,10)).filter(n=>!isNaN(n));
  let defCount = parts[0] || 4;
  let fwdCount, midCount;
  if(parts.length >= 4){
    fwdCount = (parts[parts.length-2] || 0) + (parts[parts.length-1] || 0);
    midCount = 10 - defCount - fwdCount;
  } else {
    fwdCount = parts[parts.length-1] || 3;
    midCount = 10 - defCount - fwdCount;
  }
  if(midCount < 1){ midCount = 3; defCount = 4; fwdCount = 3; }

  const players = proj.xi.map((name, idx)=>{
    let line;
    if(idx === 0) line = 'GK';
    else if(idx <= defCount) line = 'DEF';
    else if(idx <= defCount + midCount) line = 'MID';
    else line = 'FWD';
    // Try to find the player in SQUADS to enrich with club
    const match = allSquad.find(p =>
      p.name === name ||
      p.name.toLowerCase() === name.toLowerCase() ||
      p.name.replace(/[^a-z]/gi,'').toLowerCase() === name.replace(/[^a-z]/gi,'').toLowerCase()
    );
    return { name, club: match?.club || '', line };
  });
  return { formation: proj.formation, players };
}
