const ESP32_BASE_URL = "http://192.168.4.1";

/* ================= SENSOR DATA ================= */
export async function fetchSensorData() {
  const res = await fetch(`${ESP32_BASE_URL}/data`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("ESP32 not reachable");
  }

  return res.json();
}

/* ================= EXPERIMENT ================= */
export async function startExperiment(payload: {
  name: string;
  temp: number;
  duration: number; // minutes
}) {
  const params = new URLSearchParams();
  params.append("name", payload.name);
  params.append("temp", payload.temp.toString());
  params.append("duration", payload.duration.toString());

  const res = await fetch(`${ESP32_BASE_URL}/start`, {
    method: "POST",
    body: params,
  });

  if (!res.ok) {
    throw new Error("Failed to start experiment");
  }
}

export async function stopExperiment() {
  await fetch(`${ESP32_BASE_URL}/stop`);
}

/* ================= WATER PUMP ================= */
export async function setPumpState(state: "on" | "off") {
  await fetch(`${ESP32_BASE_URL}/pump?state=${state}`);
}
