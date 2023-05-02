
/**
 * 
 * @author hb180
 *
 */

// 주석입니다.
import java.util.InputMismatchException;
import java.util.Scanner;

public class MyFirstClass {
	/**
	 * 
	 * @param args
	 */
	static void view() {
		Scanner input = new Scanner(System.in);
		int dan = 0;

		//try catch 예외
		while (true) {
			try {
				dan = input.nextInt();
				if(dan>999)
					System.out.println("1 ~ 999까지의 입력만 유효");
				
				else if(dan<1)
					System.out.println("1 ~ 999까지의 입력만 유효");
				else
					break;
				
			}

			catch (InputMismatchException ime) {
				input = new Scanner(System.in);
				System.out.println("예외발생! 잘못된 입력");
				System.out.println("정수만 입력하세요");
			}

		}

		for (int i = 1; i < 10; i++)
			System.out.println(dan + "*" + i + "=" + dan * i);

		input.close();
	}
	
	
	
	
	public static void main(String[] args) {
		
		// 구구단을 출력한다.
		// 1단부터 9단까지 출력한다.
		// Optional: 유저에게 단 수를 입력받는다.
		//			이 경우 1 ~ 999까지의 입력만 유효하게 예외처리한다.
		// Optional: 비지니스 로직 분리해보세요. 
		//			 view 단과 비지니스 로직 클래스를 따로 생성해서 코드를 메인에서 분리해보세요
		
		System.out.println("구구단 출력페이지 입니다.");
		
		

		view(); //메소드 호출
	
		//System.out.println("hello world!");
	}

}
