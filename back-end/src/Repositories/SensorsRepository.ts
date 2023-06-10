import { prisma } from "../Config/database.js";

class SensorRepository {
  public async createSensor(name: string) {
    return await prisma.sensors.create({ data: { name } });
  }
  public async deleteSensor(name: string) {
    return await prisma.sensors.delete({ where: { name } });
  }
  public async findSensor(name: string) {
    return await prisma.sensors.findUnique({
      where: { name },
      select: { name: true },
    });
  }
  public async listSensors() {
    return await prisma.sensors.findMany({ select: { name: true } });
  }
}

export default SensorRepository;
