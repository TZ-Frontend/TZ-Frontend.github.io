import "./scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    // // this is default
    // source: document.scrollingElement,
    // orientation: "block",
    scrollOffsets: [CSS.px(250), CSS.percent(100)]
});

scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        // duration: 1,
        timeline: scrollTrackingTimeline,
    },
);

//image rotate with scroll
const animatedImages = document.querySelectorAll('.image-rotate-in')

animatedImages.forEach((image) => {
    const imageOffsetTop = image.offsetTop;
    const imageOffsetHeight = image.offsetHeight;
    // const animatedImageTimeline = new ScrollTimeline({
    //     scrollOffsets: [
    //         // animate start at the end(bottom) of the viewport, and end at the start(top) of the viewport
    //         { target: image, edge: "end", threshold: "0" },
    //         { target: image, edge: "start", threshold: "0" }
    //     ]
    // });

    image.animate(
        {
            transform: ["perspective(1000px) rotateX(45deg)", "perspective(1000px) rotate(0)"],
            opacity: ["0.5", "1"]
        },
        {
            duration: 1,
            timeline: new ScrollTimeline({
                // these two are same

                // scrollOffsets: [
                //     // animate start at the end(bottom) of the viewport, and end at the start(top) of the viewport
                //     { target: image, edge: "end", threshold: "0" },
                //     { target: image, edge: "start", threshold: "1" }
                // ]

                // scrollOffsets: [
                //     CSS.px(imageOffsetTop+imageOffsetHeight-window.innerHeight),
                //     CSS.px(imageOffsetTop)
                // ]

                scrollOffsets: [
                    CSS.px(imageOffsetTop+imageOffsetHeight-window.innerHeight-200),
                    CSS.px(imageOffsetTop-300)
                ]
            })
        }
    );
});
