package DAY_02;

public class Student {
    public String name;
    public int age;
    public int fee;

    public Student(String name, int age, int fee) {
        this.name = name;
        this.age = age;
        this.fee = fee;
    }

    @Override
    public String toString() {
        return "이름: " + name + ", 나이: " + age + ", 수강료: " + fee + "원";
    }
}