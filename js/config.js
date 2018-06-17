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
            "id":"titleContainer",
            "final":"brand",
            "property": {
                "name": "height",
                "type": "int",
                "suffix": "px"
            },
            "original": null
          },
          {
            "id":"brand",
            "delta":-10,
            "property": {
                "name": "font-size",
                "type": "float",
                "suffix": "px"
            },
            "original": null
          },
          {
            "class":"nav-elem",
            "delta":-5,
            "property": {
                "name": "font-size",
                "type": "float",
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
