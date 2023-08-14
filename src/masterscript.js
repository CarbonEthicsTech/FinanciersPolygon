require([
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Expand",
            // "esri/widgets/BasemapGallery",
            "esri/widgets/DistanceMeasurement2D",
            "esri/widgets/AreaMeasurement2D",
            "esri/widgets/Search",
            "esri/widgets/Home",
            "esri/widgets/Locate",
            "esri/config",
            "esri/request",
            "esri/layers/FeatureLayer",
            "esri/layers/support/Field",
            "esri/Graphic",
            "esri/layers/GraphicsLayer",
            "esri/widgets/BasemapToggle",
            "esri/views/SceneView",
            "esri/WebMap",
            "esri/WebScene",
            "esri/widgets/Weather",
            "esri/widgets/Daylight",
        ], (Map, MapView, Expand, 
            DistanceMeasurement2D, AreaMeasurement2D, 
            Search, Home, Locate, esriConfig, request, FeatureLayer,
            Field, Graphic, GraphicsLayer, BasemapToggle, 
            SceneView, WebMap, WebScene, Weather, Daylight) => {

            let activeWidget = null; 

            const portalUrl = "https://www.arcgis.com";

        //     const switchButton = document.getElementById("switch-btn");

        //     const appConfig = {
        //     mapView: null,
        //     sceneView: null,
        //     activeView: null,
        //     container: "viewDiv" // use same container for views
        //     };

        //     const initialViewParams = {
        //     zoom: 12,
        //     center: [-122.43759993450347, 37.772798684981126],
        //     container: appConfig.container
        //     };
        //     const webmap = new WebMap({
        //     portalItem: {
        //         // autocasts as new PortalItem()
        //         id: ""7ee3c8a93f254753a83ac0195757f137""
        //     }
        //     });
        //     const scene = new WebScene({
        //     portalItem: {
        //         // autocasts as new PortalItem()
        //         id: "c56dab9e4d1a4b0c9d1ee7f589343516"
        //     }
        //     });
        //     // create 2D view and and set active
        //     appConfig.mapView = createView(initialViewParams, "2d");
        //     appConfig.mapView.map = webmap;
        //     appConfig.activeView = appConfig.mapView;

        //     // create 3D view, won't initialize until container is set
        //     initialViewParams.container = null;
        //     initialViewParams.map = scene;
        //     appConfig.sceneView = createView(initialViewParams, "3d");

        //     // switch the view between 2D and 3D each time the button is clicked
        //     switchButton.addEventListener("click", () => {
        //     switchView();
        //     });

        //     // Switches the view from 2D to 3D and vice versa
        //     function switchView() {
        //     const is3D = appConfig.activeView.type === "3d";
        //     const activeViewpoint = appConfig.activeView.viewpoint.clone();

        //     // remove the reference to the container for the previous view
        //     appConfig.activeView.container = null;

        //     if (is3D) {
        //         // if the input view is a SceneView, set the viewpoint on the
        //         // mapView instance. Set the container on the mapView and flag
        //         // it as the active view
        //         appConfig.mapView.viewpoint = activeViewpoint;
        //         appConfig.mapView.container = appConfig.container;
        //         appConfig.activeView = appConfig.mapView;
        //         switchButton.value = "3D";
        //     } else {
        //         appConfig.sceneView.viewpoint = activeViewpoint;
        //         appConfig.sceneView.container = appConfig.container;
        //         appConfig.activeView = appConfig.sceneView;
        //         switchButton.value = "2D";
        //     }
        // }
        // // convenience function for creating either a 2D or 3D view dependant on the type parameter
        //   function createView(params, type) {
        //         let view;
        //         if (type === "2d") {
        //             view = new MapView(params);
        //             return view;
        //         } else {
        //             view = new SceneView({
        //                 map: scene,
        //                 container: "viewDiv",
        //                 qualityProfile: "high",

        //                 environment: {
        //                     weather: {
        //                     type: "cloudy", // autocasts as new CloudyWeather({ cloudCover: 0.3 })
        //                     cloudCover: 0.3
        //                     }
        //                 }
        //         }

        //             );
        //         }
        //         return view;
        // }
//--------------------------------------------------------//


            esriConfig.apiKey = "AAPKef29b82e1d5242c8a5f70a07a2e606efknDZO_U878U9VVvnsoLSl0SDAgJoqHQdE8X1uNJT9H6e0qzR4qYC2yFAcIEB5ykk"
            const map = new Map({
                basemap: "topo-vector"
            });

            const view = new MapView({
                container: "viewDiv",
                map: map,
                center: [112.62, -0.8],
                zoom: 6,
                popup: {
                    defaultPopupTemplateEnabled: true
                }
            });

            const graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer);

            const airportPoint = { //Create a point
                type: "point",
                longitude: -244.837576,
                latitude: -8.7398712
            };
            const seaportPoint = { //Create a point
                type: "point",
                longitude: -244.7397488,
                latitude: -8.6659897
            };
             const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],  // Orange
                outline: {
                    color: [255, 255, 255], // White
                    width: 1
                }
             };

            const airportPointGraphic = new Graphic({
                geometry: airportPoint,
                symbol: simpleMarkerSymbol
            });
            const seaportPointGraphic = new Graphic({
                geometry: seaportPoint,
                symbol: simpleMarkerSymbol
            });

            // graphicsLayer.add(airportPointGraphic);
            // graphicsLayer.add(seaportPointGraphic);


            const airport = {
                type: "polygon",
                rings: [
                    [-244.8375760, -8.7398712], 
                    [-244.8313038, -8.7397214], 
                    [-244.8317204, -8.7444028],  
                    [-244.8179714, -8.7439537],  
                    [-244.8181896, -8.74944968],  
                    [-244.8473720, -8.7502979],  
                    [-244.8480587, -8.7430023],  
                    [-244.8399906, -8.7421540],  
                    [-244.8374655, -8.7423960],  
                    [-244.8376911, -8.7398324]
                ]
            };

            const seaport = {
                type: "polygon",
                rings: [
                    [-244.7397488, -8.6659897], 
                    [-244.7365516, -8.6659473], 
                    [-244.7364658, -8.6699989],  
                    [-244.7399205, -8.6702535],  
                    [-244.7397703, -8.6660322],
                ]
            };

             const simpleFillSymbol = {
                type: "simple-fill",
                color: [227, 139, 79, 0.8],  // Orange, opacity 80%
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
             };

            
             const popupTemplate = {
                title: "{Name}",
                content: "{Description}"
             }


             const aiportAtr = {
                Name: "Airport",
                Description: "Ini bandara lohhh"
             }

             const seaportAtr = {
                Name: "Seaport",
                Description: "Kalo yg ini pelabuhan"
             }

            const airportGraphic = new Graphic({
                geometry: airport,
                symbol: simpleFillSymbol,
                attributes: aiportAtr,
                popupTemplate: popupTemplate

             });

            const seaportGraphic = new Graphic({
                geometry: seaport,
                symbol: simpleFillSymbol,
                attributes: seaportAtr,
                popupTemplate: popupTemplate

             });

             graphicsLayer.add(airportGraphic);
             graphicsLayer.add(seaportGraphic);

            // ===================================================


            const layer = new FeatureLayer({
                url: "https://jakartasatu.jakarta.go.id/server/rest/services/Pelengkap_Peta_Dasar_P1000/FeatureServer/67"
            });

            map.add(layer, 0);

             // ===================================================

            view.ui.move(["zoom"], {
                position: "bottom-left",
                index: 3
            })
            document
                .getElementById("distanceButton")
                .addEventListener("click", function () {
                    setActiveWidget(null);
                    if (!this.classList.contains("active")) {
                        setActiveWidget("distance");
                    } else {
                        setActiveButton(null);
                    }
                });

            document
                .getElementById("areaButton")
                .addEventListener("click", function () {
                    setActiveWidget(null);
                    if (!this.classList.contains("active")) {
                        setActiveWidget("area");
                    } else {
                        setActiveButton(null);
                    }
                });
            
            document
                .getElementById("clear")

            function setActiveWidget(type) {
                switch (type) {
                    case "distance":
                        activeWidget = new DistanceMeasurement2D({
                            view: view
                        });

                        // skip the initial 'new measurement' button
                        activeWidget.viewModel.start();

                        view.ui.add(activeWidget, "top-right");
                        setActiveButton(document.getElementById("distanceButton"));
                        break;
                    case "area":
                        activeWidget = new AreaMeasurement2D({
                            view: view
                        });

                        // skip the initial 'new measurement' button
                        activeWidget.viewModel.start();

                        view.ui.add(activeWidget, "top-right");
                        setActiveButton(document.getElementById("areaButton"));
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
            

            document
                .getElementById("uploadForm")
                .addEventListener("change", (event) => {
                    const fileName = event.target.value.toLowerCase();

                    if (fileName.indexOf(".zip") !== -1) {
                    //is file a zip - if not notify user
                    generateFeatureCollection(fileName);
                    } else {
                        document.getElementById("upload-status").innerHTML =
                            '<p style="color:red">Add shapefile as .zip file</p>';
                    }
            });

            const fileForm = document.getElementById("mainWindow");

            const expand = new Expand({
                view: view,
                content: fileForm
            },'uploadExpand');

            function generateFeatureCollection(fileName) {
                let name = fileName.split(".");
                // Chrome adds c:\fakepath to the value - we need to remove it
                name = name[0].replace("c:\\fakepath\\", "");

                document.getElementById("upload-status").innerHTML =
                    "<b>Loading... </b>" + name;

                // define the input params for generate see the rest doc for details
                // https://developers.arcgis.com/rest/users-groups-and-items/generate.htm
                const params = {
                    name: name,
                    targetSR: view.spatialReference,
                    maxRecordCount: 1000,
                    enforceInputFileSizeLimit: true,
                    enforceOutputJsonSizeLimit: true
                };

                // generalize features to 10 meters for better performance
                params.generalize = true;
                params.maxAllowableOffset = 10;
                params.reducePrecision = true;
                params.numberOfDigitsAfterDecimal = 0;

                const myContent = {
                    filetype: "shapefile",
                    publishParameters: JSON.stringify(params),
                    f: "json"
                };

                // use the REST generate operation to generate a feature collection from the zipped shapefile
                request(portalUrl + "/sharing/rest/content/features/generate", {
                    query: myContent,
                    body: document.getElementById("uploadForm"),
                    responseType: "json"
                })
                    .then((response) => {
                    const layerName =
                        response.data.featureCollection.layers[0].layerDefinition.name;
                    document.getElementById("upload-status").innerHTML =
                        "<b>Loaded: </b>" + layerName;
                    addShapefileToMap(response.data.featureCollection);
                    })
                    .catch(errorHandler);
            }

            function errorHandler(error) {
                document.getElementById("upload-status").innerHTML =
                    "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
            }

            function addShapefileToMap(featureCollection) {
                // add the shapefile to the map and zoom to the feature collection extent
                // if you want to persist the feature collection when you reload browser, you could store the
                // collection in local storage by serializing the layer using featureLayer.toJson()
                // see the 'Feature Collection in Local Storage' sample for an example of how to work with local storage
                let sourceGraphics = [];

                const layers = featureCollection.layers.map((layer) => {
                    const graphics = layer.featureSet.features.map((feature) => {
                    return Graphic.fromJSON(feature);
                    });
                    sourceGraphics = sourceGraphics.concat(graphics);
                    const featureLayer = new FeatureLayer({
                    objectIdField: "FID",
                    source: graphics,
                    fields: layer.layerDefinition.fields.map((field) => {
                        return Field.fromJSON(field);
                    })
                    });
                    return featureLayer;
                    // associate the feature with the popup on click to enable highlight and zoom to
                });
                map.addMany(layers);
                view.goTo(sourceGraphics).catch((error) => {
                    if (error.name != "AbortError") {
                    console.error(error);
                    }
                });

                document.getElementById("upload-status").innerHTML = "";
            }

            // 1 - Create the widget
            const toggle = new BasemapToggle({
            // 2 - Set properties
                view: view, // view that provides access to the map's 'topo-vector' basemap
                nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
            });

            // Add widget to the top right corner of the view
            view.ui.add(toggle, "bottom-left");

        });

        function selectOption(option) {
            const boxes = document.querySelectorAll('.rectangle-box');
            boxes.forEach(box => box.classList.remove('active'));
            option.classList.add('active');
        }



