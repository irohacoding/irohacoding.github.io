var cTime = new Date().getHours();
if (9 <= cTime && cTime < 15) {
  if (document.body) {
    document.body.style.backgroundColor = "#009cc4"
  }
} else if (15 <= cTime && cTime < 20) {
  if (document.body) {
    document.body.style.backgroundColor = "#0088aa"
  }
} else {
  if (document.body) {
    document.body.style.backgroundColor = "#004b5e"
  }
}
