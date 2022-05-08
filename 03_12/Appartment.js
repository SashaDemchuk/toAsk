class Appartment {
  constructor(
    name,
    sizeInSqMtr,
    roomNum,
    number,
    peopleNum,
    costInDollars,
    materialDown,
    materialUp,
    materialWalls,
    cleanAppartment
  ) {
    this.name = name;
    this.sizeInSqMtr = sizeInSqMtr;
    this.roomNum = roomNum;
    this.number = number;
    this.peopleNum = peopleNum;
    this.costInDollars = costInDollars;
    this.material = {
      roof: materialUp,
      floor: materialDown,
      wall: materialWalls,
    };
    this.cleanAppartment = cleanAppartment;
  }
  changeRoomNum(newRoomNumber) {
    this.roomNum = newRoomNumber;
  }
  repair(newRoof, newFloor, newWall) {
    this.material.roof = newRoof;
    this.material.floor = newFloor;
    this.material.wall = newWall;
    return "";
    s;
  }
  clearingFlat(cleanStatus) {
    this.cleanAppartment = cleanStatus;
    return ".";
  }
}
export default Appartment;
