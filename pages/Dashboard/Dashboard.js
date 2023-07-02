import React, { useRef, useEffect } from "react";
// import { Tableau } from "tableau-api";

import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "./Dashboard.css";

// const { tableau } = window;

export default function Dashboard() {
    //  const ref = useRef(null);
    // const dashboardUrl =
    //     "https://prod-useast-b.online.tableau.com/t/exlfdap/views/Sample_fan_engagement/Dashboard1";

    // const htmlEmbed  = "<script type='text/javascript' src='https://10.217.87.19/javascripts/api/viz_v1.js'></script> <div class='tableauPlaceholder' style='width: 1500px; height: 1292px;'><object class='tableauViz' width='1500' height='1292' style='display:none;'><param name='host_url' value='https%3A%2F%2F10.217.87.19%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='SponsorshipDashboard05May23&#47;SponsorshipInsights' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /></object></div>"

    // const initViz = () =>{
    //     new tableau.Viz(ref.current.url);
    // }
    // useEffect(() => {
    //   initViz();
    // },[])

    //    <!-- Tableau Script -->
    //    <script type='module' src='https://prod-useast-b.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'></script>




    // useEffect(() => {
    //     const containerDiv = document.getElementById("tableau-dashboard");
    //     const url = dashboardUrl
    //     const scriptUrl = "https://prod-useast-b.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    //     const options = {
    //         width: "100%",
    //         height: "500px",
    //         hideTabs: true,
    //         hideToolbar: true
    //     };
    //     const script = document.createElement("script");
    //     script.src = scriptUrl;
    //     script.onloadn = () => {
    //         const viz = new Tableau.Viz(containerDiv, url, options);
    //     };
    //     document.body.appendChild(script);
    // }, []);

    return ( <
        div >
        <
        DropdownMenu label = "Video Analytics - Dashboards" / >



        <
        div id = "tableau-dashboard" > < /div> 

        <
        /div>
    );
}