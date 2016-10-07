---
title: ask_shipping_cost_missing_dimensions_02
timestamp: 2016-10-07T15:47:02.793390889-07:00
---

what does a shipping label cost from [370 Townsend St, San Francisco](address#from) to [6918 Melrose Ave, Los Angeles](address#to) that weighs [7](weight#pounds) lbs?
* ask_shipping/cost

< What are the dimensions of your shipment?
* prompt/dimensions

[6x7x30](dimensions#inches)
* provide_shipping_attrs/dimensions

< It will cost [$7.80](amount-of-money/cost) to send your shipment from [San Francisco](city#from) to [Los Angeles](city#to) using [FedEx Ground](carrier).
* provide_shipping/cost
