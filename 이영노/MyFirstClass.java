import java.util.Scanner;

public class MyFirstClass {

	static void mulTipleCalc(int x) {
		 for (int i = x; i <= x; i++) {
		    	for (int j = 1; j < 10; j++) {
		    		System.out.printf("%d단 %d * %d = %d%n", i, i, j, i * j);
		    	}
		    }
	}

	public static void main(String[] args) {
		// 구구단을 출력하는 코드를 하나
		// 1단부터 9단 까지 출력한다.
		// Optional: 유저에게 단 수를 입력받는다.
		//				이경우 1 ~ 999까지 입력만 유호하게 예외처리를 한다.
		// Optional: 비즈니스 로직 분리 해보세요. view 단과 비즈니스 로직 클래스를 따로 생성해서 분리해보세여.

		Scanner number = new Scanner(System.in);  // Create a Scanner object
	    System.out.println("입력할 수수단 단수를 입력하세요.");
	    String inputNumber = number.nextLine();
	    int intNumber = Integer.parseInt(inputNumber);

	    mulTipleCalc(intNumber);




//		for (int i = 1; i < 10; i++) {
//			System.out.println(i);
//			for (int j = 1; j < 10; j++) {
//				System.out.printf("%d단  %d*%d = %d%n", i, i, j, i * j);
//			}
//		}
//		




	}
}