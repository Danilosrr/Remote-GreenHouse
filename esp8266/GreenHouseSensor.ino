#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

const char* sensorName = "IDENTIFIER";

const char* ssid = "SSID"; 
const char* password = "PASSWORD";

const char* serverIP = "SERVER_IP";
const int serverPort = "PORT";

const int DHTPin = 14;
DHT dht(DHTPin, DHT22);

void connectWifi() {
  Serial.print("connecting to Wi-Fi...");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Wi-Fi connection established!");
}

void connectSensor() {
  WiFiClient client;
  HTTPClient http;

  http.begin(client,"http://" + String(serverIP) + ":" + String(serverPort) + "/sensors");
  http.addHeader("Content-Type", "application/json");
  
  String identifierJson = "{\"name\":\"" + String(sensorName)+"\"}";
  int httpResponse = http.POST(identifierJson);
  if (httpResponse==409){Serial.println("Sensor already registered!");}
  else if (httpResponse==201){Serial.println("New sensor registered!");}
  else { Serial.println("Error registering sensor");};
}

void sendData() {
  WiFiClient client;
  HTTPClient http;

  http.begin(client,"http://" + String(serverIP) + ":" + String(serverPort) + "/data");
  http.addHeader("Content-Type", "application/json");

  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  String dataJson = "{\"temperature\":\"" + String(temperature) + "\",\"humidity\":\"" + String(humidity) + "\",\"name\":\"" + String(sensorName) + "\"}";
  int httpResponse = http.POST(dataJson);
  
  if(httpResponse==200){
    Serial.print("Temperature: " + String(temperature) + "°C\thumidity: " + String(humidity) + "%");
  } else {
    Serial.print("Data not sent");
  }
  Serial.println("");
  http.end();
}

void setup() {
  Serial.begin(9600);
  connectWifi();
  connectSensor();
  dht.begin();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    connectWifi();
  }
  
  sendData();
  delay(60000);//1min
}
