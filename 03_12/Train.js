const Train = class {
  constructor(name, length, width, height, weight, color, dirty) {
    this.name = name;
    this.parameters = {
      length: length,
      width: width,
      height: height,
    };
    this.weight = weight;
    this.color = color;
    this.dirty = dirty;
  }
  cleaing(purity) {
    this.dirty = purity;
  }
  painting(newColor) {
    this.color = newColor;
  }
};
export default Train;
