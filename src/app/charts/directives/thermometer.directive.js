/**
 * Created by yao on 15/9/13.
 */
let width = 120,
    height = 120,
    cx = width / 2,
    cy = height / 2;

let scale = d3.scale.linear()
    .range([-360/25*10,360/25*15])
    .domain([0,25]);

let bigScale = d3.scale.linear()
    .range([-360/25*10,360/25*10])
    .domain([0,100]);

let thermometerValue = 0;

function ThermometerDirectiveFactory() {
    let directive = {
        restrict: 'E',
        scope: {

        },
        link: linkFunc
    };

    function linkFunc(scope, el) {
        let chart = d3.select(el[0])
            .append('svg')
            .attr('width', 120)
            .attr('height', 120)
            .attr('viewBox','0,0,'+width+','+height);

        chart.append('circle')
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', 59)
            .attr('fill', '#ccc')
            .attr('stroke', '#333');

        chart.append('circle')
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', 53)
            .attr('fill', '#f7f7f7')
            .attr('stroke', '#e0e0e0')
            .attr('stroke-width', 2);

        let arc = d3.svg.arc()
            .outerRadius(50)
            .innerRadius(39);

        let pie = d3.layout.pie().sort(null);

        let data = pie([6,4,15]);
        data.pop();

        data[0].bgColor = '#ff9900';
        data[1].bgColor = '#dc3912';

        chart.selectAll('path')
            .data(data)
            .enter()
            .append('path')
            .attr('fill', function(d){
                return d.bgColor;
            })
            .attr('d', arc)
            .attr('transform', 'translate(60,60)');

        chart.append('text')
            .attr('x', 60)
            .attr('y', 50)
            .attr('text-anchor','middle')
            .style('font-size', 12)
            .text('Popularity');

        chart.selectAll('text.tick-label')
            .data([0,100])
            .enter()
            .append('text')
            .attr('class','tick-label')
            .attr('x', function(d){
                return 60 + 39 * Math.sin(bigScale(d) * Math.PI/180);
            })
            .attr('y', function(d){
                return 60 - 39 * Math.cos(bigScale(d) * Math.PI/180);
            })
            .attr('text-anchor',function(d){
                if(d===0){
                    return 'start';
                } else {
                    return 'end';
                }
            })
            .style({
                'font-size': 6,
                'font-family': 'arial',
                'font-weight': 300
            })
            .text(function(d){
                return d;
            });

        chart.selectAll('line.small-tick')
            .data(d3.range(0,21))
            .enter()
            .append('line')
            .attr('class','small-tick')
            .attr('x1', 60)
            .attr('y1', 10)
            .attr('x2', 60)
            .attr('y2', 15)
            .attr('stroke', '#333')
            .attr('transform',function(d){
                return 'rotate('+scale(d)+', 60, 60)';
            });

        chart.selectAll('line.big-tick')
            .data(d3.range(0,101, 25))
            .enter()
            .append('line')
            .attr('class','big-tick')
            .attr('x1', 60)
            .attr('y1', 10)
            .attr('x2', 60)
            .attr('y2', 19)
            .attr('stroke', '#333')
            .attr('stroke-width', 2)
            .attr('transform',function(d){
                return 'rotate('+bigScale(d)+', 60, 60)';
            });

        let hand = chart.append('g');
        hand.append('text')
            .attr('x', 60)
            .attr('y', 100)
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .style({
                'font-family': 'arial',
                'font-size': 12
            })
            .text(thermometerValue);

        //let imageData = angular.element(el).html();
        //window.location.href = 'data:image/svg+xml;base64,'+window.btoa(unescape(encodeURIComponent(imageData)));

    }

    return directive;
}

export default ThermometerDirectiveFactory;