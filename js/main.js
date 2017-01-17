$(function () {

    if ( $('#container').length>0 ) {
        //Create the chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Data Analysis for the Blog, Thanks Highcharts'
            },
            subtitle: {
                text: 'Click the columns to view details and Find hot spots every year'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total per Year'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}</b> blogs<br/>'
            },
            series: [{
                name: 'Total',
                colorByPoint: true,
                data: [{
                    name: '2014',
                    y: 45,
                    drilldown: '2014'
                }, {
                    name: '2015',
                    y: 41,
                    drilldown: '2015'
                }, {
                    name: '2016',
                    y: 32,
                    drilldown: '2016'
                }, {
                    name: '2017',
                    y: 2,
                    drilldown: '2017'
                }]
            }],
            drilldown: {
                series: [{
                    name: '2014',
                    id: '2014',
                    data: [
                        [
                            '交互基础',
                            15
                        ],
                        [
                            '技术框架',
                            5
                        ],
                        [
                            'H5C3',
                            10
                        ],
                        [
                            'Web性能',
                            11
                        ],
                        [
                            '乱七八糟',
                            4
                        ]
                    ]
                },{
                    name: '2015',
                    id: '2015',
                    data: [
                        [
                            '交互基础',
                            8
                        ],
                        [
                            '技术框架',
                            18
                        ],
                        [
                            'H5C3',
                            11
                        ],
                        [
                            'Web性能',
                            2
                        ],
                        [
                            '乱七八糟',
                            2
                        ]
                    ]
                },{
                    name: '2016',
                    id: '2016',
                    data: [
                        [
                            '交互基础',
                            14
                        ],
                        [
                            '技术框架',
                            3
                        ],
                        [
                            'H5C3',
                            2
                        ],
                        [
                            'Web性能',
                            7
                        ],
                        [
                            '周易卦象',
                            6
                        ]
                    ]
                },{
                    name: '2017',
                    id: '2017',
                    data: [
                        [
                            '交互基础',
                            0
                        ],
                        [
                            '技术框架',
                            2
                        ],
                        [
                            'H5C3',
                            0
                        ],
                        [
                            'Web性能',
                            0
                        ],
                        [
                            '乱七八糟',
                            0
                        ],
                        [
                            '周易卦象',
                            0
                        ]
                    ]
                }]
            }
        });        
    };


    $('.desktop-link').on('click', function(event) {
        $('header .desktop-link').removeClass('active');
        $(this).addClass('active');
        window.location.href = $(this).data('url');
    });
    $('.mobile-link').on('click', function(event) {
        $('header .desktop-link').removeClass('active');
        var index = $(this).index('mobile-link');
        $('header .desktop-link').index(index).addClass('active');
    });
});

window.addEventListener('load', function(){ 
    var mdlLayoutDrawerButton = document.querySelectorAll('.mdl-layout__drawer-button');
    mdlLayoutDrawerButton[0].innerHTML = '<svg class="icon icon-menu"><use xlink:href="#icon-menu"></use></svg>';
});

