import { prisma } from "../Config/database.js";
import { reading } from "../Interfaces/SensorInterface.js";

class DataRepository {
  public async createData(data: reading) {
    return await prisma.data.create({ data });
  }
  public async listData(limit: number) {
    return await prisma.data.findMany({
      select: { name: true, humidity: true, temperature: true, time: true },
      take: limit,
    });
  }
  public async listSensorData(limit: number, name: string) {
    const list = await prisma.data.findMany({
      where: { name },
      select: { name: true, humidity: true, temperature: true, time: true },
      orderBy: { id: "desc" },
      take: limit,
    });
    return list.reverse();
  }
}

export default DataRepository;
