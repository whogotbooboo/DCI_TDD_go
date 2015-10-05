describe('piece', function() {
  var myPiece = undefined;
  beforeEach(function(){
    myPiece = new Piece('yellow');
  });

  describe('creation', function() {
    it('should create a new piece', function() {
      expect(myPiece).toBeDefined();
    });
  });

  describe('interface __setColor', function() {
    it('should set color property', function() {
      expect(myPiece.color).toBe('yellow');
      myPiece.__setColor('green');
      expect(myPiece.color).toBe('green');
    });
  });

  describe('interface getColor', function() {
    it('should return the color', function() {
      expect(myPiece.getColor()).toBe(myPiece.color);
    });
  });
});