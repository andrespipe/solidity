interface IVehicle {
  id: number;
  serial: string;
  brand: string;
  cc: number;
}

type IVehicleCreate = Required<Omit<IVehicle, "id">>;
type IVehicleToUpdate = Partial<Omit<IVehicle, "id">>;
interface IVehicleUpdate
  extends Readonly<Pick<IVehicle, "id">>,
    Omit<IVehicle, "id"> {}

export class VehiCleActionsService {
  createVehicle(vehicle: IVehicleCreate): IVehicle {
    const newVehicle: IVehicle = {
      id: Math.random() * 10,
      ...vehicle,
    };

    return newVehicle;
  }

  updateVehicle(from: IVehicle, to: IVehicleToUpdate): IVehicle {
    const updatedVehicle: IVehicleUpdate = { ...from, ...to };
    return { ...updatedVehicle };
  }
}

const vehicleManager = new VehiCleActionsService();

const vehicleToUpdate: IVehicle = {
  id: 0,
  brand: "mazda",
  cc: 2500,
  serial: `${Math.random() * 1000}`,
};

const vehicleUpdatedData: IVehicleToUpdate = {
  serial: "AAXXYYZZWWW",
};

const updatedVehicle = vehicleManager.updateVehicle(
  vehicleToUpdate,
  vehicleToUpdate
);

console.log({ updatedVehicle });
