describe("password must meets at least three of the criteria listed above ", function(){
    it("suppose to take more than 8 characters with lowercase, uppercase and number.", function(){
         
        expect(password_is_ok("lllLandile1")).toBe(true);
        
        expect(password_is_ok("LWandileneoRich1")).toBe(true);
    });
    it("shouldn't take lowercase and numbers only without uppercase", function(){
        
        expect(password_is_ok("lwandilene1")).toBe(false);
        
        expect(password_is_ok("lwandileneorich1")).toBe(false);
    });
    it("shouldn't accept  8 or less than 8 character", function(){
        
        expect(password_is_ok("lwandi")).toBe(false);
        
        expect(password_is_ok("neo")).toBe(false);
    });
    it("password should have at least one number", function(){
        
        expect(password_is_ok("lwandileNEO")).toBe(false);
        
        expect(password_is_ok("lwandileneoRiCh1")).toBe(true);
    });
    it("password should have at least one lowercase", function(){
        
        expect(password_is_ok("LWANDILENEO1")).toBe(false);
        
        expect(password_is_ok("LWANDILERiCh1")).toBe(true);
    });
    it("password should have at least one uppercase", function(){
        
        expect(password_is_ok("lwandileN1")).toBe(true);
        
        expect(password_is_ok("lwandileneoRiCh")).toBe(false);
    });
});