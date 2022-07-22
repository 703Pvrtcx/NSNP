export class StudentClass {
    private studentid: string;
    private firstname: string;
    private lastname: string;
    private phone: string;
    private gender: string;
    private email: string;

    constructor(){
        this.studentid = 'xxxxxxxxxxxxxxxxxxx';
        this.firstname = 'student_First_name';
        this.lastname = 'student_last_name';
        this.phone = '0123456789';
        this.gender = 'male';
        this.email = 'username@123.co.xc';
    }
    overloadStudent(_studentID: string, _firstname: string, _lastname: string, _phone: string, _gender: string, _email: string,){
        this.studentid = _studentID;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.phone = _phone;
        this.gender = _gender;
        this.email = _email;
    }
    //Setters -- Set Attributes one by one
    public setStudent(_studentID: string){
        this.studentid = _studentID;
    }
    public setFirstName(_firstname: string){
        this.firstname = _firstname;
    }
    public setlLastName(_lastname: string){
        this.lastname = _lastname;
    }
    public setPhone(_phone: string){
        this.phone = _phone;
    }
    public setGender(_gender: string){
        this.gender = _gender;
    }
    public setEmail(_email: string){
        this.email = _email;
    }
//Getters - Get/retrieve/return methods one by one
    public getStudentNumber(){
        return this.studentid;
    }
    public getName(){
        return this.firstname;
    }
    public getSurname(){
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
}
