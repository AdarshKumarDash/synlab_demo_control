import {
  Thermometer,
  Droplets,
  Wind,
  Waves,
  Scale,
  FlaskConical,
  Radar,
  Microscope,
} from "lucide-react";

type SensorStatus = "active" | "inactive" | "not-connected";

interface Sensor {
  id: string;
  name: string;
  icon: React.ElementType;
  status: SensorStatus;
  colorClass: string;
  bgColorClass: string;
}

const sensors: Sensor[] = [
  {
    id: "peltier",
    name: "Peltier Temperature",
    icon: Thermometer,
    status: "inactive",
    colorClass: "text-sensor-temperature",
    bgColorClass: "bg-sensor-temperature/10",
  },
  {
    id: "dht11",
    name: "DHT11 (Temp & Humidity)",
    icon: Droplets,
    status: "inactive",
    colorClass: "text-sensor-humidity",
    bgColorClass: "bg-sensor-humidity/10",
  },
  {
    id: "mq135",
    name: "MQ135 (Gas / AQI)",
    icon: Wind,
    status: "inactive",
    colorClass: "text-sensor-gas",
    bgColorClass: "bg-sensor-gas/10",
  },
  {
    id: "water-level",
    name: "Water Level",
    icon: Waves,
    status: "inactive",
    colorClass: "text-sensor-water",
    bgColorClass: "bg-sensor-water/10",
  },
  {
    id: "load-cell",
    name: "Load Cell",
    icon: Scale,
    status: "inactive",
    colorClass: "text-sensor-weight",
    bgColorClass: "bg-sensor-weight/10",
  },
  {
    id: "ph-sensor",
    name: "pH Sensor",
    icon: FlaskConical,
    status: "inactive",
    colorClass: "text-sensor-ph",
    bgColorClass: "bg-sensor-ph/10",
  },
  {
    id: "ultrasonic",
    name: "Ultrasonic Distance",
    icon: Radar,
    status: "inactive",
    colorClass: "text-sensor-distance",
    bgColorClass: "bg-sensor-distance/10",
  },
  {
    id: "microscope",
    name: "USB Microscope",
    icon: Microscope,
    status: "inactive",
    colorClass: "text-sensor-microscope",
    bgColorClass: "bg-sensor-microscope/10",
  },
];

const getStatusLabel = (status: SensorStatus) => {
  switch (status) {
    case "active":
      return "Active";
    case "inactive":
      return "Inactive";
    case "not-connected":
      return "Not Connected";
  }
};

const getStatusClass = (status: SensorStatus) => {
  switch (status) {
    case "active":
      return "status-active";
    case "inactive":
      return "status-inactive";
    case "not-connected":
      return "bg-destructive/50";
  }
};

const SensorGrid = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-semibold text-foreground">
          System Sensor Overview
        </h2>
        <span className="text-sm text-muted-foreground">
          All sensors ready for experiment
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            className="sensor-card group animate-fade-in-up"
            style={{ animationDelay: `${sensors.indexOf(sensor) * 0.05}s` }}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-xl ${sensor.bgColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <sensor.icon className={`w-6 h-6 ${sensor.colorClass}`} />
            </div>

            {/* Sensor Info */}
            <h3 className="font-medium text-foreground mb-1">{sensor.name}</h3>

            {/* Status */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`status-dot ${getStatusClass(sensor.status)}`} />
              <span className="text-sm text-muted-foreground">
                {getStatusLabel(sensor.status)}
              </span>
            </div>

            {/* Value Placeholder */}
            <div className="h-8 flex items-center justify-center rounded-lg bg-muted/50 border border-border/50">
              <span className="text-lg font-mono text-muted-foreground">—</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorGrid;
