package DAY_02;

public class Car {
    String name;
    int fuel;
    int speed;
    int year;
    boolean isEnginOn;


    public Car(String name, int fuel, int speed, int year) {
        this.name = name;
        this.fuel = fuel;
        this.speed = speed;
        this.year = year;
        this.isEnginOn = false;
    }

    void engine() {
        this.isEnginOn = !this.isEnginOn;
        String status = this.isEnginOn ? "시동 켜짐" : "시동꺼짐";
        System.out.println(status);
    }

    // Accelerate 함수 - 엔진이 켜져 있으면 -> {출발!, 스피드 +10, 연료 -1}
//                   엔진이 꺼져 있으면 -> "시동 먼저 켜주세요!"
    void accelerate() {
        if (this.isEnginOn) {
            System.out.println("출발!!");
            this.speed += 10;
            this.fuel -= 1;
        } else {
            System.out.println("시동 먼저 켜주세요!");
        }
    }

    void break_() {
        this.speed = 0;
    }

    void info() {
        System.out.println("speed : " + this.speed);
        System.out.println("fuel : " + this.fuel);
    }

    void status(){
        System.out.println("이름 : " + this.name);
        System.out.println("연료 : " + this.fuel);
        System.out.println("속도 : " + this.speed);
        System.out.println("연식 : " + this.year);
        System.out.println("엔진 : " +( this.isEnginOn? "시동 ON":"시동 Off"));

    }
}

