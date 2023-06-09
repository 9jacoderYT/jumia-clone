import CategoryDetails from "@/components/category/categorydetails";
import { fetchProductsbyCategory } from "@/lib/fetchData";
import React from "react";

export default function Category({ products }) {
  // const products = [
  //   {
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20Air-Buds%203%20Powerful%20Bass%20IPX7%20True%20Wireless%20EarbudsOraimo%2FOraimo%2F1.jpeg?alt=media&token=d58f4538-2868-4701-8c8b-bd0856ffb5b1",
  //     deliveryMethod: "",
  //     categories: "phonestablets",
  //     details:
  //       "Features:\nIPX7 Waterproof-Perfect for the Outdoor\nRains and sweat won’t stop you-oraimo Air-Buds 3 is designed with an IPX7 water resistance rating, so that you can still enjoy music during a workout or outdoor activity, never fear of anything.\n\nStandard of IPX7 Waterproof: The product can be used normally if it is placed in 1 meter of water and soaked for 30 minutes.\n\n \n\nPowerful Bass-Incredible Audio Experience\nThanks to specially designed 6mm drivers with premium composite diagram , they reproduce clear vocal in mid and high range frequencies as well as punchy bass for truly dynamic sound. oraimo bass boost EQ makes the bass to another incredible level.\n\n \n\nENC 2-mic Algorithm -Ensure Clear Calls\nAI microphone noise reducing algorithm will effectively shield your calls from environmental noise, making your voice can be heard in the calls clearly even you are on a noisy bus.\n\n \n\nCompact and Comfortable- Ergonomic Design for a Better Fit\n4g super lightweight of single earbud, combining an ergonomic shape that matches the ear cavity perfectly, oraimo Air-Buds 3 fit in your ears for long-time comfort. There's even no problem if you wear L&R earbuds backward.\n\n \n\nBT 5.2- Low-latency Game Mode\nBy long pressing one earbud you can turn on Game Mode to enjoy seamless and lag-free gaming on Bluetooth devices.\n\n ",
  //     deliveryPrice: "1500",
  //     units: "500",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     productprice: "18500",
  //     title: "Oraimo Air-Buds 3 Powerful Bass IPX7 True Wireless Earbuds",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     brand: "Oraimo",
  //     id: "1h9hiSl8ErA0G4Kfdj6U",
  //   },
  //   {
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     units: "30",
  //     productprice: "67000",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=68d248a5-4daf-41e6-a17e-188a6c03e0b7",
  //     categories: "phonestablets",
  //     deliveryMethod: "Free Delivery",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     deliveryPrice: "",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     brand: "UMIDIGI",
  //     id: "1pMNf9WsJuw0pLbC3S58",
  //   },
  //   {
  //     brand: "UMIDIGI",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=05d2fbb3-a7b2-47ab-b7a8-c4f6137acfa4",
  //     categories: "phonestablets",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     deliveryMethod: "Free Delivery",
  //     deliveryPrice: "",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     units: "30",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     productprice: "67000",
  //     id: "26WFSuybmVygQzblINlb",
  //   },
  //   {
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     deliveryMethod: "Free Delivery",
  //     units: "30",
  //     brand: "UMIDIGI",
  //     deliveryPrice: "",
  //     categories: "phonestablets",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     productprice: "67000",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=2e4e4876-52ff-490d-bb31-342550248f92",
  //     id: "46g5nYzMz8dXHqO0ASGr",
  //   },
  //   {
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     brand: "Oraimo",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20FreePods%204%20Active%20Noise%20Cancellation%20Easy%20Control%20APP%2035.5-hr%20Long%20Playtime%20Noise%20Reduction%20In%20Calls%20True%20Wireless%20Stereo%20EarbudsOraimo%2FOraimo%2F1.jpeg?alt=media&token=1ba25351-aa48-4769-819e-f755158e8ac9",
  //     categories: "phonestablets",
  //     productprice: "21500",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     deliveryPrice: "1500",
  //     title:
  //       "Oraimo FreePods 4 Active Noise Cancellation Easy Control APP 35.5-hr Long Playtime Noise Reduction In Calls True Wireless Stereo Earbuds",
  //     units: "400",
  //     deliveryMethod: "",
  //     id: "8Z949pOd8qqSyZhcOSLZ",
  //   },
  //   {
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     deliveryMethod: "Free Delivery",
  //     brand: "UMIDIGI",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     categories: "phonestablets",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=b3bee609-de16-4a7b-be9b-cc7694aac041",
  //     deliveryPrice: "",
  //     units: "30",
  //     productprice: "67000",
  //     id: "9xRdf4DUcDhyv9J2WwgH",
  //   },
  //   {
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     deliveryMethod: "Free Delivery",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=d0760a25-24fc-470a-97b5-16599ffcf483",
  //     productprice: "67000",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     units: "30",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     brand: "UMIDIGI",
  //     deliveryPrice: "",
  //     categories: "phonestablets",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     id: "B4Q96RySjM0NzOkL64RF",
  //   },
  //   {
  //     deliveryMethod: "Free Delivery",
  //     deliveryPrice: "",
  //     categories: "phonestablets",
  //     brand: "UMIDIGI",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     productprice: "67000",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=a00f6a7e-11f8-4e72-9b9e-3a908bf3b550",
  //     units: "30",
  //     id: "BLk7QGR4ZXezEH7owyzp",
  //   },
  //   {
  //     productprice: "10500",
  //     deliveryPrice: "1500",
  //     brand: "Oraimo",
  //     deliveryMethod: "",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     title: "Oraimo Power-Bank OPB-P208DN 20KmAh",
  //     categories: "phonestablets",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20Power-Bank%20OPB-P208DN%2020KmAhOraimo%2FOraimo%2F1.jpeg?alt=media&token=8f2f0434-2c91-4b73-aa69-a83284fb8931",
  //     units: "400",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     id: "Dc4P87mBI5vkcCKtLhIV",
  //   },
  //   {
  //     categories: "phonestablets",
  //     brand: "UMIDIGI",
  //     units: "30",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     deliveryMethod: "Free Delivery",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=2f3f54c4-3bac-4fa1-9238-ca72b416eef1",
  //     deliveryPrice: "",
  //     productprice: "67000",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     id: "GZokAWjjivsS3fFh9kg9",
  //   },
  //   {
  //     deliveryMethod: "Free Delivery",
  //     deliveryPrice: "",
  //     units: "30",
  //     productprice: "67000",
  //     categories: "phonestablets",
  //     brand: "UMIDIGI",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=e65bcf17-19e3-4954-952d-fd4c8db0029e",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     id: "J5ws1h1h4t7FUGZTnHBt",
  //   },
  //   {
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     brand: "UMIDIGI",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=a26d4006-4e6c-4851-94b6-5ff7284bbfde",
  //     deliveryPrice: "",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     productprice: "67000",
  //     units: "30",
  //     deliveryMethod: "Free Delivery",
  //     categories: "phonestablets",
  //     id: "JrTs4pJkUoO4KgJfyGU0",
  //   },
  //   {
  //     categories: "phonestablets",
  //     deliveryPrice: "",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     brand: "UMIDIGI",
  //     units: "30",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=661e596a-1fee-4638-8d80-ec7a5f9b78dc",
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     productprice: "67000",
  //     deliveryMethod: "Free Delivery",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     id: "P0NVV5EgwbFJisFVJyyK",
  //   },
  //   {
  //     details:
  //       "UMIDIGI is a smartphone manufacturing-based company founded in China Shenzhen in 2012, which commits to delivering exquisite mobile electronic devices. That is focused on premium products, differentiating innovation, achieving technological breakthroughs, and delivering global customers an extraordinary mobile experience with meticulous designs and advanced technology. To make premium products accessible to everyone at an affordable price. ",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/UMIDIGI%20A11%20Pro%20Max%206.8''%20Inch%208GB%20RAM%2F128GB%20ROM%20FHD%20Android%2011%20-Mist%20BlueUMIDIGI%2FUMIDIGI%2F1.jpeg?alt=media&token=bd9d449d-557d-47cd-97e3-e6ae44277401",
  //     features:
  //       'Infrared Temperature Sensor 2.0\nStock Android 11\n6.8" 20.5:9 FullView Display\nMediaTek, Helio G80, Up to 2.0GHz\n48MP(AI)+16MP+2MP+24MP(selfie)\n8GB RAM,128GB ROM(UP TO 256GB)\n5150mAh Battery\nGlobal Version\nSide Fingerprint Sensor\n2 + 1 SIM slot(4G Dual SIM, both cards can access 4G connectivity simultaneously)',
  //     productprice: "67000",
  //     specifications:
  //       "SKU: UM742MP0DHARQNAFAMZ\nProduct Line: Umidigi Official Store-CODx\nModel: UMIDIGI A11 Pro Max\nProduction Country: China\nSize (L x W x H cm): 16.78*7.56*0.858\nWeight (kg): 0.225\nColor: Mist Blue\nMain Material: Metal,synthetic material,Glass\nFrom the Manufacturer: This product is NOT intended as a medical device. The measurement data and results are for reference only and are not used as a basis for diagnosis or treatment.\nShop Type: Jumia Mall",
  //     units: "30",
  //     categories: "phonestablets",
  //     deliveryMethod: "Free Delivery",
  //     deliveryPrice: "",
  //     title:
  //       "UMIDIGI A11 Pro Max 6.8'' Inch 8GB RAM/128GB ROM FHD Android 11 -Mist Blue",
  //     brand: "UMIDIGI",
  //     id: "RXb1MNJgFEwnfREAySXO",
  //   },
  //   {
  //     categories: "phonestablets",
  //     productprice: "10500",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     deliveryPrice: "1500",
  //     title:
  //       "Oraimo MartClipper2 Super Powerful Professional Cordless Hair Clipper 150-min Working Time",
  //     brand: "Oraimo",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20MartClipper2%20Super%20Powerful%20Professional%20Cordless%20Hair%20Clipper%20150-min%20Working%20TimeOraimo%2FOraimo%2F1.jpeg?alt=media&token=ede8ec01-86c1-4c8f-953d-4ec844422780",
  //     deliveryMethod: "",
  //     units: "400",
  //     id: "X78x3eHkmX2uc3ES3Uu3",
  //   },
  //   {
  //     title: "Oraimo Riff Smaller For Comfort True Wireless Earbuds -Black",
  //     deliveryPrice: "1500",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     productprice: "10500",
  //     deliveryMethod: "",
  //     units: "400",
  //     categories: "phonestablets",
  //     brand: "Oraimo",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20Riff%20Smaller%20For%20Comfort%20True%20Wireless%20Earbuds%20-BlackOraimo%2FOraimo%2F1.jpeg?alt=media&token=fa8c158c-6139-419d-9750-7faaef9a294d",
  //     id: "mO7e747m4CKQAPXRXdOJ",
  //   },
  //   {
  //     productprice: "39000",
  //     categories: "phonestablets",
  //     title:
  //       "Oraimo Watch 2 Pro BT Call Quick Reply Health Monitor Smart Watch",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     units: "400",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20Watch%202%20Pro%20BT%20Call%20Quick%20Reply%20Health%20Monitor%20Smart%20WatchOraimo%2FOraimo%2F1.jpeg?alt=media&token=1c61918c-2ac9-4630-bc3a-f400a24dece1",
  //     brand: "Oraimo",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     deliveryPrice: "1500",
  //     deliveryMethod: "",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     id: "rgAfC4TlOGSBqNTZtJAi",
  //   },
  //   {
  //     productprice: "22600",
  //     details:
  //       "Active Noise Cancellation- Dive into Silence\nOraimo advanced ANC system can get rid of up to 30dB noise for a quiet and immersive condition. Slide, wear, play, then experience the true tranquility and purity. Transparency Mode- Connect to Your Ambience\nTransparency Mode lets you switches, and reconnect with your surroundings.",
  //     url: "https://firebasestorage.googleapis.com/v0/b/jumia-v1.appspot.com/o/Oraimo%20BoomPop%20Over-Ear%20Bluetooth%20Wireless%20HeadphoneOraimo%2FOraimo%2F1.jpeg?alt=media&token=8019428a-317b-4819-adbf-86ce139cc937",
  //     features:
  //       "Active Noise Cancellation\nCustomize Your Listening\n35.5-hour Long Playtime\nEffortless Control with APP\nGoogle Pop-up Notification",
  //     units: "400",
  //     brand: "Oraimo",
  //     specifications: "1*FreePods 4 earbuds;\n1*charging cable;\n4*Eartips\n",
  //     title: "Oraimo BoomPop Over-Ear Bluetooth Wireless Headphone",
  //     deliveryPrice: "1500",
  //     categories: "phonestablets",
  //     deliveryMethod: "",
  //     id: "zTvSI7Dv6ROlF7ISWJcC",
  //   },
  // ];
  return (
    <div className="md:max-w-7xl mx-auto">
      <CategoryDetails products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const category = context.params.category;
  const products = await fetchProductsbyCategory(category);

  return {
    props: {
      products,
    },
  };
}
