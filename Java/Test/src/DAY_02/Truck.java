package DAY_02;

public class Truck extends Car{
    private int loadWeight;

    public Truck(String name, int fuel, int speed, int year) {
        super(name, fuel, speed, year);
        this.loadWeight = 0;
    }
    public void load(int load){
        this.loadWeight = this.loadWeight+load;
        System.out.println("현재 무게는: " + this.loadWeight);
    }
}
