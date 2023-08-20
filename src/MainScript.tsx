// @ts-nocheck

import * as projection from "@arcgis/core/geometry/projection";
import Map from "@arcgis/core/Map"
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"
import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D";
import AreaMeasurement2D from "@arcgis/core/widgets/AreaMeasurement2D";
import Search from "@arcgis/core/widgets/Search";
import Home from "@arcgis/core/widgets/Home";
import Locate from "@arcgis/core/widgets/Locate";
import esriConfig from "@arcgis/core/config";
import request from "@arcgis/core/request";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Field from "@arcgis/core/layers/support/Field";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import SceneView from "@arcgis/core/views/SceneView";
import WebScene from "@arcgis/core/WebScene";
import Weather from "@arcgis/core/widgets/Weather";
import Daylight from "@arcgis/core/widgets/Daylight";
import Geometry from "@arcgis/core/geometry/Geometry"
import Expand from "@arcgis/core/widgets/Expand"
import { templates, projects } from "./database/activeProjects";


let activeWidget = null; 

const portalUrl = "https://www.arcgis.com";

esriConfig.apiKey = process.env.REACT_APP_ESRI_CONFIG_API_KEY;

export const initialize = (container) => {

    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: container.viewDiv.current,
        map: map,
        center: [112.62, -0.8],
        zoom: 6,
        popup: {
            defaultPopupTemplateEnabled: true
        }
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer)

    const simpleFillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
        outline: {
            color: [255, 255, 255],
            width: 1
        }
     };

    projects.map((project) => {
        const geometry = {
            type: "polygon",
            rings: project.rings
        }

        const graphic = new Graphic({
            geometry: geometry,
            symbol: simpleFillSymbol,
            attributes: project.attributes,
            popupTemplate: templates
        });

        graphicsLayer.add(graphic);
    })

   
    view.ui.move(["zoom"], {
        position: "bottom-left",
        index: 3
    })

    container.distanceButton.current
    .addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("distance");
        } else {
            setActiveButton(null);
        }
    });

    container.areaButton.current
    .addEventListener("click", function () {
        setActiveWidget(null);
        if (!this.classList.contains("active")) {
            setActiveWidget("area");
        } else {
            setActiveButton(null);
        }
    });

    function setActiveWidget(type) {
        switch (type) {
            case "distance":
                activeWidget = new DistanceMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.start();

                view.ui.add(activeWidget, "top-right");
                setActiveButton(container.distanceButton.current);
                break;
            case "area":
                activeWidget = new AreaMeasurement2D({
                    view: view
                });

                // skip the initial 'new measurement' button
                activeWidget.viewModel.start();

                view.ui.add(activeWidget, "top-right");
                setActiveButton(container.areaButton.current);
                break;
            case null:
                if (activeWidget) {
                    view.ui.remove(activeWidget);
                    activeWidget.destroy();
                    activeWidget = null;
                }
                break;
        }
    }

    function setActiveButton(selectedButton) {
        // focus the view to activate keyboard shortcuts for sketching
        view.focus();
        let elements = document.getElementsByClassName("active");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (selectedButton) {
            selectedButton.classList.add("active");
        }
    }

    const searchWidget = new Search({            
        view: view                
    });

    view.ui.add(searchWidget, "top-left");

    const homeBtn = new Home({
        view: view
    }, "homeBtn");

    view.ui.add(homeBtn, "top-left");


    const locateBtn = new Locate({
        view: view
    },'locateBtn');

    view.ui.add(locateBtn, "top-left");



    const toggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid"
    });

    view.ui.add(toggle, "bottom-left");

    
    return view;
}


