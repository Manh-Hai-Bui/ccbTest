const newsletterJSON1 = {
    "subject": {
        "value" : {
            "de" : "Willkommen in Berlin!",
            "en" : "Welcome to Berlin"
        }
    },
    "preheader": {
        "value" : {
            "de" : "Das ist ein Preheader",
            "en" : "This is a preheader"
        }
    },
    "trackingId": {
        "value" : {
            "de" : "MA000BERLIN",
            "en" : "MA000BERLIN"
        }
    },
    "contentBlocks": [
        {
            "contentBlockId": "TeaserImage_Demo",
            "contentBlockKey": "TeaserImage_Demo",
            "type": "teaser",
            "isVisible": true,
            "content": [{
              "type": "input",
              "label" : "Image URL",
              "ampScriptVar" : "teaserImageUrl",
              "value": 
                {
                    "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/19d0f254-4986-4c81-b2f3-6b7bbe0eb5e9.png",
                    "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/19d0f254-4986-4c81-b2f3-6b7bbe0eb5e9.png"
                }
            },{
              "type": "input",
              "label" : "Image alt text",
              "ampScriptVar" : "imageAlt",
              "value": {
                  "de" : "Willkommen in Berlin!",
                  "en" : "Welcome to Berlin"
              } 
            }],
            "settings": {
                "width": "600px",
            }
        },
        {
            "contentBlockId": "headline_h1_demo",
            "contentBlockKey": "headline_h1_demo",
            "type": "headline",
            "isVisible": true,
            "content": [{
                "type": "input",
                "label" : "H1 Text",
                "ampScriptVar" : "headline_h1",
                "value": {
                      "de" : "Willkommen in Berlin",
                      "en" : "Welcome to Berlin"
                  }
            }],
            "settings": {
                "fontFamily": "Arial, sans-serif",
                "fontfontSize": "24px",
                "fontWeight": "bold"
            }
        },
        {
            "contentBlockId": "bodyText_Demo",
            "contentBlockKey": "bodyText_Demo",
            "type": "text",
            "isVisible": true,
            "content": [{
                "type": "input",
                "label" : "Text",
                "ampScriptVar" : "bodyText",
                "value": {
                        "de" : "Berlin ist die Hauptstadt und ein Land der Bundesrepublik Deutschland.Die Großstadt ist mit rund 3,7 Millionen Einwohnern die bevölkerungsreichste und mit 891 Quadratkilometern die flächengrößte Gemeinde Deutschlands sowie die bevölkerungsreichste Stadt der Europäischen Union. In der Agglomeration Berlin leben mehr als 4,7 Millionen Menschen und in der Metropolregion Berlin-Brandenburg mehr als 6,2 Millionen. Der Stadtstaat besteht aus zwölf Bezirken. Neben den Flüssen Spree, Havel und Dahme befinden sich im Stadtgebiet kleinere Fließgewässer sowie zahlreiche Seen und Wälder.",
                        "en" : "Berlin is the capital and a state of the Federal Republic of Germany. With a population of approximately 3.7 million, it is Germany’s most populous municipality; with an area of 891 square kilometers, it is also Germany’s largest municipality by land area, as well as the most populous city in the European Union. More than 4.7 million people live in the Berlin metropolitan area, and more than 6.2 million in the Berlin-Brandenburg metropolitan region. The city-state consists of twelve districts. In addition to the Spree, Havel, and Dahme rivers, the city area includes smaller waterways as well as numerous lakes and forests."
                    },
            }],
            "settings": {
                "fontFamily": "Arial, sans-serif",
                "fontfontSize": "14px",
                "lineHeight": "140%"
            }
        },
        {
            "contentBlockId": "3Col_Image_Demo",
            "contentBlockKey": "3Col_Image_Demo",
            "type": "3colMixed",
            "isVisible": true,
            "content": [
                {
                "type": "input",
                "ampScriptVar" : "imageUrl1",
                "label" : "Image 1",
                "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/8a46ac97-eb9a-4e40-b2cb-a0469c1d83c8.png",
                },
                {
                "type": "input",
                "ampScriptVar" : "imageUrl2",
                "label" : "Image 2",
                "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/2eb093ba-3676-45d5-87f0-6a227058670b.png",
                },
                {
                "type": "input",
                "ampScriptVar" : "imageUrl3",
                "label" : "Image 3",
                "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/089182d9-9f4e-477d-a750-fd569fe9750f.png",
                },
                {
                "type": "input",
                "ampScriptVar" : "3coltext1",
                "label" : "Image Description 1",
                "value": {
                        "de" : "Stadt",
                        "en" : "City"
                    },
                },
                {
                "type": "input",
                "ampScriptVar" : "3coltext2",
                "label" : "Image Description 2",
                "value": {
                        "de" : "Museen",
                        "en" : "Museums"
                    },
                },
                {
                "type": "input",
                "ampScriptVar" : "3coltext3",
                "label" : "Image Description 3",
                "value": {
                        "de" : "Architektur",
                        "en" : "Architecture"
                    },
                },
            ],
            "settings": {}
        }
    ]
}


const newsletterJSON2 = [{
  "subject": "Willkommen in München!",
  "preheader": "This is a preheader",
  "trackingId": "MA000MUNICH",
  "locale" : "de",
  "contentBlocks": [
    {
      "contentBlockId": "TeaserImage_Demo",
      "contentBlockKey": "TeaserImage_Demo",
      "type": "teaser",
      "isVisible": true,
      "content": {
        "imageUrl": {
          "type": "input",
          "label" : "Image URL",
          "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/6933f20f-2ab6-4c7f-bfd6-d49c68088cbb.png",
        },
        "imageAltText": {
          "type": "input",
          "label" : "Image alt text",
          "value": "Willkommen in München!",
        }
      },
      "settings": {
        "width": "600px",
      }
    },
    {
      "contentBlockId": "headline_h1_demo",
      "contentBlockKey": "headline_h1_demo",
      "type": "headline",
      "isVisible": true,
      "content": {
        "text": {
          "type": "input",
          "label" : "H1 Text",
          "value": "Willkommen in München!",
        },
      },
      "settings": {
        "fontFamily": "Arial, sans-serif",
        "fontfontSize": "24px",
        "fontWeight": "bold"
      }
    },
    {
      "contentBlockId": "bodyText_Demo",
      "contentBlockKey": "bodyText_Demo",
      "type": "text",
      "isVisible": true,
      "content": {
        "text": {
          "type": "input",
          "label" : "Text",
          "value": "Das Stadtbild Münchens wird von jahrhundertealte Bauwerken und zahlreichen Museen geprägt. Die bayerische Landeshauptstadt ist für das alljährliche Oktoberfest und ihre Bierhallen bekannt, darunter vor allem das 1589 eröffnete Hofbräuhaus. In der Altstadt am zentralen Marienplatz stehen Wahrzeichen wie das neugotische Neue Rathaus, dessen beliebtes Glockenspiel Melodien und Geschichten aus dem 16. Jahrhundert spielt.",
        },
      },
      "settings": {
        "fontFamily": "Arial, sans-serif",
        "fontfontSize": "14px",
        "lineHeight": "140%"
      }
    },
    {
      "contentBlockId": "2col_mixed_demo",
      "contentBlockKey": "2col_mixed_demo",
      "type": "2colMixed",
      "isVisible": true,
      "content": {
        "imageUrl1": {
          "ampScriptVar" : "2colImageUrl",
          "type": "input",
          "label" : "Image 1",
          "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/d8df5e95-55e6-4f09-980f-a0b7c004e514.png",
        },
        "headline1": {
          "ampScriptVar" : "2colHeadline",
          "type": "input",
          "label" : "Headline",
          "value": "Innenstadt",
        },
        "text1": {
          "ampScriptVar" : "2colText",
          "type": "input",
          "label" : "Text",
          "value": "München ist Sitz des Bayerischen Landtages, der Bayerischen Staatsregierung, Verwaltungssitz des die Stadt umgebenden Landkreises München mit dessen Landratsamt sowie des bayerischen Bezirks Oberbayern und des Regierungsbezirks Oberbayern.",
        }
      },
      "settings": {
        "direction" : "ltr"
      }
    },
    {
      "contentBlockId": "2col_mixed_demo",
      "contentBlockKey": "2col_mixed_demo",
      "type": "2colMixed",
      "isVisible": true,
      "content": {
        "imageUrl1": {
          "type": "input",
          "label" : "Image 1",
          "value": "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/6933f20f-2ab6-4c7f-bfd6-d49c68088cbb.png",
        },
        "headline1": {
          "type": "input",
          "label" : "Headline",
          "value": "Stadttor",
        },
        "text1": {
          "type": "input",
          "label" : "Text",
          "value": "Münchens historische Stadtbefestigung aus dem 14. Jahrhundert besaß vier große Haupttore. Drei davon sind bis heute erhalten und prägen als beliebte Sehenswürdigkeiten die Altstadt: das Karlstor im Westen, das Sendlinger Tor im Süden und das Isartor im Osten.",
        }
      },
      "settings": {
        "direction" : "rtl"
      }
    },
  ]
}]
