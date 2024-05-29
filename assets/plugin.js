require(["gitbook"], function (gitbook) {
  gitbook.events.bind("start", function (_e, config) {
    const hide = config["hatena-bookmark-pageowner"]["hide"] || null;

    if (hide) {
      const link = document.getElementsByClassName("gitbook-link")?.[0]
      if (link) {
        link.style = "display: none"
      }
    }
  });
});
