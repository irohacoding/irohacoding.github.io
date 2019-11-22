var cTime = new Date().getHours();
if ((6 <= cTime && cTime < 10) || (16 <= cTime && cTime < 20)) {
  if (document.body) {
    document.body.style.backgroundColor = "#0088aa"
  }
} else if (11 <= cTime && cTime < 15) {
  if (document.body) {
    document.body.style.backgroundColor = "#009cc4"
  }
} else {
  if (document.body) {
    document.body.style.backgroundColor = "#006983"
  }
}
