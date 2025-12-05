package DAY_02;

// 기본타입 -> 구조체 + 함수 -> class[클래스 만들기]
//public class Main {
//    public static void main(String[] args) {
/// /    Car bmw = new Car("BMW",100,0,2024);
/// /    bmw.engine();
/// /    bmw.accelerate();
/// /    bmw.accelerate();
/// /    bmw.break_();
/// /    bmw.info();
//
//        //    Parttimer kim = new Parttimer("킴",20,10030);
/// /    kim.setwage(10000);
/// /    kim.introduce();
/// /    System.out.println("------------------------------");
/// /    kim.setwage(20000);
/// /    kim.introduce();
//
//        Car car = new Car("토레나", 100, 0, 2014);
//        Truck truck = new Truck("두돈반", 200, 0, 2019);
//
//        truck.load(30);
//        truck.engine();
//        truck.accelerate();
//
//    }
//}

// 배열
//public class Main {
//   public static void main(String[] args) {
//


/// /       //숫자 배열
/// /       int scores[] = {1,2,4,16,20,32,45};
/// /       System.out.println(scores[0]);
/// /       System.out.println(scores[6]);
/// /
/// /        int price[] = new int[7];
//
//        //String 배열
//        String menus[] =new String[3];
//        menus[0] = "Americano";
//        menus[1] = "Latte";
//        menus[2] = "Mocha";
//        System.out.println(menus[0]); //가르키는 주소값 출력
//        System.out.println(menus[1]);
//        System.out.println(menus[2]);
//       System.out.println("------------------------------");
//
//        //자동차 배열
//       Car cars[] = new Car[4];
//       cars[0] = new Car("BMW",100,0,2024);
//       cars[1] = new Car("k5",250,0,2023);
//       cars[2] = new Car("k7",300,0,2024);
//       cars[3] = new Car("푸드트럭",300,0,2026);
//
//       //상태 출력
//       cars[0].status();
//       System.out.println("------------------------------");
//       cars[1].status();
//       System.out.println("------------------------------");
//       cars[2].status();
//   }
//}

/// / 조건문
//import java.util.Scanner;
//public class Main {
//    public static void main(String[] args) {
////        String name ="로제";
////
////        switch (name){
////            case "로제":
////                System.out.println("로제떡볶이");
////                break;
////            case "마라":
////                System.out.println("마라");
////                break;
////            default:
////                System.out.println("없어용");
////                break;
////        }
//        Scanner sc = new Scanner(System.in); //import java.util.Scanner; -> 해야함
//        System.out.print("입력하세요: ");
//        String manual = sc.nextLine();
//        switch (manual) {
//            case "퇴직":
//                System.out.println("퇴직금 나옵니다.");
//                break;
//            case "주휴":
//                System.out.println("주휴수당 나옵니다");
//                break;
//            case "연차":
//                System.out.println("연차수당 나옵니다");
//                break;
//            default:
//                System.out.println("노무사한테 가세요");
//                break;
//        }
//    }
//}

// 반복문

// for문 -> 개발자가 언제 끝인지 정의 가능
// while -> 유저가 언제 끝인지 정의 가능

//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//        for (int i = 1; i <= 100; i += 2){
//            if(i % 3 ==0 && i % 5 ==0){
//                System.out.println( i + " 는 3과 5의 배수");
//            } else if(i%3 ==0){
//                System.out.println(i + " 는 3의배수");
//            } else if (i%5 ==0) {
//                System.out.println(i + " 는 5의배수");
//            }else{
//                System.out.println(i +" 토끼");
//            }
//        }
//        //구구단
//        Scanner sc = new Scanner(System.in);
//        System.out.print("단을 입력하세요: ");
//        int dan = sc.nextInt();
//
//
//        for (int i = 1; i < 10; i++){
//            System.out.println( dan * i );
//        }
//        // 3/6/9 - 👏
//        for (int i = 1; i <= 100; i++) {
//            String s = String.valueOf(i); // 숫자를 문자열로 바꿔
//            String s1 = "" + i;
//            if (s.contains("3") || s.contains("6") || s.contains("9")) {
//                System.out.println("👏");
//            } else {
//                System.out.println(i);
//            }
//        }

//
//        //프린터
//        Scanner sc = new Scanner(System.in);
//        int num = 0;
//
//        while (num < 4) {
//            System.out.println("\n메뉴를 선택하세요:");
//            System.out.println("1. 퇴직금 계산법 알아보기");
//            System.out.println("2. 주휴수당 계산법 알아보기");
//            System.out.println("3. 연차수당 계산법 알아보기");
//            System.out.println("4. 프로그램 종료");
//
//            System.out.print("\n번호 입력: ");
//            num = sc.nextInt();  // 여기에 있어야 해!
//
//            switch (num) {
//                case 1:
//                    System.out.println("퇴직금은 보통 1년 이상 근무 시 지급되며, 평균임금 × 30일 × 근속연수로 계산해요.");
//                    break;
//                case 2:
//                    System.out.println("주휴수당은 주 15시간 이상 일하고 개근 시 하루치 임금만큼 추가로 받아요!");
//                    break;
//                case 3:
//                    System.out.println("연차수당은 연차를 다 못 썼을 때 돈으로 보상받는 제도예요!");
//                    break;
//                case 4:
//                    System.out.println("프로그램을 종료합니다.");
//                    break;
//                default:
//                    System.out.println("1~4 사이 숫자를 입력해주세요.");
//                    break;
//            }
//        }

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StudentManager manager = new StudentManager();

        while (true) {
            System.out.println("\n[학생 관리 프로그램]");
            System.out.println("1. 학생 등록");
            System.out.println("2. 학생 삭제");
            System.out.println("3. 학생 전체 조회");
            System.out.println("4. 프로그램 종료");
            System.out.print("메뉴 선택: ");
            int choice = sc.nextInt();
            sc.nextLine(); // 줄바꿈 제거

            switch (choice) {
                case 1:
                    System.out.print("이름: ");
                    String name = sc.nextLine();
                    System.out.print("나이: ");
                    int age = sc.nextInt();
                    System.out.print("수강료: ");
                    int fee = sc.nextInt();
                    sc.nextLine(); // 줄바꿈 제거
                    manager.addStudent(name, age, fee);
                    break;
                case 2:
                    System.out.print("삭제할 이름: ");
                    String delName = sc.nextLine();
                    manager.deleteStudent(delName);
                    break;
                case 3:
                    manager.viewStudents();
                    break;
                case 4:
                    System.out.println("👋 프로그램을 종료합니다.");
                    return;
                default:
                    System.out.println("❗ 1~4 중 선택해주세요.");
            }
        }
    }
}































