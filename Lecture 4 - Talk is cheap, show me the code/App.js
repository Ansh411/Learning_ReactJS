import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.postimg.cc/sXZDd4WN/Chat-GPT-Image-Oct-12-2025-03-25-26-AM.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Offers</li>
                    <li><i className="fas fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>
    )
}

// This is another way of giving styles to any react element by using styles as object and pass it using "{}" as JS thing as we are not allowed to use it directly

const styles = {
    backgroundColor : "#f0f0f0"
};

const resList = [
                  {
                    "info": {
                      "id": "25178",
                      "name": "BTW",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/d5804533-a196-4005-9c6d-c015d33f6a67_25178.JPG",
                      "locality": "Rohini",
                      "areaName": "Rohini",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Street Food",
                        "Indian",
                        "North Indian",
                        "Desserts",
                        "Beverages",
                        "Sweets"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "parentId": "10314",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "29K+",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Tikki.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Tikki.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹42"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "2.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/btw-rohini-rest25178",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10208",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7a2aca35-9ddb-4c31-a82e-6d3c9c665f43_10208.jpg",
                      "locality": "Sector 10",
                      "areaName": "Rohini",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "63K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/burger-king-sector-10-rohini-rest10208",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "791013",
                      "name": "Choko La",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/11/bb26cb81-39f0-420b-8fe8-e6bbf549d31f_791013.JPG",
                      "locality": "Sector 8",
                      "areaName": "Rohini",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2098",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "265",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹76"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/choko-la-sector-8-rohini-rest791013",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "486920",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/80b9c664-a2c9-4ce4-a7c5-e2192dab0f41_486920.JPG",
                      "locality": "Pushkar Enclave",
                      "areaName": "Paschim Vihar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Rolls & Wraps",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "7.2K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 6.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "6.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹70"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/kfc-pushkar-enclave-paschim-vihar-rest486920",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "785298",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/d1dcb958-d1d4-4f8b-a3c1-8ca99c2aa5a6_785298.JPG",
                      "locality": "KHASRA NO. 22",
                      "areaName": "NIHANKARI SATSANG BHAWAN",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11633",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.5K+",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/olio-the-wood-fired-pizzeria-khasra-no-22-nihankari-satsang-bhawan-rest785298",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "785299",
                      "name": "Crusto's - Cheese Burst Pizza By Olio",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/5826bb2c-4f82-4870-a429-76a30697430c_785299.jpg",
                      "locality": "KHASRA NO. 22",
                      "areaName": "NIHANKARI SATSANG BHAWAN",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "268955",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "239",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/crustos-cheese-burst-pizza-by-olio-khasra-no-22-nihankari-satsang-bhawan-rest785299",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "799264",
                      "name": "Seoul Burgers & Shakes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/6cc2437b-c3e2-45c3-9407-c113d777f882_799264.jpg",
                      "locality": "Rajouri Garden",
                      "areaName": "West",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burger",
                        "Bubble Tea",
                        "Fast Food",
                        "Beverages",
                        "Juice and shake"
                      ],
                      "avgRating": 4.4,
                      "parentId": "588706",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "694",
                      "sla": {
                        "deliveryTime": 60,
                        "lastMileTravel": 10.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "10.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/seoul-burgers-and-shakes-rajouri-garden-west-rest799264",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "168043",
                      "name": "Burger Singh(Big Punjabi Burgers)",
                      "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
                      "locality": "Rohini",
                      "areaName": "Rohini",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "American",
                        "Fast Food",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "375065",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹47"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "235"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/burger-singh-big-punjabi-burgers-rohini-rest168043",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "346473",
                      "name": "Burgerama",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/aef0f272-3b99-4732-b9fb-559520a7b1b3_346473.jpg",
                      "locality": "Rajouri Garden Extension",
                      "areaName": "Rajouri Garden",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "8993",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.6K+",
                      "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 8.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "8.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹550 OFF",
                        "subHeader": "ABOVE ₹2999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "86"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/burgerama-extension-rajouri-garden-rest346473",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "799265",
                      "name": "Boba Bhai - Bubble Tea & Korean Street Food",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/8ff8b97f-554b-4d8c-8f6b-b90b08f74496_799265.jpg",
                      "locality": "Rajouri Garden",
                      "areaName": "West",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bubble Tea",
                        "Burger",
                        "Korean",
                        "Beverages",
                        "Fast Food",
                        "Juice and shake"
                      ],
                      "avgRating": 4.1,
                      "parentId": "361235",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "769",
                      "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 10.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-65 mins",
                        "lastMileTravelString": "10.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-19 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/boba-bhai-bubble-tea-and-korean-street-food-rajouri-garden-west-rest799265",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "640356",
                      "name": "Mexican Burritos By Nomad",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c295d451-264d-4543-86a1-d491d4c77fcf_640356.JPG",
                      "locality": "GT Karnal Road",
                      "areaName": "Model Town 3",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Mexican",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "parentId": "550225",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "324",
                      "sla": {
                        "deliveryTime": 76,
                        "lastMileTravel": 11.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "75-85 mins",
                        "lastMileTravelString": "11.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹349"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/mexican-burritos-by-nomad-gt-karnal-road-model-town-3-rest640356",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "348147",
                      "name": "Tibb's Frankie - Serving Rolls Since 1969",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/29/cc3f3bf3-6a49-41d3-bf70-60f9eaea6d3d_348147.JPG",
                      "locality": "GTB Nagar",
                      "areaName": "MODEL TOWN",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "472083",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 74,
                        "lastMileTravel": 11.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "70-80 mins",
                        "lastMileTravelString": "11.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹83"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "2.2",
                          "ratingCount": "27"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/tibbs-frankie-serving-rolls-since-1969-gtb-nagar-model-town-rest348147",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "735723",
                      "name": "ENSO - Sourdough Pizza by Nomad",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/018323b0-852b-45df-ace7-187b317a97d7_735723.jpg",
                      "locality": "GT Karnal Road",
                      "areaName": "Model Town 3",
                      "costForTwo": "₹850 for two",
                      "cuisines": [
                        "Pizzas",
                        "Fast Food",
                        "Desserts",
                        "Salads",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "77344",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "361",
                      "sla": {
                        "deliveryTime": 66,
                        "lastMileTravel": 11.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "65-75 mins",
                        "lastMileTravelString": "11.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹349"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/enso-sourdough-pizza-by-nomad-gt-karnal-road-model-town-3-rest735723",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "383753",
                      "name": "Vadilal Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/c337c319-4c62-4e31-9755-57a1eeee3dbb_383753.jpg",
                      "locality": "Saraswati Vihar",
                      "areaName": "Lawrence Road",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "11745",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "551",
                      "sla": {
                        "deliveryTime": 63,
                        "lastMileTravel": 6.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "60-70 mins",
                        "lastMileTravelString": "6.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 14:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/vadilal-ice-creams-saraswati-vihar-lawrence-road-rest383753",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "589248",
                      "name": "Nomad Pizza - Traveller Series",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/5/3b4885fd-50d9-49d4-87dc-ce68d4052ced_589248.jpg",
                      "locality": "GT Karnal Road",
                      "areaName": "Model Town 3",
                      "costForTwo": "₹850 for two",
                      "cuisines": [
                        "Pizzas",
                        "Fast Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "251919",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "685",
                      "sla": {
                        "deliveryTime": 67,
                        "lastMileTravel": 11.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "65-75 mins",
                        "lastMileTravelString": "11.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Gourmet.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Gourmet.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹349"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "50"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/nomad-pizza-traveller-series-gt-karnal-road-model-town-3-rest589248",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "789133",
                      "name": "Crunch - Global Budget Pizzas by Nomad",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9285b74b-7958-485c-900b-f4c4855b14b7_789133.jpg",
                      "locality": "GT Karnal Road",
                      "areaName": "Model Town 3",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "598508",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "76",
                      "sla": {
                        "deliveryTime": 73,
                        "lastMileTravel": 11.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "70-80 mins",
                        "lastMileTravelString": "11.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 06:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹349"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/crunch-global-budget-pizzas-by-nomad-gt-karnal-road-model-town-3-rest789133",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "9710",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_9710.JPG",
                      "locality": "Netaji Subhash Place",
                      "areaName": "Netaji Subhash Place",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "Chaat",
                        "Snacks",
                        "Bakery",
                        "Street Food",
                        "healthy",
                        "Home Food",
                        "Maharashtrian",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "281782",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-12 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹84"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "2.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-netaji-subhash-place-rest9710",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17843",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/6cf44409-f3c6-4920-9328-fd8093cacf95_17843.JPG",
                      "locality": "Prashant Vihar",
                      "areaName": "Prashant Vihar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "1",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.8K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-10-19 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "735"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-d7d1c4f5-b96f-4e62-a422-05d50fce5c24"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/delhi/cafe-coffee-day-prashant-vihar-rest17843",
                      "type": "WEBLINK"
                    }
                  },
                ]

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name , cuisines , avgRating , costForTwo , sla} = resData?.info;
    return ( 
        <div className="res-card" style={styles}>
            <img className="res-logo"
            alt="res-img" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            </span>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);