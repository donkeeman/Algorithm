let solarSystem = new Map();

// Map에 key-value pair를 넣으려면 set
solarSystem.set("tntjd", "Mercury");
solarSystem.set("rmatjd", "Venus");
solarSystem.set("wlrn", "Earth");
solarSystem.set("ghktjd", "Mars");
solarSystem.set("ahrtjd", "Jupiter");
solarSystem.set("xhtjd", "Saturn");
solarSystem.set("cjsdhkdtjd", "Uranus");
solarSystem.set("godhkdtjd", "Neptune");

const name = readline();
// key 값으로 value를 읽어오려면 get
console.log(solarSystem.get(name));