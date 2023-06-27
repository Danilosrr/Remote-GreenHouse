## Localhost Server for Horticulture Data

### Overview
This project aims to develop a localhost server that facilitates access to humidity and temperature data from a horticulture environment. The server is designed to connect with a locally hosted database, which is populated by an ESP8266 microcontroller. By providing a user-friendly interface, this solution enables users to conveniently monitor and analyze crucial environmental parameters for horticultural purposes.

### Features
- **Localhost Server**: The project includes a server component that runs on the local machine, allowing users to access the horticulture data through a web-based interface.
- **ESP8266 Microcontroller**: The system employs an ESP8266 microcontroller to collect humidity and temperature data from the horticulture environment. This data is periodically transmitted to the locally hosted database.
- **Database Integration**: The server seamlessly integrates with a locally hosted database to store and retrieve the collected data. This ensures efficient data management and retrieval for analysis.
- **User Interface**: The web-based interface provides an intuitive and interactive platform for users to access, visualize, and analyze the horticulture data. It offers real-time updates and various graphical representations for easy interpretation.
- **Data Visualization**: The server incorporates data visualization tools to present the humidity and temperature trends over time. Users can explore graphs, charts, and statistical summaries to gain insights into the horticultural conditions.
- **Alerting Mechanism**: The system includes an alerting mechanism that notifies users in case of any predefined thresholds being exceeded. This feature helps ensure timely actions to maintain optimal horticulture conditions.
- **Scalability and Flexibility**: The project is designed with scalability and flexibility in mind, allowing for easy integration with additional sensors, expansion of data collection capabilities, and customization based on specific horticultural requirements.

### Technologies Used
- Server: Node.js
- Database: PostgreSQL
- Web Framework: Express.js
- Microcontroller: ESP8266
- Data Visualization: Chart.js
- Frontend: React.js, Typescript

### Server Installation and Usage
To install and use the application, please follow the steps below:

1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/Danilosrr/Remote-GreenHouse
   ```

2. Configure environment variables:</br>
Create a .env file in the front-end folder.
Make sure to follow the required format specified in the .env.example file.
   ```js
    REACT_APP_BACK = 4000    //back-end port
    PORT = 3000              //front-end port
    SOCKET = 4001            //socket port
    DATABASE_URL="postgresql://user:password@localhost:5432/database"
    ```

3. Run the application:</br>
On the root folder.
    ```shell
    npm i
    npm run deploy
    ```

4. Access the application by navigating to http://localhost:3000 in your web browser.

### Sensor Installation

1. Open the code from esp8266/GreenHouseSensor.ino in your IDE.

2. Modify the following variables in the code to match your setup:
    - `ssid`: Replace "SSID" with the name of your Wi-Fi network.
    - `password`: Replace "PASSWORD" with the password for your Wi-Fi network.
    - `serverIP`: Replace "SERVER_IP" with the IP address of your server.
    - `serverPort`: Replace "PORT" with the port number used by your server.

3. Once the code is successfully uploaded, the microcontroller must be fully functional.
