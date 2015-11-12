/**
 * Created by yao on 15/9/9.
 */
function linkFunc(scope,el) {
    var viewPortWidth = 400;
    var viewPortHeight = 400;
    var percent = scope.percent || 0;
    var barColor = scope.barColor;
    var barWidth = scope.barWidth || viewPortWidth * 0.1;
    var trackSize = 120;
    var innerColor = scope.innerColor || 'transparent';
    var trackColor = scope.trackColor || '#222';
    var effect = scope.effect || 'bounce';

    scope.$watch('percent',function(newValue){
        percent = newValue || 0;
        draw();
    });

    //var x = d3.scale.linear()
    //    .domain([0, d3.max(data)])
    //    .range([0, 420]);
    //
    //d3.select(el[0]).selectAll('div')
    //    .data(data)
    //    .enter().append('div')
    //    .style("width", function(d) { return x(d) + "px"; })
    //    .text(function(d) { return x(d); });
    //
    //var width = 960,
    //    barHeight = 20;
    //
    //var y = d3.scale.linear()
    //    .domain([0, d3.max(data)])
    //    .range([height, 0]);
    //
    //var chart = d3.select(el[0])
    //    .insert('svg')
    //    .attr('width',width)
    //    .attr('height',barHeight * data.length);
    //
    //var bar = chart.selectAll("g")
    //    .data(data)
    //    .enter().append("g")
    //    .attr("transform", function(d, i) {
    //        return "translate(0," + i * barHeight + ")"; });
    //
    //bar.append("rect")
    //    .attr("width", x)
    //    .attr("height", barHeight - 1);
    //
    //bar.append("text")
    //    .attr("x", function(d) { return x(d) - 3; })
    //    .attr("y", barHeight / 2)
    //    .attr("dy", ".35em")
    //    .text(function(d) { return d; });
    var chart = d3.select(el[0])
        .append('svg')
        .attr('width','100%')
        .attr('height','100%')
        .attr('viewBox','0,0,'+viewPortWidth+','+viewPortHeight);
    var pie = d3.layout.pie()
        .sort(null);
    var data = pie([0, 100]);
    data.pop();
    var color = d3.scale.category10();
    var outerRadius = viewPortWidth / 2;
    var innerRadius = outerRadius - barWidth;
    var arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
    chart.append('g')
        .attr("transform","translate("+outerRadius+","+outerRadius+")")
        .append('path')
        .attr('fill','#e5e5e5')
        .attr('d',() => {
            return arc(pie([2*Math.PI])[0]);
        });

    var arcs = chart.selectAll('g.yao-easypie-bar')
        .data(data)
        .enter().append('g')
        .attr('class','yao-easypie-bar')
        .attr("transform","translate("+outerRadius+","+outerRadius+")");

    arcs.append('path')
        .attr('fill',(d, i) => {
            return barColor || color(i);
        })
        .style('z-index',5)
        .attr('d',arc)
        .each(function(d) {
            this._current = d;
        });

    arcs.append('text')
        .attr('text-anchor','middle')
        .attr('fill',trackColor)
        .attr('dy',trackSize*0.35 + 'px')
        .style('font-size', trackSize+'px')
        .attr('class','yao-easypie-track')
        .text(percent);

    arcs.append('text')
        .attr('fill',trackColor)
        .attr('dy',-trackSize*0.5)
        .attr('dx',trackSize*0.5)
        .style('font-size', trackSize/4+'px')
        .text(' %');

    chart.insert('circle',':first-child')
        .attr("cx", viewPortWidth / 2)
        .attr("cy", viewPortHeight / 2)
        .attr("fill",innerColor)
        .attr("r", innerRadius - 5);

    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(a);
        return (t) => {
            chart.selectAll('.yao-easypie-track')
                .text(Math.floor(i(t).value));
            return arc(i(t));
        };
    }

    function draw() {
        data = pie([percent,100 - percent]);

        chart.selectAll('g.yao-easypie-bar path')
            .data(data)
            .transition()
            .ease(effect)
            .duration(2500)
            .attrTween("d", arcTween);
    }
}
function EasyPieDirectiveFactory() {
    let directive = {
        restrict: 'E',
        scope: {
            percent: '=',
            barColor: '@',
            barWidth: '=',
            trackColor: '@',
            innerColor: '@',
            effect: '@'
        },
        link: linkFunc
    };

    return directive;
}

export default EasyPieDirectiveFactory;