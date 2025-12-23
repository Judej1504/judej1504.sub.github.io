function GetGoal(count2) {
  var count = parseFloat(count2);
  var t = parseFloat(count2);
  if (count == null) return 0;
  if (10 > t) return 10 - t;
  var e = "" + t;
  return Math.abs(
    t -
      (e.length > 6
        ? 1e6 * (Math.floor(t / 1e6) + 1)
        : (parseInt(e.charAt(0)) + 1) * Math.pow(10, e.length - 1))
  );
}

function GetGoal2(count2) {
  var count = parseFloat(count2);
  var t = parseFloat(count2);
  if (count == null) return 0;
  if (10 > t) return 10;
  var e = "" + t;
  return e.length > 6
    ? 1e6 * (Math.floor(t / 1e6) + 1)
    : (parseInt(e.charAt(0)) + 1) * Math.pow(10, e.length - 1);
}

function GetGoalText(t) {
  return ("" + t).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "UCX6OQ3DkcsbYNE6H8uQQuVA";
document.getElementById("imageLink").href = `https://youtube.com/channel/${id}`;
document.getElementById(
  "subscribeBtn"
).href = `https://youtube.com/channel/${id}?sub_confirmation=1`;

        setInterval(() => {
                fetch(
                        `https://huntingstats378.onrender.com/api/youtube/channel/${id}`
                    )
                    .then((res) => res.json())
                    .then((data) => {
                        document.getElementById("banner").src = data.user[2];
                        document.getElementById("image").src = data.user[1];
                        document.getElementById("name").textContent = data.user[0];
                        document.getElementById("subs").innerHTML = data.counts[0];
                        if (chart.series[0].points.length == ) chart.series[0].data[0].remove();
                        chart.series[0].addPoint([Date.now(), data.counts[0]]);
                        if (id == "UCX6OQ3DkcsbYNE6H8uQQuVA") {
                        document.getElementById("footer").textContent = "";
                        } else {
                        document.getElementById("footer").textContent = data.value[0][1];
                        }
                    });
            }, 2000);

function toggleLightMode() {
  document.body.classList.toggle("light");

  const localTheme = localStorage.getItem("theme");
  if (!localTheme || localTheme === "dark")
    localStorage.setItem("theme", "light");
  else localStorage.setItem("theme", "dark");
}

window.onload = () => {
  const localTheme = localStorage.getItem("theme");
  if (!localTheme) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.body.classList.toggle("light");
      localStorage.setItem("theme", "light");
    }
  }
  if (localTheme === "light") document.body.classList.toggle("light");
};

function search() {
  const prompt = window.prompt("Enter channel name, ID, or URL.");
  if (prompt)
    fetch(
      `https://axern.space/api/search?platform=youtube&type=channel&query=${prompt}`
    )
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "?id=" + data[0].id;
      });
}
