import React, { useEffect, useState } from "react";

type TemperatureStatus = "hipotermia" | "abaixo" | "normal" | "febre" | "febre-alta" | "indefinido";

interface TemperatureFieldProps {
  onStatusChange: (status: TemperatureStatus) => void;
}

const getStatus = (temp: number | null): TemperatureStatus => {
  if (temp == null) return "indefinido";
  if (temp < 35) return "hipotermia";
  if (temp >= 35 && temp < 36) return "abaixo";
  if (temp >= 36 && temp < 37) return "normal";
  if (temp >= 37 && temp < 38) return "febre";
  if (temp >= 38) return "febre-alta";
  return "indefinido";
};

const statusLabel: Record<TemperatureStatus, string> = {
  hipotermia: "Hipotermia",
  abaixo: "Abaixo do normal",
  normal: "Normal",
  febre: "Febre",
  "febre-alta": "Febre alta",
  indefinido: "Temperatura inválida ou não informada",
};

const statusColor: Record<TemperatureStatus, string> = {
  hipotermia: "#3b3b9e",
  abaixo: "#4a90e2",
  normal: "#1ca362",
  febre: "#e6a600",
  "febre-alta": "#d32f2f",
  indefinido: "#555",
};

const TemperatureField: React.FC<TemperatureFieldProps> = ({ onStatusChange }) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState<number | null>(null);
  const [status, setStatus] = useState<TemperatureStatus>("indefinido");

  useEffect(() => {
    setStatus(getStatus(value));
    onStatusChange(getStatus(value));
  }, [value, onStatusChange]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    try {
      const result = eval(e.target.value.replace(",", "."));
      const temp = parseFloat(result);
      if (!isNaN(temp) && temp > 25 && temp < 45) {
        setValue(temp);
      } else {
        setValue(null);
      }
    } catch {
      setValue(null);
    }
  }

  return (
    <div style={{ marginBottom: 20, textAlign: "center" }}>
      <label>
        Informe sua temperatura (°C):{" "}
        <input
          type="text"
          placeholder="Ex: 37.5 ou 36+2"
          value={input}
          onChange={handleChange}
          style={{
            padding: "0.4rem 1rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1.1rem",
          }}
        />
      </label>
      {status !== "indefinido" && (
        <div
          style={{
            marginTop: 10,
            fontWeight: "bold",
            color: statusColor[status],
          }}
        >
          Temperatura: {value ? value.toFixed(1) : "--"}°C — {statusLabel[status]}
        </div>
      )}
    </div>
  );
};

export default TemperatureField;
export type { TemperatureStatus };