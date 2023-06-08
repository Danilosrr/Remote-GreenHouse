#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

// Definir as constantes de configuração do Wi-Fi
const char* ssid = "SSID"; 
const char* password = "PASSWORD";

// Definir as constantes de configuração do servidor
const char* serverIP = "SERVER_IP";
const int serverPort = "PORT";

// Definir o pino de dados do sensor DHT
const int DHTPin = 14;
DHT dht(DHTPin, DHT22);

void connectWifi() {
  Serial.print("Conectando-se à rede Wi-Fi...");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Conexão Wi-Fi estabelecida!");
}

void sendData() {
  WiFiClient client;
  HTTPClient http;

  http.begin(client,"http://" + String(serverIP) + ":" + String(serverPort) + "/sensors");
  http.addHeader("Content-Type", "application/json");

  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  String dataJson = "{\"temperature\":\"" + String(temperature) + "\",\"humidity\":\"" + String(humidity) + "\"}";
  int httpResponse = http.POST(dataJson);
  
  if(httpResponse==200){
    Serial.print("Temperatura: " + String(temperature) + "°C\tUmidade: " + String(humidity) + "%");
  } else {
    Serial.print("Data not sent");
  }
  Serial.println("");
  http.end();
}

void setup() {
  Serial.begin(9600);
  connectWifi();
  dht.begin();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    connectWifi();
  }
  
  sendData();
  delay(10000);
}
