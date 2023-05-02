import java.util.InputMismatchException;
import java.util.Scanner;

public class Gugudan {
    public static void main(String[] args) {

        /*구구단 코드
         * 1단부터 9단까지 출력
         * 옵션 1 : 단수 입력받기
         * 옵션 2 : 비즈니스 로직 분리 (클래스를 따로 생성)
         */

        Scanner sc = new Scanner(System.in);
        int n = 0;
        System.out.print("원하는 단수의 숫자만 입력하세요 : ");

        while (true) {
            try {
                n = sc.nextInt();
                if (n < 1 || n > 9) {
                    System.out.print("1와 9사이의 숫자를 입력해주세요 : ");
                    continue;
                }
                break;
            } catch (Exception e) {
                System.out.print("숫자만 입력이 가능합니다. 다시 입력해주세요 : ");
                sc.nextLine();
            }
        }

        GugudanTable gugudanTable = new GugudanTable(n);
        gugudanTable.print();

    }
}
