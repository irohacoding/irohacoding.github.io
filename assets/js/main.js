window.onload = window.onresize = function() {
  const windowHeight = window.innerHeight;

  var headerHeight = document.querySelector("header").clientHeight;
  var footerHeight = document.querySelector("footer").clientHeight;
  var paper = document.querySelector(".paper");

  paper.style.height = (windowHeight - headerHeight - (footerHeight * 2)) + "px";
  paper.style.minHeight = "128px";
  paper.style.maxHeight = paper.clientHeight;
  paper.style.overflow = "auto";

  observer.observe(document.querySelector(".pencil"));
};

const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    document.querySelector(".paper").scrollTop = entry.contentRect.height;
  }
});

var i = 0;
var spd = 80;
var pen = document.querySelector(".pencil");
var txt = "1. Open terminal.\n"
        + "$ mkdir ~/works && cd $_\r\n"
        + "$ emacs love.sh\r\n\n"
        + "2. Write code.\n"
        + "#!/bin/bash\n\n"
        + "LOVE=~/works\n"
        + "COUNT=$(find $LOVE -type f | wc -l)\n\n"
        + "if [ $COUNT -lt 3 ]; then\n"
        + "    HEART=$(echo \"< 3\" | sed -e 's/ //g')\n"
        + "    echo \"$HEART\"\n"
        + "fi\n\n"
        + "3. Run script.\n"
        + "$ sudo chmod a+x love.sh\r\n"
        + "$ ./love.sh\r\n\n"
        + "(･∀･)<Good job!!";

function writing() {
  if (i < txt.length) {
    switch (txt.charAt(i)) {
      case "\n":
        pen.innerHTML += "<br>";
        break;
      case "\r":
        pen.innerHTML += "<kbd>&crarr;</kbd>";
        break;
      case " ":
        pen.innerHTML += "&nbsp;";
        break;
      default:
        pen.innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(writing, spd);
  }
}

writing();
