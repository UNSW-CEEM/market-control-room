<template>
  <div class="nes-container with-title">
    <h3 class="title">Bidstack</h3>
    <select v-model="selected">
      <!-- <option disabled value="">Please select one</option> -->
      <option v-for="(value, key) in bidstacks">{{key}}</option>
    </select>
    <span>Selected timestep: {{ selected }}</span>
    <div class="columns" >
        <div class="y-axis-label">
        <span>Max</span>

        <span>Min</span>

        </div>
        <div class="column" v-for="(bid, index) in sorted_bidstack" v-on:click="select_bid(bid)" v-bind:style="{ height: get_height_percent(bid.price) + '%', width: get_width_percent(bid.volume) + '%', 'background-color':get_color(bid), transform:get_transform(bid.price)}">

        </div>
    </div>
    <span >Selected Bid: {{selected_bid.meta.label}} - ${{selected_bid.price}}/MWh - {{selected_bid.volume}} MWh </span>
    
  </div>
</template>

<script>
import ColorHash from '@hugojosefson/color-hash'
export default {
  name: 'Bidstack',
  props: {
    bidstacks:Object,
  },
  data () {
    return {
      selected:'',
      bidstack: {
        nyngan: {
          meta: {
            label: 'Sample Bid 1'
          },
          bands: [
            {
              price: 30,
              volume: 10
            },
            {
              price: 2,
              volume: 5
            }
          ]
        },
        moree: {
          meta: {
            label: 'Sample Bid 2'
          },
          bands: [
            {
              price: 10,
              volume: 10
            },
            {
              price: 15,
              volume: 5
            }
          ]
        }
      },

      state: 'NSW',
      date_iso: 0,
      total_volume: 100,
      min_price: 0,
      max_price: 0,
      chart_price_cap: 14000,
      // chart_price_floor:-10000,
      chart_price_floor: 0,
      selected_bid: {meta: {}},
      sorted_bidstack: [],
      colors: {},
      filters: {
        'fuel_source_primary': []
      },

      selected_filters: {}
    }
  },
  watch:{
    selected(){
      this.bidstack = this.bidstacks[this.selected];
      this.draw_bidstack();
    }
  },
  methods: {
    select_bid (bid) {
      this.selected_bid = bid
    },
    get_height_percent (price) {
      var max = Math.min(this.max_price, this.chart_price_cap)
      var min = Math.max(this.min_price, this.chart_price_floor)

      var price = Math.max(price, this.chart_price_floor)
      price = Math.min(price, this.chart_price_cap)

      var percent = Math.abs(100.0 * price / (max - min))
      if (percent >= 0 && percent < 1) {
        return 1
      } else if (percent > -1 && percent < 1) {
        return -1
      } else {
        return percent
      }
    },
    get_width_percent (volume) {
      return 100.0 * volume / this.total_volume
    },
    get_color (bid) {
      var colorHashObj = new ColorHash()
      var colorHash = colorHashObj.rgb(bid.meta.label)
      var color = ''
      for (var i = 0; i < colorHash.length; i++) {
        color += colorHash[i].toString(16)
      }

      if (bid.meta.label == this.selected_bid.meta.label) {
        color = '000000'
      }

      return '#' + color
    },

    get_transform (price) {
      if (price < 0) {
        return 'translateY(100%)'
      } else {
        return 'none'
      }
    },
    reset_bidstack () {
      this.sorted_bidstack = []
      this.total_volume = 0
      this.max_price = 0
      this.min_price = 0
      this.colors = {}
    },
    draw_bidstack () {
      this.reset_bidstack()

      // Assemble data
      var sorted_bidstack = []
      var original_bidstack = this.bidstack
      for (var name in original_bidstack) {
        var bid = original_bidstack[name]
        var data = []
        // Check filters
        var include = true

        // build the sorted bidstack
        for (var band = 0; band < original_bidstack[name].bands.length; band ++) {
          if (original_bidstack[name].bands[band].volume > 0) {
            sorted_bidstack.push({
              'generator': name,
              'volume': original_bidstack[name].bands[band].volume,
              'price': original_bidstack[name].bands[band].price,
              'meta': original_bidstack[name].meta
            })

            this.total_volume += original_bidstack[name].bands[band].volume

            if (original_bidstack[name].bands[band].price > this.max_price) {
              this.max_price = original_bidstack[name].bands[band].price
            }

            if (original_bidstack[name].bands[band].price < this.min_price) {
              this.min_price = original_bidstack[name].bands[band].price
            }
          }
        }
      }
      // Sort the sorted bidstack.
      sorted_bidstack.sort(function (a, b) {
        return a.price - b.price
      })
      // set the variable globally. Bidstack will be drawn via html v-for.
      this.sorted_bidstack = sorted_bidstack
    }
  },
  mounted () {
    if(this.bidstacks){
      this.bidstack = this.bidstacks[this.selected];
    }
    
    this.draw_bidstack()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nes-container{
    margin: 3vh 0 3vh 0;

}

@keyframes grow {
    0%   {opacity:0;}
    10%   {opacity:0.1;}
    25%  {opacity:0.25;}
    50%  {opacity:0.5;}
    75%  {opacity:0.75;}
    100% {opacity:1;}

  }

.bidstack{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

}

.columns{
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-end;

    /* Change this to baseline when you figure it out. */
    min-width:100%;
    min-height:400px;
    // height:30vh;
    height:400px;
    padding-bottom:30vh;
    border-width:1px;
    border-color:grey;
    border-style: solid;
    border-radius:5px;
    margin:0 2vw 0 2vw;
    background-color:#ffffff;

}

.column{
    background-color:#80f7bf;
    /* min-width:10px; */
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    border-color:white;
    cursor: pointer;
    animation-name: grow;
    animation-duration: 1s;
}

.y-axis-label{
    position: absolute;
    top:0%;
    height:100%;
    /* bottom:100%; */
    /* background-color:blue; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    z-index: 1;
    font-size: 0.7em;
}

</style>
