package DAY_02;

public class Schedule {
    private String day;
    private int start;
    private int end;

    public Schedule(String day, int start, int end) {
        this.day = day;
        this.start = start;
        this.end = end;
    }
    public void timetable(){
        System.out.println("요일 : "+this.day);
        System.out.println("출근시간 : "+this.start);
        System.out.println("퇴근시간 : "+this.end);
    }
}
