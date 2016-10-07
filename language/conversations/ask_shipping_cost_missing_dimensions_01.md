---
title: ask_shipping_cost_missing_dimensions_01
timestamp: 2016-10-07T15:40:05.211720309-07:00
---

How much does it cost to ship something that weights [3](weight) lb to [6918 Melrose Ave, Los Angeles](to_address) from [370 Townsend St, San Francisco](from_address)?
* ask/shipping_cost

< What are the dimensions of your shipment?
* prompt/dimensions

[4](length) x [3](width) x [2](height) in
* provide_shipping_attrs/dimensions

< It will cost [$6.45](amount-of-money/cost) to send your shipment from [San Francisco](from_city) to [Los Angeles](to_city) using [UPS Ground](carrier).
* provide/shipping_cost
