# Recipe Shortcut for iOS

Everyone knows how annoying recipe websites can be. This is a small project that is meant to be used with [Apple Shortcuts](https://support.apple.com/guide/shortcuts/welcome/ios).

This shortcut saves a recipe from Safari and creates a new Note, in the Apple Notes app.

Shortcuts allows you to run JavaScript on a web page, and the code in `index.js` is a good starting point that will scrape a lot of recipe websites. It targets the [Recipe Schema Markup](https://developers.google.com/search/docs/data-types/recipe). Since this is an opt-in SEO feature for Google, unfortunately, this script won't work all the time.

## Getting Started
1. I will add the shortcut link for you to download this directly.

## Getting Started the Other Way
1. Open Shortcuts and click `+` to create a new shortcut.
2. Click `...`, Select 'Show in Share Sheet' to be ON. Share Sheet Types should be `Safari web pages`
3. Search for `Run JavaScript on Web Page` in the Actions. Add it to the shortcut panel. Note: It should automatically recieve an input from `Shortcut Input`.
4. Delete the provided code and add the code from `index.js`
5. Search for `If` in the search panel.
6. Add `does not have any value` to the If condition. Then you can add a Notification from the action panel if you would like. Drag the notification under the If condition.
7. Search for `Text` in the search panel, and add it under the `Otherwise` block.
8. Inside the text field for `Text`, you can start adding data from the `JavaScript Result` as `Dictionary` with the value for keys (see below). 
9. Search for `Create Note` in the Search panel, and add it under the `Text` block. (I have `Show Compose Sheet` off, but this is up to you)
10. If you would like the newly created note to be shown, add `Show Note` under the previous block.

## Dictionary / JSON Keys and values:

This is a sample object that is returned from the `JavaScript Result`. Add the keys to the `Text` panel that you would like to include in the Note. 

The JavaScript function manipulates the original object for easier access and formatting, for instance: `recipeIngredient` and `myInstructions` are altered.

```json
{
    "@context": "http://schema.org",
    "@type": [
        "Recipe"
    ],
    "headline": "Shrimp Fried Rice",
    "datePublished": "2021-07-08T20:32:19.273Z",
    "dateModified": "2021-07-08T20:32:19.273Z",
    "author": {
        "@type": "Person",
        "name": "Tim Chin",
        "description": "Tim Chin is a professional cook and writer who started contributing to Serious Eats in early 2020. He holds a degree in Classic Pastry Arts at The International Culinary Center.",
        "sameAs": [
            "https://www.instagram.com/tomthechon/",
            "https://www.seriouseats.com/tim-chin-5119026"
        ],
        "knowsAbout": [
            "General recipe development, bread and pastry, Chinese food, fermentation, food science, "
        ]
    },
    "description": "The key to good shrimp fried rice is doing more with less.",
    "image": [
        {
            "@type": "ImageObject",
            "url": "https://www.seriouseats.com/thmb/KiZnd7dJHGx2jPpnm9Vz6rWoZAY=/1500x844/smart/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-12-ccf02c7f4a6a405d9e631028ddd7563d.jpg",
            "height": 844,
            "width": 1500
        },
        {
            "@type": "ImageObject",
            "url": "https://www.seriouseats.com/thmb/7CWDnKivk2934EjTuCqb3bPceo4=/1500x1125/smart/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-12-ccf02c7f4a6a405d9e631028ddd7563d.jpg",
            "height": 1125,
            "width": 1500
        },
        {
            "@type": "ImageObject",
            "url": "https://www.seriouseats.com/thmb/e45FIsBce9p3dM0S9pvsk40AwP0=/1125x1125/smart/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-12-ccf02c7f4a6a405d9e631028ddd7563d.jpg",
            "height": 1125,
            "width": 1125
        }
    ],
    "publisher": {
        "@type": "Organization",
        "name": "Serious Eats",
        "url": "https://www.seriouseats.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.seriouseats.com/thmb/O7qOTYhS4IAKSKnr4JmNDURwjhw=/320x320/filters:no_upscale():max_bytes(150000):strip_icc()/Serious_Eats_Schema_Logo-033d1e058bdb4c8d9e0ada84a4485482.png",
            "width": 320,
            "height": 320
        },
        "brand": "Serious Eats",
        "publishingPrinciples": "https://www.seriouseats.com/about-us-5120006#editorial-guidelines"
    },
    "name": "Shrimp Fried Rice",
    "cookTime": "PT10M",
    "recipeCategory": [
        "Dinner",
        "Entree",
        "Side Dish"
    ],
    "recipeCuisine": [
        "Asian"
    ],
    "recipeIngredient": [
        "* 3 tablespoons (45ml) vegetable oil, divided",
        "* 2 cups (12 ounces; 350g) cooked white or jasmine rice (see note) ",
        "* Kosher salt",
        "* White pepper",
        "* 6 ounces (170g) iceberg lettuce (about 1/4 of a head), sliced into 1/2-inch strips",
        "* 1 teaspoon Totole Granulated Chicken Soup Mix (see note)",
        "* 3 large eggs, beaten",
        "* 4 garlic cloves (20g), minced",
        "* 6 ounces (170g) large shrimp, peeled, deveined, and cut into 1- to 1 1/2-inch pieces",
        "* 3 ounces (85g) frozen peas",
        "* 2 scallions (30g), ends trimmed and thinly sliced"
    ],
    "recipeInstructions": [
        {
            "@type": "HowToStep",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.seriouseats.com/thmb/S4Y5FWhvZf-bZoyP_2ayNBYIR6U=/1500x1125/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-4-43b208aa09a44c96b2ba779738bc11e2.jpg",
                "height": 1125,
                "width": 1500
            },
            "text": "If using day-old rice (see note), transfer to a medium bowl and break the rice up with your hands into individual grains before proceeding. In a carbon-steel wok or 12-inch carbon steel skillet, heat 1 1/2 teaspoons (7ml) oil over high heat until smoking. Add half of the rice, season lightly with salt and white pepper, and cook, stirring and tossing, until rice is pale brown, toasted, and has a slightly chewy texture, about 3 minutes. Transfer rice to a medium heatproof bowl. Repeat cooking process with another 1 1/2 teaspoons oil and remaining rice. Set rice aside in bowl."
        },
        {
            "@type": "HowToStep",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.seriouseats.com/thmb/ebMJdk3vJXY64yMaCjjOlW-xWAU=/1500x1125/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-6-4586df2295714be4b52b96aacf8224c2.jpg",
                "height": 1125,
                "width": 1500
            },
            "text": "Heat 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add lettuce, season lightly with salt, white pepper, and 1/2 teaspoon seasoning granules, and cook, stirring and tossing, until beginning to wilt, about 15 seconds. If using blowtorch, hold flame 2 to 3 inches above wok while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Set aside in bowl with rice."
        },
        {
            "@type": "HowToStep",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.seriouseats.com/thmb/T_PWt3fsi6Hnrge2CCAhY_4jICc=/1500x1125/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-step2-a203c5cb86e74b7dbe55ade32aa489e7.jpg",
                "height": 1125,
                "width": 1500
            },
            "text": "Heat 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add eggs, season lightly with salt, and cook, stirring gently until just cooked through, about 45 seconds. Using spoon, break up eggs into small pieces. Transfer cooked eggs to bowl with rice and lettuce."
        },
        {
            "@type": "HowToStep",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.seriouseats.com/thmb/cDuRpWSQR6jHVa7J2yIsi9XT7Mo=/1500x1125/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-10-d488fd133ab64c118d06a567248b72aa.jpg",
                "height": 1125,
                "width": 1500
            },
            "text": "Heat remaining 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add garlic and cook until just fragrant, about 10 seconds. Stir in shrimp and season with salt, pepper, and remaining 1/2 teaspoon (2g) seasoning powder. If using blowtorch, hold flame 2 to 3 inches above skillet while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Continue cooking shrimp until just cooked through, about 1 minute longer."
        },
        {
            "@type": "HowToStep",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.seriouseats.com/thmb/nARKWaJYFm8_KPHfWB6gZx-Vcck=/1500x1125/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-11-9e5753d3aa1c4e61bad9867500e311b5.jpg",
                "height": 1125,
                "width": 1500
            },
            "text": "Add rice, lettuce, and eggs and toss to combine. Add frozen peas and scallions and continue to toss and stir until peas are thawed and every grain of rice is separate. If using blowtorch, hold flame 2 to 3 inches above skillet while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Season with salt and additional seasoning powder to taste. Serve."
        }
    ],
    "recipeYield": "2",
    "totalTime": "PT10M",
    "mainEntityOfPage": {
        "@type": [
            "WebPage"
        ],
        "@id": "https://www.seriouseats.com/shrimp-fried-rice-5189755",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://www.seriouseats.com/east-asian-recipes-5117260",
                        "name": "East Asian"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://www.seriouseats.com/chinese-recipes-5117259",
                        "name": "Chinese"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@id": "https://www.seriouseats.com/shrimp-fried-rice-5189755",
                        "name": "How to Make Shrimp Fried Rice"
                    }
                }
            ]
        }
    },
    "about": [],
    "myImgUrl": "https://www.seriouseats.com/thmb/KiZnd7dJHGx2jPpnm9Vz6rWoZAY=/1500x844/smart/filters:no_upscale()/20210706-shrimp-fried-rice-tim-chin-seriouseats-12-ccf02c7f4a6a405d9e631028ddd7563d.jpg",
    "myInstructions": [
        "1. If using day-old rice (see note), transfer to a medium bowl and break the rice up with your hands into individual grains before proceeding. In a carbon-steel wok or 12-inch carbon steel skillet, heat 1 1/2 teaspoons (7ml) oil over high heat until smoking. Add half of the rice, season lightly with salt and white pepper, and cook, stirring and tossing, until rice is pale brown, toasted, and has a slightly chewy texture, about 3 minutes. Transfer rice to a medium heatproof bowl. Repeat cooking process with another 1 1/2 teaspoons oil and remaining rice. Set rice aside in bowl.\n",
        "2. Heat 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add lettuce, season lightly with salt, white pepper, and 1/2 teaspoon seasoning granules, and cook, stirring and tossing, until beginning to wilt, about 15 seconds. If using blowtorch, hold flame 2 to 3 inches above wok while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Set aside in bowl with rice.\n",
        "3. Heat 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add eggs, season lightly with salt, and cook, stirring gently until just cooked through, about 45 seconds. Using spoon, break up eggs into small pieces. Transfer cooked eggs to bowl with rice and lettuce.\n",
        "4. Heat remaining 2 teaspoons (10ml) oil in now-empty wok over high heat until smoking. Add garlic and cook until just fragrant, about 10 seconds. Stir in shrimp and season with salt, pepper, and remaining 1/2 teaspoon (2g) seasoning powder. If using blowtorch, hold flame 2 to 3 inches above skillet while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Continue cooking shrimp until just cooked through, about 1 minute longer.\n",
        "5. Add rice, lettuce, and eggs and toss to combine. Add frozen peas and scallions and continue to toss and stir until peas are thawed and every grain of rice is separate. If using blowtorch, hold flame 2 to 3 inches above skillet while stirring and tossing constantly, until oil combusts and imparts smoky aroma, about 30 seconds. Season with salt and additional seasoning powder to taste. Serve.\n"
    ]
}
```

### To Do
- [ ] Change the control flow for the `If` action to have better style.
