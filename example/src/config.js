var config = {
  "id": "5f9f9ca1765669f74d87c048",
  "title": "image search",
  "invocation": "",
  "entities": {
    "imageSearch": {
      "values": [
        "factory",
        "flock of seagulls",
        "galaxies",
        "jlkj4lkj",
        "kittens",
        "mountain range",
        "pigs",
        "space station",
        "sunset"
      ]
    }
  },
  "intents": {
    "show picture": [
      {
        "example": "show me a picture of jlkj4lkj",
        "entities": [
          {
            "type": "imageSearch",
            "value": "jlkj4lkj",
            "start": 21,
            "end": 29
          }
        ]
      },
      {
        "example": "show me a factory",
        "entities": [
          {
            "type": "imageSearch",
            "value": "factory",
            "start": 10,
            "end": 17
          }
        ]
      },
      {
        "example": "do you have a picture of a flock of seagulls",
        "entities": [
          {
            "type": "imageSearch",
            "value": "flock of seagulls",
            "start": 27,
            "end": 44
          }
        ]
      },
      {
        "example": "find pictures of a mountain range",
        "entities": [
          {
            "type": "imageSearch",
            "value": "mountain range",
            "start": 19,
            "end": 33
          }
        ]
      },
      {
        "example": "show me photos of sunset",
        "entities": [
          {
            "type": "imageSearch",
            "value": "sunset",
            "start": 18,
            "end": 24
          }
        ]
      },
      {
        "example": "i want to see some kittens",
        "entities": [
          {
            "type": "imageSearch",
            "value": "kittens",
            "start": 19,
            "end": 26
          }
        ]
      },
      {
        "example": "show me pictures of pigs",
        "entities": [
          {
            "type": "imageSearch",
            "value": "pigs",
            "start": 20,
            "end": 24
          }
        ]
      },
      {
        "example": "give me an image of a space station",
        "entities": [
          {
            "type": "imageSearch",
            "value": "space station",
            "start": 22,
            "end": 35
          }
        ]
      },
      {
        "example": "show me pictures of galaxies",
        "entities": [
          {
            "type": "imageSearch",
            "value": "galaxies",
            "start": 20,
            "end": 28
          }
        ]
      }
    ]
  },
  "entitiesData": {},
  "forms": {},
  "actions": {
    "search unsplash": {
      "id": "5f9f9d4970539919455a1cdc",
      "value": "search unsplash",
      "synonyms": "",
      "tags": [],
      "apis": [
        {
          "text": "unsplash",
          "functionCall": "showResults"
        }
      ],
      "synonym": "\nvar entities = intent && intent.slots ? intent.slots : {}\nvar criteria = entities['imageSearch'] ? entities['imageSearch'] : ''\n//console.log(['CROTEROA',criteria])\n\napi('unsplash').search(criteria).then(function(result) {\n    api('unsplash').showResults().then(function(result) {\n        resolve(output,slots)\n    })\n    \n})\n\n",
      "responses": [
        {
          "text": "search unsplash waiting"
        }
      ]
    }
  },
  "apis": {
    "unsplash": {
      "id": "5f9fde2da3b40678386bdb4a",
      "value": "unsplash",
      "synonym": "console.log(['unsplash api',window])\n\n\nvar apiKey=\"rdQcxo3iExmblvSDF16A8gBMc5zXQLgk3yEkXk7FFks\"\n\n\nfunction search(criteria, limit=5 ,skip=0) {\n    slot('criteria',criteria)\n        console.log(['API SEARCH CRITERIA',criteria])\n            //+ (skip > 0 ? '&page='+skip/(limit>0 ? limit : 1) : '') +(limit > 0 ? '&per_page='+limit : '') \n    return new Promise(function(resolve,reject) {\n        if (!criteria) {\n            response('unsplash what do you want to see').then(function() {resolve()})\n        } else {\n            response('search unsplash waiting').then(function() {\n                var url='https://api.unsplash.com/search/photos/?client_id='+apiKey+'&per_page=5&query='+criteria ;\n                console.log(url)\n                utils.axios.get(url).then(function(res) {\n                    //console.log(['UNSP RES'])\n                    console.log(['UNSP RES',res])\n                    if (res && res.data && Array.isArray(res.data.results) && res.data.results.length > 0) { \n                        slot('unsplashResults',JSON.stringify(res && res.data && res.data.results  ? res.data.results : []))\n                        resolve(res)  \n                    } else {\n                        response('unsplash not found').then(function() {resolve()})\n                    }\n                })\n            })\n        }\n       //resolve()\n    })\n}\n\n\nfunction showResults() {\n    console.log(['SHOW RES',slots['unsplashResults']])\n    \n    var results= []\n    try {\n        if (slots['unsplashResults']) results = JSON.parse(slots['unsplashResults'])\n    } catch (e) {\n        console.log(e)\n    }\n    return new Promise(function(resolve,reject) {\n        console.log(['PICS',results]);\n        if (Array.isArray(results)) {\n            var promises = []\n            results.map(function(result) {\n                console.log(['PIC',result]);\n                if (result && result.urls && result.urls.regular) {\n                    console.log(['PIC',result.urls.regular]);\n                    promises.push(response('show unsplash images',{unsplashImage: result.urls.regular}))\n                }\n            })\n           // slot('playingYoutubeVideo','https://www.youtube.com/embed/'+ videos[0].id.videoId)\n            Promise.all(promises).then(function(allRes) {\n                resolve()\n            })\n        }\n    })\n} \n\nreturn {\n     search: search, showResults: showResults\n}\n// return object containing api functions\nreturn {\n    test : function() {\n        console.log(test)\n     }\n}",
      "tags": [],
      "responses": [
        {
          "text": "show unsplash images"
        },
        {
          "text": "unsplash what do you want to see"
        },
        {
          "text": "unsplash not found"
        }
      ]
    }
  },
  "utterances": {
    "unsplash not found": {
      "id": "5fa07bc2ce3fd15548faad7a",
      "value": "unsplash not found",
      "synonym": "I couldn't find any images matching {criteria}",
      "tags": []
    },
    "unsplash what do you want to see": {
      "id": "5fa079aff85b0facf559bffa",
      "value": "unsplash what do you want to see",
      "synonym": "what do you want to see ?",
      "tags": []
    },
    "search unsplash waiting": {
      "id": "5f9fc6025cc8011bd7e4cb06",
      "value": "search unsplash waiting",
      "synonym": "loading",
      "tags": []
    },
    "show unsplash images": {
      "id": "5f9f9f762d76166791c02d79",
      "value": "show unsplash images",
      "synonym": "",
      "tags": [],
      "buttons": [],
      "images": [
        {
          "label": "",
          "href": "{unsplashImage}",
          "youtubeVideoId": "{unsplashImage}",
          "start": "",
          "end": ""
        }
      ]
    },
    "i can show pictures": {
      "id": "5f9f9d3282a50b5486b11ef3",
      "value": "i can show pictures",
      "synonym": "",
      "tags": [],
      "buttons": [
        {
          "label": "show me pictures of the space station",
          "utterance": "",
          "link": ""
        },
        {
          "label": "i want to see some kittens",
          "utterance": "",
          "link": ""
        },
        {
          "label": "show me pictures of pigs",
          "utterance": "",
          "link": ""
        },
        {
          "label": "show me a mountain range",
          "utterance": "",
          "link": ""
        },
        {
          "label": "photo of a flock of seagulls",
          "utterance": "",
          "link": ""
        },
        {
          "label": "show me a picture of jlkj4lkj",
          "utterance": "",
          "link": ""
        }
      ]
    }
  },
  "rules": [
    {
      "rule": "welcome",
      "steps": [
        "intent welcome",
        "utter i can show pictures"
      ]
    },
    {
      "rule": "show me pictures",
      "steps": [
        "intent show picture",
        "action search unsplash"
      ]
    }
  ]
}
module.exports = config
