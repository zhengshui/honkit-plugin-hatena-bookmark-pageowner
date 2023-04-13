require(["gitbook"], function (gitbook) {
  gitbook.events.bind("start", function (_e, config) {
    const hateneID = config["hatena-bookmark-pageowner"]["hateneID"] || null;

    if (hateneID) {
      const link = document.createElement("link");
      link.rel = "author";
      link.href = "http://www.hatena.ne.jp/" + hateneID + "/";

      document.head.append(link);
    }
  });
});
