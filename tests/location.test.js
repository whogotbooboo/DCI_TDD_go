describe("creates Location", function() {
  var myLocation = new Location(10, 10);
    it("should create location object", function() {
        expect(myLocation).toBeDefined();
    });
    it('should be awesome', function() {
      expect(myLocation).not.toBeDefined();
    });
});