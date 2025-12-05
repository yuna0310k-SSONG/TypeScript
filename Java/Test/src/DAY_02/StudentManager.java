package DAY_02;

public class StudentManager {
    private Student[] students = new Student[10];
    private int count = 0;

    public void addStudent(String name, int age, int fee) {
        if (count >= 10) {
            System.out.println("❗ 등록 인원 초과 (최대 10명)");
            return;
        }
        students[count++] = new Student(name, age, fee);
        System.out.println("✅ 등록 완료!");
    }

    public void deleteStudent(String name) {
        for (int i = 0; i < count; i++) {
            if (students[i].name.equals(name)) {
                for (int j = i; j < count - 1; j++) {
                    students[j] = students[j + 1];
                }
                students[--count] = null;
                System.out.println("🗑️ 삭제 완료!");
                return;
            }
        }
        System.out.println("❗ 해당 이름을 찾을 수 없습니다.");
    }

    public void viewStudents() {
        if (count == 0) {
            System.out.println("👤 등록된 학생 없음.");
            return;
        }
        System.out.println("📚 전체 학생 목록:");
        for (int i = 0; i < count; i++) {
            System.out.println((i + 1) + ". " + students[i]);
        }
    }
}
