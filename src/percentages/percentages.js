$(document).ready(function () {
    let jchart1, jchart2, jchart3, jchart4, jchart5;
    $(function () {
        jchart1 = $("#pie_1").jChart({
            // your own data
            data: [
                {
                    value: 0,
                    draw: true,
                    push: true,
                    color: {
                        normal: '#e75735',
                        active: '#e75735',
                    },
                    order: 1
                },
                {
                    value: 100,
                    color: {
                        normal: '#fff',
                        active: '#fff'
                    },
                    order: 2
                }
            ],

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                animated: false,

                title: {
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '0', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.88, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 0, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            }
        });

        jchart2 = $("#pie_2").jChart({
            // your own data
            data: [
                {
                    value: 33,
                    draw: true,
                    push: true,
                    color: {
                        normal: '#e75735',
                        active: '#e75735',
                    },
                    order: 1
                },
                {
                    value: 67,
                    color: {
                        normal: '#fff',
                        active: '#fff'
                    },
                    order: 2
                }
            ],

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                baseOffset: 0, // offset for starting point of first segment
                // baseStrokeWidth: 1,
                animated: false,

                title: {
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '38', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.88, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 0, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            }
        });

        jchart3 = $("#pie_3").jChart({
            // your own data
            data: [
                {
                    value: 69,
                    draw: true,
                    push: true,
                    color: {
                        normal: '#e75735',
                        active: '#e75735',
                    }
                },
                {
                    value: 31,
                    color: {
                        normal: '#fff',
                        active: '#fff'
                    }
                }
            ],

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                animated: false,

                title: {
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '62', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.88, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 0, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            }
        });

        jchart4 = $("#pie_4").jChart({
            // your own data
            data: [
                {
                    value: 89,
                    draw: true,
                    push: true,
                    order: 1,
                    color: {
                        normal: '#e75735',
                        active: '#e75735',
                    }
                },
                {
                    value: 11,
                    order: 2,
                    color: {
                        normal: '#fff',
                        active: '#fff'
                    }
                }
            ],

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                subType: 'path',
                baseColor: '#fff',
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.88,
                animated: false,

                title: {
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '89', // by default it shows the percentage of the greatest segment in the chart
                },
            },
        });

        jchart5 = $("#pie_5").jChart({
            data: [
                {
                    value: 10,
                    color: {
                        normal: '#747474',
                        active: '#747474',

                    },
                    order: 1,
                    draw: true, //false
                    push: true, //false
                },
                {
                    value: 25,
                    color: {
                        normal: '#e75735',
                        active: '#e75735',

                    },
                    order: 2
                },
                {
                    value: 30,
                    color: {
                        normal: '#4eb7a8',
                        active: '#4eb7a8',

                    },
                    order: 3
                },
                {
                    value: 30,
                    color: {
                        normal: '#e5e5e5',
                        active: '#e5e5e5',

                    }
                }
            ],
            appearance: {
                type: 'donut',
                subType: 'path',
                baseColor: '#fff',
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.68,
                gap: 0,
                animated: false,

                title: {
                    showSummary: false,
                    showPercentage: false,
                }
            },
        });
    });
});