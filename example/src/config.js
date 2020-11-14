var config = {
    "config": {
    "helpText": "have fun",
    "chatHistory": "3",
    "logo": "data:image/gif;base64,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",
    "color": "#f8e71c"
  },
  "id": "5faa27fcd83e0e183efc02a2",
  "title": "fred",
  "invocation": "",
  "entities": {
    "thing": {
      "values": [
        "cat"
      ],
      "lists": [
        "music artists 20c",
        "scrabbleword"
      ]
    }
  },
  "intents": {
    "show": [
      {
        "example": "show me"
      },
      {
        "example": "show me a cat",
        "entities": [
          {
            "type": "thing",
            "value": "cat",
            "start": 10,
            "end": 13
          }
        ]
      }
    ]
  },
  "entitiesData": {
    "music artists 20c": [
      {
        "value": "Foo Fighters",
        "synonym": ""
      },
      {
        "value": "Johnny Cash",
        "synonym": ""
      },
      {
        "value": "James Brown",
        "synonym": ""
      },
      {
        "value": "Jerry Lee Lewis",
        "synonym": ""
      },
      {
        "value": "Smokey Robinson & The Miracles",
        "synonym": ""
      },
      {
        "value": "Chuck Berry",
        "synonym": ""
      },
      {
        "value": "Aretha Franklin",
        "synonym": ""
      },
      {
        "value": "Willie Nelson",
        "synonym": ""
      },
      {
        "value": "Simon & Garfunkel",
        "synonym": ""
      },
      {
        "value": "The Everly Brothers",
        "synonym": ""
      },
      {
        "value": "Otis Redding",
        "synonym": ""
      },
      {
        "value": "Hank Williams",
        "synonym": ""
      },
      {
        "value": "Marvin Gaye",
        "synonym": ""
      },
      {
        "value": "Van Morrison",
        "synonym": ""
      },
      {
        "value": "The Supremes",
        "synonym": ""
      },
      {
        "value": "Bob Dylan",
        "synonym": ""
      },
      {
        "value": "The Beatles",
        "synonym": ""
      },
      {
        "value": "Neil Young",
        "synonym": ""
      },
      {
        "value": "The Temptations",
        "synonym": ""
      },
      {
        "value": "Tina Turner",
        "synonym": ""
      },
      {
        "value": "Rod Stewart",
        "synonym": ""
      },
      {
        "value": "Stevie Wonder",
        "synonym": ""
      },
      {
        "value": "Frank Sinatra",
        "synonym": ""
      },
      {
        "value": "The Beach Boys",
        "synonym": ""
      },
      {
        "value": "Janis Joplin",
        "synonym": ""
      },
      {
        "value": "The Righteous Brothers",
        "synonym": ""
      },
      {
        "value": "Bob Marley",
        "synonym": ""
      },
      {
        "value": "David Bowie",
        "synonym": ""
      },
      {
        "value": "The Rolling Stones",
        "synonym": ""
      },
      {
        "value": "Jimi Hendrix",
        "synonym": ""
      },
      {
        "value": "Alice Cooper",
        "synonym": ""
      },
      {
        "value": "The Velvet Underground",
        "synonym": ""
      },
      {
        "value": "Lynyrd Skynyrd",
        "synonym": ""
      },
      {
        "value": "Bo Diddley",
        "synonym": ""
      },
      {
        "value": "The Who",
        "synonym": ""
      },
      {
        "value": "Billy Joel",
        "synonym": ""
      },
      {
        "value": "Elton John",
        "synonym": ""
      },
      {
        "value": "The Doors",
        "synonym": ""
      },
      {
        "value": "Pink Floyd",
        "synonym": ""
      },
      {
        "value": "Bruce Springsteen",
        "synonym": ""
      },
      {
        "value": "Creedence Clearwater Revival",
        "synonym": ""
      },
      {
        "value": "Santana",
        "synonym": ""
      },
      {
        "value": "Fleetwood Mac",
        "synonym": ""
      },
      {
        "value": "Genesis",
        "synonym": ""
      },
      {
        "value": "Ray Charles",
        "synonym": ""
      },
      {
        "value": "Led Zeppelin",
        "synonym": ""
      },
      {
        "value": "Black Sabbath",
        "synonym": ""
      },
      {
        "value": "Michael Jackson",
        "synonym": ""
      },
      {
        "value": "Parliament Funkadelic",
        "synonym": ""
      },
      {
        "value": "Judas Priest",
        "synonym": ""
      },
      {
        "value": "Aerosmith",
        "synonym": ""
      },
      {
        "value": "Elvis Costello",
        "synonym": ""
      },
      {
        "value": "Hall & Oates",
        "synonym": ""
      },
      {
        "value": "Kraftwerk",
        "synonym": ""
      },
      {
        "value": "Queen",
        "synonym": ""
      },
      {
        "value": "Little Richard",
        "synonym": ""
      },
      {
        "value": "Earth Wind & Fire",
        "synonym": ""
      },
      {
        "value": "The Eagles",
        "synonym": ""
      },
      {
        "value": "Van Halen",
        "synonym": ""
      },
      {
        "value": "AC/DC",
        "synonym": ""
      },
      {
        "value": "KISS",
        "synonym": ""
      },
      {
        "value": "Blondie",
        "synonym": ""
      },
      {
        "value": "Sex Pistols",
        "synonym": ""
      },
      {
        "value": "Talking Heads",
        "synonym": ""
      },
      {
        "value": "Iron Maiden",
        "synonym": ""
      },
      {
        "value": "The Clash",
        "synonym": ""
      },
      {
        "value": "B",
        "synonym": ""
      },
      {
        "value": "King",
        "synonym": ""
      },
      {
        "value": "Prince",
        "synonym": ""
      },
      {
        "value": "U2",
        "synonym": ""
      },
      {
        "value": "The Police",
        "synonym": ""
      },
      {
        "value": "Whitney Houston",
        "synonym": ""
      },
      {
        "value": "Def Leppard",
        "synonym": ""
      },
      {
        "value": "Madonna",
        "synonym": ""
      },
      {
        "value": "Eurythmics",
        "synonym": ""
      },
      {
        "value": "R",
        "synonym": ""
      },
      {
        "value": "E",
        "synonym": ""
      },
      {
        "value": "M",
        "synonym": ""
      },
      {
        "value": "Depeche Mode",
        "synonym": ""
      },
      {
        "value": "Run-D",
        "synonym": ""
      },
      {
        "value": "C",
        "synonym": ""
      },
      {
        "value": "Buddy Holly",
        "synonym": ""
      },
      {
        "value": "Anthrax",
        "synonym": ""
      },
      {
        "value": "Beastie Boys",
        "synonym": ""
      },
      {
        "value": "Metallica",
        "synonym": ""
      },
      {
        "value": "Slayer",
        "synonym": ""
      },
      {
        "value": "Public Enemy",
        "synonym": ""
      },
      {
        "value": "Megadeth",
        "synonym": ""
      },
      {
        "value": "Guns N' Roses",
        "synonym": ""
      },
      {
        "value": "Radiohead",
        "synonym": ""
      },
      {
        "value": "NWA",
        "synonym": ""
      },
      {
        "value": "Nirvana",
        "synonym": ""
      },
      {
        "value": "Sam Cooke",
        "synonym": ""
      },
      {
        "value": "Tupac Shakur",
        "synonym": ""
      },
      {
        "value": "Jay-Z",
        "synonym": ""
      },
      {
        "value": "Eminem",
        "synonym": ""
      },
      {
        "value": "Pearl Jam",
        "synonym": ""
      },
      {
        "value": "The Notorious B",
        "synonym": ""
      },
      {
        "value": "I",
        "synonym": ""
      },
      {
        "value": "G",
        "synonym": ""
      },
      {
        "value": "Outkast",
        "synonym": ""
      },
      {
        "value": "Justin Timberlake",
        "synonym": ""
      },
      {
        "value": "Wu-Tang Clan",
        "synonym": ""
      },
      {
        "value": "Amy Winehouse",
        "synonym": ""
      },
      {
        "value": "Daft Punk",
        "synonym": ""
      },
      {
        "value": "Elvis Presley",
        "synonym": ""
      }
    ],
    "scrabbleword": [
      {
        "value": "Genesis",
        "synonym": ""
      },
      {
        "value": "Queen",
        "synonym": ""
      },
      {
        "value": "KISS",
        "synonym": ""
      },
      {
        "value": "King",
        "synonym": ""
      },
      {
        "value": "Prince",
        "synonym": ""
      },
      {
        "value": "Madonna",
        "synonym": ""
      },
      {
        "value": "Eurythmics",
        "synonym": ""
      },
      {
        "value": "Anthrax",
        "synonym": ""
      },
      {
        "value": "Slayer",
        "synonym": ""
      },
      {
        "value": "Nirvana",
        "synonym": ""
      },
      {
        "value": "acid",
        "synonym": ""
      },
      {
        "value": "ambient",
        "synonym": ""
      },
      {
        "value": "arabesque",
        "synonym": ""
      },
      {
        "value": "bachata",
        "synonym": ""
      },
      {
        "value": "baggy",
        "synonym": ""
      },
      {
        "value": "ballad",
        "synonym": ""
      },
      {
        "value": "ballet",
        "synonym": ""
      },
      {
        "value": "banda",
        "synonym": ""
      },
      {
        "value": "beat",
        "synonym": ""
      },
      {
        "value": "beatboxing",
        "synonym": ""
      },
      {
        "value": "bebop",
        "synonym": ""
      },
      {
        "value": "benga",
        "synonym": ""
      },
      {
        "value": "bhajan",
        "synonym": ""
      },
      {
        "value": "bhangra",
        "synonym": ""
      },
      {
        "value": "biguine",
        "synonym": ""
      },
      {
        "value": "bluegrass",
        "synonym": ""
      },
      {
        "value": "blues",
        "synonym": ""
      },
      {
        "value": "boogie",
        "synonym": ""
      },
      {
        "value": "breakbeat",
        "synonym": ""
      },
      {
        "value": "bunraku",
        "synonym": ""
      },
      {
        "value": "cabaret",
        "synonym": ""
      },
      {
        "value": "cadence",
        "synonym": ""
      },
      {
        "value": "cakewalk",
        "synonym": ""
      },
      {
        "value": "calypso",
        "synonym": ""
      },
      {
        "value": "canon",
        "synonym": ""
      },
      {
        "value": "cantata",
        "synonym": ""
      },
      {
        "value": "caracoles",
        "synonym": ""
      },
      {
        "value": "carol",
        "synonym": ""
      },
      {
        "value": "caveman",
        "synonym": ""
      },
      {
        "value": "chanson",
        "synonym": ""
      },
      {
        "value": "chant",
        "synonym": ""
      },
      {
        "value": "charanga",
        "synonym": ""
      },
      {
        "value": "chicha",
        "synonym": ""
      },
      {
        "value": "chutney",
        "synonym": ""
      },
      {
        "value": "classic",
        "synonym": ""
      },
      {
        "value": "concerto",
        "synonym": ""
      },
      {
        "value": "congo",
        "synonym": ""
      },
      {
        "value": "conjunto",
        "synonym": ""
      },
      {
        "value": "country",
        "synonym": ""
      },
      {
        "value": "cowpunk",
        "synonym": ""
      },
      {
        "value": "crunk",
        "synonym": ""
      },
      {
        "value": "cumbia",
        "synonym": ""
      },
      {
        "value": "dance",
        "synonym": ""
      },
      {
        "value": "dancehall",
        "synonym": ""
      },
      {
        "value": "dementia",
        "synonym": ""
      },
      {
        "value": "desi",
        "synonym": ""
      },
      {
        "value": "dirge",
        "synonym": ""
      },
      {
        "value": "disco",
        "synonym": ""
      },
      {
        "value": "drag",
        "synonym": ""
      },
      {
        "value": "dub",
        "synonym": ""
      },
      {
        "value": "dubstep",
        "synonym": ""
      },
      {
        "value": "electro",
        "synonym": ""
      },
      {
        "value": "electroclash",
        "synonym": ""
      },
      {
        "value": "electronic",
        "synonym": ""
      },
      {
        "value": "electronica",
        "synonym": ""
      },
      {
        "value": "electropop",
        "synonym": ""
      },
      {
        "value": "emo",
        "synonym": ""
      },
      {
        "value": "emocore",
        "synonym": ""
      },
      {
        "value": "euro",
        "synonym": ""
      },
      {
        "value": "europop",
        "synonym": ""
      },
      {
        "value": "exotica",
        "synonym": ""
      },
      {
        "value": "fado",
        "synonym": ""
      },
      {
        "value": "fandango",
        "synonym": ""
      },
      {
        "value": "farruca",
        "synonym": ""
      },
      {
        "value": "filk",
        "synonym": ""
      },
      {
        "value": "filmi",
        "synonym": ""
      },
      {
        "value": "flamenco",
        "synonym": ""
      },
      {
        "value": "folktronica",
        "synonym": ""
      },
      {
        "value": "freestyle",
        "synonym": ""
      },
      {
        "value": "fuji",
        "synonym": ""
      },
      {
        "value": "funk",
        "synonym": ""
      },
      {
        "value": "gabba",
        "synonym": ""
      },
      {
        "value": "gabber",
        "synonym": ""
      },
      {
        "value": "gagaku",
        "synonym": ""
      },
      {
        "value": "gaita",
        "synonym": ""
      },
      {
        "value": "galant",
        "synonym": ""
      },
      {
        "value": "gamelan",
        "synonym": ""
      },
      {
        "value": "gar",
        "synonym": ""
      },
      {
        "value": "gavotte",
        "synonym": ""
      },
      {
        "value": "ghazal",
        "synonym": ""
      },
      {
        "value": "glitch",
        "synonym": ""
      },
      {
        "value": "goa",
        "synonym": ""
      },
      {
        "value": "goombay",
        "synonym": ""
      },
      {
        "value": "grebo",
        "synonym": ""
      },
      {
        "value": "grime",
        "synonym": ""
      },
      {
        "value": "grunge",
        "synonym": ""
      },
      {
        "value": "habanera",
        "synonym": ""
      },
      {
        "value": "halling",
        "synonym": ""
      },
      {
        "value": "hard",
        "synonym": ""
      },
      {
        "value": "highlands",
        "synonym": ""
      },
      {
        "value": "highlife",
        "synonym": ""
      },
      {
        "value": "hornpipe",
        "synonym": ""
      },
      {
        "value": "house",
        "synonym": ""
      },
      {
        "value": "hula",
        "synonym": ""
      },
      {
        "value": "hymn",
        "synonym": ""
      },
      {
        "value": "hyphy",
        "synonym": ""
      },
      {
        "value": "improvisational",
        "synonym": ""
      },
      {
        "value": "island",
        "synonym": ""
      },
      {
        "value": "isolationist",
        "synonym": ""
      },
      {
        "value": "jazz",
        "synonym": ""
      },
      {
        "value": "jig",
        "synonym": ""
      },
      {
        "value": "jingle",
        "synonym": ""
      },
      {
        "value": "jitterbug",
        "synonym": ""
      },
      {
        "value": "jive",
        "synonym": ""
      },
      {
        "value": "jota",
        "synonym": ""
      },
      {
        "value": "jujitsu",
        "synonym": ""
      },
      {
        "value": "juju",
        "synonym": ""
      },
      {
        "value": "jungle",
        "synonym": ""
      },
      {
        "value": "junkanoo",
        "synonym": ""
      },
      {
        "value": "kabuki",
        "synonym": ""
      },
      {
        "value": "karma",
        "synonym": ""
      },
      {
        "value": "kirtan",
        "synonym": ""
      },
      {
        "value": "klezmer",
        "synonym": ""
      },
      {
        "value": "krakowiak",
        "synonym": ""
      },
      {
        "value": "krautrock",
        "synonym": ""
      },
      {
        "value": "kwaito",
        "synonym": ""
      },
      {
        "value": "kwela",
        "synonym": ""
      },
      {
        "value": "lieder",
        "synonym": ""
      },
      {
        "value": "lowercase",
        "synonym": ""
      },
      {
        "value": "lullaby",
        "synonym": ""
      },
      {
        "value": "madrigal",
        "synonym": ""
      },
      {
        "value": "magnificat",
        "synonym": ""
      },
      {
        "value": "mambo",
        "synonym": ""
      },
      {
        "value": "mango",
        "synonym": ""
      },
      {
        "value": "marabi",
        "synonym": ""
      },
      {
        "value": "mariachi",
        "synonym": ""
      },
      {
        "value": "marimba",
        "synonym": ""
      },
      {
        "value": "marinera",
        "synonym": ""
      },
      {
        "value": "mass",
        "synonym": ""
      },
      {
        "value": "maxixe",
        "synonym": ""
      },
      {
        "value": "mazurka",
        "synonym": ""
      },
      {
        "value": "mbaqanga",
        "synonym": ""
      },
      {
        "value": "meditation",
        "synonym": ""
      },
      {
        "value": "mento",
        "synonym": ""
      },
      {
        "value": "merengue",
        "synonym": ""
      },
      {
        "value": "meringue",
        "synonym": ""
      },
      {
        "value": "metal",
        "synonym": ""
      },
      {
        "value": "minuet",
        "synonym": ""
      },
      {
        "value": "multicultural",
        "synonym": ""
      },
      {
        "value": "musette",
        "synonym": ""
      },
      {
        "value": "muzak",
        "synonym": ""
      },
      {
        "value": "neoclassical",
        "synonym": ""
      },
      {
        "value": "niche",
        "synonym": ""
      },
      {
        "value": "noh",
        "synonym": ""
      },
      {
        "value": "nota",
        "synonym": ""
      },
      {
        "value": "oldies",
        "synonym": ""
      },
      {
        "value": "opera",
        "synonym": ""
      },
      {
        "value": "oratorio",
        "synonym": ""
      },
      {
        "value": "orchestra",
        "synonym": ""
      },
      {
        "value": "organum",
        "synonym": ""
      },
      {
        "value": "parang",
        "synonym": ""
      },
      {
        "value": "parody",
        "synonym": ""
      },
      {
        "value": "patriotic",
        "synonym": ""
      },
      {
        "value": "plainchant",
        "synonym": ""
      },
      {
        "value": "plena",
        "synonym": ""
      },
      {
        "value": "polka",
        "synonym": ""
      },
      {
        "value": "polo",
        "synonym": ""
      },
      {
        "value": "polonaise",
        "synonym": ""
      },
      {
        "value": "pols",
        "synonym": ""
      },
      {
        "value": "pop",
        "synonym": ""
      },
      {
        "value": "psychobilly",
        "synonym": ""
      },
      {
        "value": "qawwali",
        "synonym": ""
      },
      {
        "value": "quadrille",
        "synonym": ""
      },
      {
        "value": "queercore",
        "synonym": ""
      },
      {
        "value": "raga",
        "synonym": ""
      },
      {
        "value": "ragga",
        "synonym": ""
      },
      {
        "value": "raggamuffin",
        "synonym": ""
      },
      {
        "value": "ragtime",
        "synonym": ""
      },
      {
        "value": "rai",
        "synonym": ""
      },
      {
        "value": "ranchera",
        "synonym": ""
      },
      {
        "value": "rap",
        "synonym": ""
      },
      {
        "value": "rave",
        "synonym": ""
      },
      {
        "value": "reel",
        "synonym": ""
      },
      {
        "value": "reggae",
        "synonym": ""
      },
      {
        "value": "reggaeton",
        "synonym": ""
      },
      {
        "value": "religious",
        "synonym": ""
      },
      {
        "value": "requiem",
        "synonym": ""
      },
      {
        "value": "rhapsody",
        "synonym": ""
      },
      {
        "value": "ricercar",
        "synonym": ""
      },
      {
        "value": "rock",
        "synonym": ""
      },
      {
        "value": "rockabilly",
        "synonym": ""
      },
      {
        "value": "rocksteady",
        "synonym": ""
      },
      {
        "value": "rococo",
        "synonym": ""
      },
      {
        "value": "rondeaux",
        "synonym": ""
      },
      {
        "value": "ronggeng",
        "synonym": ""
      },
      {
        "value": "rumba",
        "synonym": ""
      },
      {
        "value": "salsa",
        "synonym": ""
      },
      {
        "value": "saltarello",
        "synonym": ""
      },
      {
        "value": "samba",
        "synonym": ""
      },
      {
        "value": "scat",
        "synonym": ""
      },
      {
        "value": "schlager",
        "synonym": ""
      },
      {
        "value": "screamo",
        "synonym": ""
      },
      {
        "value": "seis",
        "synonym": ""
      },
      {
        "value": "serialism",
        "synonym": ""
      },
      {
        "value": "situational",
        "synonym": ""
      },
      {
        "value": "ska",
        "synonym": ""
      },
      {
        "value": "skald",
        "synonym": ""
      },
      {
        "value": "skiffle",
        "synonym": ""
      },
      {
        "value": "slide",
        "synonym": ""
      },
      {
        "value": "soca",
        "synonym": ""
      },
      {
        "value": "son",
        "synonym": ""
      },
      {
        "value": "sonata",
        "synonym": ""
      },
      {
        "value": "soukous",
        "synonym": ""
      },
      {
        "value": "soul",
        "synonym": ""
      },
      {
        "value": "soundtrack",
        "synonym": ""
      },
      {
        "value": "spirituals",
        "synonym": ""
      },
      {
        "value": "sprechgesang",
        "synonym": ""
      },
      {
        "value": "st",
        "synonym": ""
      },
      {
        "value": "strathspeys",
        "synonym": ""
      },
      {
        "value": "stride",
        "synonym": ""
      },
      {
        "value": "string",
        "synonym": ""
      },
      {
        "value": "suite",
        "synonym": ""
      },
      {
        "value": "swing",
        "synonym": ""
      },
      {
        "value": "swingbeat",
        "synonym": ""
      },
      {
        "value": "symphony",
        "synonym": ""
      },
      {
        "value": "synthpop",
        "synonym": ""
      },
      {
        "value": "tala",
        "synonym": ""
      },
      {
        "value": "tango",
        "synonym": ""
      },
      {
        "value": "tappa",
        "synonym": ""
      },
      {
        "value": "tarantella",
        "synonym": ""
      },
      {
        "value": "tech",
        "synonym": ""
      },
      {
        "value": "techno",
        "synonym": ""
      },
      {
        "value": "technoid",
        "synonym": ""
      },
      {
        "value": "technopop",
        "synonym": ""
      },
      {
        "value": "trance",
        "synonym": ""
      },
      {
        "value": "twist",
        "synonym": ""
      },
      {
        "value": "uplifting",
        "synonym": ""
      },
      {
        "value": "vaudeville",
        "synonym": ""
      },
      {
        "value": "verismo",
        "synonym": ""
      },
      {
        "value": "villanella",
        "synonym": ""
      },
      {
        "value": "virelai",
        "synonym": ""
      },
      {
        "value": "vocal",
        "synonym": ""
      },
      {
        "value": "waltz",
        "synonym": ""
      },
      {
        "value": "weld",
        "synonym": ""
      },
      {
        "value": "western",
        "synonym": ""
      },
      {
        "value": "wood",
        "synonym": ""
      },
      {
        "value": "worldbeat",
        "synonym": ""
      },
      {
        "value": "yodeling",
        "synonym": ""
      },
      {
        "value": "zarzuela",
        "synonym": ""
      },
      {
        "value": "zouk",
        "synonym": ""
      },
      {
        "value": "zydeco",
        "synonym": ""
      },
      {
        "value": "workout",
        "synonym": ""
      },
      {
        "value": "exercise",
        "synonym": ""
      },
      {
        "value": "cooking",
        "synonym": ""
      },
      {
        "value": "bedtime",
        "synonym": ""
      },
      {
        "value": "egg",
        "synonym": ""
      }
    ]
  },
  "forms": {
    "fred form": {
      "id": "5faa289388259fed4ae2badc",
      "value": "fred form",
      "synonyms": "",
      "tags": [],
      "finished": "finished how long",
      "slots": [
        {
          "value": "thing",
          "text": "what to show ?",
          "capturefrom": [
            {
              "type": "from entity",
              "intentValue": "",
              "entity": "",
              "intent": [],
              "notintent": []
            }
          ]
        }
      ]
    }
  },
  "actions": {
    "finished how long": {
      "id": "5fa7afa4be8bf869c19ff8d8",
      "value": "finished how long",
      "synonyms": "",
      "tags": [],
      "responses": [
        {
          "text": "finished how long"
        }
      ],
      "synonym": "response('finished how long').then(function() {\n    resolve(output,slots)\n})"
    }
  },
  "apis": {},
  "utterances": {
    "what to show ?": {
      "id": "5faa28b7ddccf92d338dca17",
      "value": "what to show ?",
      "synonym": "what to show ?",
      "tags": []
    },
    "welcome fred buttons": {
      "id": "5faa2860f17b20c89bdeb790",
      "value": "welcome fred buttons",
      "synonym": "",
      "tags": [],
      "buttons": [
        {
          "label": "show me a cat",
          "utterance": "",
          "link": ""
        },
        {
          "label": "show me",
          "utterance": "",
          "link": ""
        }
      ]
    },
    "finished how long": {
      "id": "5fa7b7a77cf63b761c5082b0",
      "value": "finished how long",
      "synonym": "finished how long",
      "tags": []
    }
  },
  "rules": [
    {
      "rule": "show",
      "steps": [
        "intent show",
        "form fred form"
      ]
    },
    {
      "rule": "welcome",
      "steps": [
        "intent welcome",
        "utter welcome fred buttons"
      ]
    }
  ]
}
module.exports = config
