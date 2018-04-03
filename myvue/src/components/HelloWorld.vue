<template lang="pug">
  div.d3One
    p.container
      svg
    p {{a.x || 0}}
</template>

<script>
import * as d3 from 'd3'
export default {
  mounted(){
    console.log(d3)
    document.title="d3Demo"
    this.init();
  },
  methods: {
    init(){

      var svg = d3.select("svg")			//选择文档中的body元素


      var dataset = [ 250 , 210 , 170 , 130 , 90 ];
      var min = d3.min(dataset);
      var max = d3.max(dataset);

      // 比例尺
      var xScale = d3.scaleOrdinal().domain(d3.range(dataset.length)).range()
      var linear = d3.scaleLinear().domain([min,max]).range([0, 300])
      var rectHeight = 25;	//每个矩形所占的像素高度(包括空白)

      // 刻度轴
      var axis = d3.axisLeft().scale(linear).ticks(7)
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x",20)
          .attr("y",function(d,i){
            return i * rectHeight;
          })
          .attr("width",function(d){
              return linear(d);
          })
          .attr("height",rectHeight-2)
          .attr("fill","steelblue");
      svg.append('g')
         .attr('class', 'axis')
         .attr('transform', 'translate(20, 130)')
         .call(axis);
    }
  },
  data(){
    return {
      dataset: [120,20000,1,2,3],
      a: {}
    }
  }
}
</script>

<style scoped>
  svg{
    width: 300;
    height: 300
  }
  .axis path,
  .axis line{
      fill: none;
      stroke: black;
      shape-rendering: crispEdges;
  }

  .axis text {
      font-family: sans-serif;
      font-size: 11px;
  }
</style>


