import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mockData from "../utils/mockData.json";
import geoMock from "../utils/geoMock.json";
import L from "leaflet";
import { FeatureCollection, Feature, Point } from "geojson";

interface StateData {
  state: string;
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
}

interface GeoJSONFeature extends Feature<Point> {
  properties: {
    name: string;
  };
}

const Map: React.FC = () => {
  const onEachFeature = (feature: GeoJSONFeature, layer: L.Layer) => {
    const stateName = feature.properties.name;
    const stateData = mockData?.find((state) => state?.state === stateName);

    if (stateData) {
      layer?.bindTooltip(
        `<strong>${stateName}</strong><br>
         Total Cases: ${stateData?.totalCases[0]}<br>
         Active Cases: ${stateData?.activeCases[0]}<br>
         Recovered: ${stateData?.recovered[0]}<br>
         Deaths: ${stateData?.deaths[0]}`
      );
    }
  };

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [20, 35],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const pointToLayer = (
    feature: GeoJSONFeature,
    latlng: L.LatLngExpression
  ): L.Marker => {
    return L.marker(latlng, { icon: customIcon });
  };

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[23.5937, 81.9629]}
        zoom={4}
        className="w-full h-full min-h-[450px]"
      >
        {geoMock && (
          <GeoJSON
            data={geoMock as FeatureCollection<Point>}
            onEachFeature={onEachFeature}
            pointToLayer={pointToLayer}
          />
        )}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
