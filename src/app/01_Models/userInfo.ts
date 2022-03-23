export class UserInfo {
    private user_id?: string; // ? optional
    private firstname: string;
    private lastname: string;
    private phone: string;
    private gender: string;
    private email: string;
    private photoURL: string;
    private role_id: string;

    private dob: string;
    private address: string;
    private created_at: string;
    private updated_at: string;

    constructor(){
        this.user_id = "xxxxxxxxxxxxxxxxxxx";
        this.firstname = "first_name";
        this.lastname = "last_name";
        this.email = "username@123.co.xc";
        this.gender = "male";
        this.phone = "0123456789";
        this.photoURL = "dp.png";
        this.role_id = "user";
        
        this.dob = "01/01/1989";
        this.address = "123 Street 2";
        this.created_at = "04 March 2022";
        this.updated_at ="04 March 2022";

    }
    overloadUser(_user_id: string, _firstname: string, _lastname: string, _phone: string, _gender: string, _email: string,_role:string, _photo:string, _dob:string, _address:string, _cat:string,_uat:string){
        this.user_id = _user_id;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.phone = _phone;
        this.gender = _gender;
        this.email = _email;
        this.photoURL = _photo;
        this.role_id = _role;

        this.dob = _dob;
        this.address = _address;
        this.created_at = _cat;
        this.updated_at = _uat;
    }
    //Setters -- Set Attributes one by one
    public setUserID(_user_id:string){
        this.user_id = _user_id;
    }
    public setFirstName(_firstname:string){
        this.firstname = _firstname;
    }   
    public setlLastName(_lastname:string){
        this.lastname = _lastname;
    }
    public setPhone(_phone:string){
        this.phone = _phone;
    } 
    public setGender(_gender:string){
        this.gender = _gender;
    }   
    public setEmail(_email:string){
        this.email = _email;
    }
    public setPhotoURL(_photo:string){
        this.email = _photo;
    }
    public setRole(_role:string){
        this.role_id = _role;
    }
    public setDOB(_dob:string){
        this.dob = _dob;
    }
    public setAddress(_address:string){
        this.address = _address  
    }
    public setCreated_at(_cat:string){
        this.created_at = _cat;
    }
    public setUpdated_at(_uat:string){
        this.updated_at = _uat
    }
    //Getters - Get/retrieve/return methods one by one
    public getUserID(){ 
        return this.user_id;
    }
    public getFirstname(){
        return this.firstname;
    }
    public getLastname(){
        return this.lastname;
    }
    public getGender(){
        return this.gender;
    }
    public getPhone(){
        return this.phone;
    }
    public getEmail(){
        return this.email;
    }
    public getPhotoURL(){
        return this.photoURL;
    }
    public getRole(){
        return this.role_id;
    }
    public getDOB(){
        return this.dob;
    }
    public getAddress(){
         return this.address;   
    }
    public getCreated_at(){
        return this.created_at;
    }
    public getUpdated_at(){
        return this.updated_at;
    }
}