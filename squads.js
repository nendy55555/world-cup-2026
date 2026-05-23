// ── SQUADS DATA ───────────────────────────────────────────────────
// Last updated: May 22, 2026. Sources: federations, ESPN, Wikipedia.
// status: 'official' = final 26 announced, 'provisional' = preliminary list, 'tba' = not yet released
const SQUADS = {
  // ── 2026 qualifiers added 2026-05-22 (TBA stubs — fill as rosters drop) ──
  'Algeria':            { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Bosnia-Herzegovina': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Cape Verde':         { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Curacao':            { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Czechia':            { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Ghana':              { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Haiti':              { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Norway':             { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Qatar':              { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Scotland':           { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Sweden':             { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Tunisia':            { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Türkiye':            { status:'tba', gk:[], def:[], mid:[], att:[] },   // canonical for ESPN's spelling
  'Argentina': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Brazil': {
    status:'official',
    gk:[
      {name:'Alisson',club:'Liverpool'},
      {name:'Ederson',club:'Fenerbahce'},
      {name:'Weverton',club:'Gremio'}
    ],
    def:[
      {name:'Marquinhos',club:'Paris Saint-Germain'},
      {name:'Danilo',club:'Flamengo'},
      {name:'Alex Sandro',club:'Flamengo'},
      {name:'Gabriel Magalhaes',club:'Arsenal'},
      {name:'Bremer',club:'Juventus'},
      {name:'Wesley',club:'Roma'},
      {name:'Roger Ibanez',club:'Al-Ahli'},
      {name:'Douglas Santos',club:'Zenit'},
      {name:'Leo Pereira',club:'Flamengo'}
    ],
    mid:[
      {name:'Casemiro',club:'Manchester United'},
      {name:'Lucas Paqueta',club:'Flamengo'},
      {name:'Bruno Guimaraes',club:'Newcastle'},
      {name:'Fabinho',club:'Al-Ittihad'},
      {name:'Danilo Santos',club:'Botafogo'}
    ],
    att:[
      {name:'Neymar',club:'Santos'},
      {name:'Vinicius Junior',club:'Real Madrid'},
      {name:'Raphinha',club:'Barcelona'},
      {name:'Gabriel Martinelli',club:'Arsenal'},
      {name:'Matheus Cunha',club:'Manchester United'},
      {name:'Endrick',club:'Lyon'},
      {name:'Luiz Henrique',club:'Zenit'},
      {name:'Igor Thiago',club:'Brentford'},
      {name:'Rayan',club:'Bournemouth'}
    ]
  },
  'France': {
    status:'official',
    gk:[
      {name:'Mike Maignan',club:'AC Milan'},
      {name:'Brice Samba',club:'Rennes'},
      {name:'Robin Risser',club:'Lens'}
    ],
    def:[
      {name:'Lucas Digne',club:'Aston Villa'},
      {name:'Jules Kounde',club:'Barcelona'},
      {name:'Theo Hernandez',club:'Al-Hilal'},
      {name:'Lucas Hernandez',club:'Paris Saint-Germain'},
      {name:'Dayot Upamecano',club:'Bayern Munich'},
      {name:'William Saliba',club:'Arsenal'},
      {name:'Ibrahima Konate',club:'Liverpool'},
      {name:'Malo Gusto',club:'Chelsea'},
      {name:'Maxence Lacroix',club:'Crystal Palace'}
    ],
    mid:[
      {name:"N'Golo Kante",club:'Fenerbahce'},
      {name:'Adrien Rabiot',club:'AC Milan'},
      {name:'Aurelien Tchouameni',club:'Real Madrid'},
      {name:'Manu Kone',club:'Roma'},
      {name:'Warren Zaire-Emery',club:'Paris Saint-Germain'}
    ],
    att:[
      {name:'Kylian Mbappe',club:'Real Madrid'},
      {name:'Ousmane Dembele',club:'Paris Saint-Germain'},
      {name:'Marcus Thuram',club:'Inter Milan'},
      {name:'Bradley Barcola',club:'Paris Saint-Germain'},
      {name:'Michael Olise',club:'Bayern Munich'},
      {name:'Maghnes Akliouche',club:'Monaco'},
      {name:'Desire Doue',club:'Paris Saint-Germain'},
      {name:'Rayan Cherki',club:'Manchester City'},
      {name:'Jean-Philippe Mateta',club:'Crystal Palace'}
    ]
  },
  'Spain': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Portugal': {
    status:'official',
    gk:[
      {name:'Diogo Costa',club:'Porto'},
      {name:'Jose Sa',club:'Wolves'},
      {name:'Rui Silva',club:'Sporting CP'}
    ],
    def:[
      {name:'Diogo Dalot',club:'Manchester United'},
      {name:'Ruben Dias',club:'Manchester City'},
      {name:'Nelson Semedo',club:'Fenerbahce'},
      {name:'Joao Cancelo',club:'Barcelona'},
      {name:'Nuno Mendes',club:'Paris Saint-Germain'},
      {name:'Goncalo Inacio',club:'Sporting CP'},
      {name:'Renato Veiga',club:'Villarreal'},
      {name:'Tomas Araujo',club:'Benfica'},
      {name:'Matheus Nunes',club:'Manchester City'}
    ],
    mid:[
      {name:'Ruben Neves',club:'Al-Hilal'},
      {name:'Samu Costa',club:'Mallorca'},
      {name:'Joao Neves',club:'Paris Saint-Germain'},
      {name:'Vitinha',club:'Paris Saint-Germain'},
      {name:'Bruno Fernandes',club:'Manchester United'},
      {name:'Bernardo Silva',club:'Manchester City'}
    ],
    att:[
      {name:'Cristiano Ronaldo',club:'Al-Nassr'},
      {name:'Joao Felix',club:'Al-Nassr'},
      {name:'Francisco Trincao',club:'Sporting CP'},
      {name:'Francisco Conceicao',club:'Juventus'},
      {name:'Pedro Neto',club:'Chelsea'},
      {name:'Rafael Leao',club:'AC Milan'},
      {name:'Goncalo Guedes',club:'Real Sociedad'},
      {name:'Goncalo Ramos',club:'Paris Saint-Germain'}
    ]
  },
  'England': {
    status:'official',
    gk:[
      {name:'Dean Henderson',club:'Crystal Palace'},
      {name:'Jordan Pickford',club:'Everton'},
      {name:'James Trafford',club:'Manchester City'}
    ],
    def:[
      {name:'Dan Burn',club:'Newcastle'},
      {name:'Marc Guehi',club:'Manchester City'},
      {name:'Reece James',club:'Chelsea'},
      {name:'Ezri Konsa',club:'Aston Villa'},
      {name:'Tino Livramento',club:'Newcastle'},
      {name:"Nico O'Reilly",club:'Manchester City'},
      {name:'Jarell Quansah',club:'Bayer Leverkusen'},
      {name:'Djed Spence',club:'Tottenham'},
      {name:'John Stones',club:'Manchester City'}
    ],
    mid:[
      {name:'Elliot Anderson',club:'Nottingham Forest'},
      {name:'Jude Bellingham',club:'Real Madrid'},
      {name:'Eberechi Eze',club:'Arsenal'},
      {name:'Jordan Henderson',club:'Brentford'},
      {name:'Kobbie Mainoo',club:'Manchester United'},
      {name:'Declan Rice',club:'Arsenal'},
      {name:'Morgan Rogers',club:'Aston Villa'}
    ],
    att:[
      {name:'Anthony Gordon',club:'Newcastle'},
      {name:'Harry Kane',club:'Bayern Munich'},
      {name:'Noni Madueke',club:'Arsenal'},
      {name:'Marcus Rashford',club:'Barcelona (loan)'},
      {name:'Bukayo Saka',club:'Arsenal'},
      {name:'Ivan Toney',club:'Al-Ahli'},
      {name:'Ollie Watkins',club:'Aston Villa'}
    ]
  },
  'Germany': {
    status:'official',
    gk:[
      {name:'Manuel Neuer',club:'Bayern Munich'},
      {name:'Oliver Baumann',club:'Hoffenheim'},
      {name:'Alexander Nubel',club:'Stuttgart'}
    ],
    def:[
      {name:'Antonio Rudiger',club:'Real Madrid'},
      {name:'Jonathan Tah',club:'Bayern Munich'},
      {name:'David Raum',club:'RB Leipzig'},
      {name:'Nico Schlotterbeck',club:'Borussia Dortmund'},
      {name:'Waldemar Anton',club:'Borussia Dortmund'},
      {name:'Malick Thiaw',club:'Newcastle'},
      {name:'Nathaniel Brown',club:'Eintracht Frankfurt'}
    ],
    mid:[
      {name:'Joshua Kimmich',club:'Bayern Munich'},
      {name:'Leroy Sane',club:'Galatasaray'},
      {name:'Leon Goretzka',club:'Bayern Munich'},
      {name:'Jamal Musiala',club:'Bayern Munich'},
      {name:'Florian Wirtz',club:'Liverpool'},
      {name:'Pascal Gross',club:'Brighton'},
      {name:'Nadiem Amiri',club:'Mainz'},
      {name:'Aleksandar Pavlovic',club:'Bayern Munich'},
      {name:'Angelo Stiller',club:'Stuttgart'},
      {name:'Felix Nmecha',club:'Borussia Dortmund'},
      {name:'Jamie Leweling',club:'Stuttgart'},
      {name:'Lennart Karl',club:'Bayern Munich'}
    ],
    att:[
      {name:'Kai Havertz',club:'Arsenal'},
      {name:'Nick Woltemade',club:'Newcastle'},
      {name:'Deniz Undav',club:'Stuttgart'},
      {name:'Maximilian Beier',club:'Borussia Dortmund'}
    ]
  },
  'USA': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Netherlands': {
    status:'provisional',
    gk:[
      {name:'Bart Verbruggen',club:'Brighton'},
      {name:'Mark Flekken',club:'Bayer Leverkusen'},
      {name:'Justin Bijlow',club:'Feyenoord'}
    ],
    def:[
      {name:'Virgil van Dijk',club:'Liverpool'},
      {name:'Nathan Ake',club:'Manchester City'},
      {name:'Stefan de Vrij',club:'Inter Milan'},
      {name:'Micky van de Ven',club:'Tottenham'},
      {name:'Jan Paul van Hecke',club:'Brighton'},
      {name:'Jorrel Hato',club:'Chelsea'},
      {name:'Denzel Dumfries',club:'Inter Milan'},
      {name:'Jeremie Frimpong',club:'Liverpool'},
      {name:'Lutsharel Geertruida',club:'RB Leipzig'}
    ],
    mid:[
      {name:'Frenkie de Jong',club:'Barcelona'},
      {name:'Tijjani Reijnders',club:'Manchester City'},
      {name:'Ryan Gravenberch',club:'Liverpool'},
      {name:'Jerdy Schouten',club:'PSV'},
      {name:'Teun Koopmeiners',club:'Juventus'},
      {name:'Quinten Timber',club:'Feyenoord'},
      {name:'Kees Smit',club:'AZ Alkmaar'}
    ],
    att:[
      {name:'Cody Gakpo',club:'Liverpool'},
      {name:'Memphis Depay',club:'Corinthians'},
      {name:'Donyell Malen',club:'Aston Villa'},
      {name:'Noa Lang',club:'Napoli'},
      {name:'Brian Brobbey',club:'Sunderland'},
      {name:'Wout Weghorst',club:'Ajax'},
      {name:'Justin Kluivert',club:'Bournemouth'}
    ]
  },
  'Belgium': {
    status:'official',
    gk:[
      {name:'Thibaut Courtois',club:'Real Madrid'},
      {name:'Senne Lammens',club:'Manchester United'},
      {name:'Mike Penders',club:'Strasbourg'}
    ],
    def:[
      {name:'Timothy Castagne',club:'Fulham'},
      {name:'Zeno Debast',club:'Sporting CP'},
      {name:'Maxim De Cuyper',club:'Brighton'},
      {name:'Koni De Winter',club:'AC Milan'},
      {name:'Brandon Mechele',club:'Club Brugge'},
      {name:'Thomas Meunier',club:'Lille'},
      {name:'Nathan Ngoy',club:'Lille'},
      {name:'Joaquin Seys',club:'Club Brugge'},
      {name:'Arthur Theate',club:'Eintracht Frankfurt'}
    ],
    mid:[
      {name:'Kevin De Bruyne',club:'Napoli'},
      {name:'Amadou Onana',club:'Aston Villa'},
      {name:'Nicolas Raskin',club:'Rangers'},
      {name:'Youri Tielemans',club:'Aston Villa'},
      {name:'Hans Vanaken',club:'Club Brugge'},
      {name:'Axel Witsel',club:'Girona'}
    ],
    att:[
      {name:'Charles De Ketelaere',club:'Atalanta'},
      {name:'Jeremy Doku',club:'Manchester City'},
      {name:'Matias Fernandez-Pardo',club:'Lille'},
      {name:'Romelu Lukaku',club:'Napoli'},
      {name:'Dodi Lukebakio',club:'Sevilla'},
      {name:'Diego Moreira',club:'Strasbourg'},
      {name:'Alexis Saelemaekers',club:'AC Milan'},
      {name:'Leandro Trossard',club:'Arsenal'}
    ]
  },
  'Croatia': {
    status:'official',
    gk:[
      {name:'Dominik Livakovic',club:'Dinamo Zagreb'},
      {name:'Dominik Kotarski',club:'Copenhagen'},
      {name:'Ivor Pandur',club:'Hull City'}
    ],
    def:[
      {name:'Josko Gvardiol',club:'Manchester City'},
      {name:'Duje Caleta-Car',club:'Real Sociedad'},
      {name:'Josip Sutalo',club:'Ajax'},
      {name:'Josip Stanisic',club:'Bayern Munich'},
      {name:'Marin Pongracic',club:'Fiorentina'},
      {name:'Martin Erlic',club:'Midtjylland'},
      {name:'Luka Vuskovic',club:'Hamburger SV'}
    ],
    mid:[
      {name:'Luka Modric',club:'AC Milan'},
      {name:'Mateo Kovacic',club:'Manchester City'},
      {name:'Mario Pasalic',club:'Atalanta'},
      {name:'Nikola Vlasic',club:'Torino'},
      {name:'Luka Sucic',club:'Real Sociedad'},
      {name:'Martin Baturina',club:'Como'},
      {name:'Petar Sucic',club:'Inter Milan'},
      {name:'Nikola Moro',club:'Bologna'},
      {name:'Toni Fruk',club:'Rijeka'}
    ],
    att:[
      {name:'Ivan Perisic',club:'PSV'},
      {name:'Andrej Kramaric',club:'Hoffenheim'},
      {name:'Ante Budimir',club:'Osasuna'},
      {name:'Marco Pasalic',club:'Orlando City'},
      {name:'Petar Musa',club:'FC Dallas'},
      {name:'Igor Matanovic',club:'Freiburg'}
    ]
  },
  'Italy': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Switzerland': {
    status:'official',
    gk:[
      {name:'Gregor Kobel',club:'Borussia Dortmund'},
      {name:'Yvon Mvogo',club:'Lorient'},
      {name:'Pascal Loretz',club:'Luzern'}
    ],
    def:[
      {name:'Manuel Akanji',club:'Inter Milan'},
      {name:'Aurele Amenda',club:'Eintracht Frankfurt'},
      {name:'Eray Comert',club:'Valencia'},
      {name:'Nico Elvedi',club:'Mgladbach'},
      {name:'Luca Jaquez',club:'Stuttgart'},
      {name:'Miro Muheim',club:'Hamburger SV'},
      {name:'Ricardo Rodriguez',club:'Real Betis'},
      {name:'Silvan Widmer',club:'Mainz'}
    ],
    mid:[
      {name:'Granit Xhaka',club:'Sunderland'},
      {name:'Remo Freuler',club:'Bologna'},
      {name:'Ardon Jashari',club:'AC Milan'},
      {name:'Michel Aebischer',club:'Pisa'},
      {name:'Fabian Rieder',club:'Augsburg'},
      {name:'Djibril Sow',club:'Sevilla'},
      {name:'Denis Zakaria',club:'Monaco'}
    ],
    att:[
      {name:'Breel Embolo',club:'Rennes'},
      {name:'Dan Ndoye',club:'Nottingham Forest'},
      {name:'Ruben Vargas',club:'Sevilla'},
      {name:'Noah Okafor',club:'Leeds'},
      {name:'Zeki Amdouni',club:'Burnley'},
      {name:'Christian Fassnacht',club:'Young Boys'},
      {name:'Cedric Itten',club:'Fortuna Dusseldorf'},
      {name:'Johan Manzambi',club:'Freiburg'}
    ]
  },
  'Denmark': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Austria': {
    status:'official',
    gk:[
      {name:'Alexander Schlager',club:'RB Salzburg'},
      {name:'Patrick Pentz',club:'Brondby'},
      {name:'Florian Wiegele',club:'Viktoria Plzen'}
    ],
    def:[
      {name:'David Alaba',club:'Real Madrid'},
      {name:'Kevin Danso',club:'Tottenham'},
      {name:'Philipp Lienhart',club:'Freiburg'},
      {name:'Stefan Posch',club:'Mainz'},
      {name:'David Affengruber',club:'Elche'},
      {name:'Marco Friedl',club:'Werder Bremen'},
      {name:'Philipp Mwene',club:'Mainz'},
      {name:'Alexander Prass',club:'Hoffenheim'},
      {name:'Michael Svoboda',club:'Venezia'}
    ],
    mid:[
      {name:'Marcel Sabitzer',club:'Borussia Dortmund'},
      {name:'Konrad Laimer',club:'Bayern Munich'},
      {name:'Xaver Schlager',club:'RB Leipzig'},
      {name:'Nicolas Seiwald',club:'RB Leipzig'},
      {name:'Christoph Baumgartner',club:'RB Leipzig'},
      {name:'Romano Schmid',club:'Werder Bremen'},
      {name:'Florian Grillitsch',club:'Braga'},
      {name:'Carney Chukwuemeka',club:'Borussia Dortmund'},
      {name:'Paul Wanner',club:'PSV'},
      {name:'Patrick Wimmer',club:'Wolfsburg'}
    ],
    att:[
      {name:'Marko Arnautovic',club:'Red Star Belgrade'},
      {name:'Michael Gregoritsch',club:'Augsburg'},
      {name:'Sasa Kalajdzic',club:'LASK'}
    ]
  },
  'Poland': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Mexico': {
    status:'provisional',
    gk:[
      {name:'Guillermo Ochoa',club:'AEL Limassol'},
      {name:'Raul Rangel',club:'Guadalajara'},
      {name:'Carlos Acevedo',club:'Santos Laguna'},
      {name:'Alex Padilla',club:'Athletic Bilbao'}
    ],
    def:[
      {name:'Jesus Gallardo',club:'Toluca'},
      {name:'Cesar Montes',club:'Lokomotiv Moscow'},
      {name:'Jorge Sanchez',club:'PAOK'},
      {name:'Johan Vasquez',club:'Genoa'},
      {name:'Israel Reyes',club:'America'},
      {name:'Jesus Angulo',club:'Tigres'},
      {name:'Julian Araujo',club:'Celtic'},
      {name:'Mateo Chavez',club:'AZ Alkmaar'}
    ],
    mid:[
      {name:'Edson Alvarez',club:'Fenerbahce'},
      {name:'Orbelin Pineda',club:'AEK Athens'},
      {name:'Carlos Rodriguez',club:'Cruz Azul'},
      {name:'Luis Romo',club:'Guadalajara'},
      {name:'Luis Chavez',club:'Dynamo Moscow'},
      {name:'Roberto Alvarado',club:'Guadalajara'},
      {name:'Erick Sanchez',club:'America'},
      {name:'Marcel Ruiz',club:'Toluca'},
      {name:'Gilberto Mora',club:'Tijuana'},
      {name:'Obed Vargas',club:'Atletico Madrid'}
    ],
    att:[
      {name:'Raul Jimenez',club:'Fulham'},
      {name:'Santiago Gimenez',club:'AC Milan'},
      {name:'Alexis Vega',club:'Toluca'},
      {name:'Cesar Huerta',club:'Anderlecht'},
      {name:'Julian Quinones',club:'Al-Qadsiah'}
    ]
  },
  'Canada': {
    status:'provisional',
    gk:[
      {name:'Dayne St. Clair',club:'Minnesota United'},
      {name:'Maxime Crepeau',club:'Portland Timbers'},
      {name:'Tom McGill',club:'Brighton'}
    ],
    def:[
      {name:'Alphonso Davies',club:'Bayern Munich'},
      {name:'Moise Bombito',club:'Nice'},
      {name:'Derek Cornelius',club:'Marseille'},
      {name:'Alistair Johnston',club:'Celtic'},
      {name:'Sam Adekugbe',club:'Hatayspor'},
      {name:'Joel Waterman',club:'CF Montreal'},
      {name:'Richie Laryea',club:'Toronto FC'},
      {name:'Luc de Fougerolles',club:'Fulham'}
    ],
    mid:[
      {name:'Stephen Eustaquio',club:'Porto'},
      {name:'Ismael Kone',club:'Rennes'},
      {name:'Mathieu Choiniere',club:'Grasshoppers'},
      {name:'Ali Ahmed',club:'Vancouver'},
      {name:'Nathan Saliba',club:'Anderlecht'},
      {name:'Liam Fraser',club:'Deinze'},
      {name:'Niko Sigur',club:'Hajduk Split'}
    ],
    att:[
      {name:'Jonathan David',club:'Juventus'},
      {name:'Cyle Larin',club:'Mallorca'},
      {name:'Tajon Buchanan',club:'Villarreal'},
      {name:'Jacob Shaffelburg',club:'Nashville'},
      {name:'Daniel Jebbison',club:'Bournemouth'},
      {name:'Promise David',club:'Union SG'},
      {name:'Jonathan Osorio',club:'Toronto FC'},
      {name:'Theo Bair',club:'Auxerre'}
    ]
  },
  'Uruguay': {
    status:'provisional',
    gk:[
      {name:'Sergio Rochet',club:'Internacional'},
      {name:'Santiago Mele',club:'Junior'},
      {name:'Franco Israel',club:'Sporting CP'}
    ],
    def:[
      {name:'Ronald Araujo',club:'Barcelona'},
      {name:'Jose Maria Gimenez',club:'Atletico Madrid'},
      {name:'Mathias Olivera',club:'Napoli'},
      {name:'Nahitan Nandez',club:'Al-Qadsiah'},
      {name:'Guillermo Varela',club:'Flamengo'},
      {name:'Joaquin Piquerez',club:'Palmeiras'},
      {name:'Sebastian Caceres',club:'America'},
      {name:'Santiago Bueno',club:'Wolves'}
    ],
    mid:[
      {name:'Federico Valverde',club:'Real Madrid'},
      {name:'Manuel Ugarte',club:'Manchester United'},
      {name:'Rodrigo Bentancur',club:'Tottenham'},
      {name:'Giorgian De Arrascaeta',club:'Flamengo'},
      {name:'Nicolas De La Cruz',club:'Flamengo'},
      {name:'Maximiliano Araujo',club:'Sporting CP'},
      {name:'Facundo Pellistri',club:'Panathinaikos'}
    ],
    att:[
      {name:'Darwin Nunez',club:'Al-Hilal'},
      {name:'Federico Vinas',club:'Leon'},
      {name:'Rodrigo Aguirre',club:'America'},
      {name:'Brian Rodriguez',club:'America'},
      {name:'Cristian Olivera',club:'Almeria'},
      {name:'Agustin Canobbio',club:'Fluminense'},
      {name:'Luciano Rodriguez',club:'Al-Hilal'}
    ]
  },
  'Colombia': {
    status:'provisional',
    gk:[
      {name:'Camilo Vargas',club:'Atlas'},
      {name:'David Ospina',club:'Atletico Nacional'},
      {name:'Alvaro Montero',club:'Millonarios'}
    ],
    def:[
      {name:'Daniel Munoz',club:'Crystal Palace'},
      {name:'Davinson Sanchez',club:'Galatasaray'},
      {name:'Yerry Mina',club:'Cagliari'},
      {name:'Johan Mojica',club:'Mallorca'},
      {name:'Santiago Arias',club:'Bahia'},
      {name:'Carlos Cuesta',club:'Genk'},
      {name:'Deiver Machado',club:'Lens'},
      {name:'Willer Ditta',club:'Cruz Azul'}
    ],
    mid:[
      {name:'James Rodriguez',club:'Club Leon'},
      {name:'Jefferson Lerma',club:'Crystal Palace'},
      {name:'Richard Rios',club:'Benfica'},
      {name:'Jhon Arias',club:'Wolves'},
      {name:'Mateus Uribe',club:'Al-Sadd'},
      {name:'Juan F. Quintero',club:'America de Cali'},
      {name:'Kevin Castano',club:'Krasnodar'},
      {name:'Jorge Carrascal',club:'Flamengo'}
    ],
    att:[
      {name:'Luis Diaz',club:'Bayern Munich'},
      {name:'Jhon Duran',club:'Fenerbahce'},
      {name:'Luis Sinisterra',club:'Cruzeiro'},
      {name:'Rafael Santos Borre',club:'Internacional'},
      {name:'Yaser Asprilla',club:'Girona'},
      {name:'Jaminton Campaz',club:'Rosario Central'}
    ]
  },
  'Ecuador': {
    status:'provisional',
    gk:[
      {name:'Hernan Galindez',club:'Huracan'},
      {name:'Gonzalo Valle',club:'LDU Quito'},
      {name:'Alexander Dominguez',club:'LDU Quito'}
    ],
    def:[
      {name:'Pervis Estupinan',club:'AC Milan'},
      {name:'Piero Hincapie',club:'Arsenal'},
      {name:'Willian Pacho',club:'Paris Saint-Germain'},
      {name:'Joel Ordonez',club:'Club Brugge'},
      {name:'Angelo Preciado',club:'Granada'},
      {name:'Felix Torres',club:'Corinthians'},
      {name:'Robert Arboleda',club:'Sao Paulo'}
    ],
    mid:[
      {name:'Moises Caicedo',club:'Chelsea'},
      {name:'Alan Franco',club:'Charlotte FC'},
      {name:'Jhegson Mendez',club:'San Lorenzo'},
      {name:'Kendry Paez',club:'Strasbourg'},
      {name:'Patrickson Delgado',club:'Independiente del Valle'},
      {name:'Pedro Vite',club:'Pumas'},
      {name:'Jeremy Sarmiento',club:'Burnley'}
    ],
    att:[
      {name:'Enner Valencia',club:'Internacional'},
      {name:'Kevin Rodriguez',club:'Union SG'},
      {name:'Gonzalo Plata',club:'Flamengo'},
      {name:'Leonardo Campana',club:'Inter Miami'},
      {name:'Nilson Angulo',club:'Anderlecht'},
      {name:'John Yeboah',club:'Krylia Sovetov'}
    ]
  },
  'Paraguay': {
    status:'provisional',
    gk:[
      {name:'Gatito Fernandez',club:'Cerro Porteno'},
      {name:'Carlos Coronel',club:'Sao Paulo'},
      {name:'Orlando Gill',club:'San Lorenzo'}
    ],
    def:[
      {name:'Gustavo Gomez',club:'Palmeiras'},
      {name:'Junior Alonso',club:'Atletico Mineiro'},
      {name:'Fabian Balbuena',club:'Gremio'},
      {name:'Omar Alderete',club:'Sunderland'},
      {name:'Blas Riveros',club:'Cerro Porteno'},
      {name:'Alan Benitez',club:'Libertad'},
      {name:'Diego Leon',club:'Manchester United'}
    ],
    mid:[
      {name:'Miguel Almiron',club:'Atlanta United'},
      {name:'Mathias Villasanti',club:'Gremio'},
      {name:'Andres Cubas',club:'Vancouver'},
      {name:'Diego Gomez',club:'Brighton'},
      {name:'Damian Bobadilla',club:'Sao Paulo'},
      {name:'Ramon Sosa',club:'Palmeiras'},
      {name:'Kaku',club:'Al Ain'},
      {name:'Braian Ojeda',club:'Orlando City'}
    ],
    att:[
      {name:'Antonio Sanabria',club:'Cremonese'},
      {name:'Julio Enciso',club:'Strasbourg'},
      {name:'Angel Romero',club:'Boca Juniors'},
      {name:'Adam Bareiro',club:'Boca Juniors'},
      {name:'Alex Arce',club:'Ind. Rivadavia'}
    ]
  },
  'Venezuela': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Costa Rica': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Honduras': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Panama': {
    status:'provisional',
    gk:[
      {name:'Orlando Mosquera',club:'Al-Fayha'},
      {name:'Luis Mejia',club:'Nacional'},
      {name:'Cesar Samudio',club:'Plaza Amador'}
    ],
    def:[
      {name:'Amir Murillo',club:'Marseille'},
      {name:'Cesar Blackman',club:'Vorskla Poltava'},
      {name:'Jose Cordoba',club:'Norwich City'},
      {name:'Roderick Miller',club:'Cesena'},
      {name:'Andres Andrade',club:'Athletico-PR'},
      {name:'Eric Davis',club:'Universitario'},
      {name:'Jorge Gutierrez',club:'CAI'},
      {name:'Carlos Harvey',club:'Minnesota United'}
    ],
    mid:[
      {name:'Anibal Godoy',club:'San Diego FC'},
      {name:'Adalberto Carrasquilla',club:'Pumas'},
      {name:'Cristian Martinez',club:'Ind. Medellin'},
      {name:'Jose Luis Rodriguez',club:'U. Catolica'},
      {name:'Yoel Barcenas',club:'Mazatlan'}
    ],
    att:[
      {name:'Ismael Diaz',club:'Leon'},
      {name:'Cecilio Waterman',club:'Coquimbo Unido'},
      {name:'Jose Fajardo',club:'Plaza Amador'},
      {name:'Kadir Barria',club:'Alianza FC'}
    ]
  },
  'Morocco': {
    status:'provisional',
    gk:[
      {name:'Yassine Bounou',club:'Al-Hilal'},
      {name:'Munir Mohamedi',club:'Al-Wehda'},
      {name:'Yanis Benchaouch',club:'Monaco'}
    ],
    def:[
      {name:'Achraf Hakimi',club:'Paris Saint-Germain'},
      {name:'Noussair Mazraoui',club:'Manchester United'},
      {name:'Nayef Aguerd',club:'Real Sociedad'},
      {name:'Romain Saiss',club:'Al-Shabab'},
      {name:'Achraf Dari',club:'Brest'},
      {name:'Issa Diop',club:'Leeds'},
      {name:'Adam Masina',club:'Torino'}
    ],
    mid:[
      {name:'Sofyan Amrabat',club:'Real Betis'},
      {name:'Azzedine Ounahi',club:'Girona'},
      {name:'Bilal El Khannouss',club:'Stuttgart'},
      {name:'Ayyoub Bouaddi',club:'Lille'},
      {name:'Eliesse Ben Seghir',club:'Bayer Leverkusen'},
      {name:'Neil El Aynaoui',club:'Roma'}
    ],
    att:[
      {name:'Brahim Diaz',club:'Real Madrid'},
      {name:'Hakim Ziyech',club:'Al Duhail'},
      {name:'Youssef En-Nesyri',club:'Fenerbahce'},
      {name:'Ayoub El Kaabi',club:'Olympiacos'},
      {name:'Soufiane Rahimi',club:'Al Ain'},
      {name:'Sofiane Boufal',club:'Al-Rayyan'},
      {name:'Yassir Zabiri',club:'Famalicao'}
    ]
  },
  'Senegal': {
    status:'official',
    gk:[
      {name:'Edouard Mendy',club:'Al-Ahli'},
      {name:'Mory Diaw',club:'Le Havre'},
      {name:'Yehvann Diouf',club:'Nice'}
    ],
    def:[
      {name:'Kalidou Koulibaly',club:'Al-Hilal'},
      {name:'Krepin Diatta',club:'Monaco'},
      {name:'Antoine Mendy',club:'Nice'},
      {name:'El Hadji Malick Diouf',club:'West Ham'},
      {name:'Mamadou Sarr',club:'Chelsea'},
      {name:'Moussa Niakhate',club:'Lyon'},
      {name:'Moustapha Mbow',club:'Paris FC'},
      {name:'Abdoulaye Seck',club:'Maccabi Haifa'},
      {name:'Ismail Jakobs',club:'Galatasaray'},
      {name:'Ilay Camara',club:'Anderlecht'}
    ],
    mid:[
      {name:'Idrissa Gueye',club:'Everton'},
      {name:'Pape Matar Sarr',club:'Tottenham'},
      {name:'Pape Gueye',club:'Villarreal'},
      {name:'Lamine Camara',club:'Monaco'},
      {name:'Habib Diarra',club:'Sunderland'},
      {name:'Pathe Ciss',club:'Rayo Vallecano'}
    ],
    att:[
      {name:'Sadio Mane',club:'Al-Nassr'},
      {name:'Ismaila Sarr',club:'Crystal Palace'},
      {name:'Nicolas Jackson',club:'Chelsea'},
      {name:'Iliman Ndiaye',club:'Everton'},
      {name:'Assane Diao',club:'Como'},
      {name:'Ibrahim Mbaye',club:'Paris Saint-Germain'},
      {name:'Bamba Dieng',club:'Lorient'}
    ]
  },
  'Egypt': {
    status:'provisional',
    gk:[
      {name:'Mohamed El Shenawy',club:'Al Ahly'},
      {name:'Mostafa Shobeir',club:'Al Ahly'},
      {name:'El Mahdi Soliman',club:'Zamalek'}
    ],
    def:[
      {name:'Mohamed Hany',club:'Al Ahly'},
      {name:'Hamdy Fathy',club:'Al Wakrah'},
      {name:'Rami Rabia',club:'Al Ain'},
      {name:'Yasser Ibrahim',club:'Al Ahly'},
      {name:'Hossam Abdelmaguid',club:'Zamalek'},
      {name:'Mohamed Abdelmonem',club:'Nice'},
      {name:'Ahmed Fatouh',club:'Zamalek'},
      {name:'Karim Hafez',club:'Pyramids'}
    ],
    mid:[
      {name:'Marwan Ateya',club:'Al Ahly'},
      {name:'Mohanad Lasheen',club:'Pyramids'},
      {name:'Mahmoud Saber',club:'Zed'},
      {name:'Ahmed Zizo',club:'Al Ahly'},
      {name:'Emam Ashour',club:'Al Ahly'},
      {name:'Mahmoud Trezeguet',club:'Al Ahly'},
      {name:'Ibrahim Adel',club:'Nordsjaelland'}
    ],
    att:[
      {name:'Mohamed Salah',club:'Liverpool'},
      {name:'Omar Marmoush',club:'Manchester City'},
      {name:'Oktay Abdallah',club:'Enppi'},
      {name:'Hamza Abdelkarim',club:'Barcelona'}
    ]
  },
  'Nigeria': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Ivory Coast': {
    status:'official',
    gk:[
      {name:'Yahia Fofana',club:'Rizespor'},
      {name:'Mohamed Kone',club:'Charleroi'},
      {name:'Alban Lafont',club:'Panathinaikos'}
    ],
    def:[
      {name:'Emmanuel Agbadou',club:'Besiktas'},
      {name:'Clement Akpa',club:'Auxerre'},
      {name:'Ousmane Diomande',club:'Sporting CP'},
      {name:'Guela Doue',club:'Strasbourg'},
      {name:'Ghislain Konan',club:'Gil Vicente'},
      {name:'Odilon Kossounou',club:'Atalanta'},
      {name:'Evan Ndicka',club:'Roma'},
      {name:'Wilfried Singo',club:'Galatasaray'}
    ],
    mid:[
      {name:'Franck Kessie',club:'Al-Ahli'},
      {name:'Ibrahim Sangare',club:'Nottingham Forest'},
      {name:'Seko Fofana',club:'Porto'},
      {name:'Parfait Guiagon',club:'Charleroi'},
      {name:'Christ Inao Oulai',club:'Trabzonspor'},
      {name:'Jean-Michael Seri',club:'Maribor'}
    ],
    att:[
      {name:'Simon Adingra',club:'Monaco'},
      {name:'Amad Diallo',club:'Manchester United'},
      {name:'Nicolas Pepe',club:'Villarreal'},
      {name:'Ange-Yoan Bonny',club:'Inter Milan'},
      {name:'Yan Diomande',club:'RB Leipzig'},
      {name:'Evann Guessand',club:'Crystal Palace'},
      {name:'Elye Wahi',club:'Nice'}
    ]
  },
  'Cameroon': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'South Africa': {
    status:'provisional',
    gk:[
      {name:'Ronwen Williams',club:'Mamelodi Sundowns'},
      {name:'Ricardo Goss',club:'Siwelele'},
      {name:'Sipho Chaine',club:'Orlando Pirates'}
    ],
    def:[
      {name:'Aubrey Modiba',club:'Mamelodi Sundowns'},
      {name:'Khuliso Mudau',club:'Mamelodi Sundowns'},
      {name:'Nkosinathi Sibisi',club:'Orlando Pirates'},
      {name:'Mbekezeli Mbokazi',club:'Chicago Fire'},
      {name:'Ime Okon',club:'Hannover 96'},
      {name:'Thabiso Monyane',club:'Kaizer Chiefs'},
      {name:'Bradley Cross',club:'Kaizer Chiefs'},
      {name:'Olwethu Makhanya',club:'Philadelphia Union'}
    ],
    mid:[
      {name:'Themba Zwane',club:'Mamelodi Sundowns'},
      {name:'Teboho Mokoena',club:'Mamelodi Sundowns'},
      {name:'Sphephelo Sithole',club:'Tondela'},
      {name:'Thalente Mbatha',club:'Orlando Pirates'},
      {name:'Jayden Adams',club:'Mamelodi Sundowns'}
    ],
    att:[
      {name:'Lyle Foster',club:'Burnley'},
      {name:'Evidence Makgopa',club:'Orlando Pirates'},
      {name:'Oswin Appollis',club:'Orlando Pirates'},
      {name:'Iqraam Rayners',club:'Mamelodi Sundowns'},
      {name:'Relebohile Mofokeng',club:'Orlando Pirates'},
      {name:'Thapelo Maseko',club:'AEL Limassol'},
      {name:'Patrick Maswanganyi',club:'Orlando Pirates'}
    ]
  },
  'DR Congo': {
    status:'official',
    gk:[
      {name:'Timothy Fayulu',club:'Sion'},
      {name:'Lionel Mpasi',club:'Rodez'},
      {name:'Matthieu Epolo',club:'Standard Liege'}
    ],
    def:[
      {name:'Aaron Wan-Bissaka',club:'West Ham'},
      {name:'Gedeon Kalulu',club:'Aris Limassol'},
      {name:'Joris Kayembe',club:'Genk'},
      {name:'Arthur Masuaku',club:'Lens'},
      {name:'Steve Kapuadi',club:'Widzew Lodz'},
      {name:'Rocky Bushiri',club:'Hibernian'},
      {name:'Axel Tuanzebe',club:'Burnley'},
      {name:'Chancel Mbemba',club:'Lille'},
      {name:'Dylan Batubinsika',club:'Larissa'}
    ],
    mid:[
      {name:'Noah Sadiki',club:'Sunderland'},
      {name:'Samuel Moutoussamy',club:'Atromitos'},
      {name:'Edo Kayembe',club:'Watford'},
      {name:'Nathanael Mbuku',club:'Montpellier'},
      {name:'Charles Pickel',club:'Espanyol'},
      {name:"Ngal'ayel Mukau",club:'Lille'},
      {name:'Theo Bongonda',club:'Spartak Moscow'},
      {name:'Gael Kakuta',club:'Larissa'},
      {name:'Elia Meshack',club:'Alanyaspor'}
    ],
    att:[
      {name:'Cedric Bakambu',club:'Real Betis'},
      {name:'Simon Banza',club:'Al Jazira'},
      {name:'Fiston Mayele',club:'Pyramids'},
      {name:'Yoane Wissa',club:'Newcastle'}
    ]
  },
  'Mali': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Japan': {
    status:'official',
    gk:[
      {name:'Zion Suzuki',club:'Parma'},
      {name:'Keisuke Osako',club:'Sanfrecce Hiroshima'},
      {name:'Tomoki Hayakawa',club:'Kashima Antlers'}
    ],
    def:[
      {name:'Yuto Nagatomo',club:'FC Tokyo'},
      {name:'Shogo Taniguchi',club:'Sint-Truiden'},
      {name:'Ko Itakura',club:'Ajax'},
      {name:'Tsuyoshi Watanabe',club:'Feyenoord'},
      {name:'Takehiro Tomiyasu',club:'Ajax'},
      {name:'Hiroki Ito',club:'Bayern Munich'},
      {name:'Ayumu Seko',club:'Le Havre'},
      {name:'Yukinari Sugawara',club:'Werder Bremen'},
      {name:'Junnosuke Suzuki',club:'Kashima Antlers'}
    ],
    mid:[
      {name:'Wataru Endo',club:'Liverpool'},
      {name:'Junya Ito',club:'Genk'},
      {name:'Daichi Kamada',club:'Crystal Palace'},
      {name:'Ritsu Doan',club:'Eintracht Frankfurt'},
      {name:'Ao Tanaka',club:'Leeds'},
      {name:'Keito Nakamura',club:'Reims'},
      {name:'Kaishu Sano',club:'Mainz'},
      {name:'Takefusa Kubo',club:'Real Sociedad'}
    ],
    att:[
      {name:'Koki Ogawa',club:'NEC Nijmegen'},
      {name:'Daizen Maeda',club:'Celtic'},
      {name:'Ayase Ueda',club:'Feyenoord'},
      {name:'Yuito Suzuki',club:'Freiburg'},
      {name:'Kento Shiogai',club:'Wolfsburg'},
      {name:'Keisuke Goto',club:'Sint-Truiden'}
    ]
  },
  'South Korea': {
    status:'official',
    gk:[
      {name:'Jo Hyeon-woo',club:'Ulsan HD'},
      {name:'Kim Seung-gyu',club:'FC Tokyo'},
      {name:'Song Bum-keun',club:'Jeonbuk'}
    ],
    def:[
      {name:'Kim Min-jae',club:'Bayern Munich'},
      {name:'Cho Yu-min',club:'Sharjah'},
      {name:'Lee Han-beom',club:'Midtjylland'},
      {name:'Kim Tae-hyeon',club:'Kashima Antlers'},
      {name:'Park Jin-seob',club:'Zhejiang'},
      {name:'Lee Gi-hyuk',club:'Gangwon'},
      {name:'Lee Tae-seok',club:'Austria Wien'},
      {name:'Seol Young-woo',club:'Red Star Belgrade'},
      {name:'Jens Castrop',club:'Mgladbach'},
      {name:'Kim Moon-hwan',club:'Daejeon'}
    ],
    mid:[
      {name:'Yang Hyun-jun',club:'Celtic'},
      {name:'Paik Seung-ho',club:'Birmingham City'},
      {name:'Hwang In-beom',club:'Feyenoord'},
      {name:'Kim Jin-gyu',club:'Jeonbuk'},
      {name:'Bae Jun-ho',club:'Stoke City'},
      {name:'Eom Ji-sung',club:'Swansea'},
      {name:'Hwang Hee-chan',club:'Wolves'},
      {name:'Lee Dong-gyeong',club:'Ulsan HD'},
      {name:'Lee Jae-sung',club:'Mainz'},
      {name:'Lee Kang-in',club:'Paris Saint-Germain'}
    ],
    att:[
      {name:'Son Heung-min',club:'LAFC'},
      {name:'Oh Hyeon-gyu',club:'Besiktas'},
      {name:'Cho Gue-sung',club:'Midtjylland'}
    ]
  },
  'Australia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Iran': {
    status:'provisional',
    gk:[
      {name:'Alireza Beiranvand',club:'Tractor'},
      {name:'Hossein Hosseini',club:'Esteghlal'},
      {name:'Payam Niazmand',club:'Sepahan'}
    ],
    def:[
      {name:'Ehsan Hajsafi',club:'Sepahan'},
      {name:'Milad Mohammadi',club:'Persepolis'},
      {name:'Omid Noorafkan',club:'Foolad'},
      {name:'Shoja Khalilzadeh',club:'Tractor'},
      {name:'Hossein Kanaani',club:'Persepolis'},
      {name:'Ramin Rezaeian',club:'Foolad'},
      {name:'Saleh Hardani',club:'Esteghlal'}
    ],
    mid:[
      {name:'Saman Ghoddos',club:'Kalba'},
      {name:'Rouzbeh Cheshmi',club:'Esteghlal'},
      {name:'Saeid Ezatolahi',club:'Shabab Al-Ahli'},
      {name:'Alireza Jahanbakhsh',club:'Dender'},
      {name:'Mohammad Mohebi',club:'Rostov'},
      {name:'Mehdi Ghaedi',club:'Al-Nasr'},
      {name:'Mehdi Torabi',club:'Tractor'}
    ],
    att:[
      {name:'Mehdi Taremi',club:'Olympiacos'},
      {name:'Amirhossein Hosseinzadeh',club:'Tractor'},
      {name:'Ali Alipour',club:'Persepolis'}
    ]
  },
  'Saudi Arabia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Iraq': {
    status:'provisional',
    gk:[
      {name:'Jalal Hassan',club:'Al-Quwa Al-Jawiya'},
      {name:'Fahad Talib',club:'Al-Zawraa'},
      {name:'Ahmed Basil',club:'Al-Shorta'}
    ],
    def:[
      {name:'Rebin Sulaka',club:'Port FC'},
      {name:'Merchas Doski',club:'Viktoria Plzen'},
      {name:'Frans Putros',club:'Persib Bandung'},
      {name:'Hussein Ali',club:'Pogon Szczecin'},
      {name:'Zaid Tahseen',club:'Pakhtakor'},
      {name:'Akam Hashim',club:'Al-Zawraa'},
      {name:'Dario Naamo',club:'Dundee United'}
    ],
    mid:[
      {name:'Ibrahim Bayesh',club:'Al-Dhafra'},
      {name:'Amir Al-Ammari',club:'Cracovia'},
      {name:'Zidane Iqbal',club:'Utrecht'},
      {name:'Marko Farji',club:'Venezia'},
      {name:'Kevin Yakob',club:'AGF Aarhus'},
      {name:'Aimar Sher',club:'Sarpsborg 08'},
      {name:'Ahmed Qasem',club:'Brommapojkarna'}
    ],
    att:[
      {name:'Aymen Hussein',club:'Al-Karma'},
      {name:'Mohanad Ali',club:'Dibba Al-Fujairah'},
      {name:'Ali Al-Hamadi',club:'Luton Town'}
    ]
  },
  'Jordan': {
    status:'provisional',
    gk:[
      {name:'Yazid Abu Layla',club:'Al-Wehdat'},
      {name:'Abdullah Al-Fakhouri',club:'Al-Faisaly'},
      {name:'Noor Bani Attieh',club:'Al-Salt'}
    ],
    def:[
      {name:'Abdullah Naseeb',club:'Al-Wehdat'},
      {name:'Yazan Al Arab',club:'Al-Salmiya'},
      {name:'Saleem Obeid',club:'Al-Wehdat'},
      {name:'Ehsan Haddad',club:'Al-Ramtha'},
      {name:'Ahmad Assaf',club:'Al-Wehdat'},
      {name:'Anas Badawi',club:'Al-Faisaly'},
      {name:'Mohannad Abu Taha',club:'Al-Ramtha'}
    ],
    mid:[
      {name:'Ibrahim Saadeh',club:'Al-Wehdat'},
      {name:'Amer Jamoos',club:'Al-Wehdat'},
      {name:'Nizar Al Rashdan',club:'Al-Faisaly'},
      {name:'Noor Al Rawabdeh',club:'Al-Hussein'},
      {name:'Rajaei Ayed',club:'Al-Wehdat'}
    ],
    att:[
      {name:'Mousa Al Tamari',club:'Rennes'},
      {name:'Mahmoud Al Mardi',club:'Al-Wehdat'},
      {name:'Ali Olwan',club:'Sepahan'},
      {name:'Ouda Al Fakhouri',club:'Al-Faisaly'}
    ]
  },
  'Uzbekistan': {
    status:'provisional',
    gk:[
      {name:'Utkir Yusupov',club:'Foolad'},
      {name:'Vladimir Nazarov',club:'Pakhtakor'},
      {name:'Abduvohid Nematov',club:'Nasaf Qarshi'}
    ],
    def:[
      {name:'Abdukodir Khusanov',club:'Manchester City'},
      {name:'Rustamjon Ashurmatov',club:'Esteghlal'},
      {name:'Khoziakbar Alidzhanov',club:'Pakhtakor'},
      {name:'Sherzod Nasrulloev',club:'Nasaf Qarshi'},
      {name:'Mukhammadkodir Khamraliev',club:'Pakhtakor'},
      {name:'Farrukh Sayfiev',club:'Pakhtakor'},
      {name:'Umar Eshmuradov',club:'Pakhtakor'}
    ],
    mid:[
      {name:'Otabek Shukurov',club:'Al-Ahli'},
      {name:'Jaloliddin Masharipov',club:'Pakhtakor'},
      {name:'Abbosbek Fayzullaev',club:'CSKA Moscow'},
      {name:'Azizbek Turgunboev',club:'Pakhtakor'},
      {name:'Odiljon Hamrobekov',club:'Pakhtakor'},
      {name:'Jasurbek Yakhshiboev',club:'Krylia Sovetov'}
    ],
    att:[
      {name:'Eldor Shomurodov',club:'Roma'},
      {name:'Oston Urunov',club:'Pari NN'},
      {name:'Igor Sergeev',club:'Pakhtakor'},
      {name:'Khojimat Erkinov',club:'Pakhtakor'}
    ]
  },
  'Indonesia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'New Zealand': {
    status:'official',
    gk:[
      {name:'Max Crocombe',club:'Burton Albion'},
      {name:'Alex Paulsen',club:'Bournemouth'},
      {name:'Oliver Sail',club:'Wellington Phoenix'}
    ],
    def:[
      {name:'Tyler Bindon',club:'Reading'},
      {name:'Michael Boxall',club:'Minnesota United'},
      {name:'Liberato Cacace',club:'Wellington Phoenix'},
      {name:'Francis de Vries',club:'Auckland FC'},
      {name:'Callan Elliot',club:'Wellington Phoenix'},
      {name:'Tim Payne',club:'Auckland FC'},
      {name:'Nando Pijnaker',club:'Sligo Rovers'},
      {name:'Tommy Smith',club:'Colchester'},
      {name:'Finn Surman',club:'Portland Timbers'}
    ],
    mid:[
      {name:'Lachlan Bayliss',club:'Wellington Phoenix'},
      {name:'Joe Bell',club:'Viking'},
      {name:'Matt Garbett',club:'Torino'},
      {name:'Ben Old',club:'St Mirren'},
      {name:'Alex Rufer',club:'Wellington Phoenix'},
      {name:'Sarpreet Singh',club:'Hansa Rostock'},
      {name:'Marko Stamenic',club:'Olympiacos'},
      {name:'Ryan Thomas',club:'PEC Zwolle'}
    ],
    att:[
      {name:'Chris Wood',club:'Nottingham Forest'},
      {name:'Kosta Barbarouses',club:'Auckland FC'},
      {name:'Eli Just',club:'Odense'},
      {name:'Callum McCowatt',club:'Vejle'},
      {name:'Jesse Randall',club:'Wellington Phoenix'},
      {name:'Ben Waine',club:'Plymouth Argyle'}
    ]
  },
  'Turkey': {
    status:'provisional',
    gk:[
      {name:'Ugurcan Cakir',club:'Galatasaray'},
      {name:'Altay Bayindir',club:'Manchester United'},
      {name:'Mert Gunok',club:'Besiktas'}
    ],
    def:[
      {name:'Merih Demiral',club:'Al-Ahli'},
      {name:'Caglar Soyuncu',club:'Fenerbahce'},
      {name:'Abdulkerim Bardakci',club:'Galatasaray'},
      {name:'Ozan Kabak',club:'Galatasaray'},
      {name:'Samet Akaydin',club:'Panathinaikos'},
      {name:'Zeki Celik',club:'Roma'},
      {name:'Ferdi Kadioglu',club:'Brighton'},
      {name:'Mert Muldur',club:'Fenerbahce'},
      {name:'Eren Elmali',club:'Galatasaray'}
    ],
    mid:[
      {name:'Hakan Calhanoglu',club:'Inter Milan'},
      {name:'Orkun Kokcu',club:'Benfica'},
      {name:'Salih Ozcan',club:'Borussia Dortmund'},
      {name:'Kaan Ayhan',club:'Galatasaray'},
      {name:'Ismail Yuksek',club:'Fenerbahce'},
      {name:'Atakan Karazor',club:'Stuttgart'},
      {name:'Arda Guler',club:'Real Madrid'}
    ],
    att:[
      {name:'Kenan Yildiz',club:'Juventus'},
      {name:'Kerem Akturkoglu',club:'Benfica'},
      {name:'Baris Alper Yilmaz',club:'Galatasaray'},
      {name:'Irfan Can Kahveci',club:'Fenerbahce'},
      {name:'Yunus Akgun',club:'Galatasaray'},
      {name:'Can Uzun',club:'Eintracht Frankfurt'}
    ]
  },
  'Serbia': { status:'tba', gk:[], def:[], mid:[], att:[] },
  'Romania': { status:'tba', gk:[], def:[], mid:[], att:[] },
};

function getSquad(name){ return SQUADS[name] || { status:'tba', gk:[], def:[], mid:[], att:[] }; }
function squadTotal(s){ return (s.gk?.length||0)+(s.def?.length||0)+(s.mid?.length||0)+(s.att?.length||0); }
