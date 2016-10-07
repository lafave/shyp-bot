---
title: ask_shipping_cost_missing_dimensions_01
timestamp: 2016-10-07T15:40:05.211720309-07:00
---

How much does it cost to ship something that weights [3](weight#pounds) lb to [6918 Melrose Ave, Los Angeles](address#to) from [370 Townsend St, San Francisco](address#from)?
* ask_shipping/cost

< What are the dimensions of your shipment?
* prompt/dimensions

[4](dimension#length_inches) x [3](dimension#width_inches) x [2](dimension#height_inches) in
* provide_shipping_attrs/dimensions_inches

< It will cost [$6.45](amount-of-money/cost) to send your shipment from [San Francisco](city#from) to [Los Angeles](city#to) using [UPS Ground](carrier).
* provide_shipping/cost
