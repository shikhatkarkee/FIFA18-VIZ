function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/FIFA18VIZ/Story1?:embed=y&:display_count=yes&publish=yes";
    //url = "https://public.tableau.com/views/FIFA18VIZ/Story1?:embed=y&:display_count=yes"
    var viz = new tableau.Viz(containerDiv, url); 
}
