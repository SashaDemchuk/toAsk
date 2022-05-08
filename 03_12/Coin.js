/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Coin {
  constructor(
    name,
    shape,
    diameter_in_sm,
    material,
    pictureAverse,
    pictureReverse,
    cost_in_$
  ) {
    this.name = name;
    this.shape = shape;
    this.diameter_in_sm = diameter_in_sm;
    this.material = material;
    this.pictures = {
      averse: pictureAverse,
      reverse: pictureReverse,
    };
    this.cost_in_$ = cost_in_$;
  }
  polishing(newAverse, newReverse) {
    this.pictures.averse = newAverse;
    this.pictures.reverse = newReverse;
  }
  trading(newCost) {
    this.cost_in_$ = newCost;
  }
}
export default Coin;
