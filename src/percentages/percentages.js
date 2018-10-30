$(document).ready(function () {
    let jchart1, jchart2, jchart3, jchart4, jchart5;
    $(function () {
        jchart1 = $("#pie_1").jChart({
            // your own data
            data: [
                {
                    value: 10
                }
            ],

            // values necessary for the graphing, like sum of values of all segments
            values: {'sdf':'asfd'},

            placeholder: {
                data: {
                    value: 10, // value of the segment
                    color: {
                        normal: '#00a3f2', // stroke/fill color of the segment
                        // active: '#00d8f2',
                    },
                    draw: true, // whether to draw the segment on the chart or not; default true
                    push: true, // whether to push the next segment via offset. Best to set false together when draw is set to false (the empty section will always be at the end that way); default true
                    order: null, // drawing order
                    title: 'title',
                    // strokeWidth: 3
                }
            },

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                // segmentColor: {
                    // normal: '#00a3f2',
                    // active: '#00d8f2',
                // },
                baseOffset: 0, // offset for starting point of first segment
                // baseStrokeWidth: 1,
                strokeWidth: 3, // default stroke width for all segments
                animated: false,

                title: {
                    chartTitle: 'chart',
                    showValue: true, // tooltips
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '0', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                    summarySegment: null // the segment's id which percentage will be displayed in the summary
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.85, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 1, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            },

            // callback function
            callbacks: {
                onInit() {
                },
                onRefresh() {
                },
                // onSegmentMouseover() {
                // },
                // onSegmentMouseout() {
                // }
            }
        });jchart2 = $("#pie_2").jChart({
            // your own data
            data: [
                {
                    value: 38
                }
            ],

            // values necessary for the graphing, like sum of values of all segments
            values: {'sdf':'asfd'},

            placeholder: {
                data: {
                    value: 38, // value of the segment
                    color: {
                        normal: '#00a3f2', // stroke/fill color of the segment
                        // active: '#00d8f2',
                    },
                    draw: true, // whether to draw the segment on the chart or not; default true
                    push: true, // whether to push the next segment via offset. Best to set false together when draw is set to false (the empty section will always be at the end that way); default true
                    order: null, // drawing order
                    title: 'title',
                    // strokeWidth: 3
                }
            },

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                segmentColor: {
                    normal: '#00a3f2',
                    active: '#00d8f2',
                },
                baseOffset: 0, // offset for starting point of first segment
                // baseStrokeWidth: 1,
                strokeWidth: 3, // default stroke width for all segments
                animated: false,

                title: {
                    chartTitle: 'chart',
                    showValue: true, // tooltips
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '38', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                    summarySegment: null // the segment's id which percentage will be displayed in the summary
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.85, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 1, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            },

            // callback function
            callbacks: {
                onInit() {
                },
                onRefresh() {
                },
                // onSegmentMouseover() {
                // },
                // onSegmentMouseout() {
                // }
            }
        });jchart3 = $("#pie_3").jChart({
            // your own data
            data: [
                {
                    value: 62
                }
            ],

            // values necessary for the graphing, like sum of values of all segments
            values: {'sdf':'asfd'},

            placeholder: {
                data: {
                    value: 62, // value of the segment
                    color: {
                        normal: '#00a3f2', // stroke/fill color of the segment
                        // active: '#00d8f2',
                    },
                    draw: true, // whether to draw the segment on the chart or not; default true
                    push: true, // whether to push the next segment via offset. Best to set false together when draw is set to false (the empty section will always be at the end that way); default true
                    order: null, // drawing order
                    title: 'title',
                    // strokeWidth: 3
                }
            },

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                // segmentColor: {
                    // normal: '#00a3f2',
                    // active: '#00d8f2',
                // },
                baseOffset: 0, // offset for starting point of first segment
                // baseStrokeWidth: 1,
                strokeWidth: 3, // default stroke width for all segments
                animated: false,

                title: {
                    chartTitle: 'chart',
                    showValue: true, // tooltips
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '62', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                    summarySegment: null // the segment's id which percentage will be displayed in the summary
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.85, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 1, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            },

            // callback function
            callbacks: {
                onInit() {
                },
                onRefresh() {
                },
                // onSegmentMouseover() {
                // },
                // onSegmentMouseout() {
                // }
            }
        });jchart4 = $("#pie_4").jChart({
            // your own data
            data: [
                {
                    value: 89,
                }
            ],

            // values necessary for the graphing, like sum of values of all segments
            values: {},

            placeholder: {
                data: {
                    value: 89, // value of the segment
                    // color: {
                    //     normal: '#00a3f2', // stroke/fill color of the segment
                    //     active: '#00d8f2',
                    // },
                    draw: true, // whether to draw the segment on the chart or not; default true
                    push: true, // whether to push the next segment via offset. Best to set false together when draw is set to false (the empty section will always be at the end that way); default true
                    // order: null, // drawing order
                    // title: '',
                    // strokeWidth: 3
                }
            },

            // appearance options
            appearance: {
                type: 'donut', // or 'pie', 'bar'
                baseColor: '#fff',
                segmentColor: {
                    normal: '#00a3f2',
                    active: '#00d8f2',
                },
                baseOffset: 0, // offset for starting point of first segment
                baseStrokeWidth: 1,
                strokeWidth: 3, // default stroke width for all segments
                animated: false,

                title: {
                    chartTitle: 'chart',
                    showValue: true, // tooltips
                    showPercentage: false,
                    showSummary: true, // summary - show a value inside the donut chart
                    summaryTitle: '89', // by default it shows the percentage of the greatest segment in the chart
                    // (if summaryTitle is empty)
                    summarySegment: null // the segment's id which percentage will be displayed in the summary
                },

                /* DONUT AND CIRCLE */
                radius: 115 / (2 * Math.PI),
                innerCutout: 0.85, // how "thin" the segments are from the center point. (0 will render a pie chart (full circle))
                centerX: 21,
                centerY: 21,

                /* DONUT */
                subType: 'path', // render type: circle for circle based approach, path for line and arc approach using path
                isGauge: false, // if the donut will be rendered as a full circle or a half-circle
                gap: 1, // gap between segments for donut chart (in percentage, 1 = 1%)

                /* BAR */
                rx: 0, // horizontal corner radius
                ry: 0 // vertical corner radius
            },

            // callback function
            callbacks: {
                onInit() {
                },
                onRefresh() {
                },
                // onSegmentMouseover() {
                // },
                // onSegmentMouseout() {
                // }
            }
        });
        jchart5 = $("#pie_5").jChart({
            data: [
                {
                    value: 10,
                    color: {
                        normal: '#747474',
                    },
                    order: 1,
                    draw: true, //false
                    push: true, //false
                },
                {
                    value: 25,
                    color: {
                        normal: '#e75735',
                    },
                    order: 2
                },
                {
                    value: 30,
                    color: {
                        normal: '#4eb7a8',
                    },
                    order: 3
                },
                {
                    value: 30,
                    color: {
                        normal: '#e5e5e5',
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
                // baseStrokeWidth: 1,
                // strokeWidth: 40,
                animated: false,

                title: {
                    showSummary: false,
                    showPercentage: false,
                }
            },
            callbacks: {
                // onSegmentMouseover: function (did, segment) {
                    // console.log(did);
                    // console.log(segment);
                // }
            }
        });
    });
});