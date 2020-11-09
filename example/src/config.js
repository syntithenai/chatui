var config = {
  "utterancesLists": [
    "timer"
  ],
  "tags": [
    "timer",
    "utility",
    "alarm",
    "from mycroft"
  ],
  "_id": "5f70dddab74939544cf58df3",
  "id": "5f70117b5bbf2680ac5c8c3c",
  "title": "timer",
  "invocation": "",
  "entities": {
    "duration": {
      "values": [
        "duration",
        "five minutes"
      ],
      "lists": [
        "duration"
      ]
    },
    "name": {
      "values": [
        "name"
      ],
      "lists": [
        "timer name"
      ]
    }
  },
  "intents": {
    "start_timer": [
      {
        "example": "set a timer for five minutes",
        "entities": [
          {
            "type": "duration",
            "value": "five minutes",
            "start": 16,
            "end": 28
          }
        ]
      },
      {
        "example": "another timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 18,
            "end": 27,
            "type": "duration"
          }
        ]
      },
      {
        "example": "another timer ",
        "entities": []
      },
      {
        "example": "another timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 14,
            "end": 23,
            "type": "duration"
          }
        ]
      },
      {
        "example": "one more timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 19,
            "end": 28,
            "type": "duration"
          }
        ]
      },
      {
        "example": "one more timer ",
        "entities": []
      },
      {
        "example": "one more timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 15,
            "end": 24,
            "type": "duration"
          }
        ]
      },
      {
        "example": "second timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 17,
            "end": 26,
            "type": "duration"
          }
        ]
      },
      {
        "example": "second timer ",
        "entities": []
      },
      {
        "example": "second timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 13,
            "end": 22,
            "type": "duration"
          }
        ]
      },
      {
        "example": "third timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 16,
            "end": 25,
            "type": "duration"
          }
        ]
      },
      {
        "example": "third timer ",
        "entities": []
      },
      {
        "example": "third timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 12,
            "end": 21,
            "type": "duration"
          }
        ]
      },
      {
        "example": "fourth timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 17,
            "end": 26,
            "type": "duration"
          }
        ]
      },
      {
        "example": "fourth timer ",
        "entities": []
      },
      {
        "example": "fourth timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 13,
            "end": 22,
            "type": "duration"
          }
        ]
      },
      {
        "example": "fifth timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 16,
            "end": 25,
            "type": "duration"
          }
        ]
      },
      {
        "example": "fifth timer ",
        "entities": []
      },
      {
        "example": "fifth timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 12,
            "end": 21,
            "type": "duration"
          }
        ]
      },
      {
        "example": " timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 11,
            "end": 20,
            "type": "duration"
          }
        ]
      },
      {
        "example": " timer ",
        "entities": []
      },
      {
        "example": " timer duration",
        "entities": [
          {
            "value": "duration",
            "start": 7,
            "end": 16,
            "type": "duration"
          }
        ]
      },
      {
        "example": "ping me in duration",
        "entities": [
          {
            "value": "duration",
            "start": 11,
            "end": 20,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set a timer",
        "entities": []
      },
      {
        "example": "set  timer",
        "entities": []
      },
      {
        "example": "start a timer",
        "entities": []
      },
      {
        "example": "start  timer",
        "entities": []
      },
      {
        "example": "create a timer",
        "entities": []
      },
      {
        "example": "create  timer",
        "entities": []
      },
      {
        "example": "set a timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 16,
            "end": 25,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set  timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 15,
            "end": 24,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start a timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 18,
            "end": 27,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start  timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 17,
            "end": 26,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create a timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 19,
            "end": 28,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create  timer for duration",
        "entities": [
          {
            "value": "duration",
            "start": 18,
            "end": 27,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set a timer for name",
        "entities": [
          {
            "value": "name",
            "start": 16,
            "end": 21,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a timer called name",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a timer named name",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  timer for name",
        "entities": [
          {
            "value": "name",
            "start": 15,
            "end": 20,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  timer called name",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  timer named name",
        "entities": [
          {
            "value": "name",
            "start": 17,
            "end": 22,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a timer for name",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a timer called name",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a timer named name",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  timer for name",
        "entities": [
          {
            "value": "name",
            "start": 17,
            "end": 22,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  timer called name",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  timer named name",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a timer for name",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a timer called name",
        "entities": [
          {
            "value": "name",
            "start": 22,
            "end": 27,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a timer named name",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  timer for name",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  timer called name",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  timer named name",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 6,
            "end": 15,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set  duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 5,
            "end": 14,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start a duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start  duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 7,
            "end": 16,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create a duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 9,
            "end": 18,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create  duration timer",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set a duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 6,
            "end": 15,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 25,
            "end": 30,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 6,
            "end": 15,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 28,
            "end": 33,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 6,
            "end": 15,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 27,
            "end": 32,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 5,
            "end": 14,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 24,
            "end": 29,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 5,
            "end": 14,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 27,
            "end": 32,
            "type": "name"
          }
        ]
      },
      {
        "example": "set  duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 5,
            "end": 14,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 26,
            "end": 31,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 27,
            "end": 32,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 30,
            "end": 35,
            "type": "name"
          }
        ]
      },
      {
        "example": "start a duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 29,
            "end": 34,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 7,
            "end": 16,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 26,
            "end": 31,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 7,
            "end": 16,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 29,
            "end": 34,
            "type": "name"
          }
        ]
      },
      {
        "example": "start  duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 7,
            "end": 16,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 28,
            "end": 33,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 9,
            "end": 18,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 28,
            "end": 33,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 9,
            "end": 18,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 31,
            "end": 36,
            "type": "name"
          }
        ]
      },
      {
        "example": "create a duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 9,
            "end": 18,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 30,
            "end": 35,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  duration timer for name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 27,
            "end": 32,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  duration timer called name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 30,
            "end": 35,
            "type": "name"
          }
        ]
      },
      {
        "example": "create  duration timer named name",
        "entities": [
          {
            "value": "duration",
            "start": 8,
            "end": 17,
            "type": "duration"
          },
          {
            "value": "name",
            "start": 29,
            "end": 34,
            "type": "name"
          }
        ]
      },
      {
        "example": "set a timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 16,
            "end": 21,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 25,
            "end": 34,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set a timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 28,
            "end": 37,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set a timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 27,
            "end": 36,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set  timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 15,
            "end": 20,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 24,
            "end": 33,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set  timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 27,
            "end": 36,
            "type": "duration"
          }
        ]
      },
      {
        "example": "set  timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 17,
            "end": 22,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 26,
            "end": 35,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start a timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 27,
            "end": 36,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start a timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 30,
            "end": 39,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start a timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 29,
            "end": 38,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start  timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 17,
            "end": 22,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 26,
            "end": 35,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start  timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 29,
            "end": 38,
            "type": "duration"
          }
        ]
      },
      {
        "example": "start  timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 28,
            "end": 37,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create a timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 19,
            "end": 24,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 28,
            "end": 37,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create a timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 22,
            "end": 27,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 31,
            "end": 40,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create a timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 30,
            "end": 39,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create  timer for name for duration",
        "entities": [
          {
            "value": "name",
            "start": 18,
            "end": 23,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 27,
            "end": 36,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create  timer called name for duration",
        "entities": [
          {
            "value": "name",
            "start": 21,
            "end": 26,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 30,
            "end": 39,
            "type": "duration"
          }
        ]
      },
      {
        "example": "create  timer named name for duration",
        "entities": [
          {
            "value": "name",
            "start": 20,
            "end": 25,
            "type": "name"
          },
          {
            "value": "duration",
            "start": 29,
            "end": 38,
            "type": "duration"
          }
        ]
      }
    ],
    "timer_status": [
      {
        "example": "how much time is left",
        "entities": []
      },
      {
        "example": "how much time is remaining",
        "entities": []
      },
      {
        "example": "how much time  left",
        "entities": []
      },
      {
        "example": "how much time  remaining",
        "entities": []
      },
      {
        "example": "how long is left",
        "entities": []
      },
      {
        "example": "how long is remaining",
        "entities": []
      },
      {
        "example": "how long  left",
        "entities": []
      },
      {
        "example": "how long  remaining",
        "entities": []
      },
      {
        "example": "how's my name timer",
        "entities": [
          {
            "value": "name",
            "start": 9,
            "end": 14,
            "type": "name"
          }
        ]
      },
      {
        "example": "how's the name timer",
        "entities": [
          {
            "value": "name",
            "start": 10,
            "end": 15,
            "type": "name"
          }
        ]
      },
      {
        "example": "how's my timer",
        "entities": []
      },
      {
        "example": "how's the timer",
        "entities": []
      },
      {
        "example": "when does my timer end",
        "entities": []
      },
      {
        "example": "when does my timer finish",
        "entities": []
      },
      {
        "example": "when does the timer end",
        "entities": []
      },
      {
        "example": "when does the timer finish",
        "entities": []
      },
      {
        "example": "when will my timer end",
        "entities": []
      },
      {
        "example": "when will my timer finish",
        "entities": []
      },
      {
        "example": "when will the timer end",
        "entities": []
      },
      {
        "example": "when will the timer finish",
        "entities": []
      }
    ],
    "stop_timer": [
      {
        "example": "stop all timer",
        "entities": []
      },
      {
        "example": "stop all timers",
        "entities": []
      },
      {
        "example": "stop the timer",
        "entities": []
      },
      {
        "example": "stop the timers",
        "entities": []
      },
      {
        "example": "stop  timer",
        "entities": []
      },
      {
        "example": "stop  timers",
        "entities": []
      },
      {
        "example": "end all timer",
        "entities": []
      },
      {
        "example": "end all timers",
        "entities": []
      },
      {
        "example": "end the timer",
        "entities": []
      },
      {
        "example": "end the timers",
        "entities": []
      },
      {
        "example": "end  timer",
        "entities": []
      },
      {
        "example": "end  timers",
        "entities": []
      },
      {
        "example": "cancel all timer",
        "entities": []
      },
      {
        "example": "cancel all timers",
        "entities": []
      },
      {
        "example": "cancel the timer",
        "entities": []
      },
      {
        "example": "cancel the timers",
        "entities": []
      },
      {
        "example": "cancel  timer",
        "entities": []
      },
      {
        "example": "cancel  timers",
        "entities": []
      },
      {
        "example": "abort all timer",
        "entities": []
      },
      {
        "example": "abort all timers",
        "entities": []
      },
      {
        "example": "abort the timer",
        "entities": []
      },
      {
        "example": "abort the timers",
        "entities": []
      },
      {
        "example": "abort  timer",
        "entities": []
      },
      {
        "example": "abort  timers",
        "entities": []
      },
      {
        "example": "delete all timer",
        "entities": []
      },
      {
        "example": "delete all timers",
        "entities": []
      },
      {
        "example": "delete the timer",
        "entities": []
      },
      {
        "example": "delete the timers",
        "entities": []
      },
      {
        "example": "delete  timer",
        "entities": []
      },
      {
        "example": "delete  timers",
        "entities": []
      },
      {
        "example": "kill all timer",
        "entities": []
      },
      {
        "example": "kill all timers",
        "entities": []
      },
      {
        "example": "kill the timer",
        "entities": []
      },
      {
        "example": "kill the timers",
        "entities": []
      },
      {
        "example": "kill  timer",
        "entities": []
      },
      {
        "example": "kill  timers",
        "entities": []
      },
      {
        "example": "turn off all timer",
        "entities": []
      },
      {
        "example": "turn off all timers",
        "entities": []
      },
      {
        "example": "turn off the timer",
        "entities": []
      },
      {
        "example": "turn off the timers",
        "entities": []
      },
      {
        "example": "turn off  timer",
        "entities": []
      },
      {
        "example": "turn off  timers",
        "entities": []
      },
      {
        "example": "turn it off",
        "entities": []
      },
      {
        "example": "silence",
        "entities": []
      },
      {
        "example": "shutup",
        "entities": []
      },
      {
        "example": "shut up",
        "entities": []
      },
      {
        "example": "I got it",
        "entities": []
      },
      {
        "example": "end timer",
        "entities": []
      }
    ]
  },
  "entitiesData": {
    "duration": [
      {
        "value": "seventeen seconds",
        "synonym": ""
      },
      {
        "value": "two and half minutes",
        "synonym": ""
      },
      {
        "value": "three quarters of an hour",
        "synonym": "forty five minutes"
      },
      {
        "value": "twenty seven minutes and five seconds",
        "synonym": ""
      },
      {
        "value": "a week",
        "synonym": "one week"
      },
      {
        "value": "half an hour",
        "synonym": "thirty minutes"
      },
      {
        "value": "quarter of an hour",
        "synonym": "fifteen minutes"
      },
      {
        "value": "ten seconds",
        "synonym": ""
      },
      {
        "value": "thirty seconds",
        "synonym": "half a minute"
      },
      {
        "value": "four hours",
        "synonym": ""
      },
      {
        "value": "three and a half hours",
        "synonym": ""
      },
      {
        "value": "five minutes",
        "synonym": ""
      }
    ],
    "timer name": [
      {
        "value": "wake up",
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
  "utterancesData": {
    "and": {
      "value": "and",
      "synonym": "\n, and\nand",
      "tags": [
        "timer"
      ]
    },
    "timer_too_long_alarm_instead": {
      "value": "timer_too_long_alarm_instead",
      "synonym": "Timers cannot be more than 24 hours long\n  Would you like to set an alarm instead?\n",
      "tags": [
        "timer"
      ]
    },
    "timer_not_found": {
      "value": "timer_not_found",
      "synonym": "No such timer has been set\nI wasn't able to find that timer\nTimer does not exist\nI can't find that timer",
      "tags": [
        "timer"
      ]
    },
    "timer_expired_ordinal": {
      "value": "timer_expired_ordinal",
      "synonym": "(The|) {{ordinal}} timer for {{duration}} is up\n{{ordinal}} {{duration}} timer is up\n",
      "tags": [
        "timer"
      ]
    },
    "timer_expired_named_ordinal": {
      "value": "timer_expired_named_ordinal",
      "synonym": "(The|) {{ordinal}} {{duration}} timer for {{name}} is up\n",
      "tags": [
        "timer"
      ]
    },
    "timer_expired_named": {
      "value": "timer_expired_named",
      "synonym": "(The|) {{duration}} timer for {name} is up\n",
      "tags": [
        "timer"
      ]
    },
    "timer_expired": {
      "value": "timer_expired",
      "synonym": "(The|) timer for {{duration}} is up\n{{duration}} timer is up\n",
      "tags": [
        "timer"
      ]
    },
    "timer_duplicate_name": {
      "value": "timer_duplicate_name",
      "synonym": "You have a timer (named|called|for) {name} with {duration} (remaining|left)\n To set another timer, (please|kindly|) use a unique name\n",
      "tags": [
        "timer"
      ]
    },
    "timer_details_with_ordinal": {
      "value": "timer_details_with_ordinal",
      "synonym": "a {ordinal} timer for {duration}\n",
      "tags": [
        "timer"
      ]
    },
    "timer_details_named_with_ordinal": {
      "value": "timer_details_named_with_ordinal",
      "synonym": "a {ordinal} timer for {duration} for {name}\n",
      "tags": [
        "timer"
      ]
    },
    "timer_details_named": {
      "value": "timer_details_named",
      "synonym": "{duration} for {name}\n",
      "tags": [
        "timer"
      ]
    },
    "timer_details": {
      "value": "timer_details",
      "synonym": "{duration}\n",
      "tags": [
        "timer"
      ]
    },
    "time_remaining_with_ordinal": {
      "value": "time_remaining_with_ordinal",
      "synonym": "The {{ordinal}} timer for {{duration}} has {{time_diff}} remaining\n",
      "tags": [
        "timer"
      ]
    },
    "time_remaining_named_with_ordinal": {
      "value": "time_remaining_named_with_ordinal",
      "synonym": "The {{ordinal}} timer for {{duration}} called {{name}} has {{time_diff}} remaining\n",
      "tags": [
        "timer"
      ]
    },
    "time_remaining_named": {
      "value": "time_remaining_named",
      "synonym": "The {name} timer for {{duration}} has {{time_diff}} remaining\n",
      "tags": [
        "timer"
      ]
    },
    "time_remaining": {
      "value": "time_remaining",
      "synonym": "The timer for {{duration}} has {{time_diff}} remaining\n",
      "tags": [
        "timer"
      ]
    },
    "time_elapsed_ordinal": {
      "value": "time_elapsed_ordinal",
      "synonym": "The {{ordinal}} timer for {{duration}} elapsed {{time_diff}} ago\n",
      "tags": [
        "timer"
      ]
    },
    "time_elapsed_named_ordinal": {
      "value": "time_elapsed_named_ordinal",
      "synonym": "The {{ordinal}} {{duration}} timer for {{name}} elapsed {{time_diff}} ago\n",
      "tags": [
        "timer"
      ]
    },
    "time_elapsed_named": {
      "value": "time_elapsed_named",
      "synonym": "The {{duration}} timer for {{name}} elapsed {{time_diff}} ago\n",
      "tags": [
        "timer"
      ]
    },
    "time_elapsed": {
      "value": "time_elapsed",
      "synonym": "The timer for {{duration}} elapsed {{time_diff}} ago\n",
      "tags": [
        "timer"
      ]
    },
    "tell_me_how_long": {
      "value": "tell_me_how_long",
      "synonym": "I couldn't understand how long you wanted\n  You can say things like \"3 minutes\" or \"30 seconds\"\n",
      "tags": [
        "timer"
      ]
    },
    "started_timer_with_name": {
      "value": "started_timer_with_name",
      "synonym": "A timer started for {duration} for {name}\nAlright, I've set a timer for {duration} for {name}\nI'm starting a timer for {duration} for {name}\n",
      "tags": [
        "timer"
      ]
    },
    "started_timer": {
      "value": "started_timer",
      "synonym": "Timer started for {duration}\nAlright, I've set a timer for {duration}\nI'm starting a timer for {duration}\n",
      "tags": [
        "timer"
      ]
    },
    "started_ordinal_timer_with_name": {
      "value": "started_ordinal_timer_with_name",
      "synonym": "A {ordinal} timer started for {duration} for {name}\nAlright, I've set a {ordinal} timer for {duration} for {name}\nI'm starting a {ordinal} timer for {duration} for {name}\n",
      "tags": [
        "timer"
      ]
    },
    "started_ordinal_timer": {
      "value": "started_ordinal_timer",
      "synonym": "{ordinal} timer started for {duration}\nAlright, I've set a {ordinal} timer for {duration}\nI'm starting a {ordinal} timer for {duration}\n",
      "tags": [
        "timer"
      ]
    },
    "set_alarm": {
      "value": "set_alarm",
      "synonym": "set an alarm for {date} at {time}\n",
      "tags": [
        "timer"
      ]
    },
    "number_of_timers": {
      "value": "number_of_timers",
      "synonym": "There are {num} timers\n\n",
      "tags": [
        "timer"
      ]
    },
    "no_active_timer": {
      "value": "no_active_timer",
      "synonym": "There are no running timers\r\nThere are no active timers\r\nNo timer has been set\r\n",
      "tags": [
        "timer"
      ]
    },
    "for": {
      "value": "for",
      "synonym": "for",
      "tags": [
        "timer"
      ]
    },
    "confirm_timer_to_cancel": {
      "value": "confirm_timer_to_cancel",
      "synonym": "Did you want me to cancel the timer for {name}?\n",
      "tags": [
        "timer"
      ]
    },
    "cancelled_timer_with_ordinal": {
      "value": "cancelled_timer_with_ordinal",
      "synonym": "{ordinal} timer for {duration} (stopped|cancelled)\n",
      "tags": [
        "timer"
      ]
    },
    "cancelled_timer_named_with_ordinal": {
      "value": "cancelled_timer_named_with_ordinal",
      "synonym": "I have stopped the {ordinal} timer for {duration} called {name}\n",
      "tags": [
        "timer"
      ]
    },
    "cancelled_timer_named": {
      "value": "cancelled_timer_named",
      "synonym": "{{name}} timer (stopped|cancelled)\n",
      "tags": [
        "timer"
      ]
    },
    "cancelled_single_timer": {
      "value": "cancelled_single_timer",
      "synonym": "Timer (stopped|cancelled)",
      "tags": [
        "timer"
      ]
    },
    "cancel_all": {
      "value": "cancel_all",
      "synonym": "{{count}} timers have been cancelled\nCancelled {{count}} timers",
      "tags": [
        "timer"
      ]
    },
    "ask_which_timer": {
      "value": "ask_which_timer",
      "synonym": "There are {{count}} timers {{additional}} running, {{names}}, Which are you asking about?\n",
      "tags": [
        "timer"
      ]
    },
    "ask_which_timer_cancel": {
      "value": "ask_which_timer_cancel",
      "synonym": "There are {{count}} timers {{additional}} running, {{names}}, Which would you like to cancel?\n",
      "tags": [
        "timer"
      ]
    },
    "ask_how_long": {
      "value": "ask_how_long",
      "synonym": "How long of a timer?",
      "tags": [
        "timer"
      ]
    },
    "ask_cancel_running_plural": {
      "value": "ask_cancel_running_plural",
      "synonym": "Do you want to cancel the active timers?\r\nWould you like to stop the running timers?",
      "tags": [
        "timer"
      ]
    },
    "ask_cancel_running": {
      "value": "ask_cancel_running",
      "synonym": "Do you want to cancel the active timer?\r\nWould you like to stop the running timer?",
      "tags": [
        "timer"
      ]
    }
  },
  "created_date": 1601232346147,
  "updated_date": 1604548169941,
  "user": "5f5eda81f38a86365b12efc8",
  "userAvatar": "Syntithenai",
  "__v": 0,
  "forms": {
    "how long form": {
      "id": "5f9377010ab18f6c63ac6a82",
      "value": "how long form",
      "synonyms": "",
      "tags": [],
      "slots": [
        {
          "value": "duration",
          "text": "how long",
          "capturefrom": [
            {
              "type": "from entity",
              "intentValue": "ddd",
              "entity": "duration",
              "intent": [],
              "notintent": []
            }
          ],
          "finished": "",
          "validate": ""
        }
      ],
      "isSelected": false,
      "finished": "finished how long",
      "validate": "validate  long form"
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
    },
    "validate  long form": {
      "id": "5fa7afa3b33605701415897b",
      "value": "validate  long form",
      "synonyms": "",
      "tags": [],
      "responses": [
        {
          "text": "validate error"
        }
      ],
      "synonym": "console.log(['VALIDATE LONG',slots,intent])\n\nif (slots.duration === \"duration\") {\n    response('validate error').then(function() {\n        resolve(output,slots)\n    })\n} else {\n    resolve(output,slots)\n}"
    }
  },
  "apis": {},
  "utterances": {
    "how long": {
      "id": "5fa7b7fc64880e2c8ec4c713",
      "value": "how long",
      "synonym": "how long",
      "tags": [],
      "buttons": [
        {
          "label": "set a timer for duration",
          "utterance": "",
          "link": ""
        },
        {
          "label": "set a timer for five minutes",
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
    },
    "validate error": {
      "id": "5fa7afbf6c3425d030766d26",
      "value": "validate error",
      "synonym": "validate error",
      "tags": []
    }
  },
  "rules": [
    {
      "rule": "we",
      "steps": [
        "intent welcome",
        "form how long form"
      ]
    }
  ]
}
module.exports = config
