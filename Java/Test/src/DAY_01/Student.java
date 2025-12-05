package DAY_01;//속성 [변수] + 함수
// 접근 제어자: private[class 안에서만]: 기본 원칙 - protected[부모자식] - default - public[누구나]

public class Student {
    String name;
    int age;
    public Student(String name,int age) {
        this.name = name;
        this.age = age;
    }

    void studying(){
        System.out.println("공부중 빠쌰");
    }
}
