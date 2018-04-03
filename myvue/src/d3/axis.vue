<template lang="pug">
  div.axisBox
    p.axis
</template>

<script>
import * as d3 from 'd3'
export default {
  mounted(){
    var svg = d3.select('.axis')
    .append('svg');
    var yuan = svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 45)
    .style('fill', 'green');
    yuan.transition().duration(1000).attr('cx', 300).style('fill', 'steelblue');

  }
}
</script>

<style>
  p {
    height: 100px;
  }
  svg{
    width: 100%;

  }
</style>


