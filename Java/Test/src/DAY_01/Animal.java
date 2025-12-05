package DAY_01;

public class Animal {
    protected String name;
    protected int age;
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    void breathe(){
        System.out.println("호흡");
    }
}
