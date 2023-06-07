#include <ESP8266WiFi.h>
#include <DHT.h>

// Definir as constantes de configuração do Wi-Fi
const char* ssid = "SSID"; 
const char* password = "PASSWORD";

// Definir o pino de dados do sensor DHT
const int DHTPin = 14;

// Inicializar o objeto DHT
DHT dht(DHTPin, DHT22);

void setup() {
  // Inicializar o monitor serial
  Serial.begin(9600);
  
  // Conectar-se à rede Wi-Fi
  Serial.print("Conectando-se à rede Wi-Fi...");
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("Conexão Wi-Fi estabelecida!");
  
  // Inicializar o sensor DHT
  dht.begin();
}

void loop() {
  // Verificar a conexão Wi-Fi
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Conexão Wi-Fi perdida. Reconectando...");
    
    // Reconectar-se à rede Wi-Fi
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.print(".");
    }
    
    Serial.println("");
    Serial.println("Conexão Wi-Fi restabelecida!");
  }
  
  // Medir a temperatura e a umidade
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Imprimir os valores no monitor serial
  Serial.print("Temperatura: ");
  Serial.print(temperature);
  Serial.print(" °C\tUmidade: ");
  Serial.print(humidity);
  Serial.println(" %");
  
  // Aguardar 5 segundos
  delay(5000);
}
