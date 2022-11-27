<template>
  <v-card class="ma-2">
    <v-img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Photos_NewYork1_032.jpg/800px-Photos_NewYork1_032.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Stocks Are on the Rise, but Earnings Could Drag Them Down Again
    </v-card-title>

    <v-card-subtitle>
      This summer, analysts thought S&P 500 companies’ fourth-quarter earnings
      would rise. Now they think earnings will fall.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="accent lighten-2" text @click="show = !show"> More </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Markets have had a good run in recent weeks, but some investors expect
          unimpressive earnings to send stocks lower again. U.S. stocks have
          mounted a turnaround lately amid expectations the Federal Reserve
          could slow the pace of its rate increases as soon as December. That
          has been a welcome change, since stocks have been under pressure
          throughout the year thanks to roaring inflation and the Fed’s
          aggressive rate-raising campaign to try to curb the rising prices. The
          S&P 500 is down 16% this year, but up 13% from Oct. 12, its lowest
          close of 2022. Investors say recent optimism in the markets could soon
          evaporate as corporate profits get squeezed further. Market
          participants often use the ratio of a company’s share price to its
          earnings as a gauge for whether a stock appears cheap or pricey. If
          the earnings side of the equation pulls back, that could make the
          market look overpriced.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "trending-view",
  data: () => ({ show: false }),
};
</script>
