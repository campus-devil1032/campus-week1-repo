import java.util.Scanner;

public class MyFirstClass {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("숫자를 입력하세요(1~999)");

		if (sc.hasNextInt()) {
			int inputNum = sc.nextInt();

			if (inputNum < 1 || inputNum > 999) {	// 입력 값이 범위를 벗어난 경우
				System.out.println("1부터 999 사이의 정수만 입력하세요.");
				return;
			}

			System.out.println(inputNum + "단을 출력합니다.");

			for (int i = 0; i < 10; i++) {	// 입력 값을 1~9단까지 출력
				System.out.println(inputNum + " x " + i + " = " + (inputNum * i));
			}
			
		} else {	//입력 값이 정수가 아닐 경우
			System.out.println("정수를 입력하세요");
		}

	}


}
