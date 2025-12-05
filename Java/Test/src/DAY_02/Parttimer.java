package DAY_02;

public class Parttimer {

    private   String name;
    private   int age;
    private   int wage;
    private   Schedule schedule;

    public Parttimer(String name, int age, int wage) {
        this.name = name;
        this.age = age;
        this.wage = wage > 10030 ? wage : 10030;
        this.schedule =  new Schedule("금",10,14);
    }
    void setwage(int a) {
        if (a < 10320) {
            System.out.println("최저시급 미달입니다.");
        } else {
            System.out.println("<시급 조정 완료>");
            this.wage = a;
        }
    }
    void introduce(){
        System.out.println("이름:"+this.name);
        System.out.println("이름:"+this.age);
        System.out.println("이름:"+this.wage);
        this.schedule.timetable();
    }

}


