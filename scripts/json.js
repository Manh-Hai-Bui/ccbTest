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
                "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/8a46ac97-eb9a-4e40-b2cb-a0469c1d83c8.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/8a46ac97-eb9a-4e40-b2cb-a0469c1d83c8.png"
                  },
                },
                {
                "type": "input",
                "ampScriptVar" : "imageUrl2",
                "label" : "Image 2",
                "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/2eb093ba-3676-45d5-87f0-6a227058670b.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/2eb093ba-3676-45d5-87f0-6a227058670b.png"
                  },
                },
                {
                "type": "input",
                "ampScriptVar" : "imageUrl3",
                "label" : "Image 3",
                "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/089182d9-9f4e-477d-a750-fd569fe9750f.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/089182d9-9f4e-477d-a750-fd569fe9750f.png"
                  },
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
          "ampScriptVar" : "teaserImageUrl",
          "type": "input",
          "label" : "Image URL",
          "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/6933f20f-2ab6-4c7f-bfd6-d49c68088cbb.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/6933f20f-2ab6-4c7f-bfd6-d49c68088cbb.png"
                  },
        },
        "imageAltText": {
          "ampScriptVar" : "imageAlt",
          "type": "input",
          "label" : "Image alt text",
          "value": {
                      "de" : "Willkommen in München!",
                      "en" : "Welcome to Munich!"
                  },
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
          "ampScriptVar" : "headline_h1",
          "type": "input",
          "label" : "H1 Text",
          "value": {
                      "de" : "Willkommen in München!",
                      "en" : "Welcome to Munich!"
                  },
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
          "ampScriptVar" : "bodyText",
          "type": "input",
          "label" : "Text",
          "value": {
                      "de" : "Das Stadtbild Münchens wird von jahrhundertealte Bauwerken und zahlreichen Museen geprägt. Die bayerische Landeshauptstadt ist für das alljährliche Oktoberfest und ihre Bierhallen bekannt, darunter vor allem das 1589 eröffnete Hofbräuhaus. In der Altstadt am zentralen Marienplatz stehen Wahrzeichen wie das neugotische Neue Rathaus, dessen beliebtes Glockenspiel Melodien und Geschichten aus dem 16. Jahrhundert spielt.",
                      "en" : "Munich's cityscape is characterized by centuries-old buildings and numerous museums. The Bavarian capital is known for the annual Oktoberfest and its beer halls, most notably the Hofbräuhaus, which opened in 1589. In the Old Town on the central Marienplatz, landmarks such as the neo-Gothic New Town Hall stand out, whose popular glockenspiel plays melodies and stories from the 16th century."
                  }
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
          "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/d8df5e95-55e6-4f09-980f-a0b7c004e514.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/d8df5e95-55e6-4f09-980f-a0b7c004e514.png"
                  },
        },
        "headline1": {
          "ampScriptVar" : "2colHeadline",
          "type": "input",
          "label" : "Headline",
          "value": {
                      "de" : "Innenstadt",
                      "en" : "Citycenter"
                  }
        },
        "text1": {
          "ampScriptVar" : "2colText",
          "type": "input",
          "label" : "Text",
          "value": {
                      "de" : "München ist Sitz des Bayerischen Landtages, der Bayerischen Staatsregierung, Verwaltungssitz des die Stadt umgebenden Landkreises München mit dessen Landratsamt sowie des bayerischen Bezirks Oberbayern und des Regierungsbezirks Oberbayern.",
                      "en" : "Munich is the seat of the Bavarian State Parliament and the Bavarian State Government, as well as the administrative center of the Munich district surrounding the city—including its district office—and of the Bavarian district of Upper Bavaria and the administrative region of Upper Bavaria."
                  },
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
          "ampScriptVar" : "2colImageUrl",
          "type": "input",
          "label" : "Image 1",
          "value": {
                      "de" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/7fbcde2b-0b1e-4c8f-8924-a2ed4ad2bc97.png",
                      "en" : "https://image.s51.sfmc-content.com/lib/fe2c11737364047c7c1275/m/1/7fbcde2b-0b1e-4c8f-8924-a2ed4ad2bc97.png"
                  }
        },
        "headline1": {
          "ampScriptVar" : "2colHeadline",
          "type": "input",
          "label" : "Headline",
          "value": {
                      "de" : "Stadttor",
                      "en" : "City Gate"
                  },
        },
        "text1": {
          "ampScriptVar" : "2colText",
          "type": "input",
          "label" : "Text",
          "value": {
                      "de" : "Die „porta Sentlingeriorum“ diente in der zweiten Stadtbefestigung Münchens, die ab dem Ende des 13. Jahrhunderts errichtet wurde, als südliches Haupttor. Die Auswahl der Abbildungen stammt aus den rund 25.000 München-Fotos der Photothek des Zentralinstituts für Kunstgeschichte.",
                      "en" : "The “porta Sentlingeriorum” served as the main southern gate in Munich’s second city fortifications, which were constructed beginning in the late 13th century. The images were selected from the approximately 25,000 photos of Munich held in the photo library of the Central Institute for Art History."
                  },
        }
      },
      "settings": {
        "direction" : "rtl"
      }
    }
  ]
}]
