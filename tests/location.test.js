
describe('Location', function() {
  var myLocation = 'hello';
  beforeEach(function() {

    myLocation = new Location(10, 11);
  });

  describe("when created", function() {

      it("should create location object", function() {
          expect(myLocation).toBeDefined();
      });

      it('should have an x value', function() {
        expect(myLocation.x).toEqual(10);
      });

      it('should have a y value', function() {
        expect(myLocation.y).toEqual(11);
      });
  });

  describe('getX interface', function() {
    it('should return x value', function() {
      expect(myLocation.getX()).toBe(myLocation.x);
    });
  });

  describe('getY interface', function() {
    it('should return y value', function() {
      expect(myLocation.getY()).toBe(myLocation.y);
    });
  });
});