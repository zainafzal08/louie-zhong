let configObj = {
  animations: [
    {
      "name": "title-profile",
      "trigger": "scroll",
      "targets": [
          {
            "id":"profile",
            "final":0,
            "property": {
                "name": "width",
                "type": "int",
                "suffix": "px"
            },
            "original": null
          },
          {
            "id":"title-container",
            "final":0,
            "property": {
                "name": "width",
                "type": "int",
                "suffix": "px"
            },
            "original": null
          }
      ],
      "animationSpace": {
          "id": 'landing',
          "adjust": 0.5
      }
    }
  ]
}

top.config = configObj
