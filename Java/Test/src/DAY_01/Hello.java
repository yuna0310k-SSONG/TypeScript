package DAY_01;// hello world  출력
//public class Hello {
//    public static void main(String[]args) {
//        System.out.println("hello world");
//    }
//}


// 변수 사용법 [타입+변수명]
//public class Hello {
//    public static void main(String[] args) {
//        String name ="고기";
//        System.out.println(name);
//    }
//}

// 데이터 타입 [기본 + 참조]
//public class Hello {
//    public static void main(String[] args) {
//        boolean a = false; //불리언
//        int b = -10; //정수
//        double c = 10.1;  //실수
//        char d =  '문'; //문자(한글자만)
//        String e = "문자"; //문자열
//    }
//}

// 클래스 만들기
//public class Hello {
//    public static void main(String[] args) {

/// /        //출력
/// /        System.out.println();
/// /        //입력
/// /        Scanner a = new Scanner();
//        Student yj = new Student("여지니",29);
//        Student jw = new Student("정우",26);
//        yj.studying();
//        jw.studying();
//    }
//}

//public class Hello {
//    public static void main(String[] args){
//        System.out.println("숫자입력:");
//        Scanner a = new Scanner(System.in);
//        int b = a.nextInt();
//        System.out.println("입력한 숫자는:"+b);
//
//    }
//}


//public class Hello {
//    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("첫 번째 정수를 입력하세요: ");
//        int a = sc.nextInt();   // 첫 번째 정수 입력
//
//        System.out.print("두 번째 정수를 입력하세요: ");
//        int b = sc.nextInt();   // 두 번째 정수 입력
//
//        int sum = a + b;        // 두 수를 더함
//
//        System.out.println("두 정수의 합은: " + sum);
//    }
//}

// 5. 타입캐스팅
//public class Hello {
//    public static void main(String[] args) {
//        String a = "10";
//        String b = "15";
//        Integer c = Integer.parseInt(a);
//        Integer d = Integer.parseInt(b);
//
//        System.out.println(a+b); //1015
//        System.out.println(c+d); //25
//    }
//}

// 6.연산자

// 7. 곰 한마리
public class Hello {
      public static void main(String[] args) {
          Bear pooh = new Bear("푸",40,"캐내다");
          pooh.breathe();
          pooh.drinkCoke();

          Dolphin dol = new Dolphin("돌짱",2);
          dol.breathe();
          dol.dance();
      }
}
// 접근 제어자: private[class 안에서만]: 기본 원칙 - protected[부모자식] - default - public[누구나]



























