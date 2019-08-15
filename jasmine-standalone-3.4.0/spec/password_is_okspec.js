describe("password must meets at least three of the criteria listed above ", function(){
    it("suppose to check for password", function(){
         expect(password_is_ok("lllLandile1")).toBe(true);
    });
});