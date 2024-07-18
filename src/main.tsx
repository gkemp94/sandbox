import iframeResize from "@iframe-resizer/parent";

const el = document.createElement("iframe");
el.setAttribute("id", "root");
el.style.position = "fixed";
el.style.bottom = `0px`;
el.style.right = `0px`;

// Attempts to stop the weird behavior
el.style.transform = "translate3d(0, 0, 0)";
el.style.willChange = "height";
el.id = "myIframe";
el.src = "https://sandbox-seven-navy.vercel.app/iframe";

/*
window.addEventListener("message", (ev) => {
  if (ev?.data?.type === "resize") {
    const { height, width } = JSON.parse(ev.data.data);
    el.style.height = `${height}px`;
    el.style.width = `${width}px`;
  }
});
*/

document.body.append(el);

// Does the iframe resize package work?
iframeResize(
  {
    license: "GPLv3",
    waitForLoad: true,
  },
  "#myIframe"
);
