import React, { useCallback, useEffect, useState } from "react";
import { ALL_SYMPTOMS } from "./data/symptoms";
import { DISEASES } from "./data/diseases";
import type { Disease } from "./data/diseases";
import { getDiagnoses } from "./utils/diagnosis";
import "./App.css";
import type { TemperatureStatus } from "./components/TemperatureField ";
import TemperatureField from "./components/TemperatureField ";


function buildNearbyHospitalsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/search/hospital/@${lat},${lng},14z`;
}

const FEVER_SYMPTOM = "Febre";
const HIGH_FEVER_SYMPTOM = "Febre alta";
const HIPOTERMIA_SYMPTOM = "Hipotermia";

const App: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [results, setResults] = useState<Disease[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locError, setLocError] = useState<string | null>(null);
  const [temperatureStatus, setTemperatureStatus] = useState<TemperatureStatus>("indefinido");

  // Adiciona ou remove sintomas de temperatura automaticamente
  useEffect(() => {
    setSelected((prev) => {
      let updated = prev.filter(
        (s) => s !== FEVER_SYMPTOM && s !== HIGH_FEVER_SYMPTOM && s !== HIPOTERMIA_SYMPTOM
      );
      if (temperatureStatus === "hipotermia" && !updated.includes(HIPOTERMIA_SYMPTOM)) {
        updated = [...updated, HIPOTERMIA_SYMPTOM];
      } else if (temperatureStatus === "febre" && !updated.includes(FEVER_SYMPTOM)) {
        updated = [...updated, FEVER_SYMPTOM];
      } else if (temperatureStatus === "febre-alta" && !updated.includes(HIGH_FEVER_SYMPTOM)) {
        updated = [...updated, HIGH_FEVER_SYMPTOM];
      }
      return updated;
    });
  }, [temperatureStatus]);

  // Atualiza diagnóstico automaticamente quando sintomas mudam
  useEffect(() => {
    if (selected.length > 0) {
      setResults(getDiagnoses(selected, DISEASES));
    } else {
      setResults([]);
    }
  }, [selected]);

  function handleSelect(symptom: string) {
    // Impede selecionar/remover sintomas de temperatura manualmente; só via campo de temperatura
    if (
      symptom === FEVER_SYMPTOM ||
      symptom === HIGH_FEVER_SYMPTOM ||
      symptom === HIPOTERMIA_SYMPTOM
    )
      return;
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  }

  const handleTemperatureStatusChange = useCallback((status: TemperatureStatus) => {
    setTemperatureStatus(status);
  }, []);

  function handleFindHospitals() {
    if (!navigator.geolocation) {
      setLocError("Geolocalização não suportada neste navegador.");
      return;
    }
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setLocError("Não foi possível obter sua localização. Permita o acesso ou tente novamente.");
      }
    );
  }

  return (
    <div className="container">
      <h1>Diagnóstico Rápido</h1>
      <TemperatureField onStatusChange={handleTemperatureStatusChange} />
      <p className="subtitle">Selecione seus sintomas principais:</p>
      <div className="symptoms-list">
        {ALL_SYMPTOMS.map(symptom => (
          <label
            key={symptom}
            className={
              selected.includes(symptom) ? "selected" : "" +
              ([FEVER_SYMPTOM, HIGH_FEVER_SYMPTOM, HIPOTERMIA_SYMPTOM].includes(symptom)
                ? " disabled"
                : "")
            }
            style={
              [FEVER_SYMPTOM, HIGH_FEVER_SYMPTOM, HIPOTERMIA_SYMPTOM].includes(symptom)
                ? { opacity: 0.55, pointerEvents: "none" }
                : {}
            }
          >
            <input
              type="checkbox"
              checked={selected.includes(symptom)}
              onChange={() => handleSelect(symptom)}
              disabled={
                [FEVER_SYMPTOM, HIGH_FEVER_SYMPTOM, HIPOTERMIA_SYMPTOM].includes(symptom)
              }
            />
            {symptom}
          </label>
        ))}
      </div>

      {results.length > 0 && (
        <div className="result-list">
          <h2>Resultados Possíveis</h2>
          {results.map((disease, i) => (
            <div key={disease.name} className={`result ${disease.urgent ? "urgent" : ""}`}>
              <h3>
                {i === 0 && <span className="badge">Mais provável</span>} {disease.name}
              </h3>
              <p>{disease.description}</p>
              <p className="symptom-list">
                <strong>Sintomas principais:</strong>{" "}
                {disease.symptoms.join(", ")}
              </p>
              {disease.urgent && (
                <div className="urgent-hint">
                  <span>⚠️ Procure atendimento médico imediatamente!</span>
                </div>
              )}
            </div>
          ))}
          <div className="find-hospitals">
            <button onClick={handleFindHospitals}>
              Procurar hospitais próximos
            </button>
            {locError && <p className="loc-error">{locError}</p>}
            {location && (
              <div className="map-link">
                <a
                  href={buildNearbyHospitalsUrl(location.lat, location.lng)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver hospitais próximos no Google Maps
                </a>
                <iframe
                  title="Hospitais próximos"
                  src={`https://maps.google.com/maps?q=hospital&ll=${location.lat},${location.lng}&z=14&output=embed`}
                  width="100%"
                  height="250"
                  style={{ border: 0, marginTop: 10, borderRadius: 8 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <p className="alert">
            <strong>Aviso:</strong> Este resultado é apenas uma referência e não substitui avaliação médica.
          </p>
        </div>
      )}

      {!results.length && selected.length > 0 && (
        <div className="result waiting">
          Selecione os sintomas e informe sua temperatura para obter um possível resultado.
        </div>
      )}
      <footer>
        <p>
          <strong>Importante:</strong> Nunca use este site como substituto para uma consulta médica.
        </p>
      </footer>
    </div>
  );
};

export default App;