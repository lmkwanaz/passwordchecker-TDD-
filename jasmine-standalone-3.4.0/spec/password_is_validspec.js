describe("password_is_valid", function(){
    it("suppose to check if password is valid", function(){

        expect(password_is_valid("gwennoms2")).toBe(false)

         expect(password_is_valid("lllLandile1")).toBe(true);
    });
    it("checks length of the password", function(){

        expect(password_is_valid("gwenK1")).toBe(false);

        expect(password_is_valid("lWandi1")).toBe(false);
    });
    it("checks if there's a number in a password", function(){

        expect(password_is_valid("Lwahndile")).toBe(false);

        expect(password_is_valid("makzinazilMH1")).toBe(true);
    });
});