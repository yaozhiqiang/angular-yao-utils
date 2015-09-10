/**
 * Created by tongda on 15/9/10.
 */
function ClocksDirectiveFactory($interval) {
    'ngInject';
    let radians = Math.PI / 180,
        clockWidth = 400,
        clockHeight = 400,
        cx = clockWidth / 2,
        cy = clockHeight / 2,
        clockRadius = 199,
        clockPadding = 5,
        strokeColor = '#424242';

    var hourScale = d3.scale.linear()
        .range([0,330])
        .domain([0,11]);

    var minuteScale = d3.scale.linear()
        .range([0,354])
        .domain([0,59]),
        secondScale = minuteScale;

    let handData = [
        {
            type: 'hour',
            value: 0,
            length: 0,
            scale: hourScale
        },
        {
            type: 'minute',
            value: 10,
            length: 0,
            scale: minuteScale
        },
        {
            type: 'second',
            value: 15,
            length: 0,
            scale:secondScale
        }
    ];

    updateData();

    function drawLinesClock(clock) {

        let tickContainerWidth = 10,
            secondTickStart = clockPadding + 1,
            secondTickLength = tickContainerWidth;

        let tickContanerOuterRaduius = clockRadius - clockPadding,
            tickContanerinnerRaduius = tickContanerOuterRaduius - tickContainerWidth,
            hourLabelRadius = tickContanerinnerRaduius - 32;

        let secondHandLength = tickContanerinnerRaduius - 10,
            minuteHandLength = hourLabelRadius,
            hourHandLength = minuteHandLength - 30;

        handData[0].length = hourHandLength;
        handData[1].length = minuteHandLength;
        handData[2].length = secondHandLength;

        var pie = d3.layout.pie()
            .sort(null);

        var face = clock.append('g')
            .attr('id','clockFace');

        face.insert('circle',':first-child')
            .attr('class','yao-clock-container')
            .attr('cx', cx)
            .attr('cy',cy)
            .attr('r',clockRadius)
            .attr('fill','none')
            .attr('stroke',strokeColor);

        drawTicks(face);
        drawHands(face);
        face.append('text')
            .attr('class','clock-logo')
            .text('YAO')
            .attr('stroke',strokeColor)
            .attr('fill',strokeColor)
            .attr('text-anchor','middle')
            .attr('x',cx)
            .attr('y',cy - hourLabelRadius + 80);

        function drawTicks(face) {

            var scaleArc = d3.svg.arc()
                .outerRadius(tickContanerOuterRaduius)
                .innerRadius(tickContanerinnerRaduius);

            face.insert('path',':first-child')
                .attr('class','yao-clock-ticks')
                .attr('d',function(){
                    return scaleArc(pie([100])[0]);
                })
                .attr('fill','none')
                .attr('stroke',strokeColor)
                .attr('stroke-width','.5')
                .attr("transform","translate("+clockWidth / 2+","+clockHeight / 2+")");

            face.selectAll('.second-tick')
                .data(d3.range(0,60)).enter()
                .append('line')
                .attr('class','second-tick')
                .attr('stroke', strokeColor)
                .attr('x1',clockWidth / 2)
                .attr('x2',clockWidth / 2)
                .attr('y1',secondTickStart)
                .attr('y2',secondTickStart + secondTickLength)
                .attr('transform', function(d){
                    return 'rotate('+secondScale(d)+','+clockWidth/2+','+clockHeight/2+')';
                });

            face.selectAll('.hour-tick')
                .data(d3.range(0,12)).enter()
                .append('line')
                .attr('class','hour-tick')
                .attr('stroke', strokeColor)
                .attr('stroke-width',3)
                .attr('x1',clockWidth / 2)
                .attr('x2',clockWidth / 2)
                .attr('y1',secondTickStart)
                .attr('y2',secondTickStart + secondTickLength + 5)
                .attr('transform', function(d){
                    return 'rotate('+hourScale(d)+','+clockWidth/2+','+clockHeight/2+')';
                });

            face.selectAll('.hour-label')
                .data(d3.range(1,13))
                .enter()
                .append('text')
                .attr('class','hour-label')
                .attr('text-anchor','middle')
                .attr('stroke',strokeColor)
                .attr('fill',strokeColor)
                .attr('x',function(d){
                    return hourLabelRadius * Math.sin(hourScale(d) * radians) + clockWidth / 2;
                })
                .attr('y',function(d){
                    return clockHeight / 2 + 46*0.35 - 5 - hourLabelRadius * Math.cos(hourScale(d) * radians);
                })
                .style({
                    'font-size': 45.405405405405,
                    'font-weight': 300,
                    'font-family': '"Josefin Sans", sans-serif'
                })
                .text(function(d){
                    console.log(d + ',' +hourScale(d));
                    return d;
                });
        }

        function drawHands(face){
            let hands = face.append('g').attr('class','yao-clock-hands');

            hands.selectAll('line')
                .data(handData)
                .enter().append('line')
                .attr('class', function(d){
                    return d.type + '-hand';
                })
                .attr('stroke',strokeColor)
                .attr('x1',cx)
                .attr('y1',cy + 30)
                .attr('x2',cx)
                .attr('y2',function(d){
                    return cy - d.length;
                })
                .attr('transform',function(d){
                    return 'rotate('+ d.scale(d.value) +','+cx+','+cy+')';
                });

            hands.append('circle')
                .attr('class','hands-cover')
                .attr('cx', cx)
                .attr('cy', cy)
                .attr('r', 5)
                .attr('stroke', strokeColor)
                .attr('stroke-width', 3)
                .attr('fill', '#999ca6');
        }
    }


    function moveHands(clock){
        clock.select('.yao-clock-hands').selectAll('line')
            .data(handData)
            .transition()
            .attr('transform',function(d){
                return 'rotate('+ d.scale(d.value) +','+cx+','+cy+')';
            })
            .ease('elastic');
    }

    function updateData(){
        var t = new Date();
        handData[0].value = (t.getHours() % 12) + t.getMinutes()/60 ;
        handData[1].value = t.getMinutes();
        handData[2].value = t.getSeconds();
    }

    function linkFunc(scope,el) {
        var clock = d3.select(el[0]).append('svg')
            .attr('viewBox','0,0,'+clockWidth+','+clockHeight);

        strokeColor = scope.color || strokeColor;

        $interval(function(){
            updateData();
            moveHands(clock);
        },1000);
        drawLinesClock(clock);
    }

    let directive = {
        restrict: 'E',
        scope: {
            color: '@'
        },
        link: linkFunc
    };

    return directive;
}

export  default ClocksDirectiveFactory;